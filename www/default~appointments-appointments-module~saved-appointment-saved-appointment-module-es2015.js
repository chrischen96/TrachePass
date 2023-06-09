(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~appointments-appointments-module~saved-appointment-saved-appointment-module"],{

/***/ "Oz3r":
/*!*************************************************!*\
  !*** ./src/app/services/appointment.service.ts ***!
  \*************************************************/
/*! exports provided: AppointmentService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppointmentService", function() { return AppointmentService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @capacitor/core */ "gcOT");


//import { LocalNotifications } from '@ionic-native/local-notifications/ngx';

//import { LocalNotification, LocalNotificationPendingList, Plugins, } from '@capacitor/core';
const { Storage, LocalNotifications } = _capacitor_core__WEBPACK_IMPORTED_MODULE_2__["Plugins"];
let AppointmentService = class AppointmentService {
    constructor() {
        this.appointments = {};
        //set the strage key for photos can be changed
        this.APPOINTMENT_STORAGE = "appointment";
    }
    loadAppointment() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            // create a promise that load the data from database
            const appiontmentGet = yield Storage.get({ key: this.APPOINTMENT_STORAGE });
            // set the current session value using data from DB, if it doesn't exist it wll initialize a empty array
            this.appointments = JSON.parse(appiontmentGet.value) || {};
            console.log("finished loading");
            yield LocalNotifications.requestPermission();
        });
    }
    saveValue() {
        const JSONString = JSON.stringify(this.appointments);
        // store the value in to the pair
        Storage.set({
            key: this.APPOINTMENT_STORAGE,
            value: JSONString
        });
    }
    setReminder(appointment, id) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const date = appointment["appointmentDate"].slice(0, 10);
            const time = appointment["appointmentDate"].slice(11);
            const alarm = appointment["alarmDateTime"];
            const title = appointment["title"];
            const doctor = appointment["doctor"];
            const location = appointment["location"];
            const notificationTitle = title;
            const appointmentDateTime = new Date(appointment['appointmentDate']);
            const displayTime = time.slice(0, 5);
            const displayDate = date.slice(8) + '/' + date.slice(5, 7) + '/' + date.slice(0, 4);
            const notificationText = "You have an appointment at " + displayTime + " on " + displayDate + " with " + doctor + " at " + location;
            console.log(appointment);
            console.log(id);
            const notifs = yield LocalNotifications.schedule({
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
        });
    }
};
AppointmentService.ctorParameters = () => [];
AppointmentService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], AppointmentService);



/***/ }),

/***/ "P9kn":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/saved-appointment/saved-appointment.page.html ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-button (click)=\"edit()\"><ion-icon name=\"chevron-back-outline\"></ion-icon>Back</ion-button>\n    </ion-buttons>\n    <ion-title>Appointments</ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-button color=\"danger\" (click)=\"delete()\">Delete</ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-card>\n    <ion-item>\n      <ion-label>Title:</ion-label>\n      <ion-label>{{appointment.title}}</ion-label>\n    </ion-item>\n\n    <ion-item>\n      <ion-label>Doctor:</ion-label>\n      <ion-label>{{appointment.doctor}}</ion-label>\n    </ion-item>\n\n    <ion-item lines=\"none\">\n      <ion-label>Location:</ion-label>\n      <ion-label>{{appointment.location}}</ion-label>\n    </ion-item>\n  </ion-card>\n\n  <!-- <div *ngIf='this.appointment.appointmentDate != \"Not Set\" && this.appointment.appointmentTime != \"Not Set\"'>  --> \n    <ion-card>\n      <ion-item>\n        <ion-icon name=\"calendar-clear-outline\" slot=\"start\"></ion-icon>\n        <ion-label>Date</ion-label>\n        <ion-label>{{appointment.appointmentDate  | date : 'd MMM y'}}</ion-label>\n      </ion-item>\n\n      <ion-item lines=\"none\">\n        <ion-icon name=\"time-outline\" slot=\"start\"></ion-icon>\n        <ion-label>Time</ion-label>\n        <ion-label>{{appointment.appointmentDate  | date : 'HH:mm'}}</ion-label>\n      </ion-item>\n    </ion-card>\n\n    <ion-button id='map' color=\"success\" expand=\"block\" (click)=\"openMap()\">\n      <ion-icon slot=\"start\" name=\"navigate-circle-outline\"></ion-icon>\n      Show Location on Google Map\n    </ion-button>\n\n<!--     <ion-button color=\"danger\" expand=\"block\" (click)=\"delete()\">\n      <ion-icon slot=\"start\" name=\"trash-outline\"></ion-icon>\n      <ion-text slot=\"end\">Delete</ion-text>\n    </ion-button> -->\n  <!-- </div> -->\n\n</ion-content>\n");

