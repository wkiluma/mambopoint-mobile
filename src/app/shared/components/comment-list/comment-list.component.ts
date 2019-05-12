import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Comment } from '../../models/comment.model';
import { Validators, FormBuilder, FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-comment-list',
  templateUrl: './comment-list.component.html',
  styleUrls: ['./comment-list.component.scss']
})
export class CommentListComponent implements OnInit {
  comments: Comment[];
  formGroup: FormGroup;
  formData: any;

  constructor(private modalCtrl: ModalController, private formBuilder: FormBuilder) {
    this.comments = [
      {user: 'Eric Chingalo', profilePic: '',  lastUpdate: '3hr', text: 'Is this job real!!??'},
      {user: 'Erasto Laizer', profilePic: '', lastUpdate: '2hr', text: 'Yes it is, mambo point is very reliable'},
      {user: 'Rajab Mkomwa', profilePic: '', lastUpdate: '3min', text: 'Mambo point is realy cool'},
      {user: 'Erasto Laizer', profilePic: '', lastUpdate: '1min', text: 'Its realy cool'},
    ];

    this.formData = {
      input: {
        formControlName: 'comment', placeholder: 'Add a comment'
      }
    };
  }

  ngOnInit() {
    this.formGroup = this.formBuilder.group({});
    this.formGroup.addControl(this.formData.input.formControlName, new FormControl('', Validators.required));
  }

  onDismiss() {
    this.modalCtrl.dismiss();
  }

  postComment() {
    console.log(this.formGroup.value);
    this.formGroup.reset();
  }

}
