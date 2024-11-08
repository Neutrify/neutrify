import { animate, style, transition, trigger } from '@angular/animations';
import { COUNTRIES } from '../../../../assets/model/country-options';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import { Subscription } from 'rxjs';
import { FilterService } from 'src/app/services/filter.service';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-country-filter',
  templateUrl: './country-filter.component.html',
  animations: [
    trigger('enterLeave', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('100ms', style({ opacity: 1 })),
      ]),
      transition(':leave', [
        animate('100ms', style({ opacity: 0 }))
      ])
    ]),
  ],
  styleUrls: ['./country-filter.component.scss'],
})
export class CountryFilterComponent implements OnInit {
  get userOption(): any {
    return this.userOption;
  }

  @Input()
  set userOption(val: any) {
    if (JSON.stringify(val).toLowerCase() !== JSON.stringify(this.option).toLowerCase()) {
      this.option = this.unmarshalValues(val);
      this.displayList = this.option[this.segmentValue]
      .map((topic: string) => topic.replace(/(^\w{1})|(\s{1}\w{1})/g, match => match.toUpperCase()));
    }
  }

  @Output() userOptionChanged: EventEmitter<any> = new EventEmitter();

  public filtersLoading = false;
  public displayList: Array<string>;
  public countryOptionForm: FormGroup;
  public countryListToggle = true;
  public segmentValue = 'include';
  public showFilter = false;
  public disableCountries = false;
  public countryOptions = COUNTRIES;

  private option: any = {};


  private filtersLoadingSubcription$: Subscription;

  constructor(
    private filterService: FilterService,
    private toastController: ToastController
    ) {
      this.filtersLoadingSubcription$ = this.filterService.getFilterLoading().subscribe((status) => {
        this.filtersLoading = status;
      });
    }

  public ngOnInit() {
    this.displayList = this.option[this.segmentValue]
    .map((topic: string) => topic.replace(/(^\w{1})|(\s{1}\w{1})/g, match => match.toUpperCase()));

    this.countryOptionForm = new FormGroup({
      countryInput: new FormControl(null, Validators.required)
    });
  }

  public onSegmentChange() {
    this.displayList = this.option[this.segmentValue]
    .map((topic: string) => topic.replace(/(^\w{1})|(\s{1}\w{1})/g, match => match.toUpperCase()));
  }

  public onSelectChange(event) {
    const values = event.detail.value.map(val => val.toLowerCase());

    if (!this.isArrEq(values, this.option[this.segmentValue])) {
      const oppositeSegment = this.segmentValue === 'include' ? 'exclude' : 'include';

      this.option[this.segmentValue] = values;
      this.option[oppositeSegment] = this.option[oppositeSegment].filter(val => !values.includes(val));
      this.emitFilterChange();
    }
  }

  public removeWord(index) {
    if (this.filtersLoading) {return;}
    this.option[this.segmentValue].splice(index, 1);
    this.option.name = 'Locations';
    this.displayList = this.option[this.segmentValue]
    .map((topic: string) => topic.replace(/(^\w{1})|(\s{1}\w{1})/g, match => match.toUpperCase()));
    this.userOptionChanged.emit(this.option);
  }

  public emitFilterChange() {
    this.userOptionChanged.emit({
      name: 'Locations',
      include: [...this.option.include],
      exclude: [...this.option.exclude]
    });
  }

  private unmarshalValues(input) {
    const res: any = {};
    res['include'] = new Array();
    res.include.push(...input.include);

    res['exclude'] = new Array();
    res.exclude.push(...input.exclude);
    return res;
  }

  private isArrEq(arr1, arr2) {
    return arr1 && arr2 && JSON.stringify(arr1).toLowerCase() === JSON.stringify(arr2).toLowerCase();
  }
}