/***/ }),

/***/ "m6aZ":
/*!***************************************************************!*\
  !*** ./src/app/saved-appointment/saved-appointment.page.scss ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#map {\n  width: 90%;\n  margin: auto;\n  margin-top: 10%;\n}\n\n#delete {\n  margin-top: 100px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NhdmVkLWFwcG9pbnRtZW50LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFVBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtBQUNKOztBQUVBO0VBQ0ksaUJBQUE7QUFDSiIsImZpbGUiOiJzYXZlZC1hcHBvaW50bWVudC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjbWFwIHtcbiAgICB3aWR0aDogOTAlO1xuICAgIG1hcmdpbjogYXV0bztcbiAgICBtYXJnaW4tdG9wOiAxMCU7XG59XG5cbiNkZWxldGV7XG4gICAgbWFyZ2luLXRvcDogMTAwcHg7XG59XG4iXX0= */");

/***/ }),

/***/ "sWAx":
/*!*************************************************************!*\
  !*** ./src/app/saved-appointment/saved-appointment.page.ts ***!
  \*************************************************************/
/*! exports provided: SavedAppointmentPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SavedAppointmentPage", function() { return SavedAppointmentPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_saved_appointment_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./saved-appointment.page.html */ "P9kn");
/* harmony import */ var _saved_appointment_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./saved-appointment.page.scss */ "m6aZ");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @capacitor/core */ "gcOT");
/* harmony import */ var _services_appointment_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../services/appointment.service */ "Oz3r");
/* harmony import */ var _services_login_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../services/login.service */ "EFyh");






//load browser plugin

const { Browser, LocalNotifications } = _capacitor_core__WEBPACK_IMPORTED_MODULE_6__["Plugins"];


let SavedAppointmentPage = class SavedAppointmentPage {
    constructor(appointmentService, loginService, modalCtrl, alertController, fb) {
        this.appointmentService = appointmentService;
        this.loginService = loginService;
        this.modalCtrl = modalCtrl;
        this.alertController = alertController;
        this.fb = fb;
        this.appointmentList = [];
        this.form = this.fb.group({
            appointmentDate: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
            alarmDateTime: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
            title: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
            location: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
            doctor: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]
        });
    }
    ngOnInit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.appointment = this.appointmentService.appointments[this.index];
            console.log(this.appointment);
            Object.keys(this.appointmentService.appointments).forEach(key => {
                this.appointmentList.push(this.appointmentService.appointments[key]);
            });
            /*     Object.keys(this.form.value).forEach( key => {
                  if( this.appointment[key] != null ){
                    this.form.get(key).setValue(this.appointment[key]);
                    console.log(key, this.appointment[key]);
                  }
                }) */
            console.log('saved');
            console.log('Initiate appointment');
        });
    }
    openMap() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const link = "https://www.google.com/maps/search/?api=1&query=" + this.appointment["location"];
            //console.log(link)
            const encoded = encodeURI(link);
            //console.log(encoded)
            yield Browser.open({ url: encoded });
        });
    }
    edit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            /*     this.appointment = {};
                Object.keys(this.form).forEach( key => {
                  this.appointment[key] = this.form.value[key];
                })
                console.log(this.appointmentService.appointments);
                this.appointmentService.appointments[this.index] = this.appointment;
                this.appointmentService.saveValue();
                location.reload(); */
            this.modalCtrl.dismiss();
        });
    }
    delete() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            console.log("delete appointment");
            console.log(LocalNotifications.getPending());
            this.appointmentList.splice(this.index, 1);
            this.appointmentService.appointments = {};
            for (let i = 0; i < this.appointmentList.length; i++) {
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
        });
    }
};
SavedAppointmentPage.ctorParameters = () => [
    { type: _services_appointment_service__WEBPACK_IMPORTED_MODULE_7__["AppointmentService"] },
    { type: _services_login_service__WEBPACK_IMPORTED_MODULE_8__["LoginService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"] }
];
SavedAppointmentPage.propDecorators = {
    index: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }]
};
SavedAppointmentPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-saved-appointment',
        template: _raw_loader_saved_appointment_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_saved_appointment_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], SavedAppointmentPage);



/***/ })

}]);
//# sourceMappingURL=default~appointments-appointments-module~saved-appointment-saved-appointment-module-es2015.js.map