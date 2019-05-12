import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { CommentListComponent } from '../comment-list/comment-list.component';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input() card: any;
  @Input() avatarImage: string;
  @Input() image: string;
  constructor(private modalController: ModalController) {
    this.avatarImage = 'assets/icon/icon.jpeg';
    this.image = 'assets/shapes.svg';
  }

  ngOnInit() {}

  // displays a comment on a modal
  async onComment() {
    const modal = await this.modalController.create({
      component: CommentListComponent,
    });
    return await modal.present();
   }
}
