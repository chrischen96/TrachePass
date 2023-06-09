(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["appointment-reminder-appointment-reminder-module"],{

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

/***/ "bPFv":
/*!*****************************************************************************!*\
  !*** ./src/app/appointment-reminder/appointment-reminder-routing.module.ts ***!
  \*****************************************************************************/
/*! exports provided: AppointmentReminderPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppointmentReminderPageRoutingModule", function() { return AppointmentReminderPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _appointment_reminder_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./appointment-reminder.page */ "QQ9l");




const routes = [
    {
        path: '',
        component: _appointment_reminder_page__WEBPACK_IMPORTED_MODULE_3__["AppointmentReminderPage"]
    }
];
let AppointmentReminderPageRoutingModule = class AppointmentReminderPageRoutingModule {
};
AppointmentReminderPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], AppointmentReminderPageRoutingModule);



/***/ }),

/***/ "piIl":
/*!*********************************************************************!*\
  !*** ./src/app/appointment-reminder/appointment-reminder.module.ts ***!
  \*********************************************************************/
/*! exports provided: AppointmentReminderPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppointmentReminderPageModule", function() { return AppointmentReminderPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _appointment_reminder_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./appointment-reminder-routing.module */ "bPFv");
/* harmony import */ var _appointment_reminder_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./appointment-reminder.page */ "QQ9l");



// must import this two module in the form page and add to @NgModule




let AppointmentReminderPageModule = class AppointmentReminderPageModule {
};
AppointmentReminderPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _appointment_reminder_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppointmentReminderPageRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]
        ],
        declarations: [_appointment_reminder_page__WEBPACK_IMPORTED_MODULE_6__["AppointmentReminderPage"]]
    })
], AppointmentReminderPageModule);



/***/ })

}]);
//# sourceMappingURL=appointment-reminder-appointment-reminder-module-es2015.js.map