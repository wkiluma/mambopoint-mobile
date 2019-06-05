import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input() card: any;
  @Input() avatarImage: string;
  @Input() image: string;

  @Output() openComment = new EventEmitter<any>();
  constructor() {
    this.avatarImage = 'assets/icon/icon.jpeg';
    this.image = 'assets/shapes.svg';
  }

  ngOnInit() {}

  onOpenComment() {
    this.openComment.emit(this.card);
  }
}
