(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~edit-patient-info-edit-patient-info-module~patient-info-patient-info-module"], {
    /***/
    "1ts5":
    /*!***************************************************************!*\
      !*** ./src/app/edit-patient-info/edit-patient-info.page.scss ***!
      \***************************************************************/

    /*! exports provided: default */

    /***/
    function ts5(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-input:last-child {\n  text-align: end;\n}\n\nion-input {\n  color: dodgerblue;\n}\n\nion-icon.arrow {\n  position: relative;\n  left: -15%;\n}\n\ndiv.profile {\n  position: relative;\n  width: 100%;\n  height: 130px;\n}\n\ndiv.icon {\n  width: 100px;\n  height: 100px;\n  background-color: #f0b478;\n  border-radius: 50%;\n  text-align: center;\n  position: absolute;\n  top: 30px;\n  left: 50%;\n  transform: translate(-50%, 0);\n}\n\nion-icon.icon {\n  font-size: 50px;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VkaXQtcGF0aWVudC1pbmZvLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGVBQUE7QUFDSjs7QUFFQTtFQUNJLGlCQUFBO0FBQ0o7O0FBRUE7RUFDSSxrQkFBQTtFQUNBLFVBQUE7QUFDSjs7QUFFQTtFQUNJLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7QUFDSjs7QUFFQTtFQUNJLFlBQUE7RUFDQSxhQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0VBQ0EsU0FBQTtFQUNBLDZCQUFBO0FBQ0o7O0FBRUE7RUFDSSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLGdDQUFBO0FBQ0oiLCJmaWxlIjoiZWRpdC1wYXRpZW50LWluZm8ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWlucHV0Omxhc3QtY2hpbGQge1xuICAgIHRleHQtYWxpZ246IGVuZDtcbn1cblxuaW9uLWlucHV0IHtcbiAgICBjb2xvcjpkb2RnZXJibHVlO1xufVxuXG5pb24taWNvbi5hcnJvdyB7XG4gICAgcG9zaXRpb246cmVsYXRpdmU7XG4gICAgbGVmdDogLTE1JTtcbn1cblxuZGl2LnByb2ZpbGUge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEzMHB4O1xufVxuXG5kaXYuaWNvbiB7XG4gICAgd2lkdGg6IDEwMHB4O1xuICAgIGhlaWdodDogMTAwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI0MCwgMTgwLCAxMjApO1xuICAgIGJvcmRlci1yYWRpdXM6NTAlO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAzMHB4O1xuICAgIGxlZnQ6IDUwJTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAwKTtcbn1cblxuaW9uLWljb24uaWNvbiB7XG4gICAgZm9udC1zaXplOiA1MHB4O1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTsgXG4gICAgdG9wOiA1MCU7IFxuICAgIGxlZnQ6IDUwJTsgXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gIH1cbiJdfQ== */";
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
    "EDQ8":
    /*!*************************************************************!*\
      !*** ./src/app/edit-patient-info/edit-patient-info.page.ts ***!
      \*************************************************************/

    /*! exports provided: EditPatientInfoPage */

    /***/
    function EDQ8(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "EditPatientInfoPage", function () {
        return EditPatientInfoPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_edit_patient_info_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./edit-patient-info.page.html */
      "UcAm");
      /* harmony import */


      var _edit_patient_info_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./edit-patient-info.page.scss */
      "1ts5");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _services_user_data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../services/user-data.service */
      "DPk/");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _ionic_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @ionic/core */
      "1Bn7");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");

      var EditPatientInfoPage = /*#__PURE__*/function () {
        function EditPatientInfoPage(userDataService, fb, router, modalCtrl) {
          _classCallCheck(this, EditPatientInfoPage);

          this.userDataService = userDataService;
          this.fb = fb;
          this.router = router;
          this.modalCtrl = modalCtrl;
          this.relationOptions = [['Mother', 'Father', 'Grandparent', 'Care Worker', 'Other']];
          this.sexOptions = [['Male', 'Female', 'Other']];
          this.form = this.fb.group({
            name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
            birthDate: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
            sex: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
            nhsNumber: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
            hospitalNumber: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
            relation1: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
            r1Name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
            relation2: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
            r2Name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
            consultant: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
            trust: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
            emergencyContact: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]
          }); //need more validate later
        }

        _createClass(EditPatientInfoPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee6() {
              var _this = this;

              return regeneratorRuntime.wrap(function _callee6$(_context6) {
                while (1) {
                  switch (_context6.prev = _context6.next) {
                    case 0:
                      _context6.next = 2;
                      return this.userDataService.loadUserProfile();

                    case 2:
                      Object.keys(this.form.controls).forEach(function (key) {
                        _this.form.get(key).setValue(_this.userDataService.userProfileValue[key]);

                        console.log(key, _this.form.get(key).value);
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
          key: "dismiss",
          value: function dismiss() {
            this.modalCtrl.dismiss();
          }
        }, {
          key: "save",
          value: function save() {
            var _this2 = this;

            Object.keys(this.form.controls).forEach(function (key) {
              _this2.userDataService.userProfileValue[key] = _this2.form.value[key];
              console.log(key, _this2.form.get(key).value);
            });
            this.userDataService.saveUserProfile();
            this.modalCtrl.dismiss();
            location.reload();
          } //picker for relations

        }, {
          key: "openPicker1",
          value: function openPicker1() {
            var numColumns = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
            var numOptions = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 5;
            var columnOptions = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : this.relationOptions;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee7() {
              var _this3 = this;

              var picker;
              return regeneratorRuntime.wrap(function _callee7$(_context7) {
                while (1) {
                  switch (_context7.prev = _context7.next) {
                    case 0:
                      _context7.next = 2;
                      return _ionic_core__WEBPACK_IMPORTED_MODULE_7__["pickerController"].create({
                        columns: this.getColumns(numColumns, numOptions, columnOptions),
                        buttons: [{
                          text: 'Cancel',
                          role: 'cancel'
                        }, {
                          text: 'Confirm',
                          handler: function handler(value) {
                            console.log(value);

                            _this3.form.controls['relation1'].setValue(value['col-0']['text']);
                          }
                        }]
                      });

                    case 2:
                      picker = _context7.sent;
                      _context7.next = 5;
                      return picker.present();

                    case 5:
                    case "end":
                      return _context7.stop();
                  }
                }
              }, _callee7, this);
            }));
          }
        }, {
          key: "openPicker2",
          value: function openPicker2() {
            var numColumns = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
            var numOptions = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 5;
            var columnOptions = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : this.relationOptions;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee8() {
              var _this4 = this;

              var picker;
              return regeneratorRuntime.wrap(function _callee8$(_context8) {
                while (1) {
                  switch (_context8.prev = _context8.next) {
                    case 0:
                      _context8.next = 2;
                      return _ionic_core__WEBPACK_IMPORTED_MODULE_7__["pickerController"].create({
                        columns: this.getColumns(numColumns, numOptions, columnOptions),
                        buttons: [{
                          text: 'Cancel',
                          role: 'cancel'
                        }, {
                          text: 'Confirm',
                          handler: function handler(value) {
                            console.log(value);

                            _this4.form.controls['relation2'].setValue(value['col-0']['text']);
                          }
                        }]
                      });

                    case 2:
                      picker = _context8.sent;
                      _context8.next = 5;
                      return picker.present();

                    case 5:
                    case "end":
                      return _context8.stop();
                  }
                }
              }, _callee8, this);
            }));
          }
        }, {
          key: "openPickerSex",
          value: function openPickerSex() {
            var numColumns = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
            var numOptions = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 3;
            var columnOptions = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : this.sexOptions;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee9() {
              var _this5 = this;

              var picker;
              return regeneratorRuntime.wrap(function _callee9$(_context9) {
                while (1) {
                  switch (_context9.prev = _context9.next) {
                    case 0:
                      _context9.next = 2;
                      return _ionic_core__WEBPACK_IMPORTED_MODULE_7__["pickerController"].create({
                        columns: this.getColumns(numColumns, numOptions, columnOptions),
                        buttons: [{
                          text: 'Cancel',
                          role: 'cancel'
                        }, {
                          text: 'Confirm',
                          handler: function handler(value) {
                            console.log(value);

                            _this5.form.controls['sex'].setValue(value['col-0']['text']);
                          }
                        }]
                      });

                    case 2:
                      picker = _context9.sent;
                      _context9.next = 5;
                      return picker.present();

                    case 5:
                    case "end":
                      return _context9.stop();
                  }
                }
              }, _callee9, this);
            }));
          }
        }, {
          key: "getColumns",
          value: function getColumns(numColumns, numOptions, columnOptions) {
            var columns = [];

            for (var i = 0; i < numColumns; i++) {
              columns.push({
                name: "col-".concat(i),
                options: this.getColumnOptions(i, numOptions, columnOptions)
              });
            }

            return columns;
          }
        }, {
          key: "getColumnOptions",
          value: function getColumnOptions(columnIndex, numOptions, columnOptions) {
            var options = [];

            for (var i = 0; i < numOptions; i++) {
              options.push({
                text: columnOptions[columnIndex][i % numOptions],
                value: i
              });
            }

            return options;
          }
        }]);

        return EditPatientInfoPage;
      }();

      EditPatientInfoPage.ctorParameters = function () {
        return [{
          type: _services_user_data_service__WEBPACK_IMPORTED_MODULE_4__["UserDataService"]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["ModalController"]
        }];
      };

      EditPatientInfoPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-edit-patient-info',
        template: _raw_loader_edit_patient_info_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_edit_patient_info_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], EditPatientInfoPage);
      /***/
    },

    /***/
    "UcAm":
    /*!*****************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/edit-patient-info/edit-patient-info.page.html ***!
      \*****************************************************************************************************/

    /*! exports provided: default */

    /***/
    function UcAm(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-button color=\"danger\" (click)=\"dismiss()\">Cancel</ion-button>\n    </ion-buttons>\n    <ion-title style=\"padding: 0px 80px;\">Patient Information</ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-button (click)=\"save()\">Done</ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div class=\"profile\">\n    <div class=\"icon\">\n      <ion-icon class=\"icon\" name=\"person-outline\"></ion-icon>\n    </div>\n  </div>\n\n  <div>\n  <form [formGroup]=\"form\">\n    <ion-list class=\"ion-no-margin\">\n      <ion-list-header lines=\"full\">\n        <ion-label>\n          Patient Details\n        </ion-label>\n      </ion-list-header>\n\n      <ion-item>\n        <ion-label>Name</ion-label>\n        <ion-input placeholder=\"Not Set\" formControlName=\"name\"></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-label>Date of Birth</ion-label>\n        <ion-datetime placeholder=\"Select Date\"\n        display-format=\"D MMM YYYY\" \n        picker-format=\"D MMM YYYY\" \n        formControlName=\"birthDate\" \n        style=\"color: dodgerblue;\"></ion-datetime>\n      </ion-item>\n\n      <ion-item>\n        <ion-label>Sex</ion-label>\n        <ion-input placeholder=\"Not Set\" formControlName=\"sex\" (click)=\"openPickerSex()\"></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-label>NHS Number</ion-label>\n        <ion-input placeholder=\"Not Set\" formControlName=\"nhsNumber\"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label>Hospital Number</ion-label>\n        <ion-input placeholder=\"Not Set\" formControlName=\"hospitalNumber\"></ion-input>\n      </ion-item>\n    </ion-list>\n\n    <ion-list class=\"ion-no-margin\">\n      <ion-list-header lines=\"full\">\n        <ion-label>\n          Caregiver\n        </ion-label>\n      </ion-list-header>\n\n      <ion-item>\n        <ion-input placeholder=\"Relationship\" formControlName=\"relation1\" (click)=\"openPicker1()\"></ion-input>\n        <ion-icon class=\"arrow\" name=\"chevron-forward-outline\"></ion-icon>\n        <ion-input placeholder=\"Not Set\" formControlName=\"r1Name\"></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-input placeholder=\"Relationship\" formControlName=\"relation2\" (click)=\"openPicker2()\"></ion-input>\n        <ion-icon class=\"arrow\" name=\"chevron-forward-outline\"></ion-icon>\n        <ion-input placeholder=\"Not Set\" formControlName=\"r2Name\"></ion-input>\n      </ion-item>\n    </ion-list>\n\n    <ion-list class=\"ion-no-margin\">\n      <ion-list-header lines=\"full\">\n        <ion-label>\n          Hospital Details\n        </ion-label>\n      </ion-list-header>\n\n      <ion-item>\n        <ion-label>Consultant</ion-label>\n        <ion-input placeholder=\"Not Set\" formControlName=\"consultant\"></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-label>Trust</ion-label>\n        <ion-input placeholder=\"Not Set\" formControlName=\"trust\"></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-label>Emergency Contact</ion-label>\n        <ion-input placeholder=\"Not Set\" formControlName=\"emergencyContact\"></ion-input>\n      </ion-item>\n\n    </ion-list>\n  </form>\n  <div style=\"height: 35px;\"></div>\n  </div>\n\n\n</ion-content>\n";
      /***/
    }
  }]);
})();
//# sourceMappingURL=default~edit-patient-info-edit-patient-info-module~patient-info-patient-info-module-es5.js.map