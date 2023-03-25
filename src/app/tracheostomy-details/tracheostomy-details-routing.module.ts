import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TracheostomyDetailsPage } from './tracheostomy-details.page';

const routes: Routes = [
  {
    path: '',
    component: TracheostomyDetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TracheostomyDetailsPageRoutingModule {}
