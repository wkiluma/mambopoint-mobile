import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ServicesHomeComponent } from './pages/services-home/services-home.component';
import { CreateServiceComponent } from './pages/create-service/create-service.component';
import { ServiceCommentsComponent } from './pages/service-comments/service-comments.component';

const routes: Routes = [
  { path: '', component: ServicesHomeComponent },
  { path: 'create-service', component: CreateServiceComponent },
  { path: 'service-comments/:id', component: ServiceCommentsComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ServicesRoutingModule {}
