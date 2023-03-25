import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OpenVersionPage } from './open-version.page';

const routes: Routes = [
  {
    path: '',
    component: OpenVersionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OpenVersionPageRoutingModule {}
