import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule} from '@angular/forms'
import { IonicModule } from '@ionic/angular';

import { EditTracheostomyDetailsPageRoutingModule } from './edit-tracheostomy-details-routing.module';

import { EditTracheostomyDetailsPage } from './edit-tracheostomy-details.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    EditTracheostomyDetailsPageRoutingModule
  ],
  declarations: [EditTracheostomyDetailsPage]
})
export class EditTracheostomyDetailsPageModule {}
