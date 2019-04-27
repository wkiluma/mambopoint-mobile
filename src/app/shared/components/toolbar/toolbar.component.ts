import { Component, OnInit, Input, Output } from '@angular/core';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {
  @Input() pageTitle: string;
  @Input() toolbarColor: string;
  @Input() userButtonColor: string;
  @Input() isRootPage: boolean;
  @Input() rootPageHref: string;

  toolbarLogo: string;

  constructor() {
    this.toolbarColor = '';
    this.userButtonColor = '';
    this.toolbarLogo = 'assets/icon/icon.jpeg';
    this.rootPageHref = '';
  }

  ngOnInit() {}
}
