import { AngularFirestoreCollection } from '@angular/fire/firestore';
import { map, take } from 'rxjs/operators';

export class BaseService<T> {
  constructor(
    private readonly serviceCollection: AngularFirestoreCollection<T>
  ) {}
  findAll() {
    return this.serviceCollection.snapshotChanges().pipe(
      map(actions =>
        actions.map(a => {
          return { ...a.payload.doc.data(), id: a.payload.doc.id };
        })
      )
    );
  }
  findById(id: string) {
    return this.serviceCollection
      .doc<T>(id)
      .valueChanges()
      .pipe(
        take(1),
        map((content: any) => {
          return { ...content, id };
        })
      );
  }
  findByType(type: string) {
    return this.serviceCollection.ref.where('type','==',type).get();
    }

  create(content: T) {
    return this.serviceCollection.add(content);
  }

  update(id: string, content: T) {
    return this.serviceCollection.doc(id).update(content);
  }

  delete(id: string) {
    return this.serviceCollection.doc(id).delete();
  }
}
