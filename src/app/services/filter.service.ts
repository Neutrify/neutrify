import { ModelArticleFilterInput, UpdateConfigInput, APIService } from './neutrify-api.service';
import { Subject } from 'rxjs';
import { Injectable } from '@angular/core';
import * as TopicGroups from '../model/topic-options';
import { ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class FilterService {
  filterSaved: boolean = true;
  filterSaved$ = new Subject<boolean>();

  filterLoaded: boolean = true;
  filterLoaded$ = new Subject<boolean>();

  filterOptions: any;
  filterOptions$ = new Subject<object>();

  filtersLoading: boolean = false;
  filterLoading$ = new Subject<boolean>();

  topicsUserOption: any = {};

  constructor(
    private neutrifyAPI: APIService,
    private toastController: ToastController
    ) { }

  buildFilterOptions(userOptions) {

    return Object.assign({}, {
      id: this.filterOptions.id,
      toneUpperRange: userOptions.toneUserOption.value.upper,
      toneLowerRange: userOptions.toneUserOption.value.lower,
      sourcesToInclude: userOptions.sourcesUserOption.include,
      sourcesToExclude: userOptions.sourcesUserOption.exclude,
      topicsToInclude: this.mergeTopics(userOptions.topicsUserOption.include),
      topicsToExclude: this.mergeTopics(userOptions.topicsUserOption.exclude),
      keywordsToInclude: userOptions.keywordsUserOption.include,
      keywordsToExclude: userOptions.keywordsUserOption.exclude,
      locationsToInclude: userOptions.locationsUserOption.include,
      locationsToExclude: userOptions.locationsUserOption.exclude
    });
  }

  mergeTopics(optionObj): Array<string> {
    return [
      ...optionObj.arts,
      ...optionObj.games,
      ...optionObj.regional,
      ...optionObj.society,
      ...optionObj.business,
      ...optionObj.health,
      ...optionObj.recreation,
      ...optionObj.science,
      ...optionObj.sports,
      ...optionObj.computers,
      ...optionObj.home,
      ...optionObj.shopping,
    ];
  }

  async updateFilterOptions(inputFilterOptions) {
    let newFilterOptions = Object.assign({}, inputFilterOptions);

    if (JSON.stringify(this.filterOptions) == JSON.stringify(newFilterOptions)) {
      this.filterOptions$.next(this.filterOptions);
      return;
    }

    if ((typeof newFilterOptions.topicsToInclude) === 'string' || (typeof newFilterOptions.topicsToExclude) === 'string') {
      const parsedInclude = JSON.parse(newFilterOptions.topicsToInclude);
      const parsedExclude = JSON.parse(newFilterOptions.topicsToExclude);
      this.topicsUserOption.include = parsedInclude;
      this.topicsUserOption.exclude = parsedExclude;
      newFilterOptions.topicsToInclude = this.mergeTopics(parsedInclude);
      newFilterOptions.topicsToExclude = this.mergeTopics(parsedExclude);
    } else {
 
      newFilterOptions.topicsToInclude.forEach(value => {
        const topicGroup = this.findTopicsGroup(value);
        if (!this.topicsUserOption.include[topicGroup.toLowerCase()].includes(value)) {
          this.topicsUserOption.include[topicGroup.toLowerCase()].push(value);
        }
      });

      newFilterOptions.topicsToExclude.forEach(value => {
        const topicGroup = this.findTopicsGroup(value);
        if (!this.topicsUserOption.exclude[topicGroup.toLowerCase()].includes(value)) {
          this.topicsUserOption.exclude[topicGroup.toLowerCase()].push(value);
        }
      });
    }
    
    this.filterOptions = newFilterOptions;
    this.filterOptions$.next(this.filterOptions);
    this.updateFilterSaved(false);
  }

  getFilterOptions() {
    return this.filterOptions$.asObservable();
  }

  async updateFilterSaved(isSaved: boolean) {
    this.filterSaved = isSaved;
    this.filterSaved$.next(isSaved);
  }

  getFilterSavedStatus() {
    return this.filterSaved$.asObservable();
  }

  async updateFilterLoaded(isLoaded: boolean) {
    this.filterLoaded = isLoaded;
    this.filterLoaded$.next(isLoaded);
  }

  getFilterLoadedStatus() {
    return this.filterLoaded$.asObservable();
  }

  async updateFilterLoading(isLoading: boolean) {
    this.filtersLoading = isLoading;
    this.filterLoading$.next(isLoading);
  }

  getFilterLoading() {
    return this.filterLoading$.asObservable();
  }

  addToFilterOptions(optionType: string, operation: string, value: string) {
    let newFilterOptions = Object.assign({}, this.filterOptions);
    let target = newFilterOptions[`${optionType}To${operation.charAt(0).toUpperCase() + operation.slice(1)}`];
    let rejected = false, topicGroup: string;

    if (!newFilterOptions[`${optionType}ToInclude`].includes(value) && !newFilterOptions[`${optionType}ToExclude`].includes(value)) {
      if (optionType === 'topics') {
        topicGroup = this.findTopicsGroup(value);

        if (value.toLowerCase() === topicGroup.toLowerCase() 
          && !newFilterOptions.topicsToInclude.some(topic => topicGroup.toLowerCase() == this.findTopicsGroup(topic).toLowerCase())
          && !newFilterOptions.topicsToExclude.some(topic => topicGroup.toLowerCase() == this.findTopicsGroup(topic).toLowerCase())) {
          target.push(value);
        } else if (value.toLowerCase() != topicGroup.toLowerCase() 
          && !newFilterOptions.topicsToInclude.includes(topicGroup) && !newFilterOptions.topicsToExclude.includes(topicGroup)) {
          target.push(value);
        } else {
          rejected = true;
          this.presentToast(`You are already filtering ${value.toLowerCase()}.`, 'warning');
        }
      } else {
        target.push(value);
      }
    } else {
      rejected = true;
      this.presentToast(`You are already filtering ${value.toLowerCase()}.`, 'warning');
    }

    if (!rejected && optionType === 'topics') {
      topicGroup = topicGroup ? topicGroup : this.findTopicsGroup(value);
      if (!this.topicsUserOption[operation][topicGroup.toLowerCase()].includes(value)) {
        this.topicsUserOption[operation][topicGroup.toLowerCase()].push(value);
      } else {
        rejected = true;
        this.presentToast(`You are already filtering ${value.toLowerCase()}.`, 'warning');
      }
    }
    
    if (!rejected) {
      this.updateFilterLoading(true);
      this.filterOptions = newFilterOptions;
      this.filterOptions$.next(this.filterOptions);
      this.updateFilterSaved(false);
    }
  }

  addToTopicOptionsWrapper(included: Array<string>, excluded: Array<string>, group?: string) {

    if (!this.isArrEq(this.filterOptions.topicsToInclude, included)) {
      this.filterOptions.topicsToInclude = this.addToTopicOptions('include', included, group);
    }

    if (!this.isArrEq(this.filterOptions.topicsToExclude, excluded)) {
      this.filterOptions.topicsToExclude = this.addToTopicOptions('exclude', excluded, group);
    }

    this.filterOptions$.next(this.filterOptions);
    this.updateFilterSaved(false);
  }

  addToTopicOptions(operation, values, group) {
    let newTopics = operation === 'include' ? [...this.filterOptions.topicsToInclude] : [...this.filterOptions.topicsToExclude];
    
    if (values.length) {
      values.forEach(val => {
        if (!newTopics.includes(val)) {
          newTopics.push(val);
        }
      });

      newTopics = newTopics.filter(topic => group.toLowerCase() != this.findTopicsGroup(topic).toLowerCase() || !values.includes(topic) || topic.toLowerCase() == group.toLowerCase());
      this.topicsUserOption[operation][group] = values;
    } else {
      newTopics = newTopics.filter((topic) => group != this.findTopicsGroup(topic).toLowerCase());
      this.topicsUserOption[operation][group] = new Array();
    }

    return newTopics;
  }

  isArrEq(arr1, arr2) {
    return arr1 && arr2 && JSON.stringify(arr1) == JSON.stringify(arr2);
  }

  findTopicsGroup(value: string): string {
    let group;
    Object.keys(TopicGroups).forEach((groupKey) => {
      if (group) {
        return;
      }

      if (groupKey.toLowerCase() === value.toLowerCase()) {
        group = groupKey;
      }

      const index = TopicGroups[groupKey].findIndex((option: any) => {
        return option.value === value.toLowerCase();
      });

      if (index !== -1) {
        group = groupKey;
      }
    });

    return group;
  }

  marshalRequest(): UpdateConfigInput {
    return {
      id: this.filterOptions.id,
      keywordsToInclude: this.filterOptions.keywordsToInclude,
      keywordsToExclude: this.filterOptions.keywordsToExclude,
      toneUpperRange: this.filterOptions.toneUpperRange,
      toneLowerRange: this.filterOptions.toneLowerRange,
      sourcesToInclude: this.filterOptions.sourcesToInclude,
      sourcesToExclude: this.filterOptions.sourcesToExclude,
      locationsToInclude: this.filterOptions.locationsToInclude,
      locationsToExclude: this.filterOptions.locationsToExclude,
      topicsToInclude: JSON.stringify(this.topicsUserOption.include),
      topicsToExclude: JSON.stringify(this.topicsUserOption.exclude)
    };
  }

  async saveFilters(): Promise<boolean> {
    let result: boolean;

    try {
      const reqBody: UpdateConfigInput = this.marshalRequest();
      await this.neutrifyAPI.UpdateConfig(reqBody);
      this.updateFilterSaved(true);
      result = true;
    } catch (e) {
      this.updateFilterSaved(false);
      result = false;
    }
    return result;
  }

  async loadFilters(username) {
    let result: boolean;

    try {
      const loadedConfig = await this.neutrifyAPI.ConfigByOwner(username, null, null , 1);
      await this.updateFilterOptions(loadedConfig.items[0]);
      this.updateFilterSaved(true);
      this.updateFilterLoaded(true);
      result = true;
    } catch (error) {
      this.updateFilterSaved(false);
      this.updateFilterLoaded(false);
      result = false;
      console.log('Could not load filters. Service returned this error: ', error);
    }

    return result;
  }

  blankFilterObj() {
    return {
      id: this.filterOptions.id,
      keywordsToInclude: [],
      keywordsToExclude: [],
      savedArticleIds: [],
      sourcesToInclude: [],
      sourcesToExclude: [],
      toneUpperRange: 1,
      toneLowerRange: -1,
      topicsToInclude: JSON.stringify({
        arts: [],
        games: [],
        news: [],
        regional: [],
        society: [],
        business: [],
        health: [],
        recreation: [],
        science: [],
        sports: [],
        computers: [],
        home: [],
        shopping: [],
      }),
      topicsToExclude: JSON.stringify({
        arts: [],
        games: [],
        news: [],
        regional: [],
        society: [],
        business: [],
        health: [],
        recreation: [],
        science: [],
        sports: [],
        computers: [],
        home: [],
        shopping: [],
      }),
      locationsToInclude: [],
      locationsToExclude: []
    };
  }

  getQueryFilters(): ModelArticleFilterInput {
    const ops = this.filterOptions;

    const filterInput: ModelArticleFilterInput = {
      tone: {
        between: [
          ops.toneLowerRange, ops.toneUpperRange
        ]
      }
    };

    if (ops.sourcesToInclude.length > 0 || ops.sourcesToExclude.length > 0 || ops.topicsToInclude.length > 0 ||
        ops.topicsToExclude.length > 0 || ops.keywordsToInclude.length > 0 || ops.keywordsToExclude.length > 0 ||
        ops.locationsToInclude.length > 0 || ops.locationsToExclude.length > 0) {
      filterInput.and = [];

      if (ops.sourcesToInclude.length > 0) {
        const sourceFilter: Array<ModelArticleFilterInput> = [];
        sourceFilter.push(...this.buildWordFilter(ops.sourcesToInclude, 'sourceTitle', 'eq'));
        filterInput.and.push({or: sourceFilter});
      }

      if (ops.locationsToInclude.length > 0) {
        const locationFilter: Array<ModelArticleFilterInput> = [];
        locationFilter.push(...this.buildWordFilter(ops.locationsToInclude, 'sourceCountry', 'eq'));
        filterInput.and.push({or: locationFilter});
      }

      if (ops.keywordsToInclude.length > 0) {
        const keywordFilter: Array<ModelArticleFilterInput> = [];
        keywordFilter.push(...this.buildWordFilter(ops.keywordsToInclude, 'keywords', 'contains'));
        filterInput.and.push({or: keywordFilter});
      }

      if (typeof ops.topicsToInclude === 'string') {
        ops.topicsToInclude = this.mergeTopics(JSON.parse(ops.topicsToInclude));
      }

      if (ops.topicsToInclude.length > 0) {
        const topicsFilter: Array<ModelArticleFilterInput> = [];
        topicsFilter.push(...this.buildWordFilter(ops.topicsToInclude, 'topics', 'contains'));
        filterInput.and.push({or: topicsFilter});
      }

      if (ops.sourcesToExclude.length > 0) {
        filterInput.and.push(...this.buildWordFilter(ops.sourcesToExclude, 'sourceTitle', 'ne'));
      }

      if (ops.keywordsToExclude.length > 0) {
        filterInput.and.push(...this.buildWordFilter(ops.keywordsToExclude, 'keywords', 'notContains'));
      }

      if (ops.locationsToExclude.length > 0) {
        filterInput.and.push(...this.buildWordFilter(ops.locationsToExclude, 'sourceCountry', 'ne'));
      }

      if (typeof ops.topicsToExclude === 'string') {
        ops.topicsToExclude = this.mergeTopics(JSON.parse(ops.topicsToExclude));
      }

      if (ops.topicsToExclude.length > 0) {
        filterInput.and.push(...this.buildWordFilter(ops.topicsToExclude, 'topics', 'notContains'));
      }
    }

    return filterInput;
  }

  buildWordFilter(wordList, key, operation): any {
    return wordList.map((word: string) => {
      const res: object = {};

      res[key] = {};
      res[key][operation] = word.trim().toLowerCase();
      return res;
    });
  }

  async presentToast(message, color) {
    const toast = await this.toastController.create({
      message,
      duration: 5000,
      color,
      cssClass: 'ion-text-center'
    });
    toast.present();
  }
}
