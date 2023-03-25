import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule} from '@angular/forms'
import { IonicModule } from '@ionic/angular';

import { EditOperativeHistoryPageRoutingModule } from './edit-operative-history-routing.module';

import { EditOperativeHistoryPage } from './edit-operative-history.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    EditOperativeHistoryPageRoutingModule
  ],
  declarations: [EditOperativeHistoryPage]
})
export class EditOperativeHistoryPageModule {}
