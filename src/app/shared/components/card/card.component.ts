import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input() card: any;
  @Input() avatarImage:string ;
  @Input() image:string ;
  constructor() {
    this.avatarImage = 'assets/icon/icon.jpeg';
    this.image = 'assets/shapes.svg' ;
  }

  ngOnInit() {}
}
