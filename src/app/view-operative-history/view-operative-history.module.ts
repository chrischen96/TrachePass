import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule} from '@angular/forms'
import { IonicModule } from '@ionic/angular';

import { ViewOperativeHistoryPageRoutingModule } from './view-operative-history-routing.module';

import { ViewOperativeHistoryPage } from './view-operative-history.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    ViewOperativeHistoryPageRoutingModule
  ],
  declarations: [ViewOperativeHistoryPage]
})
export class ViewOperativeHistoryPageModule {}
