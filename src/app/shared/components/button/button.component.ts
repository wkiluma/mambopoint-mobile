import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent implements OnInit {
  @Input() color: string;
  @Input() buttonLabel: string;
  @Input() fullWidth: boolean;
  @Input() blockWidth: boolean;
  @Input() fill: string;
  @Input() size: string;
  @Input() iconName: string;
  @Input() iconSlot: string;
  @Input() shape: string;

  expand = ' ';
  constructor() { }

 /**
 *To ensure no confusion between related attributes
 */
  ngOnInit() {
    if (this.fullWidth && this.blockWidth) {
      this.expand = '';
    } else if (this.fullWidth) {
      this.expand = 'full';
    } else if (this.blockWidth) {
      this.expand = 'block';
    }
  }

}
