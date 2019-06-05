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
    super(angularFireStore);
  }

  findAll() {
    return of([
      { id: 'all', name: 'All' },
      {
        id: 'tender',
        name: 'Tenders'
      },
      {
        id: 'job',
        name: 'Jobs'
      },
      {
        id: 'internship',
        name: 'Internships'
      },
      { id: 'consultancy', name: 'Consultancies' },
      {
        id: 'accomodation',
        name: 'Accomodations'
      }
    ]);
  }
}
