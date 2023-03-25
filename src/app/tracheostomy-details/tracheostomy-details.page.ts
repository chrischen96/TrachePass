import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { EditTracheostomyDetailsPage } from '../edit-tracheostomy-details/edit-tracheostomy-details.page';
import { UserDataService } from '../services/user-data.service';

@Component({
  selector: 'app-tracheostomy-details',
  templateUrl: './tracheostomy-details.page.html',
  styleUrls: ['./tracheostomy-details.page.scss'],
})
export class TracheostomyDetailsPage implements OnInit {
  public medicalRecord = {
    tubeType: 'Unknown',
    subType: 'Unknown',
    sizeID: 'Unknown',
    shaftLength: 'Unknown',
    suctionLength: 'Unknown',
    //scheduleForChange: 'Unknown',
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
    console.log(this.medicalRecord);
  }

  async edit(){
    const modal = await this.modalCtrl.create({
      component: EditTracheostomyDetailsPage,
      backdropDismiss: false,
      componentProps: {
        isModal: true
      },
    });
    modal.present();
  }
}
