(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["appointment-reminder-appointment-reminder-module"], {
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
    "bPFv":
    /*!*****************************************************************************!*\
      !*** ./src/app/appointment-reminder/appointment-reminder-routing.module.ts ***!
      \*****************************************************************************/

    /*! exports provided: AppointmentReminderPageRoutingModule */

    /***/
    function bPFv(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppointmentReminderPageRoutingModule", function () {
        return AppointmentReminderPageRoutingModule;
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


      var _appointment_reminder_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./appointment-reminder.page */
      "QQ9l");

      var routes = [{
        path: '',
        component: _appointment_reminder_page__WEBPACK_IMPORTED_MODULE_3__["AppointmentReminderPage"]
      }];

      var AppointmentReminderPageRoutingModule = function AppointmentReminderPageRoutingModule() {
        _classCallCheck(this, AppointmentReminderPageRoutingModule);
      };

      AppointmentReminderPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], AppointmentReminderPageRoutingModule);
      /***/
    },

    /***/
    "piIl":
    /*!*********************************************************************!*\
      !*** ./src/app/appointment-reminder/appointment-reminder.module.ts ***!
      \*********************************************************************/

    /*! exports provided: AppointmentReminderPageModule */

    /***/
    function piIl(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppointmentReminderPageModule", function () {
        return AppointmentReminderPageModule;
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


      var _appointment_reminder_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./appointment-reminder-routing.module */
      "bPFv");
      /* harmony import */


      var _appointment_reminder_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./appointment-reminder.page */
      "QQ9l"); // must import this two module in the form page and add to @NgModule


      var AppointmentReminderPageModule = function AppointmentReminderPageModule() {
        _classCallCheck(this, AppointmentReminderPageModule);
      };

      AppointmentReminderPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _appointment_reminder_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppointmentReminderPageRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]],
        declarations: [_appointment_reminder_page__WEBPACK_IMPORTED_MODULE_6__["AppointmentReminderPage"]]
      })], AppointmentReminderPageModule);
      /***/
    }
  }]);
})();
//# sourceMappingURL=appointment-reminder-appointment-reminder-module-es5.js.map