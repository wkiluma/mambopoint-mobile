import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent implements OnInit {
  @Input() buttonColor: string;
  @Input() buttonLabel: string;
  @Input() fullWidth: boolean;
  @Input() blockWidth: boolean;
  @Input() buttonFill = 'solid';
  @Input() buttonSize: string;
  @Input() iconName: string;
  @Input() iconSlot: string;
  @Input() buttonShape: string;

  buttonExpand = ' ';
  constructor() { }

 /**
 *To ensure no confusion between related attributes
 */
  ngOnInit() {
    if (this.fullWidth && this.blockWidth) {
      this.buttonExpand = '';
    } else if (this.fullWidth) {
      this.buttonExpand = 'full';
    } else if (this.blockWidth) {
      this.buttonExpand = 'block';
    }
  }

}
