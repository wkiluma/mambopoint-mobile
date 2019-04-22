import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthenticationRoutingModule } from './authentication-routing.module';
import { pages } from './pages';

@NgModule({
  declarations: [...pages],
  imports: [CommonModule, AuthenticationRoutingModule]
})
export class AuthenticationModule {}
