import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FarmerPage } from './farmer.page';

const routes: Routes = [
  {
    path: '',
    component: FarmerPage,
    children: [
      {
        path: 'dashboard',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../dashboard/dashboard.module').then(m => m.DashboardPageModule)
          }
        ]
      },
      {
        path: 'profile',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../profile/profile.module').then(m => m.ProfilePageModule)
          }
        ]
      },
      {
        path: 'claims',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../claims/claims.module').then(m => m.ClaimsPageModule)
          }
        ]
      },
      {
        path: '',
        redirectTo: '/farmer/dashboard',
        pathMatch: 'full'
      }
    ]
  
  },
  {
    path: '',
    redirectTo: '/farmer/dashboard',
    pathMatch: 'full'
  }

];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FarmerPageRoutingModule {}
