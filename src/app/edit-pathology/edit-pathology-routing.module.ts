import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditPathologyPage } from './edit-pathology.page';

const routes: Routes = [
  {
    path: '',
    component: EditPathologyPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditPathologyPageRoutingModule {}
