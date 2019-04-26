import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
@Input() FormData:any = {
  formGroup:'login',
  button : {
    label: 'Create Service',icon_name:'add'
  },
  inputs : [
  {type:'text',formControlName:'source'},
  {type:'number',formControlName:'tender_number'},
  {type:'date',formControlName:'deadline'},
  {type:'textarea',formControlName:'description'},
  ]
 } ;
  constructor() { }

  ngOnInit() {
  }

}
