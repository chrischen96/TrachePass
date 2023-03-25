import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SavedAppointmentPage } from './saved-appointment.page';

const routes: Routes = [
  {
    path: '',
    component: SavedAppointmentPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SavedAppointmentPageRoutingModule {}
