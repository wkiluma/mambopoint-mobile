import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { components } from './components';
import { directives } from './directives';
import { pipes } from './pipes';
import { services } from './services';
import { CommentListComponent } from './components/comment-list/comment-list.component';


@NgModule({
  declarations: [...components, ...directives, ...pipes],
  exports: [...components, ...directives, ...pipes],
  providers: [...services],
  imports: [CommonModule, IonicModule, FormsModule, ReactiveFormsModule],
  entryComponents: [CommentListComponent]
})

export class SharedModule {}
