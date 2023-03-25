import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { EditOperativeHistoryPage } from '../edit-operative-history/edit-operative-history.page';
import { UserDataService } from '../services/user-data.service'
import { ActionSheetController } from '@ionic/angular';
import { ViewerModalComponent } from 'ngx-ionic-image-viewer';
import { PhotoService } from '../services/photo.service';
import { ViewOperativeHistoryPage } from '../view-operative-history/view-operative-history.page'

@Component({
  selector: 'app-operative-history',
  templateUrl: './operative-history.page.html',
  styleUrls: ['./operative-history.page.scss'],
})
export class OperativeHistoryPage implements OnInit {
  public operativeHistoryJSON = {};
  public operativeHistoryString = '';
  public histories = [];
  public photos = [];

  constructor(
    private modalCtrl:ModalController,
    public userDataService: UserDataService,
    public actionSheetController: ActionSheetController,
    public photoService: PhotoService,
  ) { }

  async ngOnInit() {
    await this.userDataService.loadMedicalRecord();
    this.operativeHistoryString = this.userDataService.medicalRecordValue['operativeHistory'];
    if(this.operativeHistoryString!='' && this.operativeHistoryString!=null) {
      this.operativeHistoryJSON = JSON.parse(this.operativeHistoryString);
      Object.keys(this.operativeHistoryJSON).forEach(key => {
        this.histories.push(this.operativeHistoryJSON[key]);
      });
    }
  }

  async edit(){
    const modal = await this.modalCtrl.create({
      component: EditOperativeHistoryPage,
      backdropDismiss: false,
      componentProps: {
        isModal: true
      },
    });
    modal.present();
  }

  async viewPhoto(x: number){
    const modal = await this.modalCtrl.create({
      component: ViewOperativeHistoryPage,
      backdropDismiss: false,
      componentProps: {
        index : x,
      },
    });
    modal.present();
  }

  async choose(x: number) {
    const actionSheet = await this.actionSheetController.create({
      header: 'Options',
      buttons: [{ 
        text: 'View and Edit', 
        handler: () => {
          this.viewPhoto(x);
        }
      }, { 
        text: 'Delete', 
        role: 'destructive' ,
        handler: () => {
          console.log('Delete clicked')
          console.log(x);
          this.histories.splice(x,1);
          console.log(this.histories);
          this.operativeHistoryJSON = {};
          for(let i=0; i<this.histories.length; i++){
            console.log(i.toString());
            this.operativeHistoryJSON[i]=this.histories[i];
          }
/*           const lastKey=Object.keys(this.operativeHistoryJSON)[Object.keys(this.operativeHistoryJSON).length-1];
          delete this.operativeHistoryJSON[lastKey]; */
          console.log(this.histories);
          console.log(this.operativeHistoryJSON);
          this.userDataService.medicalRecordValue['operativeHistory']=JSON.stringify(this.operativeHistoryJSON);
          this.userDataService.saveMedicalRecord();
        }
      },{ 
        text: 'Cancel', role: 'cancel' ,
      }]
    });
    await actionSheet.present();
  }

}
