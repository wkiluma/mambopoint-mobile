import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { ServiceType } from '../../models/service-type.model';
import { Service } from '../../models/service.model';
import { ServiceTypeService } from '../../services/service-type.service';
import { ServiceService } from '../../services/service.service';
import * as _ from 'lodash';
import { Router } from '@angular/router';

@Component({
  selector: 'app-services-home',
  templateUrl: './services-home.component.html',
  styleUrls: ['./services-home.component.scss']
})
export class ServicesHomeComponent implements OnInit {
  public services$: Observable<Service[]>;
  public toolbarTitle = 'Services';
  public serviceTypes$: Observable<ServiceType[]>;
  public currentServiceType = 'all';

  constructor(
    private serviceService: ServiceService,
    private serviceTypeService: ServiceTypeService,
    private router: Router
  ) {}

  ngOnInit() {
    this.services$ = this.serviceService.findAll();
    this.serviceTypes$ = this.serviceTypeService.findAll();
  }

  onSelectType(e, serviceType: any) {
    // TODO: Find flexible way to pass in service type
    if (serviceType.id === 'all') {
      this.services$ = this.serviceService.findAll();
    } else {
      this.currentServiceType = serviceType.id;
      this.services$ = this.serviceService.findAll({
        key: 'type',
        operator: '==',
        value: _.capitalize(serviceType.id)
      });
    }
  }

  onOpenComment(service: Service) {
    console.log(service);
    this.router.navigate(['tabs/services/service-comments/' + service.id]);
  }
}
