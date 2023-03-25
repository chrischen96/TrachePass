import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VersionHistoryPageRoutingModule } from './version-history-routing.module';

import { VersionHistoryPage } from './version-history.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VersionHistoryPageRoutingModule
  ],
  declarations: [VersionHistoryPage]
})
export class VersionHistoryPageModule {}
