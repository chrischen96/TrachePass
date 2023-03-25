import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule} from '@angular/forms'

import { IonicModule } from '@ionic/angular';

import { EditPatientInfoPageRoutingModule } from './edit-patient-info-routing.module';

import { EditPatientInfoPage } from './edit-patient-info.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    EditPatientInfoPageRoutingModule
  ],
  declarations: [EditPatientInfoPage]
})
export class EditPatientInfoPageModule {}
