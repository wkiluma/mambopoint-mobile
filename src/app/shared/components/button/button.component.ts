import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent implements OnInit {
  @Input() color: string;
  @Input() expand: string;
  @Input() buttonLabel: string;
  @Input() fill: string;
  @Input() size: string;
  @Input() slot: string;
  @Input() iconName: string;
  @Input() iconSlot: string;

  constructor() { }

  ngOnInit() {}

}
