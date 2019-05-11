import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { ServiceType } from '../../models/service-type.model';
import { Service } from '../../models/service.model';
import { ServiceTypeService } from '../../services/service-type.service';
import { ServiceService } from '../../services/service.service';

@Component({
  selector: 'app-services-home',
  templateUrl: './services-home.component.html',
  styleUrls: ['./services-home.component.scss']
})
export class ServicesHomeComponent implements OnInit {
  public services$: Observable<Service[]>;
  public toolbarTitle = 'Services';
  public serviceTypes$: Observable<ServiceType[]>;

  constructor(
    private serviceService: ServiceService,
    private serviceTypeService: ServiceTypeService
  ) {}

  ngOnInit() {
    this.services$ = this.serviceService.findAll();
    this.serviceTypes$ = this.serviceTypeService.findAll();
  }
}
