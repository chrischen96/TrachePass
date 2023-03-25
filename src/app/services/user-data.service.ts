import { Injectable } from '@angular/core';

import { Plugins, Capacitor, } from '@capacitor/core';

const { Storage } = Plugins;

@Injectable({
  providedIn: 'root'
})
export class UserDataService {

  public userProfileValue = {};
  public userProfileKey: string = "userProfile";
  public userProfileString: string = "";

  public medicalRecordValue = {};
  public medicalRecordKey:string = "medicalRecord";
  public medicalRecordString: string = "";

  public versionHistoryValue = [];
  public versionHistoryKey:string = 'versionHistory';

  public exporter = {};
  public exporterString = "";

  constructor() { }
  
  async exportData() {
    this.userProfileString = JSON.stringify(this.userProfileValue);
    this.medicalRecordString = JSON.stringify(this.medicalRecordValue);

    this.exporter = {
      userProfile: this.userProfileString,
      medicalRecord: this.medicalRecordString,
    }
    this.exporterString = JSON.stringify(this.exporter);
  }

  async loadUserProfile(){
    const userProfileGet= await Storage.get({ key: this.userProfileKey });
    this.userProfileValue = JSON.parse(userProfileGet.value) || {};
    console.log("finished loading");
    const versionHistoryGet = await Storage.get({ key: this.versionHistoryKey });
    this.versionHistoryValue = JSON.parse(versionHistoryGet.value) || [];
  } //load user profile from storage

  async saveUserProfile() {
    const oldDataGet = await Storage.get({ key: this.userProfileKey});
    const oldDataValue = JSON.parse(oldDataGet.value) || {};
    console.log(oldDataValue);
    const toSave = {
      time: new Date().toISOString().slice(0,16),
      type: 'User Profile',
      value: oldDataValue,
    }
    this.saveVersion(toSave);
    Storage.set({
      key: this.userProfileKey,
      value: JSON.stringify(this.userProfileValue),
    })
  } //save updated user profile to storage

  async loadMedicalRecord(){
    const medicalRecordGet= await Storage.get({ key: this.medicalRecordKey });
    this.medicalRecordValue = JSON.parse(medicalRecordGet.value) || {};
    console.log("finished loading");
    const versionHistoryGet = await Storage.get({ key: this.versionHistoryKey });
    this.versionHistoryValue = JSON.parse(versionHistoryGet.value) || [];
  } //load medical record from storage

  async saveMedicalRecord() {
    const oldDataGet = await Storage.get({ key: this.medicalRecordKey});
    const oldDataValue = JSON.parse(oldDataGet.value) || {};
    const toSave = {
      time: new Date().toISOString().slice(0,16),
      type: 'Medical Record',
      value: oldDataValue,
    }
    this.saveVersion(toSave);
    Storage.set({
      key: this.medicalRecordKey,
      value: JSON.stringify(this.medicalRecordValue),
    })
  } //save new medical record to storage

  saveVersion(toSave: any){
    this.versionHistoryValue.unshift(toSave);
    console.log(this.versionHistoryValue);
    console.log(this.versionHistoryValue.length);
    if (this.versionHistoryValue.length > 10) {
      console.log("too long")
      this.versionHistoryValue = this.versionHistoryValue.slice(0,10);
      console.log(this.versionHistoryValue);
    }
    Storage.set({
      key: this.versionHistoryKey,
      value: JSON.stringify(this.versionHistoryValue)
    })
  }

  convertToString() {
    this.userProfileString = JSON.stringify(this.userProfileValue);
  }
}
