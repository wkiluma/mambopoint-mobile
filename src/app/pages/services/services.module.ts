import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ServicesRoutingModule } from './services-routing.module';
import { pages } from './pages';

@NgModule({
  declarations: [...pages],
  imports: [CommonModule, ServicesRoutingModule]
})
export class ServicesModule {}
