import { Subscription } from 'rxjs';
import { FilterService } from './../../services/filter.service';
import { APIService, ModelSortDirection, ModelStringKeyConditionInput } from './../../services/neutrify-api.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import * as moment from 'moment';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.scss'],
})
export class ArticleListComponent implements OnInit, OnDestroy {
  filters: any;
  filterSubcription$: Subscription;

  rawArticles: Array<any> = new Array<any>();
  displayArticles: Array<any> = new Array<any>();

  nextToken: string;
  limit = 25;
  articleDatePub: ModelStringKeyConditionInput;
  updatingArticles = false;

  constructor(
    private neutrfiyAPI: APIService,
    private filterService: FilterService,
    private toastController: ToastController
    ) {

    this.filterSubcription$ = this.filterService.getFilterOptions().subscribe(async ops => {
      this.filters = this.filterService.getQueryFilters();
      await this.handleInitDataLoad();
    });
  }

  async ngOnInit() {
    this.filters = this.filterService.getQueryFilters();
    this.articleDatePub = this.setDateRange();
    await this.handleInitDataLoad();
  }

  async resetArticles() {
    this.rawArticles = new Array();
    this.displayArticles = new Array();
  }

  ngOnDestroy() {
    this.filterSubcription$.unsubscribe();
  }

  async handleInitDataLoad() {
    this.updatingArticles = true;
    await this.resetArticles();

    let i = 1;
    let newLimit = 25;
    do {

      if (i === 2) {
        newLimit = 200;
        this.rawArticles = await this.listArticles(newLimit);
      } else if (i === 3) {
        newLimit = 1000;
        this.rawArticles = await this.listArticles(newLimit);
      } else if (i > 3) {
        this.rawArticles.push(...await this.listArticles(newLimit, this.nextToken));
      } else {
        this.rawArticles = await this.listArticles(newLimit);
      }

      i++;
    } while (this.nextToken && this.rawArticles.length < 15);

    this.limit = newLimit;
    this.displayArticles = this.rawArticles;
    this.updatingArticles = false;

    if (!this.nextToken && this.rawArticles.length < 15) {
      await this.presentToast('Could only find a few articles that fit your criteria. Perhaps loosen your filters.', 'primary');
    }
  }

  setDateRange(): ModelStringKeyConditionInput {
    const dateLimit = moment().subtract(1, 'months');

    return {
      between: [
        dateLimit.toISOString(), moment().toISOString()
      ]
    };
  }

  async doRefresh(event) {
    this.updatingArticles = true;
    this.rawArticles = [];
    await this.handleInitDataLoad();
    event.target.complete();
    this.updatingArticles = false;
  }

  async getNextPage(event) {
    if (this.nextToken) {
      let newArticles: Array<any> = new Array<any>();
      newArticles = await this.listArticles(this.limit, this.nextToken);
      this.rawArticles.push(...newArticles);
      this.displayArticles = this.rawArticles;
      event.target.complete();
    } else {
      this.presentToast('There are no more articles to be read.', 'primary');
      event.target.complete();
    }
  }

  async listArticles(limit?, nextToken?) {
    const results = await this.neutrfiyAPI.ArticlesByDate('news', this.articleDatePub,
     ModelSortDirection.DESC, this.filters, limit, nextToken);
    this.nextToken = results.nextToken;
    return results.items;
  }

  async presentToast(message, color) {
    const toast = await this.toastController.create({
      message,
      duration: 2000,
      color,
      cssClass: 'ion-text-center'
    });
    toast.present();
  }
}