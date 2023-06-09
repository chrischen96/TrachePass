(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["patient-info-patient-info-module"],{

/***/ "SL0o":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/patient-info/patient-info.page.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"home\"></ion-back-button>\n    </ion-buttons>\n    <ion-title style=\"padding: 0px 80px;\">Patient Information</ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-button (click)=\"edit()\">Edit</ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <div class=\"profile\">\n    <div class=\"icon\">\n      <ion-icon name=\"person-outline\"></ion-icon>\n    </div>\n  </div>\n\n  <div>\n    <ion-list class=\"ion-no-margin\">\n      <ion-list-header lines=\"full\">\n        <ion-label>\n          Patient Details\n        </ion-label>\n        <ion-label></ion-label>\n      </ion-list-header>\n\n      <ion-item>\n        <ion-label>Name</ion-label>\n        <ion-label>{{userInfo.name}}</ion-label>\n      </ion-item>\n\n      <ion-item *ngIf=\"userInfo.birthDate != 'Not Set'\">\n        <ion-label>Date of Birth</ion-label>\n        <ion-label>{{userInfo.birthDate  | date : 'd MMM y'}}</ion-label>\n      </ion-item>\n\n      <ion-item>\n        <ion-label>Sex</ion-label>\n        <ion-label>{{userInfo.sex}}</ion-label>\n      </ion-item>\n\n      <ion-item>\n        <ion-label>NHS Number</ion-label>\n        <ion-label>{{userInfo.nhsNumber}}</ion-label>\n      </ion-item>\n      <ion-item>\n        <ion-label>Hospital Number</ion-label>\n        <ion-label>{{userInfo.hospitalNumber}}</ion-label>\n      </ion-item>\n    </ion-list>\n\n    <ion-list class=\"ion-no-margin\">\n      <ion-list-header lines=\"full\">\n        <ion-label>\n          Caregiver\n        </ion-label>\n        <ion-label></ion-label>\n      </ion-list-header>\n\n      <ion-item *ngIf=\"(userInfo.relation1 != 'Not Set') && (userInfo.r1Name != 'Not Set')\">\n        <ion-label>{{userInfo.relation1}}</ion-label>\n        <ion-label>{{userInfo.r1Name}}</ion-label>\n      </ion-item>\n\n      <ion-item *ngIf=\"(userInfo.relation2 != 'Not Set') && (userInfo.r2Name != 'Not Set')\">\n        <ion-label>{{userInfo.relation2}}</ion-label>\n        <ion-label>{{userInfo.r2Name}}</ion-label>\n      </ion-item>\n    </ion-list>\n\n    <ion-list class=\"ion-no-margin\">\n      <ion-list-header lines=\"full\">\n        <ion-label>\n          Hospital Details\n        </ion-label>\n        <ion-label></ion-label>\n      </ion-list-header>\n\n      <ion-item>\n        <ion-label>Consultant</ion-label>\n        <ion-label>{{userInfo.consultant}}</ion-label>\n      </ion-item>\n\n      <ion-item>\n        <ion-label>Trust</ion-label>\n        <ion-label>{{userInfo.trust}}</ion-label>\n      </ion-item>\n\n      <ion-item>\n        <ion-label>Emergency Contact</ion-label>\n        <ion-label>{{userInfo.emergencyContact}}</ion-label>\n      </ion-item>\n    </ion-list>\n\n  </div>\n\n  <div style=\"height: 35px;\"></div>\n\n\n</ion-content>\n");

/***/ }),

/***/ "aXDc":
/*!*****************************************************!*\
  !*** ./src/app/patient-info/patient-info.page.scss ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-label:last-child {\n  position: absolute;\n  right: 5%;\n  font-weight: 600;\n}\n\nion-datetime {\n  font-weight: 600;\n}\n\ndiv.profile {\n  position: relative;\n  width: 100%;\n  height: 130px;\n}\n\ndiv.icon {\n  width: 100px;\n  height: 100px;\n  background-color: #f0b478;\n  border-radius: 50%;\n  text-align: center;\n  position: absolute;\n  top: 30px;\n  left: 50%;\n  transform: translate(-50%, 0);\n}\n\nion-icon {\n  font-size: 50px;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3BhdGllbnQtaW5mby5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQkFBQTtFQUFvQixTQUFBO0VBQ3BCLGdCQUFBO0FBRUo7O0FBQ0E7RUFDSSxnQkFBQTtBQUVKOztBQUNBO0VBQ0ksa0JBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtBQUVKOztBQUNBO0VBQ0ksWUFBQTtFQUNBLGFBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxTQUFBO0VBQ0EsNkJBQUE7QUFFSjs7QUFDQTtFQUNJLGVBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsZ0NBQUE7QUFFSiIsImZpbGUiOiJwYXRpZW50LWluZm8ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWxhYmVsOmxhc3QtY2hpbGQge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTsgcmlnaHQ6IDUlO1xuICAgIGZvbnQtd2VpZ2h0OjYwMDtcbn1cblxuaW9uLWRhdGV0aW1lIHtcbiAgICBmb250LXdlaWdodDogNjAwO1xufVxuXG5kaXYucHJvZmlsZSB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTMwcHg7XG59XG5cbmRpdi5pY29uIHtcbiAgICB3aWR0aDogMTAwcHg7XG4gICAgaGVpZ2h0OiAxMDBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjQwLCAxODAsIDEyMCk7XG4gICAgYm9yZGVyLXJhZGl1czo1MCU7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDMwcHg7XG4gICAgbGVmdDogNTAlO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIDApO1xufVxuXG5pb24taWNvbntcbiAgICBmb250LXNpemU6IDUwcHg7XG4gICAgcG9zaXRpb246IGFic29sdXRlOyBcbiAgICB0b3A6IDUwJTsgXG4gICAgbGVmdDogNTAlOyBcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgfSJdfQ== */");

/***/ }),

/***/ "nPsR":
/*!*****************************************************!*\
  !*** ./src/app/patient-info/patient-info.module.ts ***!
  \*****************************************************/
/*! exports provided: PatientInfoPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PatientInfoPageModule", function() { return PatientInfoPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _patient_info_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./patient-info-routing.module */ "y2Tn");
/* harmony import */ var _patient_info_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./patient-info.page */ "ycZ0");







let PatientInfoPageModule = class PatientInfoPageModule {
};
PatientInfoPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _patient_info_routing_module__WEBPACK_IMPORTED_MODULE_5__["PatientInfoPageRoutingModule"]
        ],
        declarations: [_patient_info_page__WEBPACK_IMPORTED_MODULE_6__["PatientInfoPage"]]
    })
], PatientInfoPageModule);



/***/ }),

/***/ "y2Tn":
/*!*************************************************************!*\
  !*** ./src/app/patient-info/patient-info-routing.module.ts ***!
  \*************************************************************/
/*! exports provided: PatientInfoPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PatientInfoPageRoutingModule", function() { return PatientInfoPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _patient_info_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./patient-info.page */ "ycZ0");




const routes = [
    {
        path: '',
        component: _patient_info_page__WEBPACK_IMPORTED_MODULE_3__["PatientInfoPage"]
    }
];
let PatientInfoPageRoutingModule = class PatientInfoPageRoutingModule {
};
PatientInfoPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], PatientInfoPageRoutingModule);



/***/ }),

/***/ "ycZ0":
/*!***************************************************!*\
  !*** ./src/app/patient-info/patient-info.page.ts ***!
  \***************************************************/
/*! exports provided: PatientInfoPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PatientInfoPage", function() { return PatientInfoPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_patient_info_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./patient-info.page.html */ "SL0o");
/* harmony import */ var _patient_info_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./patient-info.page.scss */ "aXDc");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_user_data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/user-data.service */ "DPk/");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _edit_patient_info_edit_patient_info_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../edit-patient-info/edit-patient-info.page */ "EDQ8");







let PatientInfoPage = class PatientInfoPage {
    constructor(userDataService, modalCtrl) {
        this.userDataService = userDataService;
        this.modalCtrl = modalCtrl;
        this.userInfo = {
            name: 'Not Set',
            //lastName:'Not Set',
            birthDate: 'Not Set',
            sex: 'Not Set',
            nhsNumber: 'Not Set',
            hospitalNumber: 'Not Set',
            relation1: 'Not Set',
            r1Name: 'Not Set',
            relation2: 'Not Set',
            r2Name: 'Not Set',
            consultant: 'Not Set',
            trust: 'Not Set',
            emergencyContact: 'Not Set',
        };
    }
    ngOnInit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.userDataService.loadUserProfile();
            Object.keys(this.userDataService.userProfileValue).forEach(key => {
                if (Object.keys(this.userInfo).includes(key)) {
                    this.userInfo[key] = this.userDataService.userProfileValue[key];
                }
                console.log(key, this.userInfo[key]);
            });
        });
    }
    edit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const modal = yield this.modalCtrl.create({
                component: _edit_patient_info_edit_patient_info_page__WEBPACK_IMPORTED_MODULE_6__["EditPatientInfoPage"],
                backdropDismiss: false,
                componentProps: {
                    isModal: true
                },
            });
            modal.present();
        });
    }
    refresh() {
        location.reload();
    }
};
PatientInfoPage.ctorParameters = () => [
    { type: _services_user_data_service__WEBPACK_IMPORTED_MODULE_4__["UserDataService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ModalController"] }
];
PatientInfoPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-patient-info',
        template: _raw_loader_patient_info_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_patient_info_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], PatientInfoPage);



/***/ })

}]);
//# sourceMappingURL=patient-info-patient-info-module-es2015.js.map