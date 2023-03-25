import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PathologyPageRoutingModule } from './pathology-routing.module';

import { PathologyPage } from './pathology.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PathologyPageRoutingModule
  ],
  declarations: [PathologyPage]
})
export class PathologyPageModule {}
