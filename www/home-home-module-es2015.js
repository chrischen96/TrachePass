(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-home-module"],{

/***/ "A3+G":
/*!*********************************************!*\
  !*** ./src/app/home/home-routing.module.ts ***!
  \*********************************************/
/*! exports provided: HomePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageRoutingModule", function() { return HomePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home.page */ "zpKS");




const routes = [
    {
        path: '',
        component: _home_page__WEBPACK_IMPORTED_MODULE_3__["HomePage"],
    }
];
let HomePageRoutingModule = class HomePageRoutingModule {
};
HomePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], HomePageRoutingModule);



/***/ }),

/***/ "WcN3":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.page.html ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header [translucent]=\"true\">\n</ion-header>\n\n<ion-content [fullscreen]=\"true\">\n<div>\n  <div class=\"user-profile\" routerLink=\"../patient-info\">\n    <div class=\"icon\"><ion-icon name=\"person-outline\"></ion-icon></div>\n    <div class=\"text\"><b>Patient Information</b></div>\n  </div>\n</div>\n\n<div>\n  <div class=\"medical-records\" routerLink=\"../medical-record\">\n    <div class=\"icon\"><ion-icon name=\"document-text-outline\"></ion-icon></div>\n    <div class=\"text\"><b>Medical Record</b></div>\n  </div>\n</div>\n\n<div>\n  <div class=\"appointment\" routerLink=\"../appointments\">\n    <div class=\"icon\"><ion-icon name=\"calendar-outline\"></ion-icon></div>\n    <div class=\"text\"><b>Appointments</b></div>\n  </div>\n</div>\n\n<div>\n  <div class=\"educational-resources\" routerLink=\"../educational-resources\"> \n    <div class=\"icon\"><ion-icon name=\"globe-outline\"></ion-icon></div>\n    <div class=\"text\"><b>Educational Resources</b></div>\n  </div>\n</div>\n\n<div>\n  <div class=\"settings\" routerLink=\"../settings\">\n    <div class=\"icon\"><ion-icon name=\"settings-outline\"></ion-icon></div>\n    <div class=\"text\"><b>Settings</b></div>\n  </div>\n</div>\n\n</ion-content>");

/***/ }),

/***/ "ct+p":
/*!*************************************!*\
  !*** ./src/app/home/home.module.ts ***!
  \*************************************/
/*! exports provided: HomePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home.page */ "zpKS");
/* harmony import */ var _home_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home-routing.module */ "A3+G");







let HomePageModule = class HomePageModule {
};
HomePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"],
            _home_routing_module__WEBPACK_IMPORTED_MODULE_6__["HomePageRoutingModule"]
        ],
        declarations: [_home_page__WEBPACK_IMPORTED_MODULE_5__["HomePage"]]
    })
], HomePageModule);



/***/ }),

/***/ "f6od":
/*!*************************************!*\
  !*** ./src/app/home/home.page.scss ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#container {\n  text-align: center;\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 50%;\n  transform: translateY(-50%);\n}\n\n#container strong {\n  font-size: 20px;\n  line-height: 26px;\n}\n\n#container p {\n  font-size: 16px;\n  line-height: 22px;\n  color: #8c8c8c;\n  margin: 0;\n}\n\n#container a {\n  text-decoration: none;\n}\n\n/* ion-icon:first-child {\n  position: absolute; left: 8%;\n}\n\nion-icon:last-child {\n  position: absolute; left: 95%;\n}\n\nion-text {\n  position: absolute; left: 25%;\n} */\n\ndiv {\n  outline: none;\n}\n\ndiv.user-profile {\n  width: 150px;\n  height: 150px;\n  background-color: #eba05a;\n  border-radius: 50%;\n  text-align: center;\n  position: fixed;\n  top: 10%;\n  left: 50%;\n  transform: translate(-50%, 0);\n}\n\ndiv.medical-records {\n  width: 120px;\n  height: 120px;\n  background-color: #4670be;\n  border-radius: 50%;\n  text-align: center;\n  position: fixed;\n  top: 43%;\n  left: 28%;\n  transform: translate(-50%, 0);\n}\n\ndiv.appointment {\n  width: 120px;\n  height: 120px;\n  background-color: #72a34a;\n  border-radius: 50%;\n  text-align: center;\n  position: fixed;\n  top: 43%;\n  left: 72%;\n  transform: translate(-50%, 0);\n}\n\ndiv.educational-resources {\n  width: 110px;\n  height: 110px;\n  background-color: #f0b922;\n  border-radius: 50%;\n  text-align: center;\n  position: fixed;\n  top: 70%;\n  left: 28%;\n  transform: translate(-50%, 0);\n}\n\ndiv.settings {\n  width: 110px;\n  height: 110px;\n  background-color: #a0a0a0;\n  border-radius: 50%;\n  text-align: center;\n  position: fixed;\n  top: 70%;\n  left: 72%;\n  transform: translate(-50%, 0);\n}\n\ndiv.text {\n  position: relative;\n  top: 105%;\n}\n\n.user-profile .text {\n  position: relative;\n  top: 105%;\n}\n\nion-icon {\n  font-size: 66px;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2hvbWUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQUE7RUFFQSxrQkFBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsUUFBQTtFQUNBLDJCQUFBO0FBQUY7O0FBR0E7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7QUFBRjs7QUFHQTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtFQUVBLGNBQUE7RUFFQSxTQUFBO0FBRkY7O0FBS0E7RUFDRSxxQkFBQTtBQUZGOztBQUtBOzs7Ozs7Ozs7O0dBQUE7O0FBWUE7RUFDRSxhQUFBO0FBSEY7O0FBTUE7RUFDRSxZQUFBO0VBQ0EsYUFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLDZCQUFBO0FBSEY7O0FBTUE7RUFDRSxZQUFBO0VBQ0EsYUFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLDZCQUFBO0FBSEY7O0FBTUE7RUFDRSxZQUFBO0VBQ0EsYUFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLDZCQUFBO0FBSEY7O0FBTUE7RUFDRSxZQUFBO0VBQ0EsYUFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLDZCQUFBO0FBSEY7O0FBTUE7RUFDRSxZQUFBO0VBQ0EsYUFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLDZCQUFBO0FBSEY7O0FBTUE7RUFDRSxrQkFBQTtFQUNBLFNBQUE7QUFIRjs7QUFNQTtFQUNFLGtCQUFBO0VBQ0EsU0FBQTtBQUhGOztBQU1BO0VBQ0UsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxnQ0FBQTtBQUhGIiwiZmlsZSI6ImhvbWUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI2NvbnRhaW5lciB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcblxuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICB0b3A6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xufVxuXG4jY29udGFpbmVyIHN0cm9uZyB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgbGluZS1oZWlnaHQ6IDI2cHg7XG59XG5cbiNjb250YWluZXIgcCB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgbGluZS1oZWlnaHQ6IDIycHg7XG5cbiAgY29sb3I6ICM4YzhjOGM7XG5cbiAgbWFyZ2luOiAwO1xufVxuXG4jY29udGFpbmVyIGEge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5cbi8qIGlvbi1pY29uOmZpcnN0LWNoaWxkIHtcbiAgcG9zaXRpb246IGFic29sdXRlOyBsZWZ0OiA4JTtcbn1cblxuaW9uLWljb246bGFzdC1jaGlsZCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTsgbGVmdDogOTUlO1xufVxuXG5pb24tdGV4dCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTsgbGVmdDogMjUlO1xufSAqL1xuXG5kaXZ7XG4gIG91dGxpbmU6IG5vbmU7XG59XG5cbmRpdi51c2VyLXByb2ZpbGUge1xuICB3aWR0aDogMTUwcHg7XG4gIGhlaWdodDogMTUwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyMzUsIDE2MCwgOTApO1xuICBib3JkZXItcmFkaXVzOjUwJTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwb3NpdGlvbjpmaXhlZDtcbiAgdG9wOiAxMCU7XG4gIGxlZnQ6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgMCk7XG59XG5cbmRpdi5tZWRpY2FsLXJlY29yZHN7XG4gIHdpZHRoOjEyMHB4O1xuICBoZWlnaHQ6MTIwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYig3MCwgMTEyLCAxOTApO1xuICBib3JkZXItcmFkaXVzOjUwJTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwb3NpdGlvbjpmaXhlZDtcbiAgdG9wOiA0MyU7XG4gIGxlZnQ6IDI4JTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgMCk7XG59XG5cbmRpdi5hcHBvaW50bWVudHtcbiAgd2lkdGg6MTIwcHg7XG4gIGhlaWdodDoxMjBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjpyZ2IoMTE0LCAxNjMsIDc0KTtcbiAgYm9yZGVyLXJhZGl1czo1MCU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcG9zaXRpb246Zml4ZWQ7XG4gIHRvcDogNDMlO1xuICBsZWZ0OiA3MiU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIDApO1xufVxuXG5kaXYuZWR1Y2F0aW9uYWwtcmVzb3VyY2Vze1xuICB3aWR0aDoxMTBweDtcbiAgaGVpZ2h0OjExMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOnJnYigyNDAsIDE4NSwgMzQpO1xuICBib3JkZXItcmFkaXVzOjUwJTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwb3NpdGlvbjpmaXhlZDtcbiAgdG9wOiA3MCU7XG4gIGxlZnQ6IDI4JTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgMCk7XG59XG5cbmRpdi5zZXR0aW5nc3tcbiAgd2lkdGg6MTEwcHg7XG4gIGhlaWdodDoxMTBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjpyZ2IoMTYwLCAxNjAsIDE2MCk7XG4gIGJvcmRlci1yYWRpdXM6NTAlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBvc2l0aW9uOmZpeGVkO1xuICB0b3A6IDcwJTtcbiAgbGVmdDogNzIlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAwKTtcbn1cblxuZGl2LnRleHQge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogMTA1JTtcbn1cblxuLnVzZXItcHJvZmlsZSAudGV4dHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0b3A6IDEwNSU7XG59XG5cbmlvbi1pY29ue1xuICBmb250LXNpemU6IDY2cHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTsgXG4gIHRvcDogNTAlOyBcbiAgbGVmdDogNTAlOyBcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG59XG4iXX0= */");

/***/ }),

/***/ "zpKS":
/*!***********************************!*\
  !*** ./src/app/home/home.page.ts ***!
  \***********************************/
/*! exports provided: HomePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePage", function() { return HomePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_home_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./home.page.html */ "WcN3");
/* harmony import */ var _home_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home.page.scss */ "f6od");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_login_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/login.service */ "EFyh");
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @capacitor/core */ "gcOT");






const { Storage } = _capacitor_core__WEBPACK_IMPORTED_MODULE_5__["Plugins"];
let HomePage = class HomePage {
    constructor(LoginService) {
        this.LoginService = LoginService;
    }
    ngOnInit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            console.log("started app");
        });
    }
};
HomePage.ctorParameters = () => [
    { type: _services_login_service__WEBPACK_IMPORTED_MODULE_4__["LoginService"] }
];
HomePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-home',
        template: _raw_loader_home_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_home_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], HomePage);



/***/ })

}]);
//# sourceMappingURL=home-home-module-es2015.js.map