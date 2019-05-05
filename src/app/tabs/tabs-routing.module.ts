import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TabsComponent } from './tabs.component';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsComponent,
    children: [
      {
        path: 'services',
        children: [
          {
            path: '',
            loadChildren: '../pages/services/services.module#ServicesModule'
          }
        ]
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/services',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsRoutingModule {}
