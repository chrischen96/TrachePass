import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EducationalResourcesPageRoutingModule } from './educational-resources-routing.module';

import { EducationalResourcesPage } from './educational-resources.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EducationalResourcesPageRoutingModule
  ],
  declarations: [EducationalResourcesPage]
})
export class EducationalResourcesPageModule {}
