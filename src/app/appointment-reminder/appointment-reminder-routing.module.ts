import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppointmentReminderPage } from './appointment-reminder.page';

const routes: Routes = [
  {
    path: '',
    component: AppointmentReminderPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AppointmentReminderPageRoutingModule {}
