import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VerifyOfficerPageRoutingModule } from './verify-officer-routing.module';

import { VerifyOfficerPage } from './verify-officer.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VerifyOfficerPageRoutingModule
  ],
  declarations: [VerifyOfficerPage]
})
export class VerifyOfficerPageModule {}
