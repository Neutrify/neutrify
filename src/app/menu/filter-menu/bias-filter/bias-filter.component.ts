import { animate, style, transition, trigger } from '@angular/animations';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-bias-filter',
  templateUrl: './bias-filter.component.html',
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
  styleUrls: ['./bias-filter.component.scss'],
})
export class BiasFilterComponent implements OnInit {

  @Output() biasOptionChanged: EventEmitter<any> = new EventEmitter();

  get biasOption(): any {
    return this.option;
  }

  @Input()
  set biasOption(val: any) {

    if (JSON.stringify(val).toLowerCase() !== JSON.stringify(this.option).toLowerCase()) {
      this.option = this.unmarshalValues(val);
      this.setInitialValues();
    }
  }
  public showFilter = false;

  public leftValue: any = 'unassigned';
  public leftLeaningValue: any = 'unassigned';
  public centerValue: any = 'unassigned';
  public rightLeaningValue: any = 'unassigned';
  public rightValue: any = 'unassigned';
  public balancedValue: any = 'unassigned';
  public unratedValue: any = 'unassigned';

  private option: any = {};

  private debouncer: Subject<any> = new Subject<any>();

  constructor() {
    this.debouncer
    .pipe(debounceTime(750))
    .subscribe(val => this.biasOptionChanged.emit(val));
  }

  ngOnInit() {}

  public onBiasFilterChange(event) {
    let hasChanged = false;
    this.setBiasObject(event.name, event.value);

    if (event.value === 'include') {
      if (this.option.include.indexOf(event.name) === -1) {
        hasChanged = true;
        this.option.include.push(event.name);
      }
      const oppositeArrayIndex = this.option.exclude.indexOf(event.name);

      if (oppositeArrayIndex !== -1) {
        hasChanged = true;
        this.option.exclude.splice(oppositeArrayIndex, 1);
      }
    } else if (event.value === 'exclude') {
      if (this.option.exclude.indexOf(event.name) === -1) {
        hasChanged = true;
        this.option.exclude.push(event.name);
      }
        const oppositeArrayIndex = this.option.include.indexOf(event.name);

      if (oppositeArrayIndex !== -1) {
        hasChanged = true;
        this.option.include.splice(oppositeArrayIndex, 1);
      }
    } else {
      const includeArrayIndex = this.option.include.indexOf(event.name);

      if (includeArrayIndex !== -1) {
        hasChanged = true;
        this.option.include.splice(includeArrayIndex, 1);
      }

      const excludeArrayIndex = this.option.exclude.indexOf(event.name);

      if (excludeArrayIndex !== -1) {
        hasChanged = true;
        this.option.exclude.splice(excludeArrayIndex, 1);
      }
    }

    if (hasChanged) {
      this.debouncer.next({
        name: 'Bias',
        include: [...this.option.include],
        exclude: [...this.option.exclude]
      });
    }
  }

  private unmarshalValues(input) {
    const res: any = {};
    res['include'] = new Array();
    res.include.push(...input.include);

    res['exclude'] = new Array();
    res.exclude.push(...input.exclude);
    return res;
  }

  private setInitialValues() {
    const setNames = [];
    if (this.option.include && this.option.include.length) {
      this.option.include.forEach((bias: string) => {
        setNames.push(bias);
        this.setBiasObject(bias, 'include');
      });
    }

    if (this.option.exclude && this.option.exclude.length) {
      this.option.exclude.forEach((bias: string) => {
        setNames.push(bias);
        this.setBiasObject(bias, 'exclude');
      });
    }


    ['left', 'left leaning', 'center', 'right leaning', 'right', 'balanced', 'unrated']
    .filter((name: string) => !setNames.includes(name)).forEach((bias: string) => {
      this.setBiasObject(bias, 'unassigned');
    });
  }

  private setBiasObject(name, value) {
    if (name === 'left') {
      this.leftValue = value;
    } else if (name === 'left leaning') {
      this.leftLeaningValue = value;
    } else if (name === 'center') {
      this.centerValue = value;
    } else if (name === 'right leaning') {
      this.rightLeaningValue = value;
    } else if (name === 'right') {
      this.rightValue = value;
    } else if (name === 'balanced') {
      this.balancedValue = value;
    } else if (name === 'unrated') {
      this.unratedValue = value;
    }
  }
}
