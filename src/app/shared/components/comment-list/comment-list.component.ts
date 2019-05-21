import { Component, OnInit, Input } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';
import { Comments } from '../../models/comment.model';
import { Comment } from '../../../pages/services/models/comment.model';
import { Validators, FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { CommentService } from 'src/app/pages/services/services/comment.service';

@Component({
  selector: 'app-comment-list',
  templateUrl: './comment-list.component.html',
  styleUrls: ['./comment-list.component.scss']
})
export class CommentListComponent implements OnInit {
  public comments$: Observable<Comment[]>;
  comments: any[];
  formGroup: FormGroup;
  formData: any;

  constructor(
    private modalCtrl: ModalController,
    private formBuilder: FormBuilder,
    private commentService: CommentService,
    private navParam: NavParams) {
    // this.comments = [
    //   {user: 'Eric Chingalo', profilePic: '',  lastUpdate: '5/21/2019', text: 'Is this job real!!??'},
    //   {user: 'Erasto Laizer', profilePic: '', lastUpdate: '2hr', text: 'Yes it is, mambo point is very reliable'},
    //   {user: 'Rajab Mkomwa', profilePic: '', lastUpdate: '3min', text: 'Mambo point is realy cool'},
    //   {user: 'Erasto Laizer', profilePic: '', lastUpdate: '1min', text: 'Its realy cool'},
    // ];

    this.formData = {
      input: {
        formControlName: 'comment', placeholder: 'Add a comment'
      }
    };
  }

  ngOnInit() {
    this.commentService.findCommentByPost(this.navParam.data.postId);
    this.comments$ = this.commentService.findAll();
    this.formGroup = this.formBuilder.group({});
    this.formGroup.addControl(this.formData.input.formControlName, new FormControl('', Validators.required));
  }

  onDismiss() {
    this.modalCtrl.dismiss();
  }

  postComment() {
    const date = new Date();
    const comment = {
      userId: 'Eric',
      type: this.navParam.data.postType,
      postId: this.navParam.data.postId,
      text: this.formGroup.value.comment,
      created: date.toString()
    };

    this.commentService.create(comment);
    this.formGroup.reset();
  }

}
