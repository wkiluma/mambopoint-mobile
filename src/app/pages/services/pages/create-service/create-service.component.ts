import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { ServiceService } from '../../services/service.service';
@Component({
  selector: 'app-create-service',
  templateUrl: './create-service.component.html',
  styleUrls: ['./create-service.component.scss']
})
export class CreateServiceComponent implements OnInit {
  public toolbarTitle = 'Create Service';
  public title: string;
  description: string;
  source: string;
  organization: string;
  deadline: string;
  contacts: string;
  category: string;
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
