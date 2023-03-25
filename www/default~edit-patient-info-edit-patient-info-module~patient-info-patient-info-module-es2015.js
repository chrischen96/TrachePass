(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~edit-patient-info-edit-patient-info-module~patient-info-patient-info-module"],{

/***/ "1ts5":
/*!***************************************************************!*\
  !*** ./src/app/edit-patient-info/edit-patient-info.page.scss ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-input:last-child {\n  text-align: end;\n}\n\nion-input {\n  color: dodgerblue;\n}\n\nion-icon.arrow {\n  position: relative;\n  left: -15%;\n}\n\ndiv.profile {\n  position: relative;\n  width: 100%;\n  height: 130px;\n}\n\ndiv.icon {\n  width: 100px;\n  height: 100px;\n  background-color: #f0b478;\n  border-radius: 50%;\n  text-align: center;\n  position: absolute;\n  top: 30px;\n  left: 50%;\n  transform: translate(-50%, 0);\n}\n\nion-icon.icon {\n  font-size: 50px;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VkaXQtcGF0aWVudC1pbmZvLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGVBQUE7QUFDSjs7QUFFQTtFQUNJLGlCQUFBO0FBQ0o7O0FBRUE7RUFDSSxrQkFBQTtFQUNBLFVBQUE7QUFDSjs7QUFFQTtFQUNJLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7QUFDSjs7QUFFQTtFQUNJLFlBQUE7RUFDQSxhQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0VBQ0EsU0FBQTtFQUNBLDZCQUFBO0FBQ0o7O0FBRUE7RUFDSSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLGdDQUFBO0FBQ0oiLCJmaWxlIjoiZWRpdC1wYXRpZW50LWluZm8ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWlucHV0Omxhc3QtY2hpbGQge1xuICAgIHRleHQtYWxpZ246IGVuZDtcbn1cblxuaW9uLWlucHV0IHtcbiAgICBjb2xvcjpkb2RnZXJibHVlO1xufVxuXG5pb24taWNvbi5hcnJvdyB7XG4gICAgcG9zaXRpb246cmVsYXRpdmU7XG4gICAgbGVmdDogLTE1JTtcbn1cblxuZGl2LnByb2ZpbGUge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEzMHB4O1xufVxuXG5kaXYuaWNvbiB7XG4gICAgd2lkdGg6IDEwMHB4O1xuICAgIGhlaWdodDogMTAwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI0MCwgMTgwLCAxMjApO1xuICAgIGJvcmRlci1yYWRpdXM6NTAlO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAzMHB4O1xuICAgIGxlZnQ6IDUwJTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAwKTtcbn1cblxuaW9uLWljb24uaWNvbiB7XG4gICAgZm9udC1zaXplOiA1MHB4O1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTsgXG4gICAgdG9wOiA1MCU7IFxuICAgIGxlZnQ6IDUwJTsgXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gIH1cbiJdfQ== */");

/***/ }),

/***/ "DPk/":
/*!***********************************************!*\
  !*** ./src/app/services/user-data.service.ts ***!
  \***********************************************/
/*! exports provided: UserDataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserDataService", function() { return UserDataService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @capacitor/core */ "gcOT");



const { Storage } = _capacitor_core__WEBPACK_IMPORTED_MODULE_2__["Plugins"];
let UserDataService = class UserDataService {
    constructor() {
        this.userProfileValue = {};
        this.userProfileKey = "userProfile";
        this.userProfileString = "";
        this.medicalRecordValue = {};
        this.medicalRecordKey = "medicalRecord";
        this.medicalRecordString = "";
        this.versionHistoryValue = [];
        this.versionHistoryKey = 'versionHistory';
        this.exporter = {};
        this.exporterString = "";
    }
    exportData() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.userProfileString = JSON.stringify(this.userProfileValue);
            this.medicalRecordString = JSON.stringify(this.medicalRecordValue);
            this.exporter = {
                userProfile: this.userProfileString,
                medicalRecord: this.medicalRecordString,
            };
            this.exporterString = JSON.stringify(this.exporter);
        });
    }
    loadUserProfile() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const userProfileGet = yield Storage.get({ key: this.userProfileKey });
            this.userProfileValue = JSON.parse(userProfileGet.value) || {};
            console.log("finished loading");
            const versionHistoryGet = yield Storage.get({ key: this.versionHistoryKey });
            this.versionHistoryValue = JSON.parse(versionHistoryGet.value) || [];
        });
    } //load user profile from storage
    saveUserProfile() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const oldDataGet = yield Storage.get({ key: this.userProfileKey });
            const oldDataValue = JSON.parse(oldDataGet.value) || {};
            console.log(oldDataValue);
            const toSave = {
                time: new Date().toISOString().slice(0, 16),
                type: 'User Profile',
                value: oldDataValue,
            };
            this.saveVersion(toSave);
            Storage.set({
                key: this.userProfileKey,
                value: JSON.stringify(this.userProfileValue),
            });
        });
    } //save updated user profile to storage
    loadMedicalRecord() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const medicalRecordGet = yield Storage.get({ key: this.medicalRecordKey });
            this.medicalRecordValue = JSON.parse(medicalRecordGet.value) || {};
            console.log("finished loading");
            const versionHistoryGet = yield Storage.get({ key: this.versionHistoryKey });
            this.versionHistoryValue = JSON.parse(versionHistoryGet.value) || [];
        });
    } //load medical record from storage
    saveMedicalRecord() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const oldDataGet = yield Storage.get({ key: this.medicalRecordKey });
            const oldDataValue = JSON.parse(oldDataGet.value) || {};
            const toSave = {
                time: new Date().toISOString().slice(0, 16),
                type: 'Medical Record',
                value: oldDataValue,
            };
            this.saveVersion(toSave);
            Storage.set({
                key: this.medicalRecordKey,
                value: JSON.stringify(this.medicalRecordValue),
            });
        });
    } //save new medical record to storage
    saveVersion(toSave) {
        this.versionHistoryValue.unshift(toSave);
        console.log(this.versionHistoryValue);
        console.log(this.versionHistoryValue.length);
        if (this.versionHistoryValue.length > 10) {
            console.log("too long");
            this.versionHistoryValue = this.versionHistoryValue.slice(0, 10);
            console.log(this.versionHistoryValue);
        }
        Storage.set({
            key: this.versionHistoryKey,
            value: JSON.stringify(this.versionHistoryValue)
        });
    }
    convertToString() {
        this.userProfileString = JSON.stringify(this.userProfileValue);
    }
};
UserDataService.ctorParameters = () => [];
UserDataService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], UserDataService);



/***/ }),

/***/ "EDQ8":
/*!*************************************************************!*\
  !*** ./src/app/edit-patient-info/edit-patient-info.page.ts ***!
  \*************************************************************/
/*! exports provided: EditPatientInfoPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditPatientInfoPage", function() { return EditPatientInfoPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_edit_patient_info_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./edit-patient-info.page.html */ "UcAm");
/* harmony import */ var _edit_patient_info_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./edit-patient-info.page.scss */ "1ts5");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_user_data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/user-data.service */ "DPk/");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/core */ "1Bn7");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ "TEn/");









let EditPatientInfoPage = class EditPatientInfoPage {
    constructor(userDataService, fb, router, modalCtrl) {
        this.userDataService = userDataService;
        this.fb = fb;
        this.router = router;
        this.modalCtrl = modalCtrl;
        this.relationOptions = [
            [
                'Mother',
                'Father',
                'Grandparent',
                'Care Worker',
                'Other'
            ]
        ];
        this.sexOptions = [
            [
                'Male',
                'Female',
                'Other'
            ]
        ];
        this.form = this.fb.group({
            name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
            birthDate: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
            sex: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
            nhsNumber: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
            hospitalNumber: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
            relation1: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
            r1Name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
            relation2: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
            r2Name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
            consultant: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
            trust: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
            emergencyContact: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
        }); //need more validate later
    }
    ngOnInit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.userDataService.loadUserProfile();
            Object.keys(this.form.controls).forEach(key => {
                this.form.get(key).setValue(this.userDataService.userProfileValue[key]);
                console.log(key, this.form.get(key).value);
            });
        });
    }
    dismiss() {
        this.modalCtrl.dismiss();
    }
    save() {
        Object.keys(this.form.controls).forEach(key => {
            this.userDataService.userProfileValue[key] = this.form.value[key];
            console.log(key, this.form.get(key).value);
        });
        this.userDataService.saveUserProfile();
        this.modalCtrl.dismiss();
        location.reload();
    }
    //picker for relations
    openPicker1(numColumns = 1, numOptions = 5, columnOptions = this.relationOptions) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const picker = yield _ionic_core__WEBPACK_IMPORTED_MODULE_7__["pickerController"].create({
                columns: this.getColumns(numColumns, numOptions, columnOptions),
                buttons: [
                    {
                        text: 'Cancel',
                        role: 'cancel'
                    },
                    {
                        text: 'Confirm',
                        handler: (value) => {
                            console.log(value);
                            this.form.controls['relation1'].setValue(value['col-0']['text']);
                        }
                    }
                ]
            });
            yield picker.present();
        });
    }
    openPicker2(numColumns = 1, numOptions = 5, columnOptions = this.relationOptions) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const picker = yield _ionic_core__WEBPACK_IMPORTED_MODULE_7__["pickerController"].create({
                columns: this.getColumns(numColumns, numOptions, columnOptions),
                buttons: [
                    {
                        text: 'Cancel',
                        role: 'cancel'
                    },
                    {
                        text: 'Confirm',
                        handler: (value) => {
                            console.log(value);
                            this.form.controls['relation2'].setValue(value['col-0']['text']);
                        }
                    }
                ]
            });
            yield picker.present();
        });
    }
    openPickerSex(numColumns = 1, numOptions = 3, columnOptions = this.sexOptions) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const picker = yield _ionic_core__WEBPACK_IMPORTED_MODULE_7__["pickerController"].create({
                columns: this.getColumns(numColumns, numOptions, columnOptions),
                buttons: [
                    {
                        text: 'Cancel',
                        role: 'cancel'
                    },
                    {
                        text: 'Confirm',
                        handler: (value) => {
                            console.log(value);
                            this.form.controls['sex'].setValue(value['col-0']['text']);
                        }
                    }
                ]
            });
            yield picker.present();
        });
    }
    getColumns(numColumns, numOptions, columnOptions) {
        let columns = [];
        for (let i = 0; i < numColumns; i++) {
            columns.push({
                name: `col-${i}`,
                options: this.getColumnOptions(i, numOptions, columnOptions)
            });
        }
        return columns;
    }
    getColumnOptions(columnIndex, numOptions, columnOptions) {
        let options = [];
        for (let i = 0; i < numOptions; i++) {
            options.push({
                text: columnOptions[columnIndex][i % numOptions],
                value: i
            });
        }
        return options;
    }
};
EditPatientInfoPage.ctorParameters = () => [
    { type: _services_user_data_service__WEBPACK_IMPORTED_MODULE_4__["UserDataService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["ModalController"] }
];
EditPatientInfoPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-edit-patient-info',
        template: _raw_loader_edit_patient_info_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_edit_patient_info_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], EditPatientInfoPage);



