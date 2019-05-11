import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { Service } from '../../models/service.model';
import { ServiceService } from '../../services/service.service';
import { serviceTypes } from '../../constants/service-types.constant';

@Component({
  selector: 'app-services-home',
  templateUrl: './services-home.component.html',
  styleUrls: ['./services-home.component.scss']
})
export class ServicesHomeComponent implements OnInit {
  public services$: Observable<Service[]>;
  public toolbarTitle = 'Services';
  public serviceTypes: any[];

  constructor(public serviceService: ServiceService) {}

  ngOnInit() {
    this.services$ = this.serviceService.findAll();
    this.serviceTypes = serviceTypes;
  }
}
