import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {
  @Input() user: string;
  @Input() profilePic: string;
  @Input() lastUpdate: string;
  @Input() text: string;
  constructor() { }

  ngOnInit() {
  }

}
