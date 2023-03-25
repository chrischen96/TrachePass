import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SavedAppointmentPageRoutingModule } from './saved-appointment-routing.module';

import { SavedAppointmentPage } from './saved-appointment.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    SavedAppointmentPageRoutingModule
  ],
  declarations: [SavedAppointmentPage]
})
export class SavedAppointmentPageModule {}
