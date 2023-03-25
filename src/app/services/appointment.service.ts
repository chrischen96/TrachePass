import { Injectable } from '@angular/core';
//import { LocalNotifications } from '@ionic-native/local-notifications/ngx';
import { LocalNotification, LocalNotificationsPlugin, Plugins } from '@capacitor/core';
//import { LocalNotification, LocalNotificationPendingList, Plugins, } from '@capacitor/core';
const { Storage, LocalNotifications } = Plugins;


@Injectable({
  providedIn: 'root'
})
export class AppointmentService {
  public appointments = {};
  //set the strage key for photos can be changed
  private APPOINTMENT_STORAGE: string = "appointment";

  constructor(
  ) { }

  async loadAppointment(){
    // create a promise that load the data from database
    const appiontmentGet = await Storage.get({ key: this.APPOINTMENT_STORAGE });
    // set the current session value using data from DB, if it doesn't exist it wll initialize a empty array
    this.appointments = JSON.parse(appiontmentGet.value) || {};
    console.log("finished loading");
    await LocalNotifications.requestPermission();
  }

  saveValue() {
    const JSONString = JSON.stringify(this.appointments);
    // store the value in to the pair
    Storage.set({
      key: this.APPOINTMENT_STORAGE,
      value: JSONString
    })
  }

  public async setReminder(appointment:{}, id:number) {
    const date = appointment["appointmentDate"].slice(0,10);
    const time = appointment["appointmentDate"].slice(11);
    const alarm = appointment["alarmDateTime"];
    const title = appointment["title"];
    const doctor = appointment["doctor"];
    const location = appointment["location"];

    const notificationTitle = title;
    const appointmentDateTime = new Date(appointment['appointmentDate']);
    const displayTime = time.slice(0, 5)
    const displayDate = date.slice(8) + '/' + date.slice(5, 7) + '/' + date.slice(0, 4)
    const notificationText  = "You have an appointment at " + displayTime + " on " + displayDate + " with " + doctor + " at " + location;
    
    console.log(appointment);
    console.log(id);
    const notifs = await LocalNotifications.schedule({
      notifications: [
        {
          title: notificationTitle,
          body: notificationText,
          id: id,
          schedule: { at: new Date(appointmentDateTime.getTime() - alarm) },
          sound: 'default',
          attachments: null,
          actionTypeId: "",
          extra: null,
        }
      ]
    });
    console.log(LocalNotifications.getPending());
  }
}
