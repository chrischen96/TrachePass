(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["version-history-version-history-module"],{

/***/ "0Fer":
/*!*********************************************************!*\
  !*** ./src/app/version-history/version-history.page.ts ***!
  \*********************************************************/
/*! exports provided: VersionHistoryPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VersionHistoryPage", function() { return VersionHistoryPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_version_history_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./version-history.page.html */ "SqB5");
/* harmony import */ var _version_history_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./version-history.page.scss */ "n+xp");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _services_user_data_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/user-data.service */ "DPk/");
/* harmony import */ var _open_version_open_version_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../open-version/open-version.page */ "GaT9");







let VersionHistoryPage = class VersionHistoryPage {
    constructor(userDataService, modalCtrl) {
        this.userDataService = userDataService;
        this.modalCtrl = modalCtrl;
        this.versionHistory = [];
    }
    ngOnInit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.userDataService.loadUserProfile();
            yield this.userDataService.loadMedicalRecord();
            this.versionHistory = this.userDataService.versionHistoryValue;
            console.log(this.versionHistory);
        });
    }
    openVersion(index) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            //console.log(typeof this.userDataService.old[index]);
            const entry = this.versionHistory[index];
            console.log(typeof entry.value);
            console.log(entry);
            console.log(entry.value);
            const modal = yield this.modalCtrl.create({
                component: _open_version_open_version_page__WEBPACK_IMPORTED_MODULE_6__["OpenVersionPage"],
                componentProps: {
                    date: entry.time,
                    type: entry.type,
                    value: entry.value,
                },
                cssClass: 'login-modal'
            });
            yield modal.present();
            const { data } = yield modal.onWillDismiss();
            console.log(data.restoreValues);
            console.log(typeof data.restoreValues);
            if (data.restoreValues == true) {
                if (entry.type == 'User Profile') {
                    this.userDataService.userProfileValue = entry.value;
                    this.userDataService.saveUserProfile();
                }
                else {
                    this.userDataService.medicalRecordValue = entry.value;
                    this.userDataService.saveMedicalRecord();
                }
            }
        });
    }
};
VersionHistoryPage.ctorParameters = () => [
    { type: _services_user_data_service__WEBPACK_IMPORTED_MODULE_5__["UserDataService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"] }
];
VersionHistoryPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-version-history',
        template: _raw_loader_version_history_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_version_history_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], VersionHistoryPage);



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

/***/ "JzFi":
/*!***********************************************************!*\
  !*** ./src/app/version-history/version-history.module.ts ***!
  \***********************************************************/
/*! exports provided: VersionHistoryPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VersionHistoryPageModule", function() { return VersionHistoryPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _version_history_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./version-history-routing.module */ "wtrP");
/* harmony import */ var _version_history_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./version-history.page */ "0Fer");







let VersionHistoryPageModule = class VersionHistoryPageModule {
};
VersionHistoryPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _version_history_routing_module__WEBPACK_IMPORTED_MODULE_5__["VersionHistoryPageRoutingModule"]
        ],
        declarations: [_version_history_page__WEBPACK_IMPORTED_MODULE_6__["VersionHistoryPage"]]
    })
], VersionHistoryPageModule);



/***/ }),

/***/ "SqB5":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/version-history/version-history.page.html ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"settings\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>Version History</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-item *ngFor=\"let history of versionHistory; index as i\">\n    <ion-label>\n      <h2>{{history.time | date:'medium'}}</h2>\n      <h3>{{history.type}}</h3>\n    </ion-label>\n    <ion-buttons slot=\"end\">\n      <ion-button (click)=\"openVersion(i)\">View</ion-button>\n    </ion-buttons>\n  </ion-item>\n</ion-content>\n");

/***/ }),

/***/ "n+xp":
/*!***********************************************************!*\
  !*** ./src/app/version-history/version-history.page.scss ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ2ZXJzaW9uLWhpc3RvcnkucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ "wtrP":
/*!*******************************************************************!*\
  !*** ./src/app/version-history/version-history-routing.module.ts ***!
  \*******************************************************************/
/*! exports provided: VersionHistoryPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VersionHistoryPageRoutingModule", function() { return VersionHistoryPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _version_history_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./version-history.page */ "0Fer");




const routes = [
    {
        path: '',
        component: _version_history_page__WEBPACK_IMPORTED_MODULE_3__["VersionHistoryPage"]
    }
];
let VersionHistoryPageRoutingModule = class VersionHistoryPageRoutingModule {
};
VersionHistoryPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], VersionHistoryPageRoutingModule);



/***/ })

}]);
//# sourceMappingURL=version-history-version-history-module-es2015.js.map