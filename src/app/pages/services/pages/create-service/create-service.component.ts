import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../../services/service.service';
import { ToastController } from '@ionic/angular';
import { Router } from '@angular/router';
@Component({
  selector: 'app-create-service',
  templateUrl: './create-service.component.html',
  styleUrls: ['./create-service.component.scss']
})
export class CreateServiceComponent implements OnInit {
  toast: any;
  public toolbarTitle = 'Create Service';
  public FormData = {
    button : {
      label: 'Create Service',iconName:'add'
    },
    inputs : [
      {label:'Title',type:'text',formControlName:'title'},
      {label:'Description',type:'textarea',formControlName:'description'},
      {label:'Source',type:'select',formControlName:'source',options:['Magazine','Radio','Television','Social Networks','Linkedln'], multiple:"true"},
      {label:'Organization',type:'text',formControlName:'organization'},
      {label:'Deadline',type:'date',formControlName:'deadline'},
      {label:'Contacts',type:'number',formControlName:'contacts'},
      {label:'Category',type:'select',formControlName:'category' ,options:['IT','Electrical Engineering','Account & Auditing','Civil Engineering','Other'], multiple:"true"},
      {label:'Type',type:'select',formControlName:'type',options:['Tender','Job','Internship']}
    ],
  }
  constructor(private serviceService: ServiceService,private toastCtrl:ToastController,public router:Router) {}

  ngOnInit() {}

  onCreateService(body:any) {
    this.showToast('App is creating service');
    this.serviceService
      .create(body)
      .then(res => {
        console.log(res);
      });
      this.router.navigate(['/']);
  }

  showToast(msg) {
    this.toast =  this.toastCtrl.create({
      message: msg,
      duration: 3000,
      position: 'bottom'
    }).then((toastData)=>{
      console.log(toastData);
      toastData.present();
    });
  }
}
