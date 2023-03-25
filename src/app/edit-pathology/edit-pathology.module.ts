import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule} from '@angular/forms'
import { IonicModule } from '@ionic/angular';

import { EditPathologyPageRoutingModule } from './edit-pathology-routing.module';

import { EditPathologyPage } from './edit-pathology.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    EditPathologyPageRoutingModule
  ],
  declarations: [EditPathologyPage]
})
export class EditPathologyPageModule {}
