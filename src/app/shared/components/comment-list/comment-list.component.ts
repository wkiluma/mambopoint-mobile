import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Comment } from '../../models/comment.model';

@Component({
  selector: 'app-comment-list',
  templateUrl: './comment-list.component.html',
  styleUrls: ['./comment-list.component.scss']
})
export class CommentListComponent implements OnInit {
  comments: Comment[];
  formData: any;

  constructor(private modalCtrl: ModalController, ) {
    this.comments = [
      {user: 'Eric', profilePic: '',  lastUpdate: '3hr', text: 'Is this job real!!??'},
      {user: 'Erasto', profilePic: '', lastUpdate: '2hr', text: 'Yes it is, mambo point is very reliable'},
      {user: 'Rajab', profilePic: '', lastUpdate: '3min', text: 'Mambo point is realy cool'},
      {user: 'Eric', profilePic: '', lastUpdate: '1min', text: 'Its realy cool'},
    ];

    this.formData = {
      inputs: [{
        type: 'textarea', formControlName: 'comment', placeholder: 'Add a comment'
      }]
    }
  }

  ngOnInit() {
  }

  onDismiss() {
    this.modalCtrl.dismiss();
  }

}
