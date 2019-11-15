import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VerifyOfficerPage } from './verify-officer.page';

const routes: Routes = [
  {
    path: '',
    component: VerifyOfficerPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VerifyOfficerPageRoutingModule {}
