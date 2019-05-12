import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ButtonIcon } from '../../models/button-icon.model';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {
  @Input() color: string;
  @Input() label: string;
  @Input() fill = 'solid';
  @Input() size: string;
  @Input() icon: ButtonIcon;
  @Input() shape: string;
  @Input() type: string;
  @Input() disabled = false;
  @Input() expand = '';

  @Output() buttonClick = new EventEmitter<any>();
  constructor() {}

  ngOnInit() {}

  onButtonClick() {
    this.buttonClick.emit();
  }
}
