import { Component, OnInit, Input } from '@angular/core';
import { Validators, FormBuilder, FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  public formGroup: FormGroup;
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
    console.log(this.formGroup.controls.keys);
    
  }

}
