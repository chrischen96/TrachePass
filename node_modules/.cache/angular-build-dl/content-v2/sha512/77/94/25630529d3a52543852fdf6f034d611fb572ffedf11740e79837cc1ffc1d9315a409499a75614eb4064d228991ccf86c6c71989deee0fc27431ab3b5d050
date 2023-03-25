(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~appointments-appointments-module~saved-appointment-saved-appointment-module"], {
    /***/
    "Oz3r":
    /*!*************************************************!*\
      !*** ./src/app/services/appointment.service.ts ***!
      \*************************************************/

    /*! exports provided: AppointmentService */

    /***/
    function Oz3r(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppointmentService", function () {
        return AppointmentService;
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
      "gcOT"); //import { LocalNotifications } from '@ionic-native/local-notifications/ngx';
      //import { LocalNotification, LocalNotificationPendingList, Plugins, } from '@capacitor/core';


      var _capacitor_core__WEBP = _capacitor_core__WEBPACK_IMPORTED_MODULE_2__["Plugins"],
          Storage = _capacitor_core__WEBP.Storage,
          LocalNotifications = _capacitor_core__WEBP.LocalNotifications;

      var AppointmentService = /*#__PURE__*/function () {
        function AppointmentService() {
          _classCallCheck(this, AppointmentService);

          this.appointments = {}; //set the strage key for photos can be changed

          this.APPOINTMENT_STORAGE = "appointment";
        }

        _createClass(AppointmentService, [{
          key: "loadAppointment",
          value: function loadAppointment() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var appiontmentGet;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      _context.next = 2;
                      return Storage.get({
                        key: this.APPOINTMENT_STORAGE
                      });

                    case 2:
                      appiontmentGet = _context.sent;
                      // set the current session value using data from DB, if it doesn't exist it wll initialize a empty array
                      this.appointments = JSON.parse(appiontmentGet.value) || {};
                      console.log("finished loading");
                      _context.next = 7;
                      return LocalNotifications.requestPermission();

                    case 7:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }, {
          key: "saveValue",
          value: function saveValue() {
            var JSONString = JSON.stringify(this.appointments); // store the value in to the pair

            Storage.set({
              key: this.APPOINTMENT_STORAGE,
              value: JSONString
            });
          }
        }, {
          key: "setReminder",
          value: function setReminder(appointment, id) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              var date, time, alarm, title, doctor, location, notificationTitle, appointmentDateTime, displayTime, displayDate, notificationText, notifs;
              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      date = appointment["appointmentDate"].slice(0, 10);
                      time = appointment["appointmentDate"].slice(11);
                      alarm = appointment["alarmDateTime"];
                      title = appointment["title"];
                      doctor = appointment["doctor"];
                      location = appointment["location"];
                      notificationTitle = title;
                      appointmentDateTime = new Date(appointment['appointmentDate']);
                      displayTime = time.slice(0, 5);
                      displayDate = date.slice(8) + '/' + date.slice(5, 7) + '/' + date.slice(0, 4);
                      notificationText = "You have an appointment at " + displayTime + " on " + displayDate + " with " + doctor + " at " + location;
                      console.log(appointment);
                      console.log(id);
                      _context2.next = 15;
                      return LocalNotifications.schedule({
                        notifications: [{
                          title: notificationTitle,
                          body: notificationText,
                          id: id,
                          schedule: {
                            at: new Date(appointmentDateTime.getTime() - alarm)
                          },
                          sound: 'default',
                          attachments: null,
                          actionTypeId: "",
                          extra: null
                        }]
                      });

                    case 15:
                      notifs = _context2.sent;
                      console.log(LocalNotifications.getPending());

                    case 17:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2);
            }));
          }
        }]);

        return AppointmentService;
      }();

      AppointmentService.ctorParameters = function () {
        return [];
      };

      AppointmentService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      })], AppointmentService);
      /***/
    },

    /***/
    "P9kn":
    /*!*****************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/saved-appointment/saved-appointment.page.html ***!
      \*****************************************************************************************************/

    /*! exports provided: default */

    /***/
    function P9kn(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-button (click)=\"edit()\"><ion-icon name=\"chevron-back-outline\"></ion-icon>Back</ion-button>\n    </ion-buttons>\n    <ion-title>Appointments</ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-button color=\"danger\" (click)=\"delete()\">Delete</ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-card>\n    <ion-item>\n      <ion-label>Title:</ion-label>\n      <ion-label>{{appointment.title}}</ion-label>\n    </ion-item>\n\n    <ion-item>\n      <ion-label>Doctor:</ion-label>\n      <ion-label>{{appointment.doctor}}</ion-label>\n    </ion-item>\n\n    <ion-item lines=\"none\">\n      <ion-label>Location:</ion-label>\n      <ion-label>{{appointment.location}}</ion-label>\n    </ion-item>\n  </ion-card>\n\n  <!-- <div *ngIf='this.appointment.appointmentDate != \"Not Set\" && this.appointment.appointmentTime != \"Not Set\"'>  --> \n    <ion-card>\n      <ion-item>\n        <ion-icon name=\"calendar-clear-outline\" slot=\"start\"></ion-icon>\n        <ion-label>Date</ion-label>\n        <ion-label>{{appointment.appointmentDate  | date : 'd MMM y'}}</ion-label>\n      </ion-item>\n\n      <ion-item lines=\"none\">\n        <ion-icon name=\"time-outline\" slot=\"start\"></ion-icon>\n        <ion-label>Time</ion-label>\n        <ion-label>{{appointment.appointmentDate  | date : 'HH:mm'}}</ion-label>\n      </ion-item>\n    </ion-card>\n\n    <ion-button id='map' color=\"success\" expand=\"block\" (click)=\"openMap()\">\n      <ion-icon slot=\"start\" name=\"navigate-circle-outline\"></ion-icon>\n      Show Location on Google Map\n    </ion-button>\n\n<!--     <ion-button color=\"danger\" expand=\"block\" (click)=\"delete()\">\n      <ion-icon slot=\"start\" name=\"trash-outline\"></ion-icon>\n      <ion-text slot=\"end\">Delete</ion-text>\n    </ion-button> -->\n  <!-- </div> -->\n\n</ion-content>\n";
      /***/
    },

    /***/
    "m6aZ":
    /*!***************************************************************!*\
      !*** ./src/app/saved-appointment/saved-appointment.page.scss ***!
      \***************************************************************/

    /*! exports provided: default */

    /***/
    function m6aZ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "#map {\n  width: 90%;\n  margin: auto;\n  margin-top: 10%;\n}\n\n#delete {\n  margin-top: 100px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NhdmVkLWFwcG9pbnRtZW50LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFVBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtBQUNKOztBQUVBO0VBQ0ksaUJBQUE7QUFDSiIsImZpbGUiOiJzYXZlZC1hcHBvaW50bWVudC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjbWFwIHtcbiAgICB3aWR0aDogOTAlO1xuICAgIG1hcmdpbjogYXV0bztcbiAgICBtYXJnaW4tdG9wOiAxMCU7XG59XG5cbiNkZWxldGV7XG4gICAgbWFyZ2luLXRvcDogMTAwcHg7XG59XG4iXX0= */";
      /***/
    },

    /***/
    "sWAx":
    /*!*************************************************************!*\
      !*** ./src/app/saved-appointment/saved-appointment.page.ts ***!
      \*************************************************************/

    /*! exports provided: SavedAppointmentPage */

    /***/
    function sWAx(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SavedAppointmentPage", function () {
        return SavedAppointmentPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_saved_appointment_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./saved-appointment.page.html */
      "P9kn");
      /* harmony import */


      var _saved_appointment_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./saved-appointment.page.scss */
      "m6aZ");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _capacitor_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @capacitor/core */
      "gcOT");
      /* harmony import */


      var _services_appointment_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../services/appointment.service */
      "Oz3r");
      /* harmony import */


      var _services_login_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../services/login.service */
      "EFyh"); //load browser plugin


      var _capacitor_core__WEBP2 = _capacitor_core__WEBPACK_IMPORTED_MODULE_6__["Plugins"],
          Browser = _capacitor_core__WEBP2.Browser,
          LocalNotifications = _capacitor_core__WEBP2.LocalNotifications;

      var SavedAppointmentPage = /*#__PURE__*/function () {
        function SavedAppointmentPage(appointmentService, loginService, modalCtrl, alertController, fb) {
          _classCallCheck(this, SavedAppointmentPage);

          this.appointmentService = appointmentService;
          this.loginService = loginService;
          this.modalCtrl = modalCtrl;
          this.alertController = alertController;
          this.fb = fb;
          this.appointmentList = [];
          this.form = this.fb.group({
            appointmentDate: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
            alarmDateTime: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
            title: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
            location: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
            doctor: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]
          });
        }

        _createClass(SavedAppointmentPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
              var _this = this;

              return regeneratorRuntime.wrap(function _callee3$(_context3) {
                while (1) {
                  switch (_context3.prev = _context3.next) {
                    case 0:
                      this.appointment = this.appointmentService.appointments[this.index];
                      console.log(this.appointment);
                      Object.keys(this.appointmentService.appointments).forEach(function (key) {
                        _this.appointmentList.push(_this.appointmentService.appointments[key]);
                      });
                      /*     Object.keys(this.form.value).forEach( key => {
                            if( this.appointment[key] != null ){
                              this.form.get(key).setValue(this.appointment[key]);
                              console.log(key, this.appointment[key]);
                            }
                          }) */

                      console.log('saved');
                      console.log('Initiate appointment');

                    case 5:
                    case "end":
                      return _context3.stop();
                  }
                }
              }, _callee3, this);
            }));
          }
        }, {
          key: "openMap",
          value: function openMap() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
              var link, encoded;
              return regeneratorRuntime.wrap(function _callee4$(_context4) {
                while (1) {
                  switch (_context4.prev = _context4.next) {
                    case 0:
                      link = "https://www.google.com/maps/search/?api=1&query=" + this.appointment["location"]; //console.log(link)

                      encoded = encodeURI(link); //console.log(encoded)

                      _context4.next = 4;
                      return Browser.open({
                        url: encoded
                      });

                    case 4:
                    case "end":
                      return _context4.stop();
                  }
                }
              }, _callee4, this);
            }));
          }
        }, {
          key: "edit",
          value: function edit() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
              return regeneratorRuntime.wrap(function _callee5$(_context5) {
                while (1) {
                  switch (_context5.prev = _context5.next) {
                    case 0:
                      /*     this.appointment = {};
                          Object.keys(this.form).forEach( key => {
                            this.appointment[key] = this.form.value[key];
                          })
                          console.log(this.appointmentService.appointments);
                          this.appointmentService.appointments[this.index] = this.appointment;
                          this.appointmentService.saveValue();
                          location.reload(); */
                      this.modalCtrl.dismiss();

                    case 1:
                    case "end":
                      return _context5.stop();
                  }
                }
              }, _callee5, this);
            }));
          }
        }, {
          key: "delete",
          value: function _delete() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee6() {
              var i;
              return regeneratorRuntime.wrap(function _callee6$(_context6) {
                while (1) {
                  switch (_context6.prev = _context6.next) {
                    case 0:
                      console.log("delete appointment");
                      console.log(LocalNotifications.getPending());
                      this.appointmentList.splice(this.index, 1);
                      this.appointmentService.appointments = {};

                      for (i = 0; i < this.appointmentList.length; i++) {
                        this.appointmentService.appointments[i] = this.appointmentList[i];
                      }

                      this.appointmentService.saveValue();
                      location.reload();
                      /* const alert = await this.alertController.create({
                        header: 'Delete',
                        message: 'Confirm to delete this appointment.',
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
                              console.log(LocalNotifications.getPending());
                              this.appointmentList.splice(this.index, 1);
                              this.appointmentService.appointments = {};
                              for(let i=0; i<this.appointmentList.length; i++){
                                this.appointmentService.appointments[i] = this.appointmentList[i];
                              }
                              this.appointmentService.saveValue();
                              location.reload();
                            }
                          }
                        ]
                      });
                      await alert.present(); */

                    case 7:
                    case "end":
                      return _context6.stop();
                  }
                }
              }, _callee6, this);
            }));
          }
        }]);

        return SavedAppointmentPage;
      }();

      SavedAppointmentPage.ctorParameters = function () {
        return [{
          type: _services_appointment_service__WEBPACK_IMPORTED_MODULE_7__["AppointmentService"]
        }, {
          type: _services_login_service__WEBPACK_IMPORTED_MODULE_8__["LoginService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"]
        }];
      };

      SavedAppointmentPage.propDecorators = {
        index: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }]
      };
      SavedAppointmentPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-saved-appointment',
        template: _raw_loader_saved_appointment_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_saved_appointment_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], SavedAppointmentPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=default~appointments-appointments-module~saved-appointment-saved-appointment-module-es5.js.map