import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { UserDataService } from '../services/user-data.service';
import {EditMedicalConditionsPage} from '../edit-medical-conditions/edit-medical-conditions.page'

@Component({
  selector: 'app-medical-condition',
  templateUrl: './medical-condition.page.html',
  styleUrls: ['./medical-condition.page.scss'],
})
export class MedicalConditionPage implements OnInit {
  public medicalRecord = {
    allergies : '',
    medications : '',
    otherMedicalConditions : '',
  }

  constructor(
    private modalCtrl:ModalController,
    public userDataService: UserDataService,
  ) { }

  async ngOnInit() {
    await this.userDataService.loadMedicalRecord();
    Object.keys(this.userDataService.medicalRecordValue).forEach(key => {
      if(Object.keys(this.medicalRecord).includes(key)){
        this.medicalRecord[key]=this.userDataService.medicalRecordValue[key];
      }
      console.log(key, this.medicalRecord[key]);
    })
  }

  async edit(){
    const modal = await this.modalCtrl.create({
      component: EditMedicalConditionsPage,
      backdropDismiss: false,
      componentProps: {
      },
    });
    modal.present();
  }

}
