(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["edit-medical-conditions-edit-medical-conditions-module"],{

/***/ "8xlI":
/*!***********************************************************************************!*\
  !*** ./src/app/edit-medical-conditions/edit-medical-conditions-routing.module.ts ***!
  \***********************************************************************************/
/*! exports provided: EditMedicalConditionsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditMedicalConditionsPageRoutingModule", function() { return EditMedicalConditionsPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _edit_medical_conditions_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./edit-medical-conditions.page */ "nuTe");




const routes = [
    {
        path: '',
        component: _edit_medical_conditions_page__WEBPACK_IMPORTED_MODULE_3__["EditMedicalConditionsPage"]
    }
];
let EditMedicalConditionsPageRoutingModule = class EditMedicalConditionsPageRoutingModule {
};
EditMedicalConditionsPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], EditMedicalConditionsPageRoutingModule);



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

/***/ "b8uo":
/*!***************************************************************************!*\
  !*** ./src/app/edit-medical-conditions/edit-medical-conditions.module.ts ***!
  \***************************************************************************/
/*! exports provided: EditMedicalConditionsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditMedicalConditionsPageModule", function() { return EditMedicalConditionsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _edit_medical_conditions_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./edit-medical-conditions-routing.module */ "8xlI");
/* harmony import */ var _edit_medical_conditions_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./edit-medical-conditions.page */ "nuTe");








let EditMedicalConditionsPageModule = class EditMedicalConditionsPageModule {
};
EditMedicalConditionsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _edit_medical_conditions_routing_module__WEBPACK_IMPORTED_MODULE_5__["EditMedicalConditionsPageRoutingModule"]
        ],
        declarations: [_edit_medical_conditions_page__WEBPACK_IMPORTED_MODULE_6__["EditMedicalConditionsPage"]]
    })
], EditMedicalConditionsPageModule);



/***/ })

}]);
//# sourceMappingURL=edit-medical-conditions-edit-medical-conditions-module-es2015.js.map