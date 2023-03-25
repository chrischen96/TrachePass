(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["settings-settings-module"],{

/***/ "7Dlj":
/*!*****************************************************!*\
  !*** ./src/app/settings/settings-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: SettingsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsPageRoutingModule", function() { return SettingsPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _settings_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./settings.page */ "Uncc");




const routes = [
    {
        path: '',
        component: _settings_page__WEBPACK_IMPORTED_MODULE_3__["SettingsPage"]
    }
];
let SettingsPageRoutingModule = class SettingsPageRoutingModule {
};
SettingsPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], SettingsPageRoutingModule);



/***/ }),

/***/ "7wo0":
/*!*********************************************!*\
  !*** ./src/app/settings/settings.module.ts ***!
  \*********************************************/
/*! exports provided: SettingsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsPageModule", function() { return SettingsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _settings_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./settings-routing.module */ "7Dlj");
/* harmony import */ var _settings_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./settings.page */ "Uncc");







let SettingsPageModule = class SettingsPageModule {
};
SettingsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _settings_routing_module__WEBPACK_IMPORTED_MODULE_5__["SettingsPageRoutingModule"]
        ],
        declarations: [_settings_page__WEBPACK_IMPORTED_MODULE_6__["SettingsPage"]]
    })
], SettingsPageModule);



/***/ }),

/***/ "ADm/":
/*!*********************************************!*\
  !*** ./src/app/settings/settings.page.scss ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("div {\n  width: 80%;\n  margin: auto;\n  margin-top: 10%;\n}\n\nion-button ion-icon {\n  position: absolute;\n  left: 10%;\n}\n\nion-button ion-text {\n  position: absolute;\n  left: 30%;\n}\n\ndiv ion-button {\n  margin-top: 8%;\n}\n\n#reset {\n  position: fixed;\n  left: 50%;\n  transform: translate(-50%, 0);\n  bottom: 10%;\n}\n\n#isReset {\n  width: 80%;\n  position: fixed;\n  left: 50%;\n  transform: translate(-50%, 0);\n  bottom: 10%;\n  text-align: center;\n}\n\n#isReset ion-text {\n  color: red;\n  font-weight: bold;\n  font-size: large;\n}\n\n#isReset ion-icon {\n  color: red;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NldHRpbmdzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFVBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtBQUNKOztBQUVBO0VBQ0ksa0JBQUE7RUFDQSxTQUFBO0FBQ0o7O0FBRUE7RUFDSSxrQkFBQTtFQUNBLFNBQUE7QUFDSjs7QUFFQTtFQUNJLGNBQUE7QUFDSjs7QUFFQTtFQUNJLGVBQUE7RUFDQSxTQUFBO0VBQ0EsNkJBQUE7RUFDQSxXQUFBO0FBQ0o7O0FBRUE7RUFDSSxVQUFBO0VBQ0EsZUFBQTtFQUNBLFNBQUE7RUFDQSw2QkFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtBQUNKOztBQUVBO0VBQ0ksVUFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7QUFDSjs7QUFFQTtFQUNJLFVBQUE7QUFDSiIsImZpbGUiOiJzZXR0aW5ncy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJkaXYge1xuICAgIHdpZHRoOiA4MCU7XG4gICAgbWFyZ2luOiBhdXRvO1xuICAgIG1hcmdpbi10b3A6IDEwJTtcbn1cblxuaW9uLWJ1dHRvbiBpb24taWNvbiB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGxlZnQ6IDEwJTtcbn1cblxuaW9uLWJ1dHRvbiBpb24tdGV4dCB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGxlZnQ6IDMwJTtcbn1cblxuZGl2IGlvbi1idXR0b24ge1xuICAgIG1hcmdpbi10b3A6IDglO1xufVxuXG4jcmVzZXQge1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICBsZWZ0OiA1MCU7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwwKTtcbiAgICBib3R0b206IDEwJTtcbn1cblxuI2lzUmVzZXQge1xuICAgIHdpZHRoOiA4MCU7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIGxlZnQ6IDUwJTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLDApO1xuICAgIGJvdHRvbTogMTAlO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuI2lzUmVzZXQgaW9uLXRleHR7XG4gICAgY29sb3I6cmVkO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGZvbnQtc2l6ZTogbGFyZ2U7XG59XG5cbiNpc1Jlc2V0IGlvbi1pY29uIHtcbiAgICBjb2xvcjpyZWQ7XG59Il19 */");

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

/***/ "Uncc":
/*!*******************************************!*\
  !*** ./src/app/settings/settings.page.ts ***!
  \*******************************************/
/*! exports provided: SettingsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsPage", function() { return SettingsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_settings_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./settings.page.html */ "mzE/");
/* harmony import */ var _settings_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./settings.page.scss */ "ADm/");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_user_data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/user-data.service */ "DPk/");
/* harmony import */ var _services_login_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/login.service */ "EFyh");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @capacitor/core */ "gcOT");








const { Storage } = _capacitor_core__WEBPACK_IMPORTED_MODULE_7__["Plugins"];
let SettingsPage = class SettingsPage {
    constructor(alertController, userDataService, LoginService) {
        this.alertController = alertController;
        this.userDataService = userDataService;
        this.LoginService = LoginService;
        this.isResetStorage = false;
    }
    ngOnInit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            //load user data 
            yield this.userDataService.loadUserProfile();
            console.log("started app");
        });
    }
    //reset storage
    resetStorage() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header: 'Reset Storage',
                message: 'All data will be deleted.',
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
                            Storage.clear();
                            this.isResetStorage = true;
                        }
                    }
                ]
            });
            yield alert.present();
            console.log("Storage Cleared");
        });
    }
};
SettingsPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["AlertController"] },
    { type: _services_user_data_service__WEBPACK_IMPORTED_MODULE_4__["UserDataService"] },
    { type: _services_login_service__WEBPACK_IMPORTED_MODULE_5__["LoginService"] }
];
SettingsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-settings',
        template: _raw_loader_settings_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_settings_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], SettingsPage);



/***/ }),

/***/ "mzE/":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/settings/settings.page.html ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"home\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>Settings</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <div>\n    <ion-button color=\"warning\" expand=\"block\" routerLink=\"version-history\" style=\"margin-bottom: 5%;\">\n      <ion-icon slot=\"start\" name=\"reload-outline\"></ion-icon>\n      <ion-text slot=\"end\">Version History</ion-text>\n    </ion-button>\n\n    <ion-button color=\"danger\" expand=\"block\" routerLink=\"change-pw\" style=\"margin-bottom: 5%;\">\n      <ion-icon slot=\"start\" name=\"lock-closed-outline\"></ion-icon>\n      <ion-text slot=\"end\">Change Password</ion-text>\n    </ion-button>\n  </div>\n\n  <div id=\"reset\" *ngIf = \"!isResetStorage\">\n    <ion-button color=\"medium\" expand=\"block\" (click)=\"resetStorage()\">\n      <ion-icon slot=\"start\" name=\"trash-outline\"></ion-icon>\n      <ion-text slot=\"end\">Reset Storage</ion-text>\n    </ion-button>\n  </div>\n\n  <div id=\"isReset\" *ngIf = \"isResetStorage\">\n    <ion-text>Storage has been reseted.</ion-text>\n  </div>\n\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=settings-settings-module-es2015.js.map