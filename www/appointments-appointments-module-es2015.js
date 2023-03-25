(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["appointments-appointments-module"],{

/***/ "/pg6":
/*!*************************************************************!*\
  !*** ./src/app/appointments/appointments-routing.module.ts ***!
  \*************************************************************/
/*! exports provided: AppointmentsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppointmentsPageRoutingModule", function() { return AppointmentsPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _appointments_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./appointments.page */ "CRB+");




const routes = [
    {
        path: '',
        component: _appointments_page__WEBPACK_IMPORTED_MODULE_3__["AppointmentsPage"]
    }
];
let AppointmentsPageRoutingModule = class AppointmentsPageRoutingModule {
};
AppointmentsPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], AppointmentsPageRoutingModule);



/***/ }),

/***/ "CRB+":
/*!***************************************************!*\
  !*** ./src/app/appointments/appointments.page.ts ***!
  \***************************************************/
/*! exports provided: AppointmentsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppointmentsPage", function() { return AppointmentsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_appointments_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./appointments.page.html */ "vTnu");
/* harmony import */ var _appointments_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./appointments.page.scss */ "w0YC");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _appointment_reminder_appointment_reminder_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../appointment-reminder/appointment-reminder.page */ "QQ9l");
/* harmony import */ var _saved_appointment_saved_appointment_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../saved-appointment/saved-appointment.page */ "sWAx");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _services_appointment_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../services/appointment.service */ "Oz3r");








let AppointmentsPage = class AppointmentsPage {
    constructor(modalCtrl, appointmentService) {
        this.modalCtrl = modalCtrl;
        this.appointmentService = appointmentService;
        this.appointments = {};
        this.appointmentList = [];
    }
    ngOnInit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.appointmentService.loadAppointment();
            this.appointments = this.appointmentService.appointments;
            if (this.appointments != null && this.appointments != {}) {
                Object.keys(this.appointments).forEach(key => {
                    this.appointmentList.push(this.appointments[key]);
                });
            }
            console.log('appointments');
        });
    }
    edit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const modal = yield this.modalCtrl.create({
                component: _appointment_reminder_appointment_reminder_page__WEBPACK_IMPORTED_MODULE_4__["AppointmentReminderPage"],
                backdropDismiss: false,
                componentProps: {
                    isModal: true
                },
            });
            modal.present();
        });
    }
    choose(i) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const modal = yield this.modalCtrl.create({
                component: _saved_appointment_saved_appointment_page__WEBPACK_IMPORTED_MODULE_5__["SavedAppointmentPage"],
                backdropDismiss: false,
                componentProps: {
                    index: i,
                },
            });
            modal.present();
        });
    }
};
AppointmentsPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ModalController"] },
    { type: _services_appointment_service__WEBPACK_IMPORTED_MODULE_7__["AppointmentService"] }
];
AppointmentsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-appointments',
        template: _raw_loader_appointments_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_appointments_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], AppointmentsPage);



/***/ }),

/***/ "MCT3":
/*!*****************************************************!*\
  !*** ./src/app/appointments/appointments.module.ts ***!
  \*****************************************************/
/*! exports provided: AppointmentsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppointmentsPageModule", function() { return AppointmentsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _appointments_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./appointments-routing.module */ "/pg6");
/* harmony import */ var _appointments_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./appointments.page */ "CRB+");







let AppointmentsPageModule = class AppointmentsPageModule {
};
AppointmentsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _appointments_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppointmentsPageRoutingModule"]
        ],
        declarations: [_appointments_page__WEBPACK_IMPORTED_MODULE_6__["AppointmentsPage"]]
    })
], AppointmentsPageModule);



/***/ }),

/***/ "vTnu":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/appointments/appointments.page.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"home\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>Appointments</ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-button (click)=\"edit()\">Add</ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-card *ngIf=\"appointmentList.length == 0\" style=\"height: auto;\">\n    <ion-card-header>\n      <ion-card-title>No Appointment</ion-card-title>\n    </ion-card-header>\n  </ion-card>\n\n  <ion-card *ngFor=\"let appointment of appointmentList; let i = index\" (click)=choose(i)>\n\n    <ion-item lines=\"none\">\n      <ion-label style=\"font-weight: bold; color:rebeccapurple\">\n        {{appointment.appointmentDate | date : 'dd MMM y, HH:mm, EEEE'}}\n      </ion-label>\n    </ion-item>\n\n  </ion-card>\n</ion-content>\n");

/***/ }),

/***/ "w0YC":
/*!*****************************************************!*\
  !*** ./src/app/appointments/appointments.page.scss ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-card {\n  position: relative;\n  height: 56px;\n}\n\nion-item {\n  position: absolute;\n  top: 50%;\n  transform: translate(0, -50%);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2FwcG9pbnRtZW50cy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQkFBQTtFQUNBLFlBQUE7QUFDSjs7QUFFQTtFQUNJLGtCQUFBO0VBQ0EsUUFBQTtFQUVBLDZCQUFBO0FBQUoiLCJmaWxlIjoiYXBwb2ludG1lbnRzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jYXJke1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBoZWlnaHQ6IDU2cHg7XG59XG5cbmlvbi1pdGVte1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDUwJTtcbiAgICAvL2xlZnQ6IDUwJTtcbiAgICB0cmFuc2Zvcm06dHJhbnNsYXRlKDAsLTUwJSk7XG59Il19 */");

/***/ })

}]);
//# sourceMappingURL=appointments-appointments-module-es2015.js.map