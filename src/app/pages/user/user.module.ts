import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { pages } from './pages';

@NgModule({
  declarations: [...pages],
  imports: [CommonModule, UserRoutingModule]
})
export class UserModule {}
