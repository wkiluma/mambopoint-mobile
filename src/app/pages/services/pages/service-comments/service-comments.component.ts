import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup, FormControl } from '@angular/forms';


@Component({
  selector: 'app-service-comments',
  templateUrl: './service-comments.component.html',
  styleUrls: ['./service-comments.component.css']
})
export class ServiceCommentsComponent implements OnInit {
  public toolbarTitle = 'Comments';
  formGroup: FormGroup;
  formData: any;

  constructor(private formBuilder: FormBuilder) {
    this.formData = {
      input: {
        placeholder: 'Type your comment',
        formControlName: 'comment'
      }
    }
  }

  ngOnInit() {
    this.formGroup = this.formBuilder.group({});
    this.formGroup.addControl(this.formData.input.formControlName, new FormControl('', Validators.required));
  }

  onPostComment() {
    console.log(this.formGroup.value.comment);
    
  }
}
