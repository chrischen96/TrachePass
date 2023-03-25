import { Injectable } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Plugins } from '@capacitor/core';
const { Storage } = Plugins;

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  public login = {}
  public LOGIN_STORAGE: string = "login";

  constructor(private modalCtrl: ModalController) {
  }

  async loadPW(){
    // create a promise that load the data from database
    const loginJSON = await Storage.get({ key: this.LOGIN_STORAGE });
    console.log(loginJSON);
    // set the current session value using data from DB, if it doesn't exist it wll initialize a empty array
    this.login = JSON.parse(loginJSON.value) || {};
    console.log("finished loading");
  }

  async setPW(password: any){
    this.login['password'] = password 
    const JSONString = JSON.stringify(this.login);
    Storage.set({
      key:this.LOGIN_STORAGE,
      value: JSONString,
    })
    console.log(Storage.get({ key: this.LOGIN_STORAGE }));
  }

}
