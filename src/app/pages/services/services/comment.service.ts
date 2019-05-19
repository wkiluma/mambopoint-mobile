import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { BaseService } from 'src/app/shared/services/base.service';

import { Comment } from '../models/comment.model';

@Injectable({
  providedIn: 'root'
})
export class CommentService extends BaseService<Comment> {
  constructor(angularFireStore: AngularFirestore) {
    super(angularFireStore.collection<Comment>('comments'));
  }
}
