import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss'],
})
export class ToolbarComponent implements OnInit {
  @Input() pageTitle: string;
  logo = '../../../../assets/icon/favicon.png';
  @Input() userButtonColor = 'primary';
  constructor() { }

  ngOnInit() {}

  onClickLogo(){
    console.log('clicked the logo');
  }

}
