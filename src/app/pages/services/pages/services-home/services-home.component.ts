import { Component, OnInit } from '@angular/core';
import { HomeService } from 'src/app/shared/services/home.service';
import { ServiceService } from '../../services/service.service';
import { Observable } from 'rxjs';
import { Service } from '../../models/service.model';

@Component({
  selector: 'app-services-home',
  templateUrl: './services-home.component.html',
  styleUrls: ['./services-home.component.scss']
})
export class ServicesHomeComponent implements OnInit {
  public services$: Observable<Service[]>;
  public toolbarTitle = 'List of Services';

  constructor(public serviceService: ServiceService) {}

  ngOnInit() {
    this.services$ = this.serviceService.findAll();
  }
}
