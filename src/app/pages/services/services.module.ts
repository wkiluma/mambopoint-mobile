import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ServicesRoutingModule } from './services-routing.module';
import { pages } from './pages';
import { IonicModule } from '@ionic/angular';

@NgModule({
  declarations: [...pages],
  imports: [CommonModule, IonicModule, ServicesRoutingModule]
})
export class ServicesModule {}
