import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ViewOperativeHistoryPage } from './view-operative-history.page';

const routes: Routes = [
  {
    path: '',
    component: ViewOperativeHistoryPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ViewOperativeHistoryPageRoutingModule {}
