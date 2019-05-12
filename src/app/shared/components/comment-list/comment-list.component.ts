import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-comment-list',
  templateUrl: './comment-list.component.html',
  styleUrls: ['./comment-list.component.scss']
})
export class CommentListComponent implements OnInit {
  comments: any[] = [
    {user: 'Eric', lastUpdate: '3hr', text: 'Is this job real!!??'},
    {user: 'Erasto', lastUpdate: '2hr', text: 'Yes it is, mambo point is very reliable'},
    {user: 'Rajab', lastUpdate: '3min', text: 'Mambo point is realy cool'},
    {user: 'Eric', lastUpdate: '1min', text: 'Its realy cool'},
  ]
  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {
  }

  onDismiss() {
    this.modalCtrl.dismiss();
  }

}
