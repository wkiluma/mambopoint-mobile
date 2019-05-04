import { Component, OnInit, Input,EventEmitter, Output } from '@angular/core';
import { Validators, FormBuilder, FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  public formGroup: FormGroup;
  @Output() dataValues  = new EventEmitter() ;
  @Input() FormData: any = {
    button: {
      label: 'Create Service', iconName: 'add'
    },
    inputs: []
  };
  constructor(private formBuilder: FormBuilder) {
  }

  ngOnInit() {
    this.formGroup = this.formBuilder.group({});  
   this.FormData.inputs.forEach(input => {
     this.formGroup.addControl(input.formControlName,new FormControl('',Validators.required));
   });
  }

  PostData(){
    let body = {} ;
    this.FormData.inputs.forEach(input => {
      Object.keys(this.formGroup.controls).forEach((name) => {
        if(name == input.formControlName ){
         let value = this.formGroup.controls[input.formControlName].value ;
         body[name] = value ;
        }
      })
    });
    this.dataValues.emit(body);
  }
  
}
