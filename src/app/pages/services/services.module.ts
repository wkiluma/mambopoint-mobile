import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ServicesRoutingModule } from './services-routing.module';
import { pages } from './pages';
import { IonicModule } from '@ionic/angular';
import { SharedModule } from 'src/app/shared/shared.module';
import { ServiceCommentsComponent } from './pages/service-comments/service-comments.component';

@NgModule({
  declarations: [...pages],
  imports: [CommonModule, IonicModule, ServicesRoutingModule, SharedModule]
})
export class ServicesModule {}
