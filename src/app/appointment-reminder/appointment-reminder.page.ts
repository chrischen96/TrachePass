import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
//load browser plugin
import { Plugins } from '@capacitor/core';
const { Browser, LocalNotifications } = Plugins;

import {Validators, FormBuilder, FormGroup } from '@angular/forms';
import { AppointmentService } from '../services/appointment.service';

@Component({
  selector: 'app-appointment-reminder',
  templateUrl: './appointment-reminder.page.html',
  styleUrls: ['./appointment-reminder.page.scss'],
})
export class AppointmentReminderPage implements OnInit {

  public today = new Date().toISOString();
  public form : FormGroup;
  public isLocationSetted: Boolean;
  public isAppointmentSetted: Boolean;
  public appointment = {};
  public appointmentList = [];

  constructor(
    private formBuilder: FormBuilder, 
    public appointmentService: AppointmentService, 
    public modalCtrl: ModalController,
  ) {
    console.log(this.today);
    this.form = this.formBuilder.group({
      appointmentDate: [this.today,],
      alarmDateTime: [''],
      title: [''],
      doctor: [''],
      location: [''],
    });
    console.log(this.form.value["appointmentDate"]);
  }

  ngOnInit() {
  }

/*   async openMap() {
    const link = "https://www.google.com/maps/search/?api=1&query=" + this.appointmentService.appointment["Location"]
    const encoded = encodeURI(link)
    await Browser.open({url: encoded});
  } */


  async save(){
    Object.keys(this.form.value).forEach(keys => {
      this.appointment[keys] = this.form.value[keys];
    })
    console.log(this.appointment['appointmentDate']);
    this.appointmentList.push(this.appointment);

    Object.keys(this.appointmentService.appointments).forEach(key => {
      this.appointmentList.push(this.appointmentService.appointments[key]);
    })

    const index = this.appointmentList.length;
    
    console.log(LocalNotifications.getPending());
    for(let i=0; i<this.appointmentList.length; i++){
      for(let j=i+1; j<this.appointmentList.length; j++){
        if(this.appointmentList[i].appointmentDate<this.appointmentList[j].appointmentDate){
          let history = this.appointmentList[i];
          this.appointmentList[i]=this.appointmentList[j];
          this.appointmentList[j]=history;
        }  
      }
    }
    for(let i=0; i<this.appointmentList.length; i++){
      this.appointmentService.appointments[i] = this.appointmentList[i];
    }

    this.appointmentService.saveValue();
    this.isAppointmentSetted = true;
    this.modalCtrl.dismiss();
    await this.appointmentService.setReminder(this.appointment, index);
    location.reload();
  }

  dismiss(){
    this.modalCtrl.dismiss();
  }

}
