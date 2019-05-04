import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../../services/service.service';
import { ToastController } from '@ionic/angular';
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
  constructor(private serviceService: ServiceService,private toastCtrl:ToastController) {}

  ngOnInit() {}

  onCreateService(body:any) {
    this.showToast('App is creating service');
    this.serviceService
      .create(body)
      .then(res => {
        console.log(res);
      });
  }

  showToast(msg) {
    this.toastCtrl.create({
      message: msg,
      duration: 3000,
      position: 'bottom'
    }).then();
  }
}
