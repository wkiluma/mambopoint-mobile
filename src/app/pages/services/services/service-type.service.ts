import { Injectable } from '@angular/core';
import { BaseService } from 'src/app/shared/services/base.service';
import { ServiceType } from '../models/service-type.model';
import { AngularFirestore } from '@angular/fire/firestore';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceTypeService extends BaseService<ServiceType> {
  constructor(angularFireStore: AngularFirestore) {
    super(angularFireStore.collection<ServiceType>('serviceTypes'));
  }

  findAll() {
    return of([
      {
        id: 'tenders',
        name: 'Tenders'
      },
      {
        id: 'jobs',
        name: 'Jobs'
      },
      {
        id: 'internships',
        name: 'Internships'
      },
      { id: 'consultancies', name: 'Consultancies' },
      {
        id: 'accomodations',
        name: 'Accomodations'
      }
    ]);
  }
}
