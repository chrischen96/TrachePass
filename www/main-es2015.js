(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/chrischen/COMP0067_2021_Team10/src/main.ts */"zUnb");


/***/ }),

/***/ "34Y5":
/*!*************************************!*\
  !*** ./src/app/login/login.page.ts ***!
  \*************************************/
/*! exports provided: LoginPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPage", function() { return LoginPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_login_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./login.page.html */ "V6Ie");
/* harmony import */ var _login_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./login.page.scss */ "r67e");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_native_fingerprint_aio_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/fingerprint-aio/ngx */ "59pt");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _services_login_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../services/login.service */ "EFyh");









let LoginPage = class LoginPage {
    constructor(faio, router, modalCtrl, formBuilder, loginService) {
        this.faio = faio;
        this.router = router;
        this.modalCtrl = modalCtrl;
        this.formBuilder = formBuilder;
        this.loginService = loginService;
        this.passwordForm = this.formBuilder.group({
            inputPW: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]
        });
        this.setPasswordForm = this.formBuilder.group({
            setPW: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            confirmPW: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]
        });
        //here because ngOnInit don't run in modal
        //this.loginService.stopPauseMonitor();
    }
    ngOnInit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.loginService.loadPW();
            this.isPWsetted = "password" in this.loginService.login;
            this.isBioAvaliable = yield this.faio.isAvailable();
            console.log(this.isBioAvaliable);
        });
    }
    loginBio() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.faio.show({
                title: "Tracheostomy App",
                description: "Authenticate"
            }).then((result) => {
                console.log("authentication result", result);
                this.loginHandling();
            }).catch((error) => {
                console.log(error);
            });
        });
    }
    loginPW() {
        if (this.passwordForm.value['inputPW'] === this.loginService.login["password"]) {
            console.log("password correct");
            this.loginHandling();
            this.isPWwrong = false;
        }
        else {
            this.isPWwrong = true;
        }
    }
    setPW() {
        const userInput = this.setPasswordForm.value["setPW"];
        const confirmInput = this.setPasswordForm.value["confirmPW"];
        //console.log(userInput);
        if (userInput === confirmInput) {
            this.loginService.setPW(userInput);
            this.isPWsetted = "password" in this.loginService.login;
        }
        else {
            this.isPWConfirmNotEqual = true;
        }
        //console.log(this.isPWsetted);
    }
    loginHandling() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (this.isModal) {
                this.modalCtrl.dismiss();
            }
            else {
                this.router.navigate(['home']);
            }
        });
    }
};
LoginPage.ctorParameters = () => [
    { type: _ionic_native_fingerprint_aio_ngx__WEBPACK_IMPORTED_MODULE_6__["FingerprintAIO"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["ModalController"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] },
    { type: _services_login_service__WEBPACK_IMPORTED_MODULE_8__["LoginService"] }
];
LoginPage.propDecorators = {
    isModal: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }]
};
LoginPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-login',
        template: _raw_loader_login_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_login_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], LoginPage);



/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "EFyh":
/*!*******************************************!*\
  !*** ./src/app/services/login.service.ts ***!
  \*******************************************/
/*! exports provided: LoginService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginService", function() { return LoginService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @capacitor/core */ "gcOT");




const { Storage } = _capacitor_core__WEBPACK_IMPORTED_MODULE_3__["Plugins"];
let LoginService = class LoginService {
    constructor(modalCtrl) {
        this.modalCtrl = modalCtrl;
        this.login = {};
        this.LOGIN_STORAGE = "login";
    }
    loadPW() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            // create a promise that load the data from database
            const loginJSON = yield Storage.get({ key: this.LOGIN_STORAGE });
            console.log(loginJSON);
            // set the current session value using data from DB, if it doesn't exist it wll initialize a empty array
            this.login = JSON.parse(loginJSON.value) || {};
            console.log("finished loading");
        });
    }
    setPW(password) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.login['password'] = password;
            const JSONString = JSON.stringify(this.login);
            Storage.set({
                key: this.LOGIN_STORAGE,
                value: JSONString,
            });
            console.log(Storage.get({ key: this.LOGIN_STORAGE }));
        });
    }
};
LoginService.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] }
];
LoginService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], LoginService);



/***/ }),

/***/ "KwcL":
/*!*************************************************************************************************************************************************!*\
  !*** ./node_modules/@ionic/pwa-elements/dist/esm lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
  \*************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./pwa-action-sheet.entry.js": [
		"jDxf",
		43
	],
	"./pwa-camera-modal-instance.entry.js": [
		"37vE",
		44
	],
	"./pwa-camera-modal.entry.js": [
		"cJxf",
		45
	],
	"./pwa-camera.entry.js": [
		"eGHz",
		46
	],
	"./pwa-toast.entry.js": [
		"fHjd",
		47
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "KwcL";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./app.component.html */ "VzVu");
/* harmony import */ var _app_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component.scss */ "ynWL");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _login_login_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./login/login.page */ "34Y5");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @capacitor/core */ "gcOT");





//import { SplashScreen } from '@ionic-native/splash-screen/ngx';



const { SplashScreen } = _capacitor_core__WEBPACK_IMPORTED_MODULE_7__["Plugins"];
let AppComponent = class AppComponent {
    constructor(platform, router, modalCtrl) {
        this.platform = platform;
        this.router = router;
        this.modalCtrl = modalCtrl;
        this.initializeApp();
    }
    onTouchStart() {
        this.restartIdleLogoutTimer();
    }
    initializeApp() {
        this.platform.ready().then(() => {
            SplashScreen.hide();
        });
    }
    restartIdleLogoutTimer() {
        clearTimeout(this.idleLogoutTimer);
        console.log(this.router.url);
        if (!this.isInLoginModal && !(this.router.url == "/login")) {
            this.idleLogoutTimer = setTimeout(() => {
                this.lockApp();
            }, 120000);
            console.log('Touched / page started Timer reset');
        }
        else {
            console.log('inLogin');
        }
    }
    lockApp() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            clearTimeout(this.idleLogoutTimer);
            this.isInLoginModal = true;
            const modal = yield this.modalCtrl.create({
                component: _login_login_page__WEBPACK_IMPORTED_MODULE_5__["LoginPage"],
                backdropDismiss: false,
                componentProps: {
                    isModal: true
                },
                cssClass: 'login-modal'
            });
            modal.present();
            modal.onDidDismiss().then(() => {
                this.isInLoginModal = false;
                this.restartIdleLogoutTimer();
            });
        });
    }
};
AppComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["Platform"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ModalController"] }
];
AppComponent.propDecorators = {
    onTouchStart: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["HostListener"], args: ['touchstart',] }]
};
AppComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-root',
        template: _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_app_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], AppComponent);



/***/ }),

/***/ "V6Ie":
/*!*****************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.page.html ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header *ngIf=\"!isModal\">\n</ion-header>\n\n<ion-content >\n<div style=\"width: 80%; margin: auto;\">\n  <div style=\"display: flex; justify-content: center; margin-top: 100px; margin-bottom: 30px;\">\n    <ion-img \n    style=\"width: 1in; height: 1in;\" \n    src=\"../assets/icon/icon.png\"></ion-img>\n  </div>\n\n  <div *ngIf=\"isBioAvaliable && isPWsetted\">\n    <ion-button style=\"margin-top: 30px;\" color=\"primary\" expand=\"block\" (click)=\"loginBio()\">\n        <ion-icon slot=\"start\" name=\"key-outline\"></ion-icon>\n        Login with Biometric\n      </ion-button>\n  </div>\n\n  <div *ngIf=\"isPWsetted\" style=\"margin-top: 20%;\">\n    <form [formGroup]=\"passwordForm\" (ngSubmit)=\"loginPW()\">\n      <ion-item lines=\"full\">\n        <ion-input type=\"password\" formControlName=\"inputPW\" placeholder=\"Password\"\n        ></ion-input>\n      </ion-item>\n      <ion-item lines=\"none\" *ngIf=\"isPWwrong\">\n        <ion-icon color=\"danger\" slot=\"start\" name=\"alert-circle-outline\"></ion-icon>\n        <ion-text color=\"danger\" class=\"form-error\">\n          Incorrect Password.\n        </ion-text>\n      </ion-item>\n      <ion-button style=\"margin-top: 5%;\" color=\"primary\" expand=\"block\" type=\"submit\" [disabled]=\"!passwordForm.valid\">\n        <ion-icon slot=\"start\" name=\"key-outline\"></ion-icon>\n        Login\n      </ion-button>\n    </form>\n  </div>\n\n  <div *ngIf=\"!isPWsetted\">\n    <ion-toolbar style=\"text-align: center;\">\n      <ion-label>Welcome to Tracheostomy Passport</ion-label>\n    </ion-toolbar>\n    <ion-toolbar style=\"text-align: center;\">\n      <ion-label>Please Setup Your Password</ion-label>\n    </ion-toolbar>\n\n    <form [formGroup]=\"setPasswordForm\" (ngSubmit)=\"setPW()\" style=\"margin-top: 5%;\">\n      <ion-item style=\"margin-left: -15px;\">\n        <ion-input type=\"password\" formControlName=\"setPW\" placeholder=\"New Password\"></ion-input>\n      </ion-item>\n      <ion-item style=\"margin-left: -15px;\">\n        <ion-input type=\"password\" formControlName=\"confirmPW\" placeholder=\"Confirm Password\"></ion-input>\n      </ion-item>\n      <ion-item lines=\"none\" *ngIf=\"isPWConfirmNotEqual\">\n        <ion-icon color=\"danger\" slot=\"start\" name=\"alert-circle-outline\"></ion-icon>\n        <ion-text color=\"danger\" class=\"form-error\">\n          Password and confirm does not match.\n        </ion-text>\n      </ion-item>\n      <ion-button style=\"margin-top: 5%;\"\n      color=\"primary\" expand=\"block\" type=\"submit\" [disabled]=\"!setPasswordForm.valid\">\n        <ion-icon slot=\"start\" name=\"key-outline\"></ion-icon>\n        Set password\n      </ion-button>\n    </form>\n  </div>\n</div>\n</ion-content>");

/***/ }),

/***/ "VzVu":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-app>\n  <ion-router-outlet></ion-router-outlet>\n</ion-app>\n");

/***/ }),

/***/ "X3zk":
/*!***************************************!*\
  !*** ./src/app/login/login.module.ts ***!
  \***************************************/
/*! exports provided: LoginPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageModule", function() { return LoginPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _login_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./login-routing.module */ "euwS");
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./login.page */ "34Y5");







let LoginPageModule = class LoginPageModule {
};
LoginPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _login_routing_module__WEBPACK_IMPORTED_MODULE_5__["LoginPageRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]
        ],
        declarations: [_login_page__WEBPACK_IMPORTED_MODULE_6__["LoginPage"]],
    })
], LoginPageModule);



/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var ngx_ionic_image_viewer__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-ionic-image-viewer */ "6g0+");
/* harmony import */ var _ionic_native_barcode_scanner_ngx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic-native/barcode-scanner/ngx */ "WdVq");
/* harmony import */ var _ionic_native_fingerprint_aio_ngx__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic-native/fingerprint-aio/ngx */ "59pt");
/* harmony import */ var _login_login_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./login/login.module */ "X3zk");
/* harmony import */ var _angular_service_worker__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/service-worker */ "Jho9");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../environments/environment */ "AytR");














let AppModule = class AppModule {
};
AppModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]],
        entryComponents: [],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"].forRoot({ mode: "ios" }),
            _app_routing_module__WEBPACK_IMPORTED_MODULE_7__["AppRoutingModule"],
            ngx_ionic_image_viewer__WEBPACK_IMPORTED_MODULE_8__["NgxIonicImageViewerModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
            _login_login_module__WEBPACK_IMPORTED_MODULE_11__["LoginPageModule"],
            _angular_service_worker__WEBPACK_IMPORTED_MODULE_12__["ServiceWorkerModule"].register('ngsw-worker.js', { enabled: _environments_environment__WEBPACK_IMPORTED_MODULE_13__["environment"].production })
        ],
        providers: [
            { provide: _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouteReuseStrategy"], useClass: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicRouteStrategy"] },
            _ionic_native_barcode_scanner_ngx__WEBPACK_IMPORTED_MODULE_9__["BarcodeScanner"],
            _ionic_native_fingerprint_aio_ngx__WEBPACK_IMPORTED_MODULE_10__["FingerprintAIO"],
        ],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]],
    })
], AppModule);



/***/ }),

/***/ "euwS":
/*!***********************************************!*\
  !*** ./src/app/login/login-routing.module.ts ***!
  \***********************************************/
/*! exports provided: LoginPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageRoutingModule", function() { return LoginPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login.page */ "34Y5");




const routes = [
    {
        path: '',
        component: _login_page__WEBPACK_IMPORTED_MODULE_3__["LoginPage"]
    }
];
let LoginPageRoutingModule = class LoginPageRoutingModule {
};
LoginPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], LoginPageRoutingModule);



/***/ }),

/***/ "kLfG":
/*!*****************************************************************************************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
  \*****************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./ion-action-sheet.entry.js": [
		"dUtr",
		"common",
		0
	],
	"./ion-alert.entry.js": [
		"Q8AI",
		"common",
		1
	],
	"./ion-app_8.entry.js": [
		"hgI1",
		"common",
		2
	],
	"./ion-avatar_3.entry.js": [
		"CfoV",
		"common",
		3
	],
	"./ion-back-button.entry.js": [
		"Nt02",
		"common",
		4
	],
	"./ion-backdrop.entry.js": [
		"Q2Bp",
		5
	],
	"./ion-button_2.entry.js": [
		"0Pbj",
		"common",
		6
	],
	"./ion-card_5.entry.js": [
		"ydQj",
		"common",
		7
	],
	"./ion-checkbox.entry.js": [
		"4fMi",
		"common",
		8
	],
	"./ion-chip.entry.js": [
		"czK9",
		"common",
		9
	],
	"./ion-col_3.entry.js": [
		"/CAe",
		10
	],
	"./ion-datetime_3.entry.js": [
		"WgF3",
		"common",
		11
	],
	"./ion-fab_3.entry.js": [
		"uQcF",
		"common",
		12
	],
	"./ion-img.entry.js": [
		"wHD8",
		13
	],
	"./ion-infinite-scroll_2.entry.js": [
		"2lz6",
		14
	],
	"./ion-input.entry.js": [
		"ercB",
		"common",
		15
	],
	"./ion-item-option_3.entry.js": [
		"MGMP",
		"common",
		16
	],
	"./ion-item_8.entry.js": [
		"9bur",
		"common",
		17
	],
	"./ion-loading.entry.js": [
		"cABk",
		"common",
		18
	],
	"./ion-menu_3.entry.js": [
		"kyFE",
		"common",
		19
	],
	"./ion-modal.entry.js": [
		"TvZU",
		"common",
		20
	],
	"./ion-nav_2.entry.js": [
		"vnES",
		"common",
		21
	],
	"./ion-popover.entry.js": [
		"qCuA",
		"common",
		22
	],
	"./ion-progress-bar.entry.js": [
		"0tOe",
		"common",
		23
	],
	"./ion-radio_2.entry.js": [
		"h11V",
		"common",
		24
	],
	"./ion-range.entry.js": [
		"XGij",
		"common",
		25
	],
	"./ion-refresher_2.entry.js": [
		"nYbb",
		"common",
		26
	],
	"./ion-reorder_2.entry.js": [
		"smMY",
		"common",
		27
	],
	"./ion-ripple-effect.entry.js": [
		"STjf",
		28
	],
	"./ion-route_4.entry.js": [
		"k5eQ",
		"common",
		29
	],
	"./ion-searchbar.entry.js": [
		"OR5t",
		"common",
		30
	],
	"./ion-segment_2.entry.js": [
		"fSgp",
		"common",
		31
	],
	"./ion-select_3.entry.js": [
		"lfGF",
		"common",
		32
	],
	"./ion-slide_2.entry.js": [
		"5xYT",
		33
	],
	"./ion-spinner.entry.js": [
		"nI0H",
		"common",
		34
	],
	"./ion-split-pane.entry.js": [
		"NAQR",
		35
	],
	"./ion-tab-bar_2.entry.js": [
		"knkW",
		"common",
		36
	],
	"./ion-tab_2.entry.js": [
		"TpdJ",
		"common",
		37
	],
	"./ion-text.entry.js": [
		"ISmu",
		"common",
		38
	],
	"./ion-textarea.entry.js": [
		"U7LX",
		"common",
		39
	],
	"./ion-toast.entry.js": [
		"L3sA",
		"common",
		40
	],
	"./ion-toggle.entry.js": [
		"IUOf",
		"common",
		41
	],
	"./ion-virtual-scroll.entry.js": [
		"8Mb5",
		42
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "kLfG";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "r67e":
/*!***************************************!*\
  !*** ./src/app/login/login.page.scss ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsb2dpbi5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");



const routes = [
    {
        path: 'home',
        loadChildren: () => __webpack_require__.e(/*! import() | home-home-module */ "home-home-module").then(__webpack_require__.bind(null, /*! ./home/home.module */ "ct+p")).then(m => m.HomePageModule)
    },
    {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
    },
    {
        path: 'educational-resources',
        loadChildren: () => __webpack_require__.e(/*! import() | educational-resources-educational-resources-module */ "educational-resources-educational-resources-module").then(__webpack_require__.bind(null, /*! ./educational-resources/educational-resources.module */ "o1+s")).then(m => m.EducationalResourcesPageModule)
    },
    {
        path: 'login',
        loadChildren: () => Promise.resolve(/*! import() */).then(__webpack_require__.bind(null, /*! ./login/login.module */ "X3zk")).then(m => m.LoginPageModule)
    },
    {
        path: 'patient-info',
        children: [
            {
                path: 'edit-patient-info',
                loadChildren: () => Promise.all(/*! import() | edit-patient-info-edit-patient-info-module */[__webpack_require__.e("default~edit-patient-info-edit-patient-info-module~patient-info-patient-info-module"), __webpack_require__.e("edit-patient-info-edit-patient-info-module")]).then(__webpack_require__.bind(null, /*! ./edit-patient-info/edit-patient-info.module */ "XBck")).then(m => m.EditPatientInfoPageModule)
            },
            {
                path: '',
                loadChildren: () => Promise.all(/*! import() | patient-info-patient-info-module */[__webpack_require__.e("default~edit-patient-info-edit-patient-info-module~patient-info-patient-info-module"), __webpack_require__.e("patient-info-patient-info-module")]).then(__webpack_require__.bind(null, /*! ./patient-info/patient-info.module */ "nPsR")).then(m => m.PatientInfoPageModule)
            },
        ]
    },
    {
        path: 'medical-record',
        children: [
            {
                path: '',
                loadChildren: () => __webpack_require__.e(/*! import() | medical-record-medical-record-module */ "medical-record-medical-record-module").then(__webpack_require__.bind(null, /*! ./medical-record/medical-record.module */ "ujJ6")).then(m => m.MedicalRecordPageModule)
            },
            {
                path: 'medical-condition',
                loadChildren: () => Promise.all(/*! import() | medical-condition-medical-condition-module */[__webpack_require__.e("common"), __webpack_require__.e("medical-condition-medical-condition-module")]).then(__webpack_require__.bind(null, /*! ./medical-condition/medical-condition.module */ "xArE")).then(m => m.MedicalConditionPageModule)
            },
            {
                path: 'pathology',
                loadChildren: () => Promise.all(/*! import() | pathology-pathology-module */[__webpack_require__.e("common"), __webpack_require__.e("pathology-pathology-module")]).then(__webpack_require__.bind(null, /*! ./pathology/pathology.module */ "B9dj")).then(m => m.PathologyPageModule)
            },
            {
                path: 'tracheostomy-details',
                loadChildren: () => Promise.all(/*! import() | tracheostomy-details-tracheostomy-details-module */[__webpack_require__.e("default~edit-tracheostomy-details-edit-tracheostomy-details-module~tracheostomy-details-tracheostomy~a3467248"), __webpack_require__.e("tracheostomy-details-tracheostomy-details-module")]).then(__webpack_require__.bind(null, /*! ./tracheostomy-details/tracheostomy-details.module */ "3BWf")).then(m => m.TracheostomyDetailsPageModule)
            },
            {
                path: 'operative-history',
                loadChildren: () => Promise.all(/*! import() | operative-history-operative-history-module */[__webpack_require__.e("default~edit-operative-history-edit-operative-history-module~operative-history-operative-history-mod~7fb5fd10"), __webpack_require__.e("common"), __webpack_require__.e("operative-history-operative-history-module")]).then(__webpack_require__.bind(null, /*! ./operative-history/operative-history.module */ "tiJM")).then(m => m.OperativeHistoryPageModule)
            },
            {
                path: 'edit-pathology',
                loadChildren: () => Promise.all(/*! import() | edit-pathology-edit-pathology-module */[__webpack_require__.e("common"), __webpack_require__.e("edit-pathology-edit-pathology-module")]).then(__webpack_require__.bind(null, /*! ./edit-pathology/edit-pathology.module */ "cc9H")).then(m => m.EditPathologyPageModule)
            },
            {
                path: 'edit-tracheostomy-details',
                loadChildren: () => Promise.all(/*! import() | edit-tracheostomy-details-edit-tracheostomy-details-module */[__webpack_require__.e("default~edit-tracheostomy-details-edit-tracheostomy-details-module~tracheostomy-details-tracheostomy~a3467248"), __webpack_require__.e("edit-tracheostomy-details-edit-tracheostomy-details-module")]).then(__webpack_require__.bind(null, /*! ./edit-tracheostomy-details/edit-tracheostomy-details.module */ "FQ0C")).then(m => m.EditTracheostomyDetailsPageModule)
            },
            {
                path: 'edit-operative-history',
                loadChildren: () => Promise.all(/*! import() | edit-operative-history-edit-operative-history-module */[__webpack_require__.e("default~edit-operative-history-edit-operative-history-module~operative-history-operative-history-mod~7fb5fd10"), __webpack_require__.e("common"), __webpack_require__.e("edit-operative-history-edit-operative-history-module")]).then(__webpack_require__.bind(null, /*! ./edit-operative-history/edit-operative-history.module */ "2dbw")).then(m => m.EditOperativeHistoryPageModule)
            },
        ]
    },
    {
        path: 'settings',
        children: [
            {
                path: '',
                loadChildren: () => __webpack_require__.e(/*! import() | settings-settings-module */ "settings-settings-module").then(__webpack_require__.bind(null, /*! ./settings/settings.module */ "7wo0")).then(m => m.SettingsPageModule)
            },
            {
                path: 'change-pw',
                loadChildren: () => __webpack_require__.e(/*! import() | change-pw-change-pw-module */ "change-pw-change-pw-module").then(__webpack_require__.bind(null, /*! ./change-pw/change-pw.module */ "PXFC")).then(m => m.ChangePWPageModule)
            },
            {
                path: 'version-history',
                loadChildren: () => Promise.all(/*! import() | version-history-version-history-module */[__webpack_require__.e("common"), __webpack_require__.e("version-history-version-history-module")]).then(__webpack_require__.bind(null, /*! ./version-history/version-history.module */ "JzFi")).then(m => m.VersionHistoryPageModule)
            },
            {
                path: 'open-version',
                loadChildren: () => Promise.all(/*! import() | open-version-open-version-module */[__webpack_require__.e("common"), __webpack_require__.e("open-version-open-version-module")]).then(__webpack_require__.bind(null, /*! ./open-version/open-version.module */ "TqIz")).then(m => m.OpenVersionPageModule)
            },
        ]
    },
    {
        path: 'appointments',
        loadChildren: () => Promise.all(/*! import() | appointments-appointments-module */[__webpack_require__.e("default~appointments-appointments-module~saved-appointment-saved-appointment-module"), __webpack_require__.e("common"), __webpack_require__.e("appointments-appointments-module")]).then(__webpack_require__.bind(null, /*! ./appointments/appointments.module */ "MCT3")).then(m => m.AppointmentsPageModule)
    },
    {
        path: 'saved-appointment',
        loadChildren: () => Promise.all(/*! import() | saved-appointment-saved-appointment-module */[__webpack_require__.e("default~appointments-appointments-module~saved-appointment-saved-appointment-module"), __webpack_require__.e("saved-appointment-saved-appointment-module")]).then(__webpack_require__.bind(null, /*! ./saved-appointment/saved-appointment.module */ "InTJ")).then(m => m.SavedAppointmentPageModule)
    },
    {
        path: 'appointment-reminder',
        loadChildren: () => Promise.all(/*! import() | appointment-reminder-appointment-reminder-module */[__webpack_require__.e("common"), __webpack_require__.e("appointment-reminder-appointment-reminder-module")]).then(__webpack_require__.bind(null, /*! ./appointment-reminder/appointment-reminder.module */ "piIl")).then(m => m.AppointmentReminderPageModule)
    },
    {
        path: 'edit-medical-conditions',
        loadChildren: () => Promise.all(/*! import() | edit-medical-conditions-edit-medical-conditions-module */[__webpack_require__.e("common"), __webpack_require__.e("edit-medical-conditions-edit-medical-conditions-module")]).then(__webpack_require__.bind(null, /*! ./edit-medical-conditions/edit-medical-conditions.module */ "b8uo")).then(m => m.EditMedicalConditionsPageModule)
    },
    {
        path: 'view-operative-history',
        loadChildren: () => Promise.all(/*! import() | view-operative-history-view-operative-history-module */[__webpack_require__.e("default~edit-operative-history-edit-operative-history-module~operative-history-operative-history-mod~7fb5fd10"), __webpack_require__.e("common"), __webpack_require__.e("view-operative-history-view-operative-history-module")]).then(__webpack_require__.bind(null, /*! ./view-operative-history/view-operative-history.module */ "bo/C")).then(m => m.ViewOperativeHistoryPageModule)
    },
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, { preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_2__["PreloadAllModules"] })
        ],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "ynWL":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".error {\n  color: red;\n}\n\ndiv {\n  outline: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2FwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFVBQUE7QUFDSjs7QUFFQTtFQUNJLGFBQUE7QUFDSiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZXJyb3Ige1xuICAgIGNvbG9yOnJlZDtcbn1cblxuZGl2IHtcbiAgICBvdXRsaW5lOiBub25lO1xufSJdfQ== */");

/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "a3Wg");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/* harmony import */ var _ionic_pwa_elements_loader__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/pwa-elements/loader */ "2Zi2");





//import 'hammerjs'
Object(_ionic_pwa_elements_loader__WEBPACK_IMPORTED_MODULE_4__["defineCustomElements"])(window);
if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.log(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map