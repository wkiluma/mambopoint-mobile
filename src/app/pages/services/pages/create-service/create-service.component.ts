import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
@Component({
  selector: 'app-create-service',
  templateUrl: './create-service.component.html',
  styleUrls: ['./create-service.component.scss'],
})
export class CreateServiceComponent implements OnInit {
public toolbar_title = 'Create Service' ;
public title: string;
description: string;
source: string;
organization: string;
deadline: string;
contacts: string;
category:string ;
  constructor() { }

  ngOnInit() {}

}
