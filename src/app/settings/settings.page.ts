import { Component, OnInit } from '@angular/core';
import { UserDataService } from '../services/user-data.service'; 
import { LoginService } from '../services/login.service'; 
import { AlertController } from '@ionic/angular';
import { Plugins } from '@capacitor/core';
const { Storage } = Plugins;

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})
export class SettingsPage implements OnInit {
  public isResetStorage = false;

  constructor(
    public alertController: AlertController, 
    public userDataService: UserDataService, 
    public LoginService: LoginService,
  ) {
  }

  async ngOnInit() {
    //load user data 
    await this.userDataService.loadUserProfile();
    console.log("started app");
  }

  //reset storage
  async resetStorage(){
    const alert = await this.alertController.create({
      header: 'Reset Storage',
      message: 'All data will be deleted.',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (cancel) => {
            console.log('Confirm Cancel: cancel');
          }
        }, {
          text: 'Delete',
          handler: (blah) => {
            Storage.clear();
            this.isResetStorage = true;
          }
        }
      ]
    });
    await alert.present();
    console.log("Storage Cleared");
  }
}
