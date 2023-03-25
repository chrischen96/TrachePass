import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { UserDataService } from '../services/user-data.service';
import { OpenVersionPage } from '../open-version/open-version.page'
import { ThrowStmt } from '@angular/compiler';
import { computeStackId } from '@ionic/angular/directives/navigation/stack-utils';

@Component({
  selector: 'app-version-history',
  templateUrl: './version-history.page.html',
  styleUrls: ['./version-history.page.scss'],
})
export class VersionHistoryPage implements OnInit {
  public versionHistory = [];

  constructor(
    public userDataService: UserDataService, 
    public modalCtrl: ModalController
  ) { }

  async ngOnInit() {
    await this.userDataService.loadUserProfile();
    await this.userDataService.loadMedicalRecord();
    this.versionHistory = this.userDataService.versionHistoryValue;
    console.log(this.versionHistory);
  }

  async openVersion(index: string | number) {
    //console.log(typeof this.userDataService.old[index]);
    const entry = this.versionHistory[index];
    console.log(typeof entry.value)
    console.log(entry);
    console.log(entry.value);
    const modal = await this.modalCtrl.create({
      component: OpenVersionPage,
      componentProps: {
        date: entry.time,
        type: entry.type,
        value: entry.value,
      },
      cssClass: 'login-modal'
    });
    await modal.present();
    const { data } = await modal.onWillDismiss();
    console.log(data.restoreValues);
    console.log(typeof data.restoreValues);
    if (data.restoreValues == true){
      if(entry.type == 'User Profile'){
        this.userDataService.userProfileValue = entry.value;
        this.userDataService.saveUserProfile();
      } else {
        this.userDataService.medicalRecordValue = entry.value;
        this.userDataService.saveMedicalRecord();
      }
      
    }
  }

}
