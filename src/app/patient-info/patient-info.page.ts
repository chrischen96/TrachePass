import { Component, OnInit } from '@angular/core';
import { UserDataService } from '../services/user-data.service'; 
import { ModalController } from '@ionic/angular';
import { EditPatientInfoPage } from '../edit-patient-info/edit-patient-info.page';

@Component({
  selector: 'app-patient-info',
  templateUrl: './patient-info.page.html',
  styleUrls: ['./patient-info.page.scss'],
})
export class PatientInfoPage implements OnInit {
  public userInfo = {
   name:'Not Set',
   //lastName:'Not Set',
   birthDate:'Not Set',
   sex:'Not Set',
   nhsNumber:'Not Set',
   hospitalNumber: 'Not Set',
   relation1: 'Not Set',
   r1Name: 'Not Set',
   relation2: 'Not Set',
   r2Name: 'Not Set',
   consultant:'Not Set',
   trust: 'Not Set',
   emergencyContact:'Not Set',
  }

  constructor(
    public userDataService: UserDataService,
    private modalCtrl: ModalController) { 

  }

  async ngOnInit() {
    await this.userDataService.loadUserProfile();
    Object.keys(this.userDataService.userProfileValue).forEach(key => {
      if(Object.keys(this.userInfo).includes(key)){
        this.userInfo[key]=this.userDataService.userProfileValue[key];
      }
      console.log(key, this.userInfo[key])
    })
  }

  async edit(){
    const modal = await this.modalCtrl.create({
      component: EditPatientInfoPage,
      backdropDismiss: false,
      componentProps: {
        isModal: true
      },
    });
    modal.present();
  }

  refresh(){
    location.reload();
  }

}
