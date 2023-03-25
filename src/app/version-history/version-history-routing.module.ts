import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VersionHistoryPage } from './version-history.page';

const routes: Routes = [
  {
    path: '',
    component: VersionHistoryPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VersionHistoryPageRoutingModule {}
