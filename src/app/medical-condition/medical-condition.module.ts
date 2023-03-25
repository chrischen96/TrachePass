import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MedicalConditionPageRoutingModule } from './medical-condition-routing.module';

import { MedicalConditionPage } from './medical-condition.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MedicalConditionPageRoutingModule
  ],
  declarations: [MedicalConditionPage]
})
export class MedicalConditionPageModule {}
