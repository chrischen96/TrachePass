import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditTracheostomyDetailsPage } from './edit-tracheostomy-details.page';

const routes: Routes = [
  {
    path: '',
    component: EditTracheostomyDetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditTracheostomyDetailsPageRoutingModule {}
