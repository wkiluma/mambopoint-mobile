import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { BaseService } from 'src/app/shared/services/base.service';

import { Service } from '../models/service.model';

@Injectable({
  providedIn: 'root'
})
export class ServiceService extends BaseService<Service> {
  constructor(angularFireStore: AngularFirestore) {
    super(angularFireStore.collection<Service>('services'));
  }
}
