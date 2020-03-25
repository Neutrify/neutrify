import { PopoverController } from '@ionic/angular';
import { FilterService } from './../../../../services/filter.service';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-add-filter-popover',
  templateUrl: './add-filter-popover.component.html',
  styleUrls: ['./add-filter-popover.component.scss'],
})
export class AddFilterPopoverComponent implements OnInit {
  @Input() optionType: string;
  @Input() value: string;

  public clicked = false;

  constructor(
    private filterService: FilterService,
    private popoverController: PopoverController
  ) {}

  ngOnInit() {}

  addFilter(operation) {
    this.clicked = true;
    this.filterService.addToFilterOptions(this.optionType, operation, this.value);
    this.dismiss();
  }

  dismiss() {
    // using the injected ModalController this page
    // can "dismiss" itself and optionally pass back data
    this.popoverController.dismiss({
      dismissed: true
    });
  }

}