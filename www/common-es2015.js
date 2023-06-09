(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"],{

/***/ "0/6H":
/*!*********************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/button-active-a6787d69.js ***!
  \*********************************************************************/
/*! exports provided: c */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return createButtonActiveGesture; });
/* harmony import */ var _index_e806d1f6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index-e806d1f6.js */ "A36C");
/* harmony import */ var _index_f49d994d_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index-f49d994d.js */ "iWo5");
/* harmony import */ var _haptic_27b3f981_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./haptic-27b3f981.js */ "qULd");




const createButtonActiveGesture = (el, isButton) => {
  let currentTouchedButton;
  let initialTouchedButton;
  const activateButtonAtPoint = (x, y, hapticFeedbackFn) => {
    if (typeof document === 'undefined') {
      return;
    }
    const target = document.elementFromPoint(x, y);
    if (!target || !isButton(target)) {
      clearActiveButton();
      return;
    }
    if (target !== currentTouchedButton) {
      clearActiveButton();
      setActiveButton(target, hapticFeedbackFn);
    }
  };
  const setActiveButton = (button, hapticFeedbackFn) => {
    currentTouchedButton = button;
    if (!initialTouchedButton) {
      initialTouchedButton = currentTouchedButton;
    }
    const buttonToModify = currentTouchedButton;
    Object(_index_e806d1f6_js__WEBPACK_IMPORTED_MODULE_0__["c"])(() => buttonToModify.classList.add('ion-activated'));
    hapticFeedbackFn();
  };
  const clearActiveButton = (dispatchClick = false) => {
    if (!currentTouchedButton) {
      return;
    }
    const buttonToModify = currentTouchedButton;
    Object(_index_e806d1f6_js__WEBPACK_IMPORTED_MODULE_0__["c"])(() => buttonToModify.classList.remove('ion-activated'));
    /**
     * Clicking on one button, but releasing on another button
     * does not dispatch a click event in browsers, so we
     * need to do it manually here. Some browsers will
     * dispatch a click if clicking on one button, dragging over
     * another button, and releasing on the original button. In that
     * case, we need to make sure we do not cause a double click there.
     */
    if (dispatchClick && initialTouchedButton !== currentTouchedButton) {
      currentTouchedButton.click();
    }
    currentTouchedButton = undefined;
  };
  return Object(_index_f49d994d_js__WEBPACK_IMPORTED_MODULE_1__["createGesture"])({
    el,
    gestureName: 'buttonActiveDrag',
    threshold: 0,
    onStart: ev => activateButtonAtPoint(ev.currentX, ev.currentY, _haptic_27b3f981_js__WEBPACK_IMPORTED_MODULE_2__["a"]),
    onMove: ev => activateButtonAtPoint(ev.currentX, ev.currentY, _haptic_27b3f981_js__WEBPACK_IMPORTED_MODULE_2__["b"]),
    onEnd: () => {
      clearActiveButton(true);
      Object(_haptic_27b3f981_js__WEBPACK_IMPORTED_MODULE_2__["h"])();
      initialTouchedButton = undefined;
    }
  });
};




/***/ }),

/***/ "65gq":
/*!*********************************************************!*\
  !*** ./src/app/edit-pathology/edit-pathology.page.scss ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-item {\n  margin-top: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VkaXQtcGF0aG9sb2d5LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGVBQUE7QUFDSiIsImZpbGUiOiJlZGl0LXBhdGhvbG9neS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24taXRlbXtcbiAgICBtYXJnaW4tdG9wOiA1cHg7XG59Il19 */");

/***/ }),

/***/ "6qsm":
/*!***************************************************************************!*\
  !*** ./src/app/edit-medical-conditions/edit-medical-conditions.page.scss ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJlZGl0LW1lZGljYWwtY29uZGl0aW9ucy5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ "74mu":
/*!*************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/theme-ff3fc52f.js ***!
  \*************************************************************/
/*! exports provided: c, g, h, o */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return createColorClasses; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return getClassMap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return hostContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "o", function() { return openURL; });
const hostContext = (selector, el) => {
  return el.closest(selector) !== null;
};
/**
 * Create the mode and color classes for the component based on the classes passed in
 */
const createColorClasses = (color, cssClassMap) => {
  return (typeof color === 'string' && color.length > 0) ? Object.assign({ 'ion-color': true, [`ion-color-${color}`]: true }, cssClassMap) : cssClassMap;
};
const getClassList = (classes) => {
  if (classes !== undefined) {
    const array = Array.isArray(classes) ? classes : classes.split(' ');
    return array
      .filter(c => c != null)
      .map(c => c.trim())
      .filter(c => c !== '');
  }
  return [];
};
const getClassMap = (classes) => {
  const map = {};
  getClassList(classes).forEach(c => map[c] = true);
  return map;
};
const SCHEME = /^[a-z][a-z0-9+\-.]*:/;
const openURL = async (url, ev, direction, animation) => {
  if (url != null && url[0] !== '#' && !SCHEME.test(url)) {
    const router = document.querySelector('ion-router');
    if (router) {
      if (ev != null) {
        ev.preventDefault();
      }
      return router.push(url, direction, animation);
    }
  }
  return false;
};




/***/ }),

/***/ "8x4H":
/*!***********************************************************************!*\
  !*** ./src/app/edit-operative-history/edit-operative-history.page.ts ***!
  \***********************************************************************/
/*! exports provided: EditOperativeHistoryPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditOperativeHistoryPage", function() { return EditOperativeHistoryPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_edit_operative_history_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./edit-operative-history.page.html */ "yr4Q");
/* harmony import */ var _edit_operative_history_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./edit-operative-history.page.scss */ "wK3v");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _services_user_data_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/user-data.service */ "DPk/");
/* harmony import */ var _services_photo_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../services/photo.service */ "6/gD");
/* harmony import */ var ngx_ionic_image_viewer__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-ionic-image-viewer */ "6g0+");









let EditOperativeHistoryPage = class EditOperativeHistoryPage {
    constructor(modalCtrl, fb, userDataService, photoService) {
        this.modalCtrl = modalCtrl;
        this.fb = fb;
        this.userDataService = userDataService;
        this.photoService = photoService;
        this.history = {};
        this.tuple = [];
        this.operativeHistoryString = '';
        this.operativeHistoryJSON = {};
        this.photos = [];
        this.histories = [];
        this.form = this.fb.group({
            date: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
            type: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
            details: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
        });
        this.history['photos'] = '';
    }
    ngOnInit() {
        this.operativeHistoryString = this.userDataService.medicalRecordValue['operativeHistory'];
        if (this.operativeHistoryString != '' && this.operativeHistoryString != null) {
            this.operativeHistoryJSON = JSON.parse(this.operativeHistoryString);
        }
    }
    addPhotoToGallery() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.history['photos'] = yield this.photoService.addNewToGallery(this.photos);
            this.photos = JSON.parse(this.history['photos']);
        });
    }
    dismiss() {
        this.modalCtrl.dismiss();
    }
    save() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            Object.keys(this.form.controls).forEach(key => {
                this.history[key] = this.form.value[key];
                console.log(key, this.history[key]);
            });
            this.histories.push(this.history);
            Object.keys(this.operativeHistoryJSON).forEach(key => {
                this.histories.push(this.operativeHistoryJSON[key]);
                console.log(this.histories);
            });
            for (let i = 0; i < this.histories.length; i++) {
                for (let j = i + 1; j < this.histories.length; j++) {
                    if (this.histories[i].date < this.histories[j].date) {
                        let history = this.histories[i];
                        this.histories[i] = this.histories[j];
                        this.histories[j] = history;
                    }
                }
            }
            for (let i = 0; i < this.histories.length; i++) {
                this.operativeHistoryJSON[i] = this.histories[i];
            } // order histories by date
            this.operativeHistoryString = JSON.stringify(this.operativeHistoryJSON);
            this.userDataService.medicalRecordValue['operativeHistory'] = this.operativeHistoryString;
            // construct a JSON, then stringify it to store
            console.log(this.userDataService.medicalRecordValue['operativeHistory']);
            this.userDataService.saveMedicalRecord();
            location.reload();
        });
    }
    openViewer(srcPath) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const modal = yield this.modalCtrl.create({
                component: ngx_ionic_image_viewer__WEBPACK_IMPORTED_MODULE_8__["ViewerModalComponent"],
                componentProps: {
                    src: srcPath
                },
                cssClass: 'ion-img-viewer',
                keyboardClose: true,
                showBackdrop: true
            });
            yield modal.present();
        });
    }
};
EditOperativeHistoryPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"] },
    { type: _services_user_data_service__WEBPACK_IMPORTED_MODULE_6__["UserDataService"] },
    { type: _services_photo_service__WEBPACK_IMPORTED_MODULE_7__["PhotoService"] }
];
EditOperativeHistoryPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-edit-operative-history',
        template: _raw_loader_edit_operative_history_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_edit_operative_history_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], EditOperativeHistoryPage);



/***/ }),

/***/ "GaT9":
/*!***************************************************!*\
  !*** ./src/app/open-version/open-version.page.ts ***!
  \***************************************************/
/*! exports provided: OpenVersionPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OpenVersionPage", function() { return OpenVersionPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_open_version_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./open-version.page.html */ "SU+U");
/* harmony import */ var _open_version_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./open-version.page.scss */ "tXud");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");





let OpenVersionPage = class OpenVersionPage {
    constructor(modalCtrl, alertController) {
        this.modalCtrl = modalCtrl;
        this.alertController = alertController;
        this.histories = [];
    }
    ngOnInit() {
        console.log(this.value);
        const operativeHistoryString = this.value['operativeHistory'];
        console.log(operativeHistoryString);
        if (operativeHistoryString != '' && operativeHistoryString != null) {
            const operativeHistoryJSON = JSON.parse(operativeHistoryString);
            console.log(operativeHistoryJSON);
            Object.keys(operativeHistoryJSON).forEach(key => {
                this.histories.push(operativeHistoryJSON[key]);
                console.log(this.histories);
            });
        }
    }
    warningRestore() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header: 'Confirm Restore',
                message: 'The record will be replaced by this backup.',
                buttons: [
                    {
                        text: 'Cancel',
                        role: 'cancel',
                        cssClass: 'secondary',
                        handler: () => {
                            console.log('Confirm Cancel: blah');
                        }
                    }, {
                        text: 'Confirm',
                        handler: () => {
                            this.replace();
                        }
                    }
                ]
            });
            yield alert.present();
        });
    }
    replace() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.modalCtrl.dismiss({
                'restoreValues': true
            });
        });
    }
    dismiss() {
        this.modalCtrl.dismiss({
            'restoreValues': false
        });
    }
};
OpenVersionPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"] }
];
OpenVersionPage.propDecorators = {
    date: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    type: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    value: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }]
};
OpenVersionPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-open-version',
        template: _raw_loader_open_version_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_open_version_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], OpenVersionPage);



/***/ }),

