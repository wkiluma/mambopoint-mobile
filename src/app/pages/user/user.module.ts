import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { pages } from './pages';
import { IonicModule } from '@ionic/angular';

@NgModule({
  declarations: [...pages],
  imports: [CommonModule, IonicModule, UserRoutingModule]
})
export class UserModule {}
