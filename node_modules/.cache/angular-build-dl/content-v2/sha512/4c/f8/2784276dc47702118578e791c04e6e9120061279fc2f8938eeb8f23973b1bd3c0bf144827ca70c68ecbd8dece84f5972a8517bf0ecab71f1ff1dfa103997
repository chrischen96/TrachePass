(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pathology-pathology-module"],{

/***/ "4KOm":
/*!*********************************************!*\
  !*** ./src/app/pathology/pathology.page.ts ***!
  \*********************************************/
/*! exports provided: PathologyPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PathologyPage", function() { return PathologyPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_pathology_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./pathology.page.html */ "Jie+");
/* harmony import */ var _pathology_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pathology.page.scss */ "pF5A");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _edit_pathology_edit_pathology_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../edit-pathology/edit-pathology.page */ "tWnK");
/* harmony import */ var _services_user_data_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/user-data.service */ "DPk/");







let PathologyPage = class PathologyPage {
    constructor(modalCtrl, userDataService) {
        this.modalCtrl = modalCtrl;
        this.userDataService = userDataService;
        this.medicalRecord = {
            pathology: '',
            intubatation: false,
            airwayGrade: '',
            tubeSize: '',
            details: '',
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
                component: _edit_pathology_edit_pathology_page__WEBPACK_IMPORTED_MODULE_5__["EditPathologyPage"],
                backdropDismiss: false,
                componentProps: {
                    isModal: true,
                },
            });
            modal.present();
        });
    }
};
PathologyPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"] },
    { type: _services_user_data_service__WEBPACK_IMPORTED_MODULE_6__["UserDataService"] }
];
PathologyPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-pathology',
        template: _raw_loader_pathology_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_pathology_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], PathologyPage);



/***/ }),

/***/ "B9dj":
/*!***********************************************!*\
  !*** ./src/app/pathology/pathology.module.ts ***!
  \***********************************************/
/*! exports provided: PathologyPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PathologyPageModule", function() { return PathologyPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _pathology_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pathology-routing.module */ "n/EX");
/* harmony import */ var _pathology_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pathology.page */ "4KOm");







let PathologyPageModule = class PathologyPageModule {
};
PathologyPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _pathology_routing_module__WEBPACK_IMPORTED_MODULE_5__["PathologyPageRoutingModule"]
        ],
        declarations: [_pathology_page__WEBPACK_IMPORTED_MODULE_6__["PathologyPage"]]
    })
], PathologyPageModule);



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

/***/ "Jie+":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pathology/pathology.page.html ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"medical-record\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>Airway Pathology</ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-button (click)=\"edit()\">Edit</ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-card>\n    <ion-card-header>\n      <ion-card-title>Reason for Tracheostomy</ion-card-title>\n    </ion-card-header>\n    <ion-card-content *ngIf=\"medicalRecord.pathology!=''\">\n      {{medicalRecord.pathology}}\n    </ion-card-content>\n    <ion-card-content *ngIf=\"medicalRecord.pathology==''\">\n      No content\n    </ion-card-content>\n  </ion-card>\n\n  <ion-card>\n    <ion-card-header>\n      <ion-card-title>Is Upper Airway Intubatable?</ion-card-title>\n    </ion-card-header>\n    <ion-card-content class=\"airway\" *ngIf=\"medicalRecord.intubatation==false\">\n      No\n    </ion-card-content>\n    <ion-card-content class=\"airway\" *ngIf=\"medicalRecord.intubatation==true\">\n      Yes\n    </ion-card-content>\n    <div *ngIf=\"medicalRecord.intubatation==true\">\n      <ion-list>\n        <ion-item>\n          <ion-label>Airway Grade:</ion-label>\n          <ion-label>{{medicalRecord.airwayGrade}}</ion-label>\n        </ion-item>\n        <ion-item>\n          <ion-label>Endotracheal Tube Size:</ion-label>\n          <ion-label>{{medicalRecord.tubeSize}}</ion-label>\n        </ion-item>\n        <ion-item lines=\"none\">\n          <ion-label>Details:</ion-label> \n          <ion-label></ion-label> \n        </ion-item>\n        <ion-card-content>{{medicalRecord.details}}</ion-card-content>\n      </ion-list>\n    </div>\n\n  </ion-card>\n\n</ion-content>\n");

/***/ }),

/***/ "n/EX":
/*!*******************************************************!*\
  !*** ./src/app/pathology/pathology-routing.module.ts ***!
  \*******************************************************/
/*! exports provided: PathologyPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PathologyPageRoutingModule", function() { return PathologyPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _pathology_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pathology.page */ "4KOm");




const routes = [
    {
        path: '',
        component: _pathology_page__WEBPACK_IMPORTED_MODULE_3__["PathologyPage"]
    }
];
let PathologyPageRoutingModule = class PathologyPageRoutingModule {
};
PathologyPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], PathologyPageRoutingModule);



/***/ }),

/***/ "pF5A":
/*!***********************************************!*\
  !*** ./src/app/pathology/pathology.page.scss ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-card-title {\n  font-size: medium;\n  font-weight: bold;\n  color: #ff7800;\n}\n\nion-card-header {\n  padding-top: 15px;\n  padding-bottom: 10px;\n}\n\nion-card-content {\n  padding-top: 0px;\n  padding-bottom: 15px;\n  color: black;\n}\n\nion-label:last-child {\n  position: absolute;\n  right: 5%;\n  font-weight: bold;\n}\n\n.airway {\n  font-weight: bold;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3BhdGhvbG9neS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtBQUNKOztBQUVBO0VBQ0ksaUJBQUE7RUFDQSxvQkFBQTtBQUNKOztBQUVBO0VBQ0ksZ0JBQUE7RUFDQSxvQkFBQTtFQUNBLFlBQUE7QUFDSjs7QUFHQTtFQUNJLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLGlCQUFBO0FBQUo7O0FBR0E7RUFDSSxpQkFBQTtBQUFKIiwiZmlsZSI6InBhdGhvbG9neS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY2FyZC10aXRsZSB7XG4gICAgZm9udC1zaXplOm1lZGl1bTtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBjb2xvcjpyZ2IoMjU1LCAxMjAsIDApO1xufVxuXG5pb24tY2FyZC1oZWFkZXIge1xuICAgIHBhZGRpbmctdG9wOiAxNXB4O1xuICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xufVxuXG5pb24tY2FyZC1jb250ZW50e1xuICAgIHBhZGRpbmctdG9wOiAwcHg7XG4gICAgcGFkZGluZy1ib3R0b206IDE1cHg7XG4gICAgY29sb3I6IGJsYWNrO1xuICAgIC8vZm9udC1zaXplOiAxNnB4O1xufVxuXG5pb24tbGFiZWw6bGFzdC1jaGlsZCB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHJpZ2h0OiA1JTtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLmFpcndheSB7XG4gICAgZm9udC13ZWlnaHQ6Ym9sZDtcbn0iXX0= */");

/***/ })

}]);
//# sourceMappingURL=pathology-pathology-module-es2015.js.map