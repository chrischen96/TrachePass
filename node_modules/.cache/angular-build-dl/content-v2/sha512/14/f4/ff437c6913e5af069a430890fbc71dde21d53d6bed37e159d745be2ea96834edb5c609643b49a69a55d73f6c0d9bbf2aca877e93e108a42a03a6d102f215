(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["medical-condition-medical-condition-module"],{

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

/***/ "N6gp":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/medical-condition/medical-condition.page.html ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"medical-record\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>Medical Conditions</ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-button (click)=\"edit()\">Edit</ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-card>\n    <ion-card-header>\n      <ion-card-title>Allergies</ion-card-title>\n    </ion-card-header>\n    <ion-card-content *ngIf=\"medicalRecord.allergies!=''\">\n      {{medicalRecord.allergies}}\n    </ion-card-content>\n    <ion-card-content *ngIf=\"medicalRecord.allergies==''\">\n      No content\n    </ion-card-content>\n  </ion-card>\n\n  <ion-card>\n    <ion-card-header>\n      <ion-card-title>Medications</ion-card-title>\n    </ion-card-header>\n    <ion-card-content *ngIf=\"medicalRecord.medications!=''\">\n      {{medicalRecord.medications}}\n    </ion-card-content>\n    <ion-card-content *ngIf=\"medicalRecord.medications==''\">\n      No content\n    </ion-card-content>\n  </ion-card>\n\n  <ion-card>\n    <ion-card-header>\n      <ion-card-title>Other Medical Conditions</ion-card-title>\n    </ion-card-header>\n    <ion-card-content *ngIf=\"medicalRecord.otherMedicalConditions!=''\">\n      {{medicalRecord.otherMedicalConditions}}\n    </ion-card-content>\n    <ion-card-content *ngIf=\"medicalRecord.otherMedicalConditions==''\">\n      No content\n    </ion-card-content>\n  </ion-card>\n</ion-content>");

/***/ }),

/***/ "PAFr":
/*!***************************************************************!*\
  !*** ./src/app/medical-condition/medical-condition.page.scss ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-card-title {\n  font-size: medium;\n  font-weight: bold;\n  color: #ff5a00;\n}\n\nion-card-header {\n  padding-top: 15px;\n  padding-bottom: 10px;\n}\n\nion-card-content {\n  padding-top: 0px;\n  padding-bottom: 15px;\n  color: black;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL21lZGljYWwtY29uZGl0aW9uLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0FBQ0o7O0FBRUE7RUFDSSxpQkFBQTtFQUNBLG9CQUFBO0FBQ0o7O0FBRUE7RUFDSSxnQkFBQTtFQUNBLG9CQUFBO0VBQ0EsWUFBQTtBQUNKIiwiZmlsZSI6Im1lZGljYWwtY29uZGl0aW9uLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jYXJkLXRpdGxlIHtcbiAgICBmb250LXNpemU6bWVkaXVtO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGNvbG9yOnJnYigyNTUsIDkwLCAwKTtcbn1cblxuaW9uLWNhcmQtaGVhZGVyIHtcbiAgICBwYWRkaW5nLXRvcDogMTVweDtcbiAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcbn1cblxuaW9uLWNhcmQtY29udGVudHtcbiAgICBwYWRkaW5nLXRvcDogMHB4O1xuICAgIHBhZGRpbmctYm90dG9tOiAxNXB4O1xuICAgIGNvbG9yOiBibGFjaztcbiAgICAvL2ZvbnQtc2l6ZTogMTRweDtcbn0iXX0= */");

/***/ }),

/***/ "cY2v":
/*!***********************************************************************!*\
  !*** ./src/app/medical-condition/medical-condition-routing.module.ts ***!
  \***********************************************************************/
/*! exports provided: MedicalConditionPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MedicalConditionPageRoutingModule", function() { return MedicalConditionPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _medical_condition_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./medical-condition.page */ "dM1V");




const routes = [
    {
        path: '',
        component: _medical_condition_page__WEBPACK_IMPORTED_MODULE_3__["MedicalConditionPage"]
    }
];
let MedicalConditionPageRoutingModule = class MedicalConditionPageRoutingModule {
};
MedicalConditionPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], MedicalConditionPageRoutingModule);



/***/ }),

/***/ "dM1V":
/*!*************************************************************!*\
  !*** ./src/app/medical-condition/medical-condition.page.ts ***!
  \*************************************************************/
/*! exports provided: MedicalConditionPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MedicalConditionPage", function() { return MedicalConditionPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_medical_condition_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./medical-condition.page.html */ "N6gp");
/* harmony import */ var _medical_condition_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./medical-condition.page.scss */ "PAFr");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _services_user_data_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/user-data.service */ "DPk/");
/* harmony import */ var _edit_medical_conditions_edit_medical_conditions_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../edit-medical-conditions/edit-medical-conditions.page */ "nuTe");







let MedicalConditionPage = class MedicalConditionPage {
    constructor(modalCtrl, userDataService) {
        this.modalCtrl = modalCtrl;
        this.userDataService = userDataService;
        this.medicalRecord = {
            allergies: '',
            medications: '',
            otherMedicalConditions: '',
        };
    }
    ngOnInit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.userDataService.loadMedicalRecord();
            Object.keys(this.userDataService.medicalRecordValue).forEach(key => {
                if (Object.keys(this.medicalRecord).includes(key)) {
                    this.medicalRecord[key] = this.userDataService.medicalRecordValue[key];
                }
                console.log(key, this.medicalRecord[key]);
            });
        });
    }
    edit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const modal = yield this.modalCtrl.create({
                component: _edit_medical_conditions_edit_medical_conditions_page__WEBPACK_IMPORTED_MODULE_6__["EditMedicalConditionsPage"],
                backdropDismiss: false,
                componentProps: {},
            });
            modal.present();
        });
    }
};
MedicalConditionPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"] },
    { type: _services_user_data_service__WEBPACK_IMPORTED_MODULE_5__["UserDataService"] }
];
MedicalConditionPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-medical-condition',
        template: _raw_loader_medical_condition_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_medical_condition_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], MedicalConditionPage);



/***/ }),

/***/ "xArE":
/*!***************************************************************!*\
  !*** ./src/app/medical-condition/medical-condition.module.ts ***!
  \***************************************************************/
/*! exports provided: MedicalConditionPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MedicalConditionPageModule", function() { return MedicalConditionPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _medical_condition_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./medical-condition-routing.module */ "cY2v");
/* harmony import */ var _medical_condition_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./medical-condition.page */ "dM1V");







let MedicalConditionPageModule = class MedicalConditionPageModule {
};
MedicalConditionPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _medical_condition_routing_module__WEBPACK_IMPORTED_MODULE_5__["MedicalConditionPageRoutingModule"]
        ],
        declarations: [_medical_condition_page__WEBPACK_IMPORTED_MODULE_6__["MedicalConditionPage"]]
    })
], MedicalConditionPageModule);



/***/ })

}]);
//# sourceMappingURL=medical-condition-medical-condition-module-es2015.js.map