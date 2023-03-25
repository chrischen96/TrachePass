import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule} from '@angular/forms'
import { IonicModule } from '@ionic/angular';

import { EditMedicalConditionsPageRoutingModule } from './edit-medical-conditions-routing.module';

import { EditMedicalConditionsPage } from './edit-medical-conditions.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    EditMedicalConditionsPageRoutingModule
  ],
  declarations: [EditMedicalConditionsPage]
})
export class EditMedicalConditionsPageModule {}
