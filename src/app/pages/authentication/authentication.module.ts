import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthenticationRoutingModule } from './authentication-routing.module';
import { pages } from './pages';
import { IonicModule } from '@ionic/angular';

@NgModule({
  declarations: [...pages],
  imports: [CommonModule, IonicModule, AuthenticationRoutingModule]
})
export class AuthenticationModule {}
