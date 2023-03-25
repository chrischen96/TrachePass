import { Component, OnInit, Input } from '@angular/core';
import { AlertController, ModalController, } from '@ionic/angular';

@Component({
  selector: 'app-open-version',
  templateUrl: './open-version.page.html',
  styleUrls: ['./open-version.page.scss'],
})
export class OpenVersionPage implements OnInit {
  @Input() date: string;
  @Input() type: string;
  @Input() value: any;
  public histories = [];

  constructor(
    private modalCtrl: ModalController, 
    public alertController: AlertController,
  ) { }

  ngOnInit() {
    console.log(this.value);
    const operativeHistoryString = this.value['operativeHistory'];
    console.log(operativeHistoryString);
    if(operativeHistoryString!='' && operativeHistoryString!=null) {
      const operativeHistoryJSON = JSON.parse(operativeHistoryString);
      console.log(operativeHistoryJSON);
      Object.keys(operativeHistoryJSON).forEach(key => {
        this.histories.push(operativeHistoryJSON[key]);
        console.log(this.histories);
      });
    }
  }

  async warningRestore(){
    const alert = await this.alertController.create({
      header: 'Confirm Restore',
      message: 'The record will be replaced by this backup.',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'Confirm',
          handler: () => {
            this.replace();
          }
        }
      ]
    });
    await alert.present();
  }

  async replace(){
    this.modalCtrl.dismiss({
      'restoreValues': true
    });
  }

  dismiss(){
    this.modalCtrl.dismiss({
      'restoreValues': false
    });
  }

}
