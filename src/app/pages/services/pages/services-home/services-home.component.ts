import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { Service } from '../../models/service.model';
import { ServiceService } from '../../services/service.service';

@Component({
  selector: 'app-services-home',
  templateUrl: './services-home.component.html',
  styleUrls: ['./services-home.component.scss']
})
export class ServicesHomeComponent implements OnInit {
  public services$: Observable<Service[]>;
  public toolbarTitle = 'Services';

  constructor(public serviceService: ServiceService) {}

  ngOnInit() {
    this.services$ = this.serviceService.findAll();
  }
}
