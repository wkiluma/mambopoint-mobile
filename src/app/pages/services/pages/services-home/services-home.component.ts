import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Service } from '../../models/service.model';
import { ServiceService } from '../../services/service.service';
import * as _ from 'lodash';
import { CommentService } from '../../services/comment.service';

@Component({
  selector: 'app-services-home',
  templateUrl: './services-home.component.html',
  styleUrls: ['./services-home.component.scss']
})
export class ServicesHomeComponent implements OnInit {
  public services$: Observable<Service[]>;
  public toolbarTitle = 'Services';

  constructor(public serviceService: ServiceService,public commentService:CommentService) { }

  ngOnInit() {
    this.services$ = this.serviceService.findAll();
   let filter =  this.commentService.findAll();

  }
  FilterService(serviceType: string) {
    this.services$.subscribe((data) => {
      let service = _.filter(this.services$, { 'type': serviceType });
      console.log(this.services$);
      console.log(service);
      console.log(data);
    });
  }
}