/***/ }),

/***/ "UcAm":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/edit-patient-info/edit-patient-info.page.html ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-button color=\"danger\" (click)=\"dismiss()\">Cancel</ion-button>\n    </ion-buttons>\n    <ion-title style=\"padding: 0px 80px;\">Patient Information</ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-button (click)=\"save()\">Done</ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div class=\"profile\">\n    <div class=\"icon\">\n      <ion-icon class=\"icon\" name=\"person-outline\"></ion-icon>\n    </div>\n  </div>\n\n  <div>\n  <form [formGroup]=\"form\">\n    <ion-list class=\"ion-no-margin\">\n      <ion-list-header lines=\"full\">\n        <ion-label>\n          Patient Details\n        </ion-label>\n      </ion-list-header>\n\n      <ion-item>\n        <ion-label>Name</ion-label>\n        <ion-input placeholder=\"Not Set\" formControlName=\"name\"></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-label>Date of Birth</ion-label>\n        <ion-datetime placeholder=\"Select Date\"\n        display-format=\"D MMM YYYY\" \n        picker-format=\"D MMM YYYY\" \n        formControlName=\"birthDate\" \n        style=\"color: dodgerblue;\"></ion-datetime>\n      </ion-item>\n\n      <ion-item>\n        <ion-label>Sex</ion-label>\n        <ion-input placeholder=\"Not Set\" formControlName=\"sex\" (click)=\"openPickerSex()\"></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-label>NHS Number</ion-label>\n        <ion-input placeholder=\"Not Set\" formControlName=\"nhsNumber\"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label>Hospital Number</ion-label>\n        <ion-input placeholder=\"Not Set\" formControlName=\"hospitalNumber\"></ion-input>\n      </ion-item>\n    </ion-list>\n\n    <ion-list class=\"ion-no-margin\">\n      <ion-list-header lines=\"full\">\n        <ion-label>\n          Caregiver\n        </ion-label>\n      </ion-list-header>\n\n      <ion-item>\n        <ion-input placeholder=\"Relationship\" formControlName=\"relation1\" (click)=\"openPicker1()\"></ion-input>\n        <ion-icon class=\"arrow\" name=\"chevron-forward-outline\"></ion-icon>\n        <ion-input placeholder=\"Not Set\" formControlName=\"r1Name\"></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-input placeholder=\"Relationship\" formControlName=\"relation2\" (click)=\"openPicker2()\"></ion-input>\n        <ion-icon class=\"arrow\" name=\"chevron-forward-outline\"></ion-icon>\n        <ion-input placeholder=\"Not Set\" formControlName=\"r2Name\"></ion-input>\n      </ion-item>\n    </ion-list>\n\n    <ion-list class=\"ion-no-margin\">\n      <ion-list-header lines=\"full\">\n        <ion-label>\n          Hospital Details\n        </ion-label>\n      </ion-list-header>\n\n      <ion-item>\n        <ion-label>Consultant</ion-label>\n        <ion-input placeholder=\"Not Set\" formControlName=\"consultant\"></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-label>Trust</ion-label>\n        <ion-input placeholder=\"Not Set\" formControlName=\"trust\"></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-label>Emergency Contact</ion-label>\n        <ion-input placeholder=\"Not Set\" formControlName=\"emergencyContact\"></ion-input>\n      </ion-item>\n\n    </ion-list>\n  </form>\n  <div style=\"height: 35px;\"></div>\n  </div>\n\n\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=default~edit-patient-info-edit-patient-info-module~patient-info-patient-info-module-es2015.js.map