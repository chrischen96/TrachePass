import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OperativeHistoryPage } from './operative-history.page';

const routes: Routes = [
  {
    path: '',
    component: OperativeHistoryPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OperativeHistoryPageRoutingModule {}
