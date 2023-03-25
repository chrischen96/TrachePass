import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditOperativeHistoryPage } from './edit-operative-history.page';

const routes: Routes = [
  {
    path: '',
    component: EditOperativeHistoryPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditOperativeHistoryPageRoutingModule {}
