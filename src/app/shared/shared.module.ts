import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { components } from './components';
import { directives } from './directives';
import { pipes } from './pipes';
import { services } from './services';
import { AbbreviatePipe } from './pipes/abbreviate.pipe';


@NgModule({
  declarations: [...components, ...directives, ...pipes, AbbreviatePipe],
  exports: [...components, ...directives, ...pipes],
  providers: [...services],
  imports: [CommonModule, IonicModule, FormsModule, ReactiveFormsModule]
})

export class SharedModule {}
