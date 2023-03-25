import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OperativeHistoryPageRoutingModule } from './operative-history-routing.module';

import { OperativeHistoryPage } from './operative-history.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OperativeHistoryPageRoutingModule
  ],
  declarations: [OperativeHistoryPage]
})
export class OperativeHistoryPageModule {}
