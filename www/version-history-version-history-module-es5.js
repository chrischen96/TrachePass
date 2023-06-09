(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["version-history-version-history-module"], {
    /***/
    "0Fer":
    /*!*********************************************************!*\
      !*** ./src/app/version-history/version-history.page.ts ***!
      \*********************************************************/

    /*! exports provided: VersionHistoryPage */

    /***/
    function Fer(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "VersionHistoryPage", function () {
        return VersionHistoryPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_version_history_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./version-history.page.html */
      "SqB5");
      /* harmony import */


      var _version_history_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./version-history.page.scss */
      "n+xp");
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


      var _open_version_open_version_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../open-version/open-version.page */
      "GaT9");

      var VersionHistoryPage = /*#__PURE__*/function () {
        function VersionHistoryPage(userDataService, modalCtrl) {
          _classCallCheck(this, VersionHistoryPage);

          this.userDataService = userDataService;
          this.modalCtrl = modalCtrl;
          this.versionHistory = [];
        }

        _createClass(VersionHistoryPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      _context.next = 2;
                      return this.userDataService.loadUserProfile();

                    case 2:
                      _context.next = 4;
                      return this.userDataService.loadMedicalRecord();

                    case 4:
                      this.versionHistory = this.userDataService.versionHistoryValue;
                      console.log(this.versionHistory);

                    case 6:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }, {
          key: "openVersion",
          value: function openVersion(index) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              var entry, modal, _yield$modal$onWillDi, data;

              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      //console.log(typeof this.userDataService.old[index]);
                      entry = this.versionHistory[index];
                      console.log(typeof entry.value);
                      console.log(entry);
                      console.log(entry.value);
                      _context2.next = 6;
                      return this.modalCtrl.create({
                        component: _open_version_open_version_page__WEBPACK_IMPORTED_MODULE_6__["OpenVersionPage"],
                        componentProps: {
                          date: entry.time,
                          type: entry.type,
                          value: entry.value
                        },
                        cssClass: 'login-modal'
                      });

                    case 6:
                      modal = _context2.sent;
                      _context2.next = 9;
                      return modal.present();

                    case 9:
                      _context2.next = 11;
                      return modal.onWillDismiss();

                    case 11:
                      _yield$modal$onWillDi = _context2.sent;
                      data = _yield$modal$onWillDi.data;
                      console.log(data.restoreValues);
                      console.log(typeof data.restoreValues);

                      if (data.restoreValues == true) {
                        if (entry.type == 'User Profile') {
                          this.userDataService.userProfileValue = entry.value;
                          this.userDataService.saveUserProfile();
                        } else {
                          this.userDataService.medicalRecordValue = entry.value;
                          this.userDataService.saveMedicalRecord();
                        }
                      }

                    case 16:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this);
            }));
          }
        }]);

        return VersionHistoryPage;
      }();

      VersionHistoryPage.ctorParameters = function () {
        return [{
          type: _services_user_data_service__WEBPACK_IMPORTED_MODULE_5__["UserDataService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"]
        }];
      };

      VersionHistoryPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-version-history',
        template: _raw_loader_version_history_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_version_history_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], VersionHistoryPage);
      /***/
    },

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
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
              return regeneratorRuntime.wrap(function _callee3$(_context3) {
                while (1) {
                  switch (_context3.prev = _context3.next) {
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
                      return _context3.stop();
                  }
                }
              }, _callee3, this);
            }));
          }
        }, {
          key: "loadUserProfile",
          value: function loadUserProfile() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
              var userProfileGet, versionHistoryGet;
              return regeneratorRuntime.wrap(function _callee4$(_context4) {
                while (1) {
                  switch (_context4.prev = _context4.next) {
                    case 0:
                      _context4.next = 2;
                      return Storage.get({
                        key: this.userProfileKey
                      });

                    case 2:
                      userProfileGet = _context4.sent;
                      this.userProfileValue = JSON.parse(userProfileGet.value) || {};
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
          } //load user profile from storage

        }, {
          key: "saveUserProfile",
          value: function saveUserProfile() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
              var oldDataGet, oldDataValue, toSave;
              return regeneratorRuntime.wrap(function _callee5$(_context5) {
                while (1) {
                  switch (_context5.prev = _context5.next) {
                    case 0:
                      _context5.next = 2;
                      return Storage.get({
                        key: this.userProfileKey
                      });

                    case 2:
                      oldDataGet = _context5.sent;
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
                      return _context5.stop();
                  }
                }
              }, _callee5, this);
            }));
          } //save updated user profile to storage

        }, {
          key: "loadMedicalRecord",
          value: function loadMedicalRecord() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee6() {
              var medicalRecordGet, versionHistoryGet;
              return regeneratorRuntime.wrap(function _callee6$(_context6) {
                while (1) {
                  switch (_context6.prev = _context6.next) {
                    case 0:
                      _context6.next = 2;
                      return Storage.get({
                        key: this.medicalRecordKey
                      });

                    case 2:
                      medicalRecordGet = _context6.sent;
                      this.medicalRecordValue = JSON.parse(medicalRecordGet.value) || {};
                      console.log("finished loading");
                      _context6.next = 7;
                      return Storage.get({
                        key: this.versionHistoryKey
                      });

                    case 7:
                      versionHistoryGet = _context6.sent;
                      this.versionHistoryValue = JSON.parse(versionHistoryGet.value) || [];

                    case 9:
                    case "end":
                      return _context6.stop();
                  }
                }
              }, _callee6, this);
            }));
          } //load medical record from storage

        }, {
          key: "saveMedicalRecord",
          value: function saveMedicalRecord() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee7() {
              var oldDataGet, oldDataValue, toSave;
              return regeneratorRuntime.wrap(function _callee7$(_context7) {
                while (1) {
                  switch (_context7.prev = _context7.next) {
                    case 0:
                      _context7.next = 2;
                      return Storage.get({
                        key: this.medicalRecordKey
                      });

                    case 2:
                      oldDataGet = _context7.sent;
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
                      return _context7.stop();
                  }
                }
              }, _callee7, this);
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
    "JzFi":
    /*!***********************************************************!*\
      !*** ./src/app/version-history/version-history.module.ts ***!
      \***********************************************************/

    /*! exports provided: VersionHistoryPageModule */

    /***/
    function JzFi(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "VersionHistoryPageModule", function () {
        return VersionHistoryPageModule;
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


      var _version_history_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./version-history-routing.module */
      "wtrP");
      /* harmony import */


      var _version_history_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./version-history.page */
      "0Fer");

      var VersionHistoryPageModule = function VersionHistoryPageModule() {
        _classCallCheck(this, VersionHistoryPageModule);
      };

      VersionHistoryPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _version_history_routing_module__WEBPACK_IMPORTED_MODULE_5__["VersionHistoryPageRoutingModule"]],
        declarations: [_version_history_page__WEBPACK_IMPORTED_MODULE_6__["VersionHistoryPage"]]
      })], VersionHistoryPageModule);
      /***/
    },

    /***/
    "SqB5":
    /*!*************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/version-history/version-history.page.html ***!
      \*************************************************************************************************/

    /*! exports provided: default */

    /***/
    function SqB5(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"settings\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>Version History</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-item *ngFor=\"let history of versionHistory; index as i\">\n    <ion-label>\n      <h2>{{history.time | date:'medium'}}</h2>\n      <h3>{{history.type}}</h3>\n    </ion-label>\n    <ion-buttons slot=\"end\">\n      <ion-button (click)=\"openVersion(i)\">View</ion-button>\n    </ion-buttons>\n  </ion-item>\n</ion-content>\n";
      /***/
    },

    /***/
    "n+xp":
    /*!***********************************************************!*\
      !*** ./src/app/version-history/version-history.page.scss ***!
      \***********************************************************/

    /*! exports provided: default */

    /***/
    function nXp(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ2ZXJzaW9uLWhpc3RvcnkucGFnZS5zY3NzIn0= */";
      /***/
    },

    /***/
    "wtrP":
    /*!*******************************************************************!*\
      !*** ./src/app/version-history/version-history-routing.module.ts ***!
      \*******************************************************************/

    /*! exports provided: VersionHistoryPageRoutingModule */

    /***/
    function wtrP(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "VersionHistoryPageRoutingModule", function () {
        return VersionHistoryPageRoutingModule;
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


      var _version_history_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./version-history.page */
      "0Fer");

      var routes = [{
        path: '',
        component: _version_history_page__WEBPACK_IMPORTED_MODULE_3__["VersionHistoryPage"]
      }];

      var VersionHistoryPageRoutingModule = function VersionHistoryPageRoutingModule() {
        _classCallCheck(this, VersionHistoryPageRoutingModule);
      };

      VersionHistoryPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], VersionHistoryPageRoutingModule);
      /***/
    }
  }]);
})();
//# sourceMappingURL=version-history-version-history-module-es5.js.map