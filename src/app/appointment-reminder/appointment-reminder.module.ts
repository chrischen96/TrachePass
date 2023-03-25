import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// must import this two module in the form page and add to @NgModule
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { AppointmentReminderPageRoutingModule } from './appointment-reminder-routing.module';
import { AppointmentReminderPage } from './appointment-reminder.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AppointmentReminderPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [AppointmentReminderPage]
})
export class AppointmentReminderPageModule {}
