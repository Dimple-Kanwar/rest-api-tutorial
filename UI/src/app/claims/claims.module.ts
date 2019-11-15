import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';



import { ClaimsPage } from './claims.page';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild([{ path: '', component: ClaimsPage }]),
    TranslateModule.forChild()

  ],
  declarations: [ClaimsPage]
})
export class ClaimsPageModule {}
