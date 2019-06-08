import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { ServiceCommentsComponent } from './pages/services/pages/service-comments/service-comments.component';

const routes: Routes = [
  { path: '', loadChildren: './tabs/tabs.module#TabsModule' },
  { path: 'service-comments/:id', component: ServiceCommentsComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
