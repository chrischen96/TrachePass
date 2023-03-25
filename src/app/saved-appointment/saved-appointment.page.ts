import { Component, Input, OnInit } from '@angular/core';
import { ModalController, AlertController } from '@ionic/angular';
import { AppointmentReminderPage } from '../appointment-reminder/appointment-reminder.page'
import { FormBuilder, FormGroup, FormControl, Validators, ReactiveFormsModule} from '@angular/forms'

//load browser plugin
import { Plugins } from '@capacitor/core';
const { Browser, LocalNotifications } = Plugins;

import { AppointmentService } from '../services/appointment.service'; 

import { LoginService } from '../services/login.service'; 
import { ResourceLoader } from '@angular/compiler';

@Component({
  selector: 'app-saved-appointment',
  templateUrl: './saved-appointment.page.html',
  styleUrls: ['./saved-appointment.page.scss'],
})
export class SavedAppointmentPage implements OnInit {
  @Input()index:number;
  public appointment;
  public form: FormGroup;
  public appointmentList = [];

  public dateTime;

  constructor(
    public appointmentService: AppointmentService, 
    public loginService: LoginService,
    private modalCtrl: ModalController,
    private alertController: AlertController,
    public fb: FormBuilder,
  ) {
    this.form = this.fb.group({
      appointmentDate: ['', Validators.required],
      alarmDateTime: ['', Validators.required],
      title: ['', Validators.required],
      location: ['', Validators.required],
      doctor: ['', Validators.required]
    })
  }

  async ngOnInit() {
    this.appointment = this.appointmentService.appointments[this.index];
    console.log(this.appointment);
    Object.keys(this.appointmentService.appointments).forEach(key => {
      this.appointmentList.push(this.appointmentService.appointments[key])
    })
/*     Object.keys(this.form.value).forEach( key => {
      if( this.appointment[key] != null ){
        this.form.get(key).setValue(this.appointment[key]);
        console.log(key, this.appointment[key]);
      }
    }) */
    console.log('saved');
    console.log('Initiate appointment');
  }

  async openMap() {
    const link = "https://www.google.com/maps/search/?api=1&query=" + this.appointment["location"]    
    //console.log(link)
    const encoded = encodeURI(link)
    //console.log(encoded)
    await Browser.open({url: encoded});
  }

  async edit(){
/*     this.appointment = {};
    Object.keys(this.form).forEach( key => {
      this.appointment[key] = this.form.value[key];
    })
    console.log(this.appointmentService.appointments);
    this.appointmentService.appointments[this.index] = this.appointment;
    this.appointmentService.saveValue();
    location.reload(); */
    this.modalCtrl.dismiss();
  }

  async delete(){
    console.log("delete appointment");
    console.log(LocalNotifications.getPending());
    this.appointmentList.splice(this.index, 1);
    this.appointmentService.appointments = {};
    for(let i=0; i<this.appointmentList.length; i++){
      this.appointmentService.appointments[i] = this.appointmentList[i];
    }
    this.appointmentService.saveValue();
    location.reload();

    /* const alert = await this.alertController.create({
      header: 'Delete',
      message: 'Confirm to delete this appointment.',
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
            console.log(LocalNotifications.getPending());
            this.appointmentList.splice(this.index, 1);
            this.appointmentService.appointments = {};
            for(let i=0; i<this.appointmentList.length; i++){
              this.appointmentService.appointments[i] = this.appointmentList[i];
            }
            this.appointmentService.saveValue();
            location.reload();
          }
        }
      ]
    });
    await alert.present(); */
  }

}
