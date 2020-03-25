import { AddFilterPopoverComponent } from './add-filter-popover/add-filter-popover.component';
import { ImageModalComponent } from './image-modal/image-modal.component';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import * as moment from 'moment';
import { ModalController, PopoverController } from '@ionic/angular';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss'],
})
export class ArticleComponent implements OnInit {
  @Input() id!: string;
  @Input() article: any;
  public dateAge: string;

  @Output() articleExpanded: EventEmitter<boolean> = new EventEmitter();

  // public hasRated = false;

  public isCardExpanded = false;
  public imageFailed = false;

  constructor(
    private modalController: ModalController,
    private popoverController: PopoverController) {}

  ngOnInit() {
    this.dateAge = this.getArticleAge(this.article.datePublished);
  }

  onCardClick() {
    this.isCardExpanded = !this.isCardExpanded;

    if (this.isCardExpanded) {
      this.articleExpanded.emit(true);
    } else {
      this.articleExpanded.emit(false);
    }
  }

  async viewImage() {
    const modal = await this.modalController.create({
      component: ImageModalComponent,
      componentProps: {
        image: this.article.image
      },
      cssClass: 'auto-height'
    });

    return await modal.present();
  }

  imageError() {
    this.imageFailed = true;
  }

  async openFilterPopover(event, optionType, value) {
    const popover = await this.popoverController.create({
      component: AddFilterPopoverComponent,
      componentProps: {
        optionType,
        value
      },
      event,
      showBackdrop: false,
      translucent: true,
      cssClass: 'filter-popover'
    });
    return await popover.present();
  }

  goToArticle() {
    window.open(this.article.url, '_blank');
  }

  getArticleAge(date: string) {
    return moment(date).fromNow();
  }
}
