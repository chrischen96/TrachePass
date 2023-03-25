import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditMedicalConditionsPage } from './edit-medical-conditions.page';

const routes: Routes = [
  {
    path: '',
    component: EditMedicalConditionsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditMedicalConditionsPageRoutingModule {}
