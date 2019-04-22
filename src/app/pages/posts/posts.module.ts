import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';

import { pages } from './pages';
import { PostsRoutingModule } from './posts-routing.module';

@NgModule({
  declarations: [...pages],
  imports: [CommonModule, IonicModule, PostsRoutingModule]
})
export class PostsModule {}
