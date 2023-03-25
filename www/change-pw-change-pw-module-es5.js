(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["change-pw-change-pw-module"], {
    /***/
    "6+RE":
    /*!*************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/change-pw/change-pw.page.html ***!
      \*************************************************************************************/

    /*! exports provided: default */

    /***/
    function RE(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"settings\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>Password</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <form [formGroup]=\"setPasswordForm\" (ngSubmit)=\"confirmloginPW()\" style=\"margin-top: 20px;\">\n\n    <ion-item>\n      <ion-label class=\"psw\">Old Password</ion-label>\n      <ion-input type=\"password\" formControlName=\"oldPW\" placeholder=\"Required\"></ion-input>\n    </ion-item>\n\n    <ion-item lines=\"none\" *ngIf=\"isPWwrong\">\n      <ion-icon color=\"danger\" slot=\"start\" name=\"alert-circle-outline\"></ion-icon>\n      <ion-text color=\"danger\" class=\"form-error\">\n        Incorrect Password.\n      </ion-text>\n    </ion-item>\n\n    <ion-item>\n      <ion-label class=\"psw\">New Password</ion-label>\n      <ion-input type=\"password\" formControlName=\"setPW\" placeholder=\"Required\"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label class=\"psw\">Confirm Password</ion-label>\n      <ion-input type=\"password\" formControlName=\"confirmPW\" placeholder=\"Required\"></ion-input>\n    </ion-item>\n\n    <ion-item lines=\"none\" *ngIf=\"isPWConfirmNotEqual && !isChangePWSuceed\">\n      <ion-icon color=\"danger\" slot=\"start\" name=\"alert-circle-outline\"></ion-icon>\n      <ion-text color=\"danger\" class=\"form-error\">\n        Password and confirm does not match.\n      </ion-text>\n    </ion-item>\n\n    <ion-button color=\"danger\" expand=\"block\" type=\"submit\" [disabled]=\"!setPasswordForm.valid && !isChangePWSuceed\">\n      <ion-icon slot=\"start\" name=\"key-outline\"></ion-icon>\n      Reset password\n    </ion-button>\n\n  </form>\n\n  <ion-item lines=\"none\" *ngIf=\"isChangePWSuceed\">\n    <ion-icon color=\"success\" slot=\"start\" name=\"checkmark-circle-outline\"></ion-icon>\n    <ion-text color=\"success\" class=\"form-error\">\n      Password Changed.\n    </ion-text>\n  </ion-item>\n\n</ion-content>\n\n";
      /***/
    },

    /***/
    "PXFC":
    /*!***********************************************!*\
      !*** ./src/app/change-pw/change-pw.module.ts ***!
      \***********************************************/

    /*! exports provided: ChangePWPageModule */

    /***/
    function PXFC(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ChangePWPageModule", function () {
        return ChangePWPageModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _change_pw_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./change-pw-routing.module */
      "n4u9");
      /* harmony import */


      var _change_pw_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./change-pw.page */
      "SEMb");

      var ChangePWPageModule = function ChangePWPageModule() {
        _classCallCheck(this, ChangePWPageModule);
      };

      ChangePWPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _change_pw_routing_module__WEBPACK_IMPORTED_MODULE_5__["ChangePWPageRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]],
        declarations: [_change_pw_page__WEBPACK_IMPORTED_MODULE_6__["ChangePWPage"]]
      })], ChangePWPageModule);
      /***/
    },

    /***/
    "SEMb":
    /*!*********************************************!*\
      !*** ./src/app/change-pw/change-pw.page.ts ***!
      \*********************************************/

    /*! exports provided: ChangePWPage */

    /***/
    function SEMb(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ChangePWPage", function () {
        return ChangePWPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_change_pw_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./change-pw.page.html */
      "6+RE");
      /* harmony import */


      var _change_pw_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./change-pw.page.scss */
      "Td7q");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _services_login_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../services/login.service */
      "EFyh");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../app.component */
      "Sy1n");

      var ChangePWPage = /*#__PURE__*/function () {
        function ChangePWPage(formBuilder, loginService, appComponent) {
          _classCallCheck(this, ChangePWPage);

          this.formBuilder = formBuilder;
          this.loginService = loginService;
          this.appComponent = appComponent;
          this.setPasswordForm = this.formBuilder.group({
            oldPW: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
            setPW: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
            confirmPW: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]
          });
        }

        _createClass(ChangePWPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      _context.next = 2;
                      return this.loginService.loadPW();

                    case 2:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }, {
          key: "confirmloginPW",
          value: function confirmloginPW() {
            if (this.setPasswordForm.value['oldPW'] === this.loginService.login["password"]) {
              //this.loginService.timeOut();
              console.log("password correct");
              this.isPWwrong = false;
              this.setPW();
              this.appComponent.lockApp();
            } else {
              this.isPWwrong = true;
            }
          }
        }, {
          key: "setPW",
          value: function setPW() {
            var userInput = this.setPasswordForm.value["setPW"];
            var confirmInput = this.setPasswordForm.value["confirmPW"]; //console.log(userInput);

            if (userInput === confirmInput) {
              this.loginService.setPW(userInput);
              this.isChangePWSuceed = true;
            } else {
              this.isPWConfirmNotEqual = true;
            }
          }
        }]);

        return ChangePWPage;
      }();

      ChangePWPage.ctorParameters = function () {
        return [{
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"]
        }, {
          type: _services_login_service__WEBPACK_IMPORTED_MODULE_4__["LoginService"]
        }, {
          type: _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]
        }];
      };

      ChangePWPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-change-pw',
        template: _raw_loader_change_pw_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_change_pw_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], ChangePWPage);
      /***/
    },

    /***/
    "Td7q":
    /*!***********************************************!*\
      !*** ./src/app/change-pw/change-pw.page.scss ***!
      \***********************************************/

    /*! exports provided: default */

    /***/
    function Td7q(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".psw {\n  width: 50%;\n  font-size: 100%;\n}\n\nion-input {\n  text-align: end;\n}\n\nion-button {\n  width: 90%;\n  margin: auto;\n  margin-top: 10%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2NoYW5nZS1wdy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxVQUFBO0VBQ0EsZUFBQTtBQUNKOztBQUVBO0VBQ0ksZUFBQTtBQUNKOztBQUVBO0VBQ0ksVUFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0FBQ0oiLCJmaWxlIjoiY2hhbmdlLXB3LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wc3cge1xuICAgIHdpZHRoOiA1MCU7XG4gICAgZm9udC1zaXplOiAxMDAlO1xufVxuXG5pb24taW5wdXR7XG4gICAgdGV4dC1hbGlnbjogZW5kO1xufVxuXG5pb24tYnV0dG9uIHtcbiAgICB3aWR0aDogOTAlO1xuICAgIG1hcmdpbjogYXV0bztcbiAgICBtYXJnaW4tdG9wOiAxMCU7XG59Il19 */";
      /***/
    },

    /***/
    "n4u9":
    /*!*******************************************************!*\
      !*** ./src/app/change-pw/change-pw-routing.module.ts ***!
      \*******************************************************/

    /*! exports provided: ChangePWPageRoutingModule */

    /***/
    function n4u9(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ChangePWPageRoutingModule", function () {
        return ChangePWPageRoutingModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _change_pw_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./change-pw.page */
      "SEMb");

      var routes = [{
        path: '',
        component: _change_pw_page__WEBPACK_IMPORTED_MODULE_3__["ChangePWPage"]
      }];

      var ChangePWPageRoutingModule = function ChangePWPageRoutingModule() {
        _classCallCheck(this, ChangePWPageRoutingModule);
      };

      ChangePWPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], ChangePWPageRoutingModule);
      /***/
    }
  }]);
})();
//# sourceMappingURL=change-pw-change-pw-module-es5.js.map