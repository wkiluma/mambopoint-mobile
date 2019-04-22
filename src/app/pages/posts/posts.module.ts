import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostsRoutingModule } from './posts-routing.module';
import { pages } from './pages';

@NgModule({
  declarations: [...pages],
  imports: [CommonModule, PostsRoutingModule]
})
export class PostsModule {}