/***/ "L1bm":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/edit-pathology/edit-pathology.page.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-button color=\"danger\" (click)=\"dismiss()\">Cancel</ion-button>\n    </ion-buttons>\n    <ion-title>Edit</ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-button (click)=\"save()\">Done</ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <form [formGroup]=\"form\">\n    <ion-list>\n      <ion-list-header lines=\"full\">\n        <ion-label>\n          Reason for Tracheostomy\n        </ion-label>\n      </ion-list-header>\n\n      <ion-item lines='full'>\n        <ion-textarea rows=\"6\"\n        placeholder=\"Enter reasons\"\n        formControlName=\"pathology\"></ion-textarea>\n      </ion-item>\n    </ion-list>\n\n    <ion-list>\n      <ion-list-header lines=\"full\">\n        <ion-label>\n          Airway Condition\n        </ion-label>\n      </ion-list-header>\n\n      <ion-item>\n        <ion-label>Is Upper Airway Intubatable?</ion-label>\n        <ion-toggle formControlName=\"intubatation\" (ionChange)=\"intubatation()\"></ion-toggle>\n      </ion-item>\n\n      <div *ngIf=\"this.form.value.intubatation==true\">\n        <ion-item>\n          <ion-label>Airway Grade</ion-label>\n          <ion-select formControlName='airwayGrade' interface=\"action-sheet\">\n            <ion-select-option value=\"1\">1</ion-select-option>\n            <ion-select-option value=\"2\">2</ion-select-option>\n            <ion-select-option value=\"3\">3</ion-select-option>\n            <ion-select-option value=\"4\">4</ion-select-option>\n          </ion-select>\n        </ion-item>\n  \n        <ion-item>\n          <ion-label>Endotracheal tube size</ion-label>\n          <ion-select formControlName='tubeSize'>\n            <div *ngFor=\"let tubeSize of tubeSizeList\">\n              <ion-select-option  value=\"{{tubeSize}}\">{{tubeSize}}</ion-select-option>\n            </div> \n          </ion-select>\n        </ion-item>\n  \n        <ion-item>\n          <ion-label position=\"stacked\" >Details</ion-label>\n          <ion-textarea rows=\"4\"\n          placeholder=\"Enter details\"\n          formControlName=\"details\"></ion-textarea>\n        </ion-item>\n      </div>\n    </ion-list>\n  </form>\n</ion-content>\n");

/***/ }),

/***/ "QQ9l":
/*!*******************************************************************!*\
  !*** ./src/app/appointment-reminder/appointment-reminder.page.ts ***!
  \*******************************************************************/
/*! exports provided: AppointmentReminderPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppointmentReminderPage", function() { return AppointmentReminderPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_appointment_reminder_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./appointment-reminder.page.html */ "r8bU");
/* harmony import */ var _appointment_reminder_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./appointment-reminder.page.scss */ "txDb");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @capacitor/core */ "gcOT");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _services_appointment_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../services/appointment.service */ "Oz3r");





//load browser plugin

const { Browser, LocalNotifications } = _capacitor_core__WEBPACK_IMPORTED_MODULE_5__["Plugins"];


let AppointmentReminderPage = class AppointmentReminderPage {
    constructor(formBuilder, appointmentService, modalCtrl) {
        this.formBuilder = formBuilder;
        this.appointmentService = appointmentService;
        this.modalCtrl = modalCtrl;
        this.today = new Date().toISOString();
        this.appointment = {};
        this.appointmentList = [];
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
    save() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            Object.keys(this.form.value).forEach(keys => {
                this.appointment[keys] = this.form.value[keys];
            });
            console.log(this.appointment['appointmentDate']);
            this.appointmentList.push(this.appointment);
            Object.keys(this.appointmentService.appointments).forEach(key => {
                this.appointmentList.push(this.appointmentService.appointments[key]);
            });
            const index = this.appointmentList.length;
            console.log(LocalNotifications.getPending());
            for (let i = 0; i < this.appointmentList.length; i++) {
                for (let j = i + 1; j < this.appointmentList.length; j++) {
                    if (this.appointmentList[i].appointmentDate < this.appointmentList[j].appointmentDate) {
                        let history = this.appointmentList[i];
                        this.appointmentList[i] = this.appointmentList[j];
                        this.appointmentList[j] = history;
                    }
                }
            }
            for (let i = 0; i < this.appointmentList.length; i++) {
                this.appointmentService.appointments[i] = this.appointmentList[i];
            }
            this.appointmentService.saveValue();
            this.isAppointmentSetted = true;
            this.modalCtrl.dismiss();
            yield this.appointmentService.setReminder(this.appointment, index);
            location.reload();
        });
    }
    dismiss() {
        this.modalCtrl.dismiss();
    }
};
AppointmentReminderPage.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"] },
    { type: _services_appointment_service__WEBPACK_IMPORTED_MODULE_7__["AppointmentService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"] }
];
AppointmentReminderPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-appointment-reminder',
        template: _raw_loader_appointment_reminder_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_appointment_reminder_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], AppointmentReminderPage);



/***/ }),

/***/ "SU+U":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/open-version/open-version.page.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-button (click)=\"dismiss()\">Back</ion-button>\n    </ion-buttons>\n    <ion-title style=\"padding: 0px 80px;\">{{this.date | date:'YYYY/M/d, h:mm a'}}</ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-button (click)=\"warningRestore()\">Restore</ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div *ngIf=\"this.type == 'User Profile'\" class=\"userProfile\">\n    <ion-list>\n      <ion-list-header lines=\"full\">\n        <ion-label>\n          Patient Details\n        </ion-label>\n        <ion-label></ion-label>\n      </ion-list-header>\n\n      <ion-item>\n        <ion-label>Name</ion-label>\n        <ion-label>{{this.value.name || 'Not Set'}}</ion-label>\n      </ion-item>\n\n      <ion-item>\n        <ion-label>Date of Birth</ion-label>\n        <ion-label>{{(this.value.birthDate  | date : 'd MMM y') || 'Not Set'}}</ion-label>\n      </ion-item>\n\n      <ion-item>\n        <ion-label>Sex</ion-label>\n        <ion-label>{{this.value.sex}}</ion-label>\n      </ion-item>\n\n      <ion-item>\n        <ion-label>NHS Number</ion-label>\n        <ion-label>{{this.value.nhsNumber||'Not Set'}}</ion-label>\n      </ion-item>\n    </ion-list>\n\n    <ion-list class=\"ion-no-margin\">\n      <ion-list-header lines=\"full\">\n        <ion-label>\n          Caregiver\n        </ion-label>\n        <ion-label></ion-label>\n      </ion-list-header>\n\n      <ion-item>\n        <ion-label>{{this.value.relation1 || 'Not Set'}}</ion-label>\n        <ion-label>{{this.value.r1Name || 'Not Set'}}</ion-label>\n      </ion-item>\n\n      <ion-item *ngIf=\"this.value.relation2 != null || this.value.r2Name != null\">\n        <ion-label>{{this.value.relation2}}</ion-label>\n        <ion-label>{{this.value.r2Name}}</ion-label>\n      </ion-item>\n    </ion-list>\n\n    <ion-list class=\"ion-no-margin\">\n      <ion-list-header lines=\"full\">\n        <ion-label>\n          Hospital Details\n        </ion-label>\n        <ion-label></ion-label>\n      </ion-list-header>\n\n      <ion-item>\n        <ion-label>Consultant</ion-label>\n        <ion-label>{{this.value.consultant || 'Not Set'}}</ion-label>\n      </ion-item>\n\n      <ion-item>\n        <ion-label>Trust</ion-label>\n        <ion-label>{{this.value.trust || 'Not Set'}}</ion-label>\n      </ion-item>\n\n      <ion-item>\n        <ion-label>Emergency Contact</ion-label>\n        <ion-label>{{this.value.emergencyContact || 'Not Set'}}</ion-label>\n      </ion-item>\n    </ion-list>\n  </div>\n\n  <div *ngIf=\"this.type == 'Medical Record'\">\n    <ion-list class=\"ion-no-margin\">\n      <ion-list-header lines=\"full\">\n        <ion-label>\n          Tracheostomy Details\n        </ion-label>\n        <ion-label></ion-label>\n      </ion-list-header>\n\n      <ion-item>\n        <ion-label>Tube Type</ion-label>\n        <ion-label>{{this.value.tubeType || 'Not Set'}}</ion-label>\n      </ion-item>\n\n      <ion-item>\n        <ion-label>Subtype</ion-label>\n        <ion-label>{{this.value.subType || 'Not Set'}}</ion-label>\n      </ion-item>\n\n      <ion-item>\n        <ion-label>Size - ID (mm)</ion-label>\n        <ion-label>{{this.value.sizeID || 'Not Set'}}</ion-label>\n      </ion-item>\n\n      <ion-item>\n        <ion-label>Shaft Length (mm)</ion-label>\n        <ion-label>{{this.value.shaftLength || 'Not Set'}}</ion-label>\n      </ion-item>\n\n      <ion-item>\n        <ion-label>Suction Length</ion-label>\n        <ion-label>{{this.value.suctionLength || 'Not Set'}}</ion-label>\n      </ion-item>\n    </ion-list>\n\n    <ion-list class=\"ion-no-margin\">\n      <ion-list-header lines=\"full\">\n        <ion-label>\n          Medical Conditions\n        </ion-label>\n      </ion-list-header>\n\n      <ion-item>\n        <ion-label>\n          <h2>Allergies</h2>\n          <p> {{this.value.allergies || 'Not Set'}} </p>\n        </ion-label>\n      </ion-item>\n\n      <ion-item>\n        <ion-label>\n          <h2>Medications</h2>\n          <p> {{this.value.medications || 'Not Set'}} </p>\n        </ion-label>\n      </ion-item>\n\n      <ion-item>\n        <ion-label>\n          <h2>Other Conditions</h2>\n          <p> {{this.value.otherMedicalConditions || 'Not Set'}} </p>\n        </ion-label>\n      </ion-item>\n    </ion-list>\n\n    <ion-list class=\"ion-no-margin\">\n      <ion-list-header lines=\"full\">\n        <ion-label>\n          Airway Pathology\n        </ion-label>\n      </ion-list-header>\n\n      <ion-item>\n        <ion-label>\n          <h2>Pathology</h2>\n          <p> {{this.value.pathology || 'Not Set'}} </p>\n        </ion-label>\n      </ion-item>\n\n      <ion-item>\n        <ion-label>\n          <h2>Intubatation</h2>\n          <p> {{this.value.intubatation || 'Not Set'}} </p>\n        </ion-label>\n      </ion-item>\n\n      <div *ngIf=\"this.value.intubatation==true\"></div>\n      <ion-item>\n        <ion-label>\n          <h2>Airway Grade:</h2>\n          <p> {{this.value.airwayGrade || 'Not Set'}} </p>\n        </ion-label>\n      </ion-item>\n      <ion-item>\n        <ion-label>\n          <h2>Endotracheal Tube Size:</h2>\n          <p> {{this.value.tubeSize || 'Not Set'}} </p>\n        </ion-label>\n      </ion-item>\n      <ion-item>\n        <ion-label>\n          <h2>Details:</h2>\n          <p> {{this.value.details || 'Not Set'}} </p>\n        </ion-label>\n      </ion-item>\n    </ion-list>\n\n    <ion-list class=\"ion-no-margin\" *ngIf=\"this.value.operativeHistory != null\">\n      <ion-list-header lines=\"full\">\n        <ion-label>\n          Operative History\n        </ion-label>\n      </ion-list-header>\n\n      <ion-item *ngFor=\"let history of histories\">\n        <ion-label>\n          <h2>{{history.date || 'Not Set'}}</h2>\n          <h3>{{history.type || 'Not Set'}}</h3>\n          <p>{{history.details || 'Not Set'}}</p>\n        </ion-label>\n      </ion-item>\n    </ion-list>\n  </div>\n</ion-content>\n");

/***/ }),

/***/ "TR9v":
/*!***********************************************************************!*\
  !*** ./src/app/view-operative-history/view-operative-history.page.ts ***!
  \***********************************************************************/
/*! exports provided: ViewOperativeHistoryPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewOperativeHistoryPage", function() { return ViewOperativeHistoryPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_view_operative_history_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./view-operative-history.page.html */ "hBli");
/* harmony import */ var _view_operative_history_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./view-operative-history.page.scss */ "oZqj");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _services_user_data_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/user-data.service */ "DPk/");
/* harmony import */ var _services_photo_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../services/photo.service */ "6/gD");
/* harmony import */ var ngx_ionic_image_viewer__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-ionic-image-viewer */ "6g0+");









let ViewOperativeHistoryPage = class ViewOperativeHistoryPage {
    constructor(modalCtrl, fb, userDataService, photoService) {
        this.modalCtrl = modalCtrl;
        this.fb = fb;
        this.userDataService = userDataService;
        this.photoService = photoService;
        this.history = {};
        this.tuple = [];
        this.operativeHistoryString = '';
        this.operativeHistoryJSON = {};
        this.photos = [];
        this.form = this.fb.group({
            date: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
            type: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
            details: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
        });
    }
    ngOnInit() {
        this.operativeHistoryString = this.userDataService.medicalRecordValue['operativeHistory'];
        if (this.operativeHistoryString != '' && this.operativeHistoryString != null) {
            this.operativeHistoryJSON = JSON.parse(this.operativeHistoryString);
        }
        ;
        this.history = this.operativeHistoryJSON[this.index];
        this.form.get('date').setValue(this.history['date']);
        this.form.get('type').setValue(this.history['type']);
        this.form.get('details').setValue(this.history['details']);
        if (this.history['photos'] != "") {
            this.photos = JSON.parse(this.history['photos']);
        }
        this.photoService.loadSaved(this.photos);
    }
    addPhotoToGallery() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.history['photos'] = yield this.photoService.addNewToGallery(this.photos);
            this.photos = JSON.parse(this.history['photos']);
        });
    }
    openViewer(srcPath) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const modal = yield this.modalCtrl.create({
                component: ngx_ionic_image_viewer__WEBPACK_IMPORTED_MODULE_8__["ViewerModalComponent"],
                componentProps: {
                    src: srcPath
                },
                cssClass: 'ion-img-viewer',
                keyboardClose: true,
                showBackdrop: true
            });
            yield modal.present();
        });
    }
    save() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            Object.keys(this.form.controls).forEach(key => {
                this.history[key] = this.form.value[key];
                console.log(key, this.history[key]);
            });
            console.log('photos', this.history['photos']);
            this.operativeHistoryJSON[this.index] = this.history;
            this.operativeHistoryString = JSON.stringify(this.operativeHistoryJSON);
            this.userDataService.medicalRecordValue['operativeHistory'] = this.operativeHistoryString;
            // construct a JSON, then stringify it to store
            console.log(this.userDataService.medicalRecordValue['operativeHistory']);
            this.userDataService.saveMedicalRecord();
            location.reload();
        });
    }
    dismiss() {
        this.modalCtrl.dismiss();
    }
};
ViewOperativeHistoryPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"] },
    { type: _services_user_data_service__WEBPACK_IMPORTED_MODULE_6__["UserDataService"] },
    { type: _services_photo_service__WEBPACK_IMPORTED_MODULE_7__["PhotoService"] }
];
ViewOperativeHistoryPage.propDecorators = {
    index: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }]
};
ViewOperativeHistoryPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-view-operative-history',
        template: _raw_loader_view_operative_history_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_view_operative_history_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], ViewOperativeHistoryPage);



/***/ }),

/***/ "ZaV5":
/*!**************************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/framework-delegate-4584ab5a.js ***!
  \**************************************************************************/
/*! exports provided: a, d */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return attachComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return detachComponent; });
const attachComponent = async (delegate, container, component, cssClasses, componentProps) => {
  if (delegate) {
    return delegate.attachViewToDom(container, component, componentProps, cssClasses);
  }
  if (typeof component !== 'string' && !(component instanceof HTMLElement)) {
    throw new Error('framework delegate is missing');
  }
  const el = (typeof component === 'string')
    ? container.ownerDocument && container.ownerDocument.createElement(component)
    : component;
  if (cssClasses) {
    cssClasses.forEach(c => el.classList.add(c));
  }
  if (componentProps) {
    Object.assign(el, componentProps);
  }
  container.appendChild(el);
  if (el.componentOnReady) {
    await el.componentOnReady();
  }
  return el;
};
const detachComponent = (delegate, element) => {
  if (element) {
    if (delegate) {
      const container = element.parentElement;
      return delegate.removeViewFromDom(container, element);
    }
    element.remove();
  }
  return Promise.resolve();
};




/***/ }),

/***/ "h3R7":
/*!***********************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/spinner-configs-cd7845af.js ***!
  \***********************************************************************/
/*! exports provided: S */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "S", function() { return SPINNERS; });
const spinners = {
  'bubbles': {
    dur: 1000,
    circles: 9,
    fn: (dur, index, total) => {
      const animationDelay = `${(dur * index / total) - dur}ms`;
      const angle = 2 * Math.PI * index / total;
      return {
        r: 5,
        style: {
          'top': `${9 * Math.sin(angle)}px`,
          'left': `${9 * Math.cos(angle)}px`,
          'animation-delay': animationDelay,
        }
      };
    }
  },
  'circles': {
    dur: 1000,
    circles: 8,
    fn: (dur, index, total) => {
      const step = index / total;
      const animationDelay = `${(dur * step) - dur}ms`;
      const angle = 2 * Math.PI * step;
      return {
        r: 5,
        style: {
          'top': `${9 * Math.sin(angle)}px`,
          'left': `${9 * Math.cos(angle)}px`,
          'animation-delay': animationDelay,
        }
      };
    }
  },
  'circular': {
    dur: 1400,
    elmDuration: true,
    circles: 1,
    fn: () => {
      return {
        r: 20,
        cx: 48,
        cy: 48,
        fill: 'none',
        viewBox: '24 24 48 48',
        transform: 'translate(0,0)',
        style: {}
      };
    }
  },
  'crescent': {
    dur: 750,
    circles: 1,
    fn: () => {
      return {
        r: 26,
        style: {}
      };
    }
  },
  'dots': {
    dur: 750,
    circles: 3,
    fn: (_, index) => {
      const animationDelay = -(110 * index) + 'ms';
      return {
        r: 6,
        style: {
          'left': `${9 - (9 * index)}px`,
          'animation-delay': animationDelay,
        }
      };
    }
  },
  'lines': {
    dur: 1000,
    lines: 12,
    fn: (dur, index, total) => {
      const transform = `rotate(${30 * index + (index < 6 ? 180 : -180)}deg)`;
      const animationDelay = `${(dur * index / total) - dur}ms`;
      return {
        y1: 17,
        y2: 29,
        style: {
          'transform': transform,
          'animation-delay': animationDelay,
        }
      };
    }
  },
  'lines-small': {
    dur: 1000,
    lines: 12,
    fn: (dur, index, total) => {
      const transform = `rotate(${30 * index + (index < 6 ? 180 : -180)}deg)`;
      const animationDelay = `${(dur * index / total) - dur}ms`;
      return {
        y1: 12,
        y2: 20,
        style: {
          'transform': transform,
          'animation-delay': animationDelay,
        }
      };
    }
  }
};
const SPINNERS = spinners;




/***/ }),

/***/ "hBli":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/view-operative-history/view-operative-history.page.html ***!
  \***************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-button (click)=\"dismiss()\"><ion-icon name=\"chevron-back-outline\"></ion-icon>Back</ion-button>\n    </ion-buttons>\n    <ion-title>Edit and View</ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-button (click)=\"save()\">Save</ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <form [formGroup]=\"form\">\n    <ion-list>\n      <ion-list-header lines=\"full\">\n        <ion-label>\n          Operative History\n        </ion-label>\n      </ion-list-header>\n\n      <ion-item>\n        <ion-label>Date</ion-label>\n        <ion-datetime placeholder=\"Select Date\"\n        display-format=\"D MMM YYYY\" \n        picker-format=\"D MMM YYYY\" \n        formControlName=\"date\" \n        style=\"color: dodgerblue;\"></ion-datetime>\n      </ion-item>\n\n      <ion-item>\n        <ion-label>Type</ion-label>\n        <ion-input \n          formControlName=\"type\" \n          placeholder=\"Operation Type\"\n          style=\"color: dodgerblue; text-align: end;\">\n        </ion-input>\n      </ion-item>\n\n      <ion-item lines='full'>\n        <ion-label position=\"stacked\">Details</ion-label>\n        <ion-textarea rows=\"5\" formControlName=\"details\"></ion-textarea>\n      </ion-item>\n    </ion-list>\n  </form>\n\n  <ion-item lines='full' (click)=\"addPhotoToGallery()\">\n    <ion-icon name=\"add-circle-outline\" style=\"color:dodgerblue;\"></ion-icon>\n    Add pictures\n  </ion-item>\n\n  <ion-grid>\n    <ion-row>\n    <ion-col size=\"6\"\n      *ngFor=\"let photo of photos; index as position;\">\n        <ion-img [src]=\"photo.webviewPath\" (click)=\"openViewer(photo.webviewPath)\"></ion-img>\n    </ion-col>\n    </ion-row>\n  </ion-grid>\n\n</ion-content>");

/***/ }),

/***/ "nuTe":
/*!*************************************************************************!*\
  !*** ./src/app/edit-medical-conditions/edit-medical-conditions.page.ts ***!
  \*************************************************************************/
/*! exports provided: EditMedicalConditionsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditMedicalConditionsPage", function() { return EditMedicalConditionsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_edit_medical_conditions_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./edit-medical-conditions.page.html */ "vpZA");
/* harmony import */ var _edit_medical_conditions_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./edit-medical-conditions.page.scss */ "6qsm");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _services_user_data_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/user-data.service */ "DPk/");







let EditMedicalConditionsPage = class EditMedicalConditionsPage {
    constructor(modalCtrl, fb, userDataService) {
        this.modalCtrl = modalCtrl;
        this.fb = fb;
        this.userDataService = userDataService;
        this.form = this.fb.group({
            allergies: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
            medications: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
            otherMedicalConditions: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
        });
    }
    ngOnInit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.userDataService.loadMedicalRecord();
            Object.keys(this.form.controls).forEach(key => {
                this.form.get(key).setValue(this.userDataService.medicalRecordValue[key]);
                console.log(key, this.form.get(key).value);
            });
        });
    }
    dismiss() {
        this.modalCtrl.dismiss();
    }
    save() {
        Object.keys(this.form.controls).forEach(key => {
            this.userDataService.medicalRecordValue[key] = this.form.value[key];
            console.log(key, this.form.get(key).value);
        });
        this.userDataService.saveMedicalRecord();
        this.modalCtrl.dismiss();
        location.reload();
    }
};
EditMedicalConditionsPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"] },
    { type: _services_user_data_service__WEBPACK_IMPORTED_MODULE_6__["UserDataService"] }
];
EditMedicalConditionsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-edit-medical-conditions',
        template: _raw_loader_edit_medical_conditions_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_edit_medical_conditions_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], EditMedicalConditionsPage);



/***/ }),

/***/ "oZqj":
/*!*************************************************************************!*\
  !*** ./src/app/view-operative-history/view-operative-history.page.scss ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ2aWV3LW9wZXJhdGl2ZS1oaXN0b3J5LnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ "qULd":
/*!**************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/haptic-27b3f981.js ***!
  \**************************************************************/
/*! exports provided: a, b, c, d, h */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return hapticSelectionStart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return hapticSelectionChanged; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return hapticSelection; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return hapticImpact; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return hapticSelectionEnd; });
const HapticEngine = {
  getEngine() {
    const win = window;
    return (win.TapticEngine) || (win.Capacitor && win.Capacitor.isPluginAvailable('Haptics') && win.Capacitor.Plugins.Haptics);
  },
  available() {
    return !!this.getEngine();
  },
  isCordova() {
    return !!window.TapticEngine;
  },
  isCapacitor() {
    const win = window;
    return !!win.Capacitor;
  },
  impact(options) {
    const engine = this.getEngine();
    if (!engine) {
      return;
    }
    const style = this.isCapacitor() ? options.style.toUpperCase() : options.style;
    engine.impact({ style });
  },
  notification(options) {
    const engine = this.getEngine();
    if (!engine) {
      return;
    }
    const style = this.isCapacitor() ? options.style.toUpperCase() : options.style;
    engine.notification({ style });
  },
  selection() {
    this.impact({ style: 'light' });
  },
  selectionStart() {
    const engine = this.getEngine();
    if (!engine) {
      return;
    }
    if (this.isCapacitor()) {
      engine.selectionStart();
    }
    else {
      engine.gestureSelectionStart();
    }
  },
  selectionChanged() {
    const engine = this.getEngine();
    if (!engine) {
      return;
    }
    if (this.isCapacitor()) {
      engine.selectionChanged();
    }
    else {
      engine.gestureSelectionChanged();
    }
  },
  selectionEnd() {
    const engine = this.getEngine();
    if (!engine) {
      return;
    }
    if (this.isCapacitor()) {
      engine.selectionEnd();
    }
    else {
      engine.gestureSelectionEnd();
    }
  }
};
/**
 * Trigger a selection changed haptic event. Good for one-time events
 * (not for gestures)
 */
const hapticSelection = () => {
  HapticEngine.selection();
};
/**
 * Tell the haptic engine that a gesture for a selection change is starting.
 */
const hapticSelectionStart = () => {
  HapticEngine.selectionStart();
};
/**
 * Tell the haptic engine that a selection changed during a gesture.
 */
const hapticSelectionChanged = () => {
  HapticEngine.selectionChanged();
};
/**
 * Tell the haptic engine we are done with a gesture. This needs to be
 * called lest resources are not properly recycled.
 */
const hapticSelectionEnd = () => {
  HapticEngine.selectionEnd();
};
/**
 * Use this to indicate success/failure/warning to the user.
 * options should be of the type `{ style: 'light' }` (or `medium`/`heavy`)
 */
const hapticImpact = (options) => {
  HapticEngine.impact(options);
};




/***/ }),

/***/ "r8bU":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/appointment-reminder/appointment-reminder.page.html ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-button color=\"danger\" (click)=\"dismiss()\">Cancel</ion-button>\n    </ion-buttons>\n    <ion-title>New Appointment</ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-button (click)=\"save()\">Done</ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <form [formGroup]=\"form\">\n    <ion-card>\n      <ion-item>\n        <ion-input placeholder='Title' formControlName=\"title\"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-input placeholder='Doctor' formControlName=\"doctor\"></ion-input>\n      </ion-item>\n      <ion-item lines=\"none\">\n        <ion-input placeholder='Location' formControlName=\"location\"></ion-input>\n      </ion-item>\n    </ion-card>\n\n    <ion-card>\n      <ion-item lines=\"none\">\n        <ion-icon name=\"calendar-clear-outline\" slot=\"start\"></ion-icon>\n        <ion-label>Date</ion-label>\n        <ion-datetime \n        placeholder=\"Select Date\"\n        display-format=\"D/MMM/YYYY HH:mm\" \n        formControlName=\"appointmentDate\"></ion-datetime>\n      </ion-item>\n    </ion-card>\n\n    <ion-card>\n      <ion-item lines=\"none\">\n        <ion-icon name=\"alarm-outline\" slot=\"start\"></ion-icon>\n        <ion-label>Alarm</ion-label>\n        <ion-select \n        formControlName=\"alarmDateTime\" \n        interface=\"action-sheet\"\n        style=\"max-width: 100%;\">\n        <ion-select-option value={{0}}>At time of event</ion-select-option>\n          <ion-select-option value={{1000*60*30}}>30 minutes before</ion-select-option>\n          <ion-select-option value={{1000*60*60}}>1 hour before</ion-select-option>\n          <ion-select-option value={{1000*60*120}}>2 hours before</ion-select-option>\n          <ion-select-option value={{1000*60*60*24}}>1 day before</ion-select-option>\n          <ion-select-option value={{1000*60*60*48}}>2 days before</ion-select-option>\n          <ion-select-option value={{1000*60*60*24*7}}>1 week before</ion-select-option>\n        </ion-select>\n      </ion-item>\n    </ion-card>\n  </form>\n</ion-content>\n");

/***/ }),

/***/ "tWnK":
/*!*******************************************************!*\
  !*** ./src/app/edit-pathology/edit-pathology.page.ts ***!
  \*******************************************************/
/*! exports provided: EditPathologyPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditPathologyPage", function() { return EditPathologyPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_edit_pathology_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./edit-pathology.page.html */ "L1bm");
/* harmony import */ var _edit_pathology_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./edit-pathology.page.scss */ "65gq");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _services_user_data_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/user-data.service */ "DPk/");







let EditPathologyPage = class EditPathologyPage {
    constructor(modalCtrl, fb, userDataService) {
        this.modalCtrl = modalCtrl;
        this.fb = fb;
        this.userDataService = userDataService;
        this.tubeSizeList = ['2.5', '3.0', '3.5', '4.0', '4.5', '5.0', '6.0', '7.0', '8.0'];
        this.form = this.fb.group({
            pathology: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
            intubatation: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
            airwayGrade: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
            tubeSize: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
            details: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
        });
    }
    ngOnInit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.userDataService.loadMedicalRecord();
            Object.keys(this.form.controls).forEach(key => {
                this.form.get(key).setValue(this.userDataService.medicalRecordValue[key]);
                console.log(key, this.form.get(key).value);
            });
        });
    }
    dismiss() {
        this.modalCtrl.dismiss();
    }
    save() {
        Object.keys(this.form.controls).forEach(key => {
            this.userDataService.medicalRecordValue[key] = this.form.value[key];
            console.log(key, this.form.get(key).value);
        });
        this.userDataService.saveMedicalRecord();
        location.reload();
    }
    intubatation() {
        console.log(this.form.value.intubatation);
    }
};
EditPathologyPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"] },
    { type: _services_user_data_service__WEBPACK_IMPORTED_MODULE_6__["UserDataService"] }
];
EditPathologyPage.propDecorators = {
    isModal: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }]
};
EditPathologyPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-edit-pathology',
        template: _raw_loader_edit_pathology_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_edit_pathology_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], EditPathologyPage);



/***/ }),

/***/ "tXud":
/*!*****************************************************!*\
  !*** ./src/app/open-version/open-version.page.scss ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".userProfile ion-label:last-child {\n  text-align: end;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL29wZW4tdmVyc2lvbi5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxlQUFBO0FBQ0oiLCJmaWxlIjoib3Blbi12ZXJzaW9uLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi51c2VyUHJvZmlsZSBpb24tbGFiZWw6bGFzdC1jaGlsZHtcbiAgICB0ZXh0LWFsaWduOiBlbmQ7XG59Il19 */");

/***/ }),

/***/ "txDb":
/*!*********************************************************************!*\
  !*** ./src/app/appointment-reminder/appointment-reminder.page.scss ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-button {\n  width: 90%;\n  margin: auto;\n  margin-top: 10%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2FwcG9pbnRtZW50LXJlbWluZGVyLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFVBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtBQUNKIiwiZmlsZSI6ImFwcG9pbnRtZW50LXJlbWluZGVyLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1idXR0b24ge1xuICAgIHdpZHRoOiA5MCU7XG4gICAgbWFyZ2luOiBhdXRvO1xuICAgIG1hcmdpbi10b3A6IDEwJTtcbn0iXX0= */");

/***/ }),

/***/ "vpZA":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/edit-medical-conditions/edit-medical-conditions.page.html ***!
  \*****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-button color=\"danger\" (click)=\"dismiss()\">Cancel</ion-button>\n    </ion-buttons>\n    <ion-title>Edit</ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-button (click)=\"save()\">Done</ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <form [formGroup]=\"form\">\n    <ion-list>\n      <ion-list-header lines=\"full\">\n        <ion-label>\n          Allergies\n        </ion-label>\n      </ion-list-header>\n\n      <ion-item lines='full'>\n        <ion-textarea autoGrow=\"true\" rows=\"2\"\n        placeholder=\"Enter any known allergies\"\n        formControlName=\"allergies\"></ion-textarea>\n      </ion-item>\n    </ion-list>\n\n    <ion-list>\n      <ion-list-header lines=\"full\">\n        <ion-label>\n          Medications\n        </ion-label>\n      </ion-list-header>\n\n      <ion-item lines='full'>\n        <ion-textarea autoGrow=\"true\" rows=\"2\"\n        placeholder=\"Enter current medications\"\n        formControlName=\"medications\"></ion-textarea>\n      </ion-item>\n    </ion-list>\n\n    <ion-list>\n      <ion-list-header lines=\"full\">\n        <ion-label>\n          Other Medical Conditions\n        </ion-label>\n      </ion-list-header>\n\n      <ion-item lines='full'>\n        <ion-textarea autoGrow=\"true\" rows=\"2\"\n        placeholder=\"Enter other medical conditions\"\n        formControlName=\"otherMedicalConditions\"></ion-textarea>\n      </ion-item>\n    </ion-list>\n  </form>\n</ion-content>\n");

/***/ }),

/***/ "wK3v":
/*!*************************************************************************!*\
  !*** ./src/app/edit-operative-history/edit-operative-history.page.scss ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJlZGl0LW9wZXJhdGl2ZS1oaXN0b3J5LnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ "yr4Q":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/edit-operative-history/edit-operative-history.page.html ***!
  \***************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-button color=\"danger\" (click)=\"dismiss()\">Cancel</ion-button>\n    </ion-buttons>\n    <ion-title>Add New Record</ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-button (click)=\"save()\">Save</ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <form [formGroup]=\"form\">\n    <ion-list>\n      <ion-list-header lines=\"full\">\n        <ion-label>\n          Operative History\n        </ion-label>\n      </ion-list-header>\n\n      <ion-item>\n        <ion-label>Date</ion-label>\n        <ion-datetime placeholder=\"Select Date\"\n        display-format=\"D MMM YYYY\" \n        picker-format=\"D MMM YYYY\" \n        formControlName=\"date\" \n        style=\"color: dodgerblue;\"></ion-datetime>\n      </ion-item>\n\n      <ion-item>\n        <ion-label>Type</ion-label>\n        <ion-input \n          formControlName=\"type\" \n          placeholder=\"Operation Type\"\n          style=\"color: dodgerblue; text-align: end;\">\n        </ion-input>\n      </ion-item>\n\n      <ion-item lines=\"full\"> \n        <ion-label position=\"stacked\">Details</ion-label>\n        <ion-textarea rows=\"5\"\n        placeholder=\"Enter Details\" \n        formControlName=\"details\"></ion-textarea>\n      </ion-item>\n    </ion-list>\n  </form>\n\n  <ion-item lines='full' (click)=\"addPhotoToGallery()\">\n    <ion-icon name=\"add-circle-outline\" style=\"color:dodgerblue;\"></ion-icon>\n    Add pictures\n  </ion-item>\n\n  <ion-grid>\n    <ion-row>\n    <ion-col size=\"6\"\n      *ngFor=\"let photo of photos; index as position; let counter = index\">\n        <ion-img [src]=\"photo.webviewPath\" (click)=\"openViewer(photo.webviewPath)\"></ion-img>\n    </ion-col>\n    </ion-row>\n  </ion-grid>\n\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=common-es2015.js.map