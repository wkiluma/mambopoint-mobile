import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { components } from './components';
import { directives } from './directives';
import { pipes } from './pipes';
import { services } from './services';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [...components, ...directives, ...pipes],
  exports: [...components, ...directives, ...pipes],
  providers: [...services],
  imports: [CommonModule,FormsModule,ReactiveFormsModule]
})
export class SharedModule {}
