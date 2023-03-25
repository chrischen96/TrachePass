import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TracheostomyDetailsPageRoutingModule } from './tracheostomy-details-routing.module';

import { TracheostomyDetailsPage } from './tracheostomy-details.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TracheostomyDetailsPageRoutingModule
  ],
  declarations: [TracheostomyDetailsPage]
})
export class TracheostomyDetailsPageModule {}
