import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.scss']
})
export class CommentComponent implements OnInit {
  @Input() user: string;
  @Input() profilePic: string;
  @Input() lastUpdate: string;
  @Input() text: string;
  constructor() {
    this.profilePic = 'assets/icon/icon.jpeg';
  }

  ngOnInit() {
  }

}
