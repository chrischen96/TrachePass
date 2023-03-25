import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OpenVersionPageRoutingModule } from './open-version-routing.module';

import { OpenVersionPage } from './open-version.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OpenVersionPageRoutingModule
  ],
  declarations: [OpenVersionPage]
})
export class OpenVersionPageModule {}
