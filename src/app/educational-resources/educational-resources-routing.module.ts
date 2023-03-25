import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EducationalResourcesPage } from './educational-resources.page';

const routes: Routes = [
  {
    path: '',
    component: EducationalResourcesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EducationalResourcesPageRoutingModule {}
