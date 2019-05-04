import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { ServiceService } from '../../services/service.service';
import { FormGroup } from '@angular/forms';
@Component({
  selector: 'app-create-service',
  templateUrl: './create-service.component.html',
  styleUrls: ['./create-service.component.scss']
})
export class CreateServiceComponent implements OnInit {
  public toolbarTitle = 'Create Service';

  public FormData = {
    button : {
      label: 'Create Service',iconName:'add'
    },
    inputs : [
      {label:'Title',type:'text',formControlName:'title'},
      {label:'Description',type:'textarea',formControlName:'description'},
      {label:'Source',type:'text',formControlName:'source'},
      {label:'Organization',type:'text',formControlName:'organization'},
      {label:'Deadline',type:'date',formControlName:'deadline'},
      {label:'Contacts',type:'number',formControlName:'contacts'},
      {label:'Category',type:'text',formControlName:'category'}
    ]
  }
  constructor(private serviceService: ServiceService) {}

  ngOnInit() {}

  onCreateService() {
    this.serviceService
      .create({
        title: 'Erasto',
        description: 'Erasto',
        type: 'Internship',
        categories: ['ICT', 'BUSSINESS'],
        source: 'New paper',
        organization: 'MAMBOPOINT',
        deadline: '20-10-2019'
      })
      .then(res => {
        console.log(res);
      });
    this.serviceService.findAll().subscribe(res => {
      console.log(res);
    });
  }
}
