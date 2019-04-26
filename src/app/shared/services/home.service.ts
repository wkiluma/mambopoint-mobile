import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument, DocumentReference } from '@angular/fire/firestore';
import { map, take } from 'rxjs/operators';
import { Observable } from 'rxjs';
 
export interface Service {
  id?: string,
  title: string,
  description: string,
  source: string,
  organization: string,
  deadline: string,
  contacts: string,
  category:string
}
 
@Injectable({
  providedIn: 'root'
})
export class HomeService {
  private services: Observable<Service[]>;
  private serviceCollection: AngularFirestoreCollection<Service>;
 
  constructor(private afs: AngularFirestore) {
    this.serviceCollection = this.afs.collection<Service>('services');
    this.services = this.serviceCollection.snapshotChanges().pipe(
      map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          return { id, ...data };
        });
      })
    );
  }
 
  getServices(): Observable<Service[]> {
    return this.services;
  }
 
  getService(id: string): Observable<Service> {
    return this.serviceCollection.doc<Service>(id).valueChanges().pipe(
      take(1),
      map(service => {
        service.id = id;
        return service
      })
    );
  }
 
  addService(service: Service): Promise<DocumentReference> {
    return this.serviceCollection.add(service);
  }
 
  updateservice(service: Service): Promise<void> {
    return this.serviceCollection.doc(service.id).update({
       title: service.title,
       description: service.description ,
       source: service.source,
       contacts: service.contacts ,
       deadline: service.deadline,
       organization: service.organization ,
       category: service.category
      });
  }
 
  deleteService(id: string): Promise<void> {
    return this.serviceCollection.doc(id).delete();
  }
}