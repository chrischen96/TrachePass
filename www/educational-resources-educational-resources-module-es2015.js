(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["educational-resources-educational-resources-module"],{

/***/ "9ZYh":
/*!*******************************************************************************!*\
  !*** ./src/app/educational-resources/educational-resources-routing.module.ts ***!
  \*******************************************************************************/
/*! exports provided: EducationalResourcesPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EducationalResourcesPageRoutingModule", function() { return EducationalResourcesPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _educational_resources_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./educational-resources.page */ "doP0");




const routes = [
    {
        path: '',
        component: _educational_resources_page__WEBPACK_IMPORTED_MODULE_3__["EducationalResourcesPage"]
    }
];
let EducationalResourcesPageRoutingModule = class EducationalResourcesPageRoutingModule {
};
EducationalResourcesPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], EducationalResourcesPageRoutingModule);



/***/ }),

/***/ "GbOB":
/*!***********************************************************************!*\
  !*** ./src/app/educational-resources/educational-resources.page.scss ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-button {\n  width: 90%;\n  margin: auto;\n  margin-top: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VkdWNhdGlvbmFsLXJlc291cmNlcy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxVQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0FBQ0oiLCJmaWxlIjoiZWR1Y2F0aW9uYWwtcmVzb3VyY2VzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1idXR0b24ge1xuICAgIHdpZHRoOiA5MCU7XG4gICAgbWFyZ2luOiBhdXRvO1xuICAgIG1hcmdpbi10b3A6IDEwcHg7XG59Il19 */");

/***/ }),

/***/ "KFEE":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/educational-resources/educational-resources.page.html ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"home\"></ion-back-button>\n    </ion-buttons>\n    <ion-title style=\"padding: 0px 80px;\">Educational Resources</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n    <ion-list-header>\n      <ion-label>\n        Web Pages\n      </ion-label>\n    </ion-list-header>\n    <ion-button color=\"warning\" expand=\"block\" (click)=\"TracheotomyGOSH()\">GOSH Tracheostomy Information</ion-button>\n  </ion-list>\n\n  <ion-list>\n    <ion-list-header>\n      <ion-label>\n        Training Videos\n      </ion-label>\n    </ion-list-header>\n    <ion-button color=\"warning\" expand=\"block\" (click)=\"TracheotomyVideo()\">Video Link</ion-button>\n  </ion-list>\n\n</ion-content>\n");

/***/ }),

/***/ "doP0":
/*!*********************************************************************!*\
  !*** ./src/app/educational-resources/educational-resources.page.ts ***!
  \*********************************************************************/
/*! exports provided: EducationalResourcesPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EducationalResourcesPage", function() { return EducationalResourcesPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_educational_resources_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./educational-resources.page.html */ "KFEE");
/* harmony import */ var _educational_resources_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./educational-resources.page.scss */ "GbOB");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @capacitor/core */ "gcOT");
/* harmony import */ var _services_login_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/login.service */ "EFyh");




//load browser plugin

const { Browser } = _capacitor_core__WEBPACK_IMPORTED_MODULE_4__["Plugins"];

let EducationalResourcesPage = class EducationalResourcesPage {
    constructor(loginService) {
        this.loginService = loginService;
        Browser.addListener('browserPageLoaded', () => {
            console.log('called browser');
        });
        Browser.addListener('browserFinished', () => {
            console.log('loaded');
        });
        //prefetch url fr faster loading
        Browser.prefetch({
            urls: ["https://www.gosh.nhs.uk/wards-and-departments/departments/clinical-specialties/tracheostomy-information-children-parents-and-healthcare-professionals/",
                "https://www.gosh.nhs.uk/wards-and-departments/departments/clinical-specialties/tracheostomy-information-children-parents-and-healthcare-professionals/training-videos/"]
        });
        //this.loginService.timeOut();
    }
    ;
    //due to limitation of browser plugin the app is unable to listen when the browser close so the lock app function must be paused in this screen
    ngOnInit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            //await this.loginService.stopPauseMonitor();
        });
    }
    ngOnDestroy() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            //await this.loginService.startPauseMonitor();
        });
    }
    TracheotomyGOSH() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield Browser.open({ url: "https://www.gosh.nhs.uk/wards-and-departments/departments/clinical-specialties/tracheostomy-information-children-parents-and-healthcare-professionals/" });
        });
    }
    TracheotomyVideo() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield Browser.open({ url: "https://www.gosh.nhs.uk/wards-and-departments/departments/clinical-specialties/tracheostomy-information-children-parents-and-healthcare-professionals/training-videos/" });
        });
    }
};
EducationalResourcesPage.ctorParameters = () => [
    { type: _services_login_service__WEBPACK_IMPORTED_MODULE_5__["LoginService"] }
];
EducationalResourcesPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-educational-resources',
        template: _raw_loader_educational_resources_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_educational_resources_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], EducationalResourcesPage);



/***/ }),

/***/ "o1+s":
/*!***********************************************************************!*\
  !*** ./src/app/educational-resources/educational-resources.module.ts ***!
  \***********************************************************************/
/*! exports provided: EducationalResourcesPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EducationalResourcesPageModule", function() { return EducationalResourcesPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _educational_resources_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./educational-resources-routing.module */ "9ZYh");
/* harmony import */ var _educational_resources_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./educational-resources.page */ "doP0");







let EducationalResourcesPageModule = class EducationalResourcesPageModule {
};
EducationalResourcesPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _educational_resources_routing_module__WEBPACK_IMPORTED_MODULE_5__["EducationalResourcesPageRoutingModule"]
        ],
        declarations: [_educational_resources_page__WEBPACK_IMPORTED_MODULE_6__["EducationalResourcesPage"]]
    })
], EducationalResourcesPageModule);



/***/ })

}]);
//# sourceMappingURL=educational-resources-educational-resources-module-es2015.js.map