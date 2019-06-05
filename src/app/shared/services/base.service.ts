import {
  AngularFirestoreCollection,
  AngularFirestore
} from '@angular/fire/firestore';
import { map, take, switchMap } from 'rxjs/operators';
import { Observable, Subject, BehaviorSubject } from 'rxjs';

export class BaseService<T> {
  constructor(private readonly angularFirestore: AngularFirestore) {}

  get model(): string {
    throw Error('Model not set');
  }

  findAll(where?: any): Observable<T[]> {
    if (where) {
      return this.angularFirestore
        .collection<T>(this.model, ref =>
          ref.where(where.key, where.operator, where.value)
        )
        .valueChanges();
    }
    return this.angularFirestore
      .collection<T>(this.model)
      .snapshotChanges()
      .pipe(
        map(actions =>
          actions.map(a => {
            return { ...a.payload.doc.data(), id: a.payload.doc.id };
          })
        )
      );
  }

  findById(id: string) {
    return this.angularFirestore
      .collection<T>(this.model)
      .doc<T>(id)
      .valueChanges()
      .pipe(
        take(1),
        map((content: any) => {
          return { ...content, id };
        })
      );
  }

  create(content: T) {
    return this.angularFirestore.collection<T>(this.model).add(content);
  }

  update(id: string, content: T) {
    return this.angularFirestore
      .collection<T>(this.model)
      .doc(id)
      .update(content);
  }

  delete(id: string) {
    return this.angularFirestore
      .collection<T>(this.model)
      .doc(id)
      .delete();
  }
}
