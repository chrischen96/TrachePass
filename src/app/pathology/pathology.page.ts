import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { EditPathologyPage } from '../edit-pathology/edit-pathology.page';
import { UserDataService } from '../services/user-data.service'

@Component({
  selector: 'app-pathology',
  templateUrl: './pathology.page.html',
  styleUrls: ['./pathology.page.scss'],
})
export class PathologyPage implements OnInit {
  public medicalRecord = {
    pathology: '',
    intubatation: false,
    airwayGrade: '',
    tubeSize: '',
    details: '',
  }
  
  constructor(
    private modalCtrl:ModalController,
    public userDataService: UserDataService,
  ) { 
  }

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
      component: EditPathologyPage,
      backdropDismiss: false,
      componentProps: {
        isModal: true,
      },
    });
    modal.present();
  }
}
