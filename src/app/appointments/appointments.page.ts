import { Component, OnInit } from '@angular/core';
import { AppointmentReminderPage } from '../appointment-reminder/appointment-reminder.page';
import { SavedAppointmentPage } from '../saved-appointment/saved-appointment.page'
import { ModalController } from '@ionic/angular';
import { AppointmentService } from '../services/appointment.service';

@Component({
  selector: 'app-appointments',
  templateUrl: './appointments.page.html',
  styleUrls: ['./appointments.page.scss'],
})
export class AppointmentsPage implements OnInit {
  public appointments = {} ;
  public appointmentList = [];

  constructor(
    public modalCtrl: ModalController,
    public appointmentService: AppointmentService,
  ) { }

  async ngOnInit() {
    await this.appointmentService.loadAppointment();
    this.appointments = this.appointmentService.appointments;
    if (this.appointments != null && this.appointments != {}){
      Object.keys(this.appointments).forEach(key => {
        this.appointmentList.push(this.appointments[key]);
      })
    }
    console.log('appointments');
  }

  async edit(){
    const modal = await this.modalCtrl.create({
      component: AppointmentReminderPage,
      backdropDismiss: false,
      componentProps: {
        isModal: true
      },
    });
    modal.present();
  }

  async choose(i){
    const modal = await this.modalCtrl.create({
      component: SavedAppointmentPage,
      backdropDismiss: false,
      componentProps: {
        index: i,
      },
    });
    modal.present();
  }
}
