(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["medical-condition-medical-condition-module"], {
    /***/
    "DPk/":
    /*!***********************************************!*\
      !*** ./src/app/services/user-data.service.ts ***!
      \***********************************************/

    /*! exports provided: UserDataService */

    /***/
    function DPk(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UserDataService", function () {
        return UserDataService;
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


      var _capacitor_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @capacitor/core */
      "gcOT");

      var Storage = _capacitor_core__WEBPACK_IMPORTED_MODULE_2__["Plugins"].Storage;

      var UserDataService = /*#__PURE__*/function () {
        function UserDataService() {
          _classCallCheck(this, UserDataService);

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

        _createClass(UserDataService, [{
          key: "exportData",
          value: function exportData() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      this.userProfileString = JSON.stringify(this.userProfileValue);
                      this.medicalRecordString = JSON.stringify(this.medicalRecordValue);
                      this.exporter = {
                        userProfile: this.userProfileString,
                        medicalRecord: this.medicalRecordString
                      };
                      this.exporterString = JSON.stringify(this.exporter);

                    case 4:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }, {
          key: "loadUserProfile",
          value: function loadUserProfile() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              var userProfileGet, versionHistoryGet;
              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      _context2.next = 2;
                      return Storage.get({
                        key: this.userProfileKey
                      });

                    case 2:
                      userProfileGet = _context2.sent;
                      this.userProfileValue = JSON.parse(userProfileGet.value) || {};
                      console.log("finished loading");
                      _context2.next = 7;
                      return Storage.get({
                        key: this.versionHistoryKey
                      });

                    case 7:
                      versionHistoryGet = _context2.sent;
                      this.versionHistoryValue = JSON.parse(versionHistoryGet.value) || [];

                    case 9:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this);
            }));
          } //load user profile from storage

        }, {
          key: "saveUserProfile",
          value: function saveUserProfile() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
              var oldDataGet, oldDataValue, toSave;
              return regeneratorRuntime.wrap(function _callee3$(_context3) {
                while (1) {
                  switch (_context3.prev = _context3.next) {
                    case 0:
                      _context3.next = 2;
                      return Storage.get({
                        key: this.userProfileKey
                      });

                    case 2:
                      oldDataGet = _context3.sent;
                      oldDataValue = JSON.parse(oldDataGet.value) || {};
                      console.log(oldDataValue);
                      toSave = {
                        time: new Date().toISOString().slice(0, 16),
                        type: 'User Profile',
                        value: oldDataValue
                      };
                      this.saveVersion(toSave);
                      Storage.set({
                        key: this.userProfileKey,
                        value: JSON.stringify(this.userProfileValue)
                      });

                    case 8:
                    case "end":
                      return _context3.stop();
                  }
                }
              }, _callee3, this);
            }));
          } //save updated user profile to storage

        }, {
          key: "loadMedicalRecord",
          value: function loadMedicalRecord() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
              var medicalRecordGet, versionHistoryGet;
              return regeneratorRuntime.wrap(function _callee4$(_context4) {
                while (1) {
                  switch (_context4.prev = _context4.next) {
                    case 0:
                      _context4.next = 2;
                      return Storage.get({
                        key: this.medicalRecordKey
                      });

                    case 2:
                      medicalRecordGet = _context4.sent;
                      this.medicalRecordValue = JSON.parse(medicalRecordGet.value) || {};
                      console.log("finished loading");
                      _context4.next = 7;
                      return Storage.get({
                        key: this.versionHistoryKey
                      });

                    case 7:
                      versionHistoryGet = _context4.sent;
                      this.versionHistoryValue = JSON.parse(versionHistoryGet.value) || [];

                    case 9:
                    case "end":
                      return _context4.stop();
                  }
                }
              }, _callee4, this);
            }));
          } //load medical record from storage

        }, {
          key: "saveMedicalRecord",
          value: function saveMedicalRecord() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
              var oldDataGet, oldDataValue, toSave;
              return regeneratorRuntime.wrap(function _callee5$(_context5) {
                while (1) {
                  switch (_context5.prev = _context5.next) {
                    case 0:
                      _context5.next = 2;
                      return Storage.get({
                        key: this.medicalRecordKey
                      });

                    case 2:
                      oldDataGet = _context5.sent;
                      oldDataValue = JSON.parse(oldDataGet.value) || {};
                      toSave = {
                        time: new Date().toISOString().slice(0, 16),
                        type: 'Medical Record',
                        value: oldDataValue
                      };
                      this.saveVersion(toSave);
                      Storage.set({
                        key: this.medicalRecordKey,
                        value: JSON.stringify(this.medicalRecordValue)
                      });

                    case 7:
                    case "end":
                      return _context5.stop();
                  }
                }
              }, _callee5, this);
            }));
          } //save new medical record to storage

        }, {
          key: "saveVersion",
          value: function saveVersion(toSave) {
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
        }, {
          key: "convertToString",
          value: function convertToString() {
            this.userProfileString = JSON.stringify(this.userProfileValue);
          }
        }]);

        return UserDataService;
      }();

      UserDataService.ctorParameters = function () {
        return [];
      };

      UserDataService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      })], UserDataService);
      /***/
    },

    /***/
    "N6gp":
    /*!*****************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/medical-condition/medical-condition.page.html ***!
      \*****************************************************************************************************/

    /*! exports provided: default */

    /***/
    function N6gp(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"medical-record\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>Medical Conditions</ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-button (click)=\"edit()\">Edit</ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-card>\n    <ion-card-header>\n      <ion-card-title>Allergies</ion-card-title>\n    </ion-card-header>\n    <ion-card-content *ngIf=\"medicalRecord.allergies!=''\">\n      {{medicalRecord.allergies}}\n    </ion-card-content>\n    <ion-card-content *ngIf=\"medicalRecord.allergies==''\">\n      No content\n    </ion-card-content>\n  </ion-card>\n\n  <ion-card>\n    <ion-card-header>\n      <ion-card-title>Medications</ion-card-title>\n    </ion-card-header>\n    <ion-card-content *ngIf=\"medicalRecord.medications!=''\">\n      {{medicalRecord.medications}}\n    </ion-card-content>\n    <ion-card-content *ngIf=\"medicalRecord.medications==''\">\n      No content\n    </ion-card-content>\n  </ion-card>\n\n  <ion-card>\n    <ion-card-header>\n      <ion-card-title>Other Medical Conditions</ion-card-title>\n    </ion-card-header>\n    <ion-card-content *ngIf=\"medicalRecord.otherMedicalConditions!=''\">\n      {{medicalRecord.otherMedicalConditions}}\n    </ion-card-content>\n    <ion-card-content *ngIf=\"medicalRecord.otherMedicalConditions==''\">\n      No content\n    </ion-card-content>\n  </ion-card>\n</ion-content>";
      /***/
    },

    /***/
    "PAFr":
    /*!***************************************************************!*\
      !*** ./src/app/medical-condition/medical-condition.page.scss ***!
      \***************************************************************/

    /*! exports provided: default */

    /***/
    function PAFr(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-card-title {\n  font-size: medium;\n  font-weight: bold;\n  color: #ff5a00;\n}\n\nion-card-header {\n  padding-top: 15px;\n  padding-bottom: 10px;\n}\n\nion-card-content {\n  padding-top: 0px;\n  padding-bottom: 15px;\n  color: black;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL21lZGljYWwtY29uZGl0aW9uLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0FBQ0o7O0FBRUE7RUFDSSxpQkFBQTtFQUNBLG9CQUFBO0FBQ0o7O0FBRUE7RUFDSSxnQkFBQTtFQUNBLG9CQUFBO0VBQ0EsWUFBQTtBQUNKIiwiZmlsZSI6Im1lZGljYWwtY29uZGl0aW9uLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jYXJkLXRpdGxlIHtcbiAgICBmb250LXNpemU6bWVkaXVtO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGNvbG9yOnJnYigyNTUsIDkwLCAwKTtcbn1cblxuaW9uLWNhcmQtaGVhZGVyIHtcbiAgICBwYWRkaW5nLXRvcDogMTVweDtcbiAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcbn1cblxuaW9uLWNhcmQtY29udGVudHtcbiAgICBwYWRkaW5nLXRvcDogMHB4O1xuICAgIHBhZGRpbmctYm90dG9tOiAxNXB4O1xuICAgIGNvbG9yOiBibGFjaztcbiAgICAvL2ZvbnQtc2l6ZTogMTRweDtcbn0iXX0= */";
      /***/
    },

    /***/
    "cY2v":
    /*!***********************************************************************!*\
      !*** ./src/app/medical-condition/medical-condition-routing.module.ts ***!
      \***********************************************************************/

    /*! exports provided: MedicalConditionPageRoutingModule */

    /***/
    function cY2v(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MedicalConditionPageRoutingModule", function () {
        return MedicalConditionPageRoutingModule;
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


      var _medical_condition_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./medical-condition.page */
      "dM1V");

      var routes = [{
        path: '',
        component: _medical_condition_page__WEBPACK_IMPORTED_MODULE_3__["MedicalConditionPage"]
      }];

      var MedicalConditionPageRoutingModule = function MedicalConditionPageRoutingModule() {
        _classCallCheck(this, MedicalConditionPageRoutingModule);
      };

      MedicalConditionPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], MedicalConditionPageRoutingModule);
      /***/
    },

    /***/
    "dM1V":
    /*!*************************************************************!*\
      !*** ./src/app/medical-condition/medical-condition.page.ts ***!
      \*************************************************************/

    /*! exports provided: MedicalConditionPage */

    /***/
    function dM1V(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MedicalConditionPage", function () {
        return MedicalConditionPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_medical_condition_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./medical-condition.page.html */
      "N6gp");
      /* harmony import */


      var _medical_condition_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./medical-condition.page.scss */
      "PAFr");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _services_user_data_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../services/user-data.service */
      "DPk/");
      /* harmony import */


      var _edit_medical_conditions_edit_medical_conditions_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../edit-medical-conditions/edit-medical-conditions.page */
      "nuTe");

      var MedicalConditionPage = /*#__PURE__*/function () {
        function MedicalConditionPage(modalCtrl, userDataService) {
          _classCallCheck(this, MedicalConditionPage);

          this.modalCtrl = modalCtrl;
          this.userDataService = userDataService;
          this.medicalRecord = {
            allergies: '',
            medications: '',
            otherMedicalConditions: ''
          };
        }

        _createClass(MedicalConditionPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee6() {
              var _this = this;

              return regeneratorRuntime.wrap(function _callee6$(_context6) {
                while (1) {
                  switch (_context6.prev = _context6.next) {
                    case 0:
                      _context6.next = 2;
                      return this.userDataService.loadMedicalRecord();

                    case 2:
                      Object.keys(this.userDataService.medicalRecordValue).forEach(function (key) {
                        if (Object.keys(_this.medicalRecord).includes(key)) {
                          _this.medicalRecord[key] = _this.userDataService.medicalRecordValue[key];
                        }

                        console.log(key, _this.medicalRecord[key]);
                      });

                    case 3:
                    case "end":
                      return _context6.stop();
                  }
                }
              }, _callee6, this);
            }));
          }
        }, {
          key: "edit",
          value: function edit() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee7() {
              var modal;
              return regeneratorRuntime.wrap(function _callee7$(_context7) {
                while (1) {
                  switch (_context7.prev = _context7.next) {
                    case 0:
                      _context7.next = 2;
                      return this.modalCtrl.create({
                        component: _edit_medical_conditions_edit_medical_conditions_page__WEBPACK_IMPORTED_MODULE_6__["EditMedicalConditionsPage"],
                        backdropDismiss: false,
                        componentProps: {}
                      });

                    case 2:
                      modal = _context7.sent;
                      modal.present();

                    case 4:
                    case "end":
                      return _context7.stop();
                  }
                }
              }, _callee7, this);
            }));
          }
        }]);

        return MedicalConditionPage;
      }();

      MedicalConditionPage.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"]
        }, {
          type: _services_user_data_service__WEBPACK_IMPORTED_MODULE_5__["UserDataService"]
        }];
      };

      MedicalConditionPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-medical-condition',
        template: _raw_loader_medical_condition_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_medical_condition_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], MedicalConditionPage);
      /***/
    },

    /***/
    "xArE":
    /*!***************************************************************!*\
      !*** ./src/app/medical-condition/medical-condition.module.ts ***!
      \***************************************************************/

    /*! exports provided: MedicalConditionPageModule */

    /***/
    function xArE(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MedicalConditionPageModule", function () {
        return MedicalConditionPageModule;
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


      var _medical_condition_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./medical-condition-routing.module */
      "cY2v");
      /* harmony import */


      var _medical_condition_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./medical-condition.page */
      "dM1V");

      var MedicalConditionPageModule = function MedicalConditionPageModule() {
        _classCallCheck(this, MedicalConditionPageModule);
      };

      MedicalConditionPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _medical_condition_routing_module__WEBPACK_IMPORTED_MODULE_5__["MedicalConditionPageRoutingModule"]],
        declarations: [_medical_condition_page__WEBPACK_IMPORTED_MODULE_6__["MedicalConditionPage"]]
      })], MedicalConditionPageModule);
      /***/
    }
  }]);
})();
//# sourceMappingURL=medical-condition-medical-condition-module-es5.js.map