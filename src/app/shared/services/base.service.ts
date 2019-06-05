import {
  AngularFirestoreCollection,
  AngularFirestore
} from '@angular/fire/firestore';
import { map, take, switchMap, tap } from 'rxjs/operators';
import { Observable, Subject, BehaviorSubject } from 'rxjs';

interface BaseEntity {
  id: string;
}

export class BaseService<T> {
  constructor(private readonly angularFirestore: AngularFirestore) {}

  get model(): string {
    throw Error('Model not set');
  }

  findAll(where?: any): Observable<any[]> {
    if (where) {
      const collection = this.angularFirestore.collection<any>(this.model);

      const query = collection.ref.where(
        where.key,
        where.operator,
        where.value
      );

      return new Observable(observer => {
        query.get().then(
          snapshot => {
            const results: any[] = snapshot.docs.map(doc => {
              return { ...doc.data(), id: doc.id };
            });
            observer.next(results);
            observer.complete();
          },
          error => {
            observer.error(error);
          }
        );
      });
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
