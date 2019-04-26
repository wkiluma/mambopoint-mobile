import { Component, OnInit } from '@angular/core';
import { HomeService } from 'src/app/shared/services/home.service';

@Component({
  selector: 'app-services-home',
  templateUrl: './services-home.component.html',
  styleUrls: ['./services-home.component.scss'],
})
export class ServicesHomeComponent implements OnInit {
  public services:any ;
  public toolbar_title = 'List of Services' ;

  constructor(public homeService:HomeService) { }

  ngOnInit() {
    this.homeService.getServices().subscribe((data) => {
     console.log(data);
     this.services = data ;
    }, error => {
      console.log(JSON.stringify(error));
    });
  }

}
