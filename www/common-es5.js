(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"], {
    /***/
    "0/6H":
    /*!*********************************************************************!*\
      !*** ./node_modules/@ionic/core/dist/esm/button-active-a6787d69.js ***!
      \*********************************************************************/

    /*! exports provided: c */

    /***/
    function H(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "c", function () {
        return createButtonActiveGesture;
      });
      /* harmony import */


      var _index_e806d1f6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./index-e806d1f6.js */
      "A36C");
      /* harmony import */


      var _index_f49d994d_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./index-f49d994d.js */
      "iWo5");
      /* harmony import */


      var _haptic_27b3f981_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./haptic-27b3f981.js */
      "qULd");

      var createButtonActiveGesture = function createButtonActiveGesture(el, isButton) {
        var currentTouchedButton;
        var initialTouchedButton;

        var activateButtonAtPoint = function activateButtonAtPoint(x, y, hapticFeedbackFn) {
          if (typeof document === 'undefined') {
            return;
          }

          var target = document.elementFromPoint(x, y);

          if (!target || !isButton(target)) {
            clearActiveButton();
            return;
          }

          if (target !== currentTouchedButton) {
            clearActiveButton();
            setActiveButton(target, hapticFeedbackFn);
          }
        };

        var setActiveButton = function setActiveButton(button, hapticFeedbackFn) {
          currentTouchedButton = button;

          if (!initialTouchedButton) {
            initialTouchedButton = currentTouchedButton;
          }

          var buttonToModify = currentTouchedButton;
          Object(_index_e806d1f6_js__WEBPACK_IMPORTED_MODULE_0__["c"])(function () {
            return buttonToModify.classList.add('ion-activated');
          });
          hapticFeedbackFn();
        };

        var clearActiveButton = function clearActiveButton() {
          var dispatchClick = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

          if (!currentTouchedButton) {
            return;
          }

          var buttonToModify = currentTouchedButton;
          Object(_index_e806d1f6_js__WEBPACK_IMPORTED_MODULE_0__["c"])(function () {
            return buttonToModify.classList.remove('ion-activated');
          });
          /**
           * Clicking on one button, but releasing on another button
           * does not dispatch a click event in browsers, so we
           * need to do it manually here. Some browsers will
           * dispatch a click if clicking on one button, dragging over
           * another button, and releasing on the original button. In that
           * case, we need to make sure we do not cause a double click there.
           */

          if (dispatchClick && initialTouchedButton !== currentTouchedButton) {
            currentTouchedButton.click();
          }

          currentTouchedButton = undefined;
        };

        return Object(_index_f49d994d_js__WEBPACK_IMPORTED_MODULE_1__["createGesture"])({
          el: el,
          gestureName: 'buttonActiveDrag',
          threshold: 0,
          onStart: function onStart(ev) {
            return activateButtonAtPoint(ev.currentX, ev.currentY, _haptic_27b3f981_js__WEBPACK_IMPORTED_MODULE_2__["a"]);
          },
          onMove: function onMove(ev) {
            return activateButtonAtPoint(ev.currentX, ev.currentY, _haptic_27b3f981_js__WEBPACK_IMPORTED_MODULE_2__["b"]);
          },
          onEnd: function onEnd() {
            clearActiveButton(true);
            Object(_haptic_27b3f981_js__WEBPACK_IMPORTED_MODULE_2__["h"])();
            initialTouchedButton = undefined;
          }
        });
      };
      /***/

    },

    /***/
    "65gq":
    /*!*********************************************************!*\
      !*** ./src/app/edit-pathology/edit-pathology.page.scss ***!
      \*********************************************************/

    /*! exports provided: default */

    /***/
    function gq(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-item {\n  margin-top: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VkaXQtcGF0aG9sb2d5LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGVBQUE7QUFDSiIsImZpbGUiOiJlZGl0LXBhdGhvbG9neS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24taXRlbXtcbiAgICBtYXJnaW4tdG9wOiA1cHg7XG59Il19 */";
      /***/
    },

    /***/
    "6qsm":
    /*!***************************************************************************!*\
      !*** ./src/app/edit-medical-conditions/edit-medical-conditions.page.scss ***!
      \***************************************************************************/

    /*! exports provided: default */

    /***/
    function qsm(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJlZGl0LW1lZGljYWwtY29uZGl0aW9ucy5wYWdlLnNjc3MifQ== */";
      /***/
    },

    /***/
    "74mu":
    /*!*************************************************************!*\
      !*** ./node_modules/@ionic/core/dist/esm/theme-ff3fc52f.js ***!
      \*************************************************************/

    /*! exports provided: c, g, h, o */

    /***/
    function mu(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "c", function () {
        return createColorClasses;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "g", function () {
        return getClassMap;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "h", function () {
        return hostContext;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "o", function () {
        return openURL;
      });

      var hostContext = function hostContext(selector, el) {
        return el.closest(selector) !== null;
      };
      /**
       * Create the mode and color classes for the component based on the classes passed in
       */


      var createColorClasses = function createColorClasses(color, cssClassMap) {
        return typeof color === 'string' && color.length > 0 ? Object.assign(_defineProperty({
          'ion-color': true
        }, "ion-color-".concat(color), true), cssClassMap) : cssClassMap;
      };

      var getClassList = function getClassList(classes) {
        if (classes !== undefined) {
          var array = Array.isArray(classes) ? classes : classes.split(' ');
          return array.filter(function (c) {
            return c != null;
          }).map(function (c) {
            return c.trim();
          }).filter(function (c) {
            return c !== '';
          });
        }

        return [];
      };

      var getClassMap = function getClassMap(classes) {
        var map = {};
        getClassList(classes).forEach(function (c) {
          return map[c] = true;
        });
        return map;
      };

      var SCHEME = /^[a-z][a-z0-9+\-.]*:/;

      var openURL = /*#__PURE__*/function () {
        var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(url, ev, direction, animation) {
          var router;
          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  if (!(url != null && url[0] !== '#' && !SCHEME.test(url))) {
                    _context.next = 5;
                    break;
                  }

                  router = document.querySelector('ion-router');

                  if (!router) {
                    _context.next = 5;
                    break;
                  }

                  if (ev != null) {
                    ev.preventDefault();
                  }

                  return _context.abrupt("return", router.push(url, direction, animation));

                case 5:
                  return _context.abrupt("return", false);

                case 6:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee);
        }));

        return function openURL(_x, _x2, _x3, _x4) {
          return _ref.apply(this, arguments);
        };
      }();
      /***/

    },

    /***/
    "8x4H":
    /*!***********************************************************************!*\
      !*** ./src/app/edit-operative-history/edit-operative-history.page.ts ***!
      \***********************************************************************/

    /*! exports provided: EditOperativeHistoryPage */

    /***/
    function x4H(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "EditOperativeHistoryPage", function () {
        return EditOperativeHistoryPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_edit_operative_history_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./edit-operative-history.page.html */
      "yr4Q");
      /* harmony import */


      var _edit_operative_history_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./edit-operative-history.page.scss */
      "wK3v");
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


      var _services_user_data_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../services/user-data.service */
      "DPk/");
      /* harmony import */


      var _services_photo_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../services/photo.service */
      "6/gD");
      /* harmony import */


      var ngx_ionic_image_viewer__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ngx-ionic-image-viewer */
      "6g0+");

      var EditOperativeHistoryPage = /*#__PURE__*/function () {
        function EditOperativeHistoryPage(modalCtrl, fb, userDataService, photoService) {
          _classCallCheck(this, EditOperativeHistoryPage);

          this.modalCtrl = modalCtrl;
          this.fb = fb;
          this.userDataService = userDataService;
          this.photoService = photoService;
          this.history = {};
          this.tuple = [];
          this.operativeHistoryString = '';
          this.operativeHistoryJSON = {};
          this.photos = [];
          this.histories = [];
          this.form = this.fb.group({
            date: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
            type: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
            details: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]
          });
          this.history['photos'] = '';
        }

        _createClass(EditOperativeHistoryPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.operativeHistoryString = this.userDataService.medicalRecordValue['operativeHistory'];

            if (this.operativeHistoryString != '' && this.operativeHistoryString != null) {
              this.operativeHistoryJSON = JSON.parse(this.operativeHistoryString);
            }
          }
        }, {
          key: "addPhotoToGallery",
          value: function addPhotoToGallery() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      _context2.next = 2;
                      return this.photoService.addNewToGallery(this.photos);

                    case 2:
                      this.history['photos'] = _context2.sent;
                      this.photos = JSON.parse(this.history['photos']);

                    case 4:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this);
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
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
              var _this = this;

              var i, j, history, _i;

              return regeneratorRuntime.wrap(function _callee3$(_context3) {
                while (1) {
                  switch (_context3.prev = _context3.next) {
                    case 0:
                      Object.keys(this.form.controls).forEach(function (key) {
                        _this.history[key] = _this.form.value[key];
                        console.log(key, _this.history[key]);
                      });
                      this.histories.push(this.history);
                      Object.keys(this.operativeHistoryJSON).forEach(function (key) {
                        _this.histories.push(_this.operativeHistoryJSON[key]);

                        console.log(_this.histories);
                      });

                      for (i = 0; i < this.histories.length; i++) {
                        for (j = i + 1; j < this.histories.length; j++) {
                          if (this.histories[i].date < this.histories[j].date) {
                            history = this.histories[i];
                            this.histories[i] = this.histories[j];
                            this.histories[j] = history;
                          }
                        }
                      }

                      for (_i = 0; _i < this.histories.length; _i++) {
                        this.operativeHistoryJSON[_i] = this.histories[_i];
                      } // order histories by date


                      this.operativeHistoryString = JSON.stringify(this.operativeHistoryJSON);
                      this.userDataService.medicalRecordValue['operativeHistory'] = this.operativeHistoryString; // construct a JSON, then stringify it to store

                      console.log(this.userDataService.medicalRecordValue['operativeHistory']);
                      this.userDataService.saveMedicalRecord();
                      location.reload();

                    case 10:
                    case "end":
                      return _context3.stop();
                  }
                }
              }, _callee3, this);
            }));
          }
        }, {
          key: "openViewer",
          value: function openViewer(srcPath) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
              var modal;
              return regeneratorRuntime.wrap(function _callee4$(_context4) {
                while (1) {
                  switch (_context4.prev = _context4.next) {
                    case 0:
                      _context4.next = 2;
                      return this.modalCtrl.create({
                        component: ngx_ionic_image_viewer__WEBPACK_IMPORTED_MODULE_8__["ViewerModalComponent"],
                        componentProps: {
                          src: srcPath
                        },
                        cssClass: 'ion-img-viewer',
                        keyboardClose: true,
                        showBackdrop: true
                      });

                    case 2:
                      modal = _context4.sent;
                      _context4.next = 5;
                      return modal.present();

                    case 5:
                    case "end":
                      return _context4.stop();
                  }
                }
              }, _callee4, this);
            }));
          }
        }]);

        return EditOperativeHistoryPage;
      }();

      EditOperativeHistoryPage.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"]
        }, {
          type: _services_user_data_service__WEBPACK_IMPORTED_MODULE_6__["UserDataService"]
        }, {
          type: _services_photo_service__WEBPACK_IMPORTED_MODULE_7__["PhotoService"]
        }];
      };

      EditOperativeHistoryPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-edit-operative-history',
        template: _raw_loader_edit_operative_history_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_edit_operative_history_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], EditOperativeHistoryPage);
      /***/
    },

    /***/
    "GaT9":
    /*!***************************************************!*\
      !*** ./src/app/open-version/open-version.page.ts ***!
      \***************************************************/

    /*! exports provided: OpenVersionPage */

    /***/
    function GaT9(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "OpenVersionPage", function () {
        return OpenVersionPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_open_version_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./open-version.page.html */
      "SU+U");
      /* harmony import */


      var _open_version_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./open-version.page.scss */
      "tXud");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");

      var OpenVersionPage = /*#__PURE__*/function () {
        function OpenVersionPage(modalCtrl, alertController) {
          _classCallCheck(this, OpenVersionPage);

          this.modalCtrl = modalCtrl;
          this.alertController = alertController;
          this.histories = [];
        }

        _createClass(OpenVersionPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this2 = this;

            console.log(this.value);
            var operativeHistoryString = this.value['operativeHistory'];
            console.log(operativeHistoryString);

            if (operativeHistoryString != '' && operativeHistoryString != null) {
              var operativeHistoryJSON = JSON.parse(operativeHistoryString);
              console.log(operativeHistoryJSON);
              Object.keys(operativeHistoryJSON).forEach(function (key) {
                _this2.histories.push(operativeHistoryJSON[key]);

                console.log(_this2.histories);
              });
            }
          }
        }, {
          key: "warningRestore",
          value: function warningRestore() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
              var _this3 = this;

              var alert;
              return regeneratorRuntime.wrap(function _callee5$(_context5) {
                while (1) {
                  switch (_context5.prev = _context5.next) {
                    case 0:
                      _context5.next = 2;
                      return this.alertController.create({
                        header: 'Confirm Restore',
                        message: 'The record will be replaced by this backup.',
                        buttons: [{
                          text: 'Cancel',
                          role: 'cancel',
                          cssClass: 'secondary',
                          handler: function handler() {
                            console.log('Confirm Cancel: blah');
                          }
                        }, {
                          text: 'Confirm',
                          handler: function handler() {
                            _this3.replace();
                          }
                        }]
                      });

                    case 2:
                      alert = _context5.sent;
                      _context5.next = 5;
                      return alert.present();

                    case 5:
                    case "end":
                      return _context5.stop();
                  }
                }
              }, _callee5, this);
            }));
          }
        }, {
          key: "replace",
          value: function replace() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee6() {
              return regeneratorRuntime.wrap(function _callee6$(_context6) {
                while (1) {
                  switch (_context6.prev = _context6.next) {
                    case 0:
                      this.modalCtrl.dismiss({
                        'restoreValues': true
                      });

                    case 1:
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
            this.modalCtrl.dismiss({
              'restoreValues': false
            });
          }
        }]);

        return OpenVersionPage;
      }();

      OpenVersionPage.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"]
        }];
      };

      OpenVersionPage.propDecorators = {
        date: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        type: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        value: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }]
      };
      OpenVersionPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-open-version',
        template: _raw_loader_open_version_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_open_version_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], OpenVersionPage);
      /***/
    },

    /***/
    "L1bm":
    /*!***********************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/edit-pathology/edit-pathology.page.html ***!
      \***********************************************************************************************/

    /*! exports provided: default */

    /***/
    function L1bm(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-button color=\"danger\" (click)=\"dismiss()\">Cancel</ion-button>\n    </ion-buttons>\n    <ion-title>Edit</ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-button (click)=\"save()\">Done</ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <form [formGroup]=\"form\">\n    <ion-list>\n      <ion-list-header lines=\"full\">\n        <ion-label>\n          Reason for Tracheostomy\n        </ion-label>\n      </ion-list-header>\n\n      <ion-item lines='full'>\n        <ion-textarea rows=\"6\"\n        placeholder=\"Enter reasons\"\n        formControlName=\"pathology\"></ion-textarea>\n      </ion-item>\n    </ion-list>\n\n    <ion-list>\n      <ion-list-header lines=\"full\">\n        <ion-label>\n          Airway Condition\n        </ion-label>\n      </ion-list-header>\n\n      <ion-item>\n        <ion-label>Is Upper Airway Intubatable?</ion-label>\n        <ion-toggle formControlName=\"intubatation\" (ionChange)=\"intubatation()\"></ion-toggle>\n      </ion-item>\n\n      <div *ngIf=\"this.form.value.intubatation==true\">\n        <ion-item>\n          <ion-label>Airway Grade</ion-label>\n          <ion-select formControlName='airwayGrade' interface=\"action-sheet\">\n            <ion-select-option value=\"1\">1</ion-select-option>\n            <ion-select-option value=\"2\">2</ion-select-option>\n            <ion-select-option value=\"3\">3</ion-select-option>\n            <ion-select-option value=\"4\">4</ion-select-option>\n          </ion-select>\n        </ion-item>\n  \n        <ion-item>\n          <ion-label>Endotracheal tube size</ion-label>\n          <ion-select formControlName='tubeSize'>\n            <div *ngFor=\"let tubeSize of tubeSizeList\">\n              <ion-select-option  value=\"{{tubeSize}}\">{{tubeSize}}</ion-select-option>\n            </div> \n          </ion-select>\n        </ion-item>\n  \n        <ion-item>\n          <ion-label position=\"stacked\" >Details</ion-label>\n          <ion-textarea rows=\"4\"\n          placeholder=\"Enter details\"\n          formControlName=\"details\"></ion-textarea>\n        </ion-item>\n      </div>\n    </ion-list>\n  </form>\n</ion-content>\n";
      /***/
    },

    /***/
    "QQ9l":
    /*!*******************************************************************!*\
      !*** ./src/app/appointment-reminder/appointment-reminder.page.ts ***!
      \*******************************************************************/

    /*! exports provided: AppointmentReminderPage */

    /***/
    function QQ9l(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppointmentReminderPage", function () {
        return AppointmentReminderPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_appointment_reminder_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./appointment-reminder.page.html */
      "r8bU");
      /* harmony import */


      var _appointment_reminder_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./appointment-reminder.page.scss */
      "txDb");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _capacitor_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @capacitor/core */
      "gcOT");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _services_appointment_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../services/appointment.service */
      "Oz3r"); //load browser plugin


      var _capacitor_core__WEBP = _capacitor_core__WEBPACK_IMPORTED_MODULE_5__["Plugins"],
          Browser = _capacitor_core__WEBP.Browser,
          LocalNotifications = _capacitor_core__WEBP.LocalNotifications;

      var AppointmentReminderPage = /*#__PURE__*/function () {
        function AppointmentReminderPage(formBuilder, appointmentService, modalCtrl) {
          _classCallCheck(this, AppointmentReminderPage);

          this.formBuilder = formBuilder;
          this.appointmentService = appointmentService;
          this.modalCtrl = modalCtrl;
          this.today = new Date().toISOString();
          this.appointment = {};
          this.appointmentList = [];
          console.log(this.today);
          this.form = this.formBuilder.group({
            appointmentDate: [this.today],
            alarmDateTime: [''],
            title: [''],
            doctor: [''],
            location: ['']
          });
          console.log(this.form.value["appointmentDate"]);
        }

        _createClass(AppointmentReminderPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
          /*   async openMap() {
              const link = "https://www.google.com/maps/search/?api=1&query=" + this.appointmentService.appointment["Location"]
              const encoded = encodeURI(link)
              await Browser.open({url: encoded});
            } */

        }, {
          key: "save",
          value: function save() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee7() {
              var _this4 = this;

              var index, i, j, history, _i2;

              return regeneratorRuntime.wrap(function _callee7$(_context7) {
                while (1) {
                  switch (_context7.prev = _context7.next) {
                    case 0:
                      Object.keys(this.form.value).forEach(function (keys) {
                        _this4.appointment[keys] = _this4.form.value[keys];
                      });
                      console.log(this.appointment['appointmentDate']);
                      this.appointmentList.push(this.appointment);
                      Object.keys(this.appointmentService.appointments).forEach(function (key) {
                        _this4.appointmentList.push(_this4.appointmentService.appointments[key]);
                      });
                      index = this.appointmentList.length;
                      console.log(LocalNotifications.getPending());

                      for (i = 0; i < this.appointmentList.length; i++) {
                        for (j = i + 1; j < this.appointmentList.length; j++) {
                          if (this.appointmentList[i].appointmentDate < this.appointmentList[j].appointmentDate) {
                            history = this.appointmentList[i];
                            this.appointmentList[i] = this.appointmentList[j];
                            this.appointmentList[j] = history;
                          }
                        }
                      }

                      for (_i2 = 0; _i2 < this.appointmentList.length; _i2++) {
                        this.appointmentService.appointments[_i2] = this.appointmentList[_i2];
                      }

                      this.appointmentService.saveValue();
                      this.isAppointmentSetted = true;
                      this.modalCtrl.dismiss();
                      _context7.next = 13;
                      return this.appointmentService.setReminder(this.appointment, index);

                    case 13:
                      location.reload();

                    case 14:
                    case "end":
                      return _context7.stop();
                  }
                }
              }, _callee7, this);
            }));
          }
        }, {
          key: "dismiss",
          value: function dismiss() {
            this.modalCtrl.dismiss();
          }
        }]);

        return AppointmentReminderPage;
      }();

      AppointmentReminderPage.ctorParameters = function () {
        return [{
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"]
        }, {
          type: _services_appointment_service__WEBPACK_IMPORTED_MODULE_7__["AppointmentService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"]
        }];
      };

      AppointmentReminderPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-appointment-reminder',
        template: _raw_loader_appointment_reminder_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_appointment_reminder_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], AppointmentReminderPage);
      /***/
    },

    /***/
    "SU+U":
    /*!*******************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/open-version/open-version.page.html ***!
      \*******************************************************************************************/

    /*! exports provided: default */

    /***/
    function SUU(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-button (click)=\"dismiss()\">Back</ion-button>\n    </ion-buttons>\n    <ion-title style=\"padding: 0px 80px;\">{{this.date | date:'YYYY/M/d, h:mm a'}}</ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-button (click)=\"warningRestore()\">Restore</ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div *ngIf=\"this.type == 'User Profile'\" class=\"userProfile\">\n    <ion-list>\n      <ion-list-header lines=\"full\">\n        <ion-label>\n          Patient Details\n        </ion-label>\n        <ion-label></ion-label>\n      </ion-list-header>\n\n      <ion-item>\n        <ion-label>Name</ion-label>\n        <ion-label>{{this.value.name || 'Not Set'}}</ion-label>\n      </ion-item>\n\n      <ion-item>\n        <ion-label>Date of Birth</ion-label>\n        <ion-label>{{(this.value.birthDate  | date : 'd MMM y') || 'Not Set'}}</ion-label>\n      </ion-item>\n\n      <ion-item>\n        <ion-label>Sex</ion-label>\n        <ion-label>{{this.value.sex}}</ion-label>\n      </ion-item>\n\n      <ion-item>\n        <ion-label>NHS Number</ion-label>\n        <ion-label>{{this.value.nhsNumber||'Not Set'}}</ion-label>\n      </ion-item>\n    </ion-list>\n\n    <ion-list class=\"ion-no-margin\">\n      <ion-list-header lines=\"full\">\n        <ion-label>\n          Caregiver\n        </ion-label>\n        <ion-label></ion-label>\n      </ion-list-header>\n\n      <ion-item>\n        <ion-label>{{this.value.relation1 || 'Not Set'}}</ion-label>\n        <ion-label>{{this.value.r1Name || 'Not Set'}}</ion-label>\n      </ion-item>\n\n      <ion-item *ngIf=\"this.value.relation2 != null || this.value.r2Name != null\">\n        <ion-label>{{this.value.relation2}}</ion-label>\n        <ion-label>{{this.value.r2Name}}</ion-label>\n      </ion-item>\n    </ion-list>\n\n    <ion-list class=\"ion-no-margin\">\n      <ion-list-header lines=\"full\">\n        <ion-label>\n          Hospital Details\n        </ion-label>\n        <ion-label></ion-label>\n      </ion-list-header>\n\n      <ion-item>\n        <ion-label>Consultant</ion-label>\n        <ion-label>{{this.value.consultant || 'Not Set'}}</ion-label>\n      </ion-item>\n\n      <ion-item>\n        <ion-label>Trust</ion-label>\n        <ion-label>{{this.value.trust || 'Not Set'}}</ion-label>\n      </ion-item>\n\n      <ion-item>\n        <ion-label>Emergency Contact</ion-label>\n        <ion-label>{{this.value.emergencyContact || 'Not Set'}}</ion-label>\n      </ion-item>\n    </ion-list>\n  </div>\n\n  <div *ngIf=\"this.type == 'Medical Record'\">\n    <ion-list class=\"ion-no-margin\">\n      <ion-list-header lines=\"full\">\n        <ion-label>\n          Tracheostomy Details\n        </ion-label>\n        <ion-label></ion-label>\n      </ion-list-header>\n\n      <ion-item>\n        <ion-label>Tube Type</ion-label>\n        <ion-label>{{this.value.tubeType || 'Not Set'}}</ion-label>\n      </ion-item>\n\n      <ion-item>\n        <ion-label>Subtype</ion-label>\n        <ion-label>{{this.value.subType || 'Not Set'}}</ion-label>\n      </ion-item>\n\n      <ion-item>\n        <ion-label>Size - ID (mm)</ion-label>\n        <ion-label>{{this.value.sizeID || 'Not Set'}}</ion-label>\n      </ion-item>\n\n      <ion-item>\n        <ion-label>Shaft Length (mm)</ion-label>\n        <ion-label>{{this.value.shaftLength || 'Not Set'}}</ion-label>\n      </ion-item>\n\n      <ion-item>\n        <ion-label>Suction Length</ion-label>\n        <ion-label>{{this.value.suctionLength || 'Not Set'}}</ion-label>\n      </ion-item>\n    </ion-list>\n\n    <ion-list class=\"ion-no-margin\">\n      <ion-list-header lines=\"full\">\n        <ion-label>\n          Medical Conditions\n        </ion-label>\n      </ion-list-header>\n\n      <ion-item>\n        <ion-label>\n          <h2>Allergies</h2>\n          <p> {{this.value.allergies || 'Not Set'}} </p>\n        </ion-label>\n      </ion-item>\n\n      <ion-item>\n        <ion-label>\n          <h2>Medications</h2>\n          <p> {{this.value.medications || 'Not Set'}} </p>\n        </ion-label>\n      </ion-item>\n\n      <ion-item>\n        <ion-label>\n          <h2>Other Conditions</h2>\n          <p> {{this.value.otherMedicalConditions || 'Not Set'}} </p>\n        </ion-label>\n      </ion-item>\n    </ion-list>\n\n    <ion-list class=\"ion-no-margin\">\n      <ion-list-header lines=\"full\">\n        <ion-label>\n          Airway Pathology\n        </ion-label>\n      </ion-list-header>\n\n      <ion-item>\n        <ion-label>\n          <h2>Pathology</h2>\n          <p> {{this.value.pathology || 'Not Set'}} </p>\n        </ion-label>\n      </ion-item>\n\n      <ion-item>\n        <ion-label>\n          <h2>Intubatation</h2>\n          <p> {{this.value.intubatation || 'Not Set'}} </p>\n        </ion-label>\n      </ion-item>\n\n      <div *ngIf=\"this.value.intubatation==true\"></div>\n      <ion-item>\n        <ion-label>\n          <h2>Airway Grade:</h2>\n          <p> {{this.value.airwayGrade || 'Not Set'}} </p>\n        </ion-label>\n      </ion-item>\n      <ion-item>\n        <ion-label>\n          <h2>Endotracheal Tube Size:</h2>\n          <p> {{this.value.tubeSize || 'Not Set'}} </p>\n        </ion-label>\n      </ion-item>\n      <ion-item>\n        <ion-label>\n          <h2>Details:</h2>\n          <p> {{this.value.details || 'Not Set'}} </p>\n        </ion-label>\n      </ion-item>\n    </ion-list>\n\n    <ion-list class=\"ion-no-margin\" *ngIf=\"this.value.operativeHistory != null\">\n      <ion-list-header lines=\"full\">\n        <ion-label>\n          Operative History\n        </ion-label>\n      </ion-list-header>\n\n      <ion-item *ngFor=\"let history of histories\">\n        <ion-label>\n          <h2>{{history.date || 'Not Set'}}</h2>\n          <h3>{{history.type || 'Not Set'}}</h3>\n          <p>{{history.details || 'Not Set'}}</p>\n        </ion-label>\n      </ion-item>\n    </ion-list>\n  </div>\n</ion-content>\n";
      /***/
    },

    /***/
    "TR9v":
    /*!***********************************************************************!*\
      !*** ./src/app/view-operative-history/view-operative-history.page.ts ***!
      \***********************************************************************/

    /*! exports provided: ViewOperativeHistoryPage */

    /***/
    function TR9v(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ViewOperativeHistoryPage", function () {
        return ViewOperativeHistoryPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_view_operative_history_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./view-operative-history.page.html */
      "hBli");
      /* harmony import */


      var _view_operative_history_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./view-operative-history.page.scss */
      "oZqj");
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


      var _services_user_data_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../services/user-data.service */
      "DPk/");
      /* harmony import */


      var _services_photo_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../services/photo.service */
      "6/gD");
      /* harmony import */


      var ngx_ionic_image_viewer__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ngx-ionic-image-viewer */
      "6g0+");

      var ViewOperativeHistoryPage = /*#__PURE__*/function () {
        function ViewOperativeHistoryPage(modalCtrl, fb, userDataService, photoService) {
          _classCallCheck(this, ViewOperativeHistoryPage);

          this.modalCtrl = modalCtrl;
          this.fb = fb;
          this.userDataService = userDataService;
          this.photoService = photoService;
          this.history = {};
          this.tuple = [];
          this.operativeHistoryString = '';
          this.operativeHistoryJSON = {};
          this.photos = [];
          this.form = this.fb.group({
            date: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
            type: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
            details: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]
          });
        }

        _createClass(ViewOperativeHistoryPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.operativeHistoryString = this.userDataService.medicalRecordValue['operativeHistory'];

            if (this.operativeHistoryString != '' && this.operativeHistoryString != null) {
              this.operativeHistoryJSON = JSON.parse(this.operativeHistoryString);
            }

            ;
            this.history = this.operativeHistoryJSON[this.index];
            this.form.get('date').setValue(this.history['date']);
            this.form.get('type').setValue(this.history['type']);
            this.form.get('details').setValue(this.history['details']);

            if (this.history['photos'] != "") {
              this.photos = JSON.parse(this.history['photos']);
            }

            this.photoService.loadSaved(this.photos);
          }
        }, {
          key: "addPhotoToGallery",
          value: function addPhotoToGallery() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee8() {
              return regeneratorRuntime.wrap(function _callee8$(_context8) {
                while (1) {
                  switch (_context8.prev = _context8.next) {
                    case 0:
                      _context8.next = 2;
                      return this.photoService.addNewToGallery(this.photos);

                    case 2:
                      this.history['photos'] = _context8.sent;
                      this.photos = JSON.parse(this.history['photos']);

                    case 4:
                    case "end":
                      return _context8.stop();
                  }
                }
              }, _callee8, this);
            }));
          }
        }, {
          key: "openViewer",
          value: function openViewer(srcPath) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee9() {
              var modal;
              return regeneratorRuntime.wrap(function _callee9$(_context9) {
                while (1) {
                  switch (_context9.prev = _context9.next) {
                    case 0:
                      _context9.next = 2;
                      return this.modalCtrl.create({
                        component: ngx_ionic_image_viewer__WEBPACK_IMPORTED_MODULE_8__["ViewerModalComponent"],
                        componentProps: {
                          src: srcPath
                        },
                        cssClass: 'ion-img-viewer',
                        keyboardClose: true,
                        showBackdrop: true
                      });

                    case 2:
                      modal = _context9.sent;
                      _context9.next = 5;
                      return modal.present();

                    case 5:
                    case "end":
                      return _context9.stop();
                  }
                }
              }, _callee9, this);
            }));
          }
        }, {
          key: "save",
          value: function save() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee10() {
              var _this5 = this;

              return regeneratorRuntime.wrap(function _callee10$(_context10) {
                while (1) {
                  switch (_context10.prev = _context10.next) {
                    case 0:
                      Object.keys(this.form.controls).forEach(function (key) {
                        _this5.history[key] = _this5.form.value[key];
                        console.log(key, _this5.history[key]);
                      });
                      console.log('photos', this.history['photos']);
                      this.operativeHistoryJSON[this.index] = this.history;
                      this.operativeHistoryString = JSON.stringify(this.operativeHistoryJSON);
                      this.userDataService.medicalRecordValue['operativeHistory'] = this.operativeHistoryString; // construct a JSON, then stringify it to store

                      console.log(this.userDataService.medicalRecordValue['operativeHistory']);
                      this.userDataService.saveMedicalRecord();
                      location.reload();

                    case 8:
                    case "end":
                      return _context10.stop();
                  }
                }
              }, _callee10, this);
            }));
          }
        }, {
          key: "dismiss",
          value: function dismiss() {
            this.modalCtrl.dismiss();
          }
        }]);

        return ViewOperativeHistoryPage;
      }();

      ViewOperativeHistoryPage.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"]
        }, {
          type: _services_user_data_service__WEBPACK_IMPORTED_MODULE_6__["UserDataService"]
        }, {
          type: _services_photo_service__WEBPACK_IMPORTED_MODULE_7__["PhotoService"]
        }];
      };

      ViewOperativeHistoryPage.propDecorators = {
        index: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }]
      };
      ViewOperativeHistoryPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-view-operative-history',
        template: _raw_loader_view_operative_history_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_view_operative_history_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], ViewOperativeHistoryPage);
      /***/
    },

    /***/
    "ZaV5":
    /*!**************************************************************************!*\
      !*** ./node_modules/@ionic/core/dist/esm/framework-delegate-4584ab5a.js ***!
      \**************************************************************************/

    /*! exports provided: a, d */

    /***/
    function ZaV5(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "a", function () {
        return attachComponent;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "d", function () {
        return detachComponent;
      });

      var attachComponent = /*#__PURE__*/function () {
        var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee11(delegate, container, component, cssClasses, componentProps) {
          var el;
          return regeneratorRuntime.wrap(function _callee11$(_context11) {
            while (1) {
              switch (_context11.prev = _context11.next) {
                case 0:
                  if (!delegate) {
                    _context11.next = 2;
                    break;
                  }

                  return _context11.abrupt("return", delegate.attachViewToDom(container, component, componentProps, cssClasses));

                case 2:
                  if (!(typeof component !== 'string' && !(component instanceof HTMLElement))) {
                    _context11.next = 4;
                    break;
                  }

                  throw new Error('framework delegate is missing');

                case 4:
                  el = typeof component === 'string' ? container.ownerDocument && container.ownerDocument.createElement(component) : component;

                  if (cssClasses) {
                    cssClasses.forEach(function (c) {
                      return el.classList.add(c);
                    });
                  }

                  if (componentProps) {
                    Object.assign(el, componentProps);
                  }

                  container.appendChild(el);

                  if (!el.componentOnReady) {
                    _context11.next = 11;
                    break;
                  }

                  _context11.next = 11;
                  return el.componentOnReady();

                case 11:
                  return _context11.abrupt("return", el);

                case 12:
                case "end":
                  return _context11.stop();
              }
            }
          }, _callee11);
        }));

        return function attachComponent(_x5, _x6, _x7, _x8, _x9) {
          return _ref2.apply(this, arguments);
        };
      }();

      var detachComponent = function detachComponent(delegate, element) {
        if (element) {
          if (delegate) {
            var container = element.parentElement;
            return delegate.removeViewFromDom(container, element);
          }

          element.remove();
        }

        return Promise.resolve();
      };
      /***/

    },

    /***/
    "h3R7":
    /*!***********************************************************************!*\
      !*** ./node_modules/@ionic/core/dist/esm/spinner-configs-cd7845af.js ***!
      \***********************************************************************/

    /*! exports provided: S */

    /***/
    function h3R7(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "S", function () {
        return SPINNERS;
      });

      var spinners = {
        'bubbles': {
          dur: 1000,
          circles: 9,
          fn: function fn(dur, index, total) {
            var animationDelay = "".concat(dur * index / total - dur, "ms");
            var angle = 2 * Math.PI * index / total;
            return {
              r: 5,
              style: {
                'top': "".concat(9 * Math.sin(angle), "px"),
                'left': "".concat(9 * Math.cos(angle), "px"),
                'animation-delay': animationDelay
              }
            };
          }
        },
        'circles': {
          dur: 1000,
          circles: 8,
          fn: function fn(dur, index, total) {
            var step = index / total;
            var animationDelay = "".concat(dur * step - dur, "ms");
            var angle = 2 * Math.PI * step;
            return {
              r: 5,
              style: {
                'top': "".concat(9 * Math.sin(angle), "px"),
                'left': "".concat(9 * Math.cos(angle), "px"),
                'animation-delay': animationDelay
              }
            };
          }
        },
        'circular': {
          dur: 1400,
          elmDuration: true,
          circles: 1,
          fn: function fn() {
            return {
              r: 20,
              cx: 48,
              cy: 48,
              fill: 'none',
              viewBox: '24 24 48 48',
              transform: 'translate(0,0)',
              style: {}
            };
          }
        },
        'crescent': {
          dur: 750,
          circles: 1,
          fn: function fn() {
            return {
              r: 26,
              style: {}
            };
          }
        },
        'dots': {
          dur: 750,
          circles: 3,
          fn: function fn(_, index) {
            var animationDelay = -(110 * index) + 'ms';
            return {
              r: 6,
              style: {
                'left': "".concat(9 - 9 * index, "px"),
                'animation-delay': animationDelay
              }
            };
          }
        },
        'lines': {
          dur: 1000,
          lines: 12,
          fn: function fn(dur, index, total) {
            var transform = "rotate(".concat(30 * index + (index < 6 ? 180 : -180), "deg)");
            var animationDelay = "".concat(dur * index / total - dur, "ms");
            return {
              y1: 17,
              y2: 29,
              style: {
                'transform': transform,
                'animation-delay': animationDelay
              }
            };
          }
        },
        'lines-small': {
          dur: 1000,
          lines: 12,
          fn: function fn(dur, index, total) {
            var transform = "rotate(".concat(30 * index + (index < 6 ? 180 : -180), "deg)");
            var animationDelay = "".concat(dur * index / total - dur, "ms");
            return {
              y1: 12,
              y2: 20,
              style: {
                'transform': transform,
                'animation-delay': animationDelay
              }
            };
          }
        }
      };
      var SPINNERS = spinners;
      /***/
    },

    /***/
    "hBli":
    /*!***************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/view-operative-history/view-operative-history.page.html ***!
      \***************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function hBli(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-button (click)=\"dismiss()\"><ion-icon name=\"chevron-back-outline\"></ion-icon>Back</ion-button>\n    </ion-buttons>\n    <ion-title>Edit and View</ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-button (click)=\"save()\">Save</ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <form [formGroup]=\"form\">\n    <ion-list>\n      <ion-list-header lines=\"full\">\n        <ion-label>\n          Operative History\n        </ion-label>\n      </ion-list-header>\n\n      <ion-item>\n        <ion-label>Date</ion-label>\n        <ion-datetime placeholder=\"Select Date\"\n        display-format=\"D MMM YYYY\" \n        picker-format=\"D MMM YYYY\" \n        formControlName=\"date\" \n        style=\"color: dodgerblue;\"></ion-datetime>\n      </ion-item>\n\n      <ion-item>\n        <ion-label>Type</ion-label>\n        <ion-input \n          formControlName=\"type\" \n          placeholder=\"Operation Type\"\n          style=\"color: dodgerblue; text-align: end;\">\n        </ion-input>\n      </ion-item>\n\n      <ion-item lines='full'>\n        <ion-label position=\"stacked\">Details</ion-label>\n        <ion-textarea rows=\"5\" formControlName=\"details\"></ion-textarea>\n      </ion-item>\n    </ion-list>\n  </form>\n\n  <ion-item lines='full' (click)=\"addPhotoToGallery()\">\n    <ion-icon name=\"add-circle-outline\" style=\"color:dodgerblue;\"></ion-icon>\n    Add pictures\n  </ion-item>\n\n  <ion-grid>\n    <ion-row>\n    <ion-col size=\"6\"\n      *ngFor=\"let photo of photos; index as position;\">\n        <ion-img [src]=\"photo.webviewPath\" (click)=\"openViewer(photo.webviewPath)\"></ion-img>\n    </ion-col>\n    </ion-row>\n  </ion-grid>\n\n</ion-content>";
      /***/
    },

    /***/
    "nuTe":
    /*!*************************************************************************!*\
      !*** ./src/app/edit-medical-conditions/edit-medical-conditions.page.ts ***!
      \*************************************************************************/

    /*! exports provided: EditMedicalConditionsPage */

    /***/
    function nuTe(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "EditMedicalConditionsPage", function () {
        return EditMedicalConditionsPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_edit_medical_conditions_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./edit-medical-conditions.page.html */
      "vpZA");
      /* harmony import */


      var _edit_medical_conditions_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./edit-medical-conditions.page.scss */
      "6qsm");
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


      var _services_user_data_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../services/user-data.service */
      "DPk/");

      var EditMedicalConditionsPage = /*#__PURE__*/function () {
        function EditMedicalConditionsPage(modalCtrl, fb, userDataService) {
          _classCallCheck(this, EditMedicalConditionsPage);

          this.modalCtrl = modalCtrl;
          this.fb = fb;
          this.userDataService = userDataService;
          this.form = this.fb.group({
            allergies: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
            medications: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
            otherMedicalConditions: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]
          });
        }

        _createClass(EditMedicalConditionsPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee12() {
              var _this6 = this;

              return regeneratorRuntime.wrap(function _callee12$(_context12) {
                while (1) {
                  switch (_context12.prev = _context12.next) {
                    case 0:
                      _context12.next = 2;
                      return this.userDataService.loadMedicalRecord();

                    case 2:
                      Object.keys(this.form.controls).forEach(function (key) {
                        _this6.form.get(key).setValue(_this6.userDataService.medicalRecordValue[key]);

                        console.log(key, _this6.form.get(key).value);
                      });

                    case 3:
                    case "end":
                      return _context12.stop();
                  }
                }
              }, _callee12, this);
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
            var _this7 = this;

            Object.keys(this.form.controls).forEach(function (key) {
              _this7.userDataService.medicalRecordValue[key] = _this7.form.value[key];
              console.log(key, _this7.form.get(key).value);
            });
            this.userDataService.saveMedicalRecord();
            this.modalCtrl.dismiss();
            location.reload();
          }
        }]);

        return EditMedicalConditionsPage;
      }();

      EditMedicalConditionsPage.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"]
        }, {
          type: _services_user_data_service__WEBPACK_IMPORTED_MODULE_6__["UserDataService"]
        }];
      };

      EditMedicalConditionsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-edit-medical-conditions',
        template: _raw_loader_edit_medical_conditions_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_edit_medical_conditions_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], EditMedicalConditionsPage);
      /***/
    },

    /***/
    "oZqj":
    /*!*************************************************************************!*\
      !*** ./src/app/view-operative-history/view-operative-history.page.scss ***!
      \*************************************************************************/

    /*! exports provided: default */

    /***/
    function oZqj(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ2aWV3LW9wZXJhdGl2ZS1oaXN0b3J5LnBhZ2Uuc2NzcyJ9 */";
      /***/
    },

    /***/
    "qULd":
    /*!**************************************************************!*\
      !*** ./node_modules/@ionic/core/dist/esm/haptic-27b3f981.js ***!
      \**************************************************************/

    /*! exports provided: a, b, c, d, h */

    /***/
    function qULd(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "a", function () {
        return hapticSelectionStart;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "b", function () {
        return hapticSelectionChanged;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "c", function () {
        return hapticSelection;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "d", function () {
        return hapticImpact;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "h", function () {
        return hapticSelectionEnd;
      });

      var HapticEngine = {
        getEngine: function getEngine() {
          var win = window;
          return win.TapticEngine || win.Capacitor && win.Capacitor.isPluginAvailable('Haptics') && win.Capacitor.Plugins.Haptics;
        },
        available: function available() {
          return !!this.getEngine();
        },
        isCordova: function isCordova() {
          return !!window.TapticEngine;
        },
        isCapacitor: function isCapacitor() {
          var win = window;
          return !!win.Capacitor;
        },
        impact: function impact(options) {
          var engine = this.getEngine();

          if (!engine) {
            return;
          }

          var style = this.isCapacitor() ? options.style.toUpperCase() : options.style;
          engine.impact({
            style: style
          });
        },
        notification: function notification(options) {
          var engine = this.getEngine();

          if (!engine) {
            return;
          }

          var style = this.isCapacitor() ? options.style.toUpperCase() : options.style;
          engine.notification({
            style: style
          });
        },
        selection: function selection() {
          this.impact({
            style: 'light'
          });
        },
        selectionStart: function selectionStart() {
          var engine = this.getEngine();

          if (!engine) {
            return;
          }

          if (this.isCapacitor()) {
            engine.selectionStart();
          } else {
            engine.gestureSelectionStart();
          }
        },
        selectionChanged: function selectionChanged() {
          var engine = this.getEngine();

          if (!engine) {
            return;
          }

          if (this.isCapacitor()) {
            engine.selectionChanged();
          } else {
            engine.gestureSelectionChanged();
          }
        },
        selectionEnd: function selectionEnd() {
          var engine = this.getEngine();

          if (!engine) {
            return;
          }

          if (this.isCapacitor()) {
            engine.selectionEnd();
          } else {
            engine.gestureSelectionEnd();
          }
        }
      };
      /**
       * Trigger a selection changed haptic event. Good for one-time events
       * (not for gestures)
       */

      var hapticSelection = function hapticSelection() {
        HapticEngine.selection();
      };
      /**
       * Tell the haptic engine that a gesture for a selection change is starting.
       */


      var hapticSelectionStart = function hapticSelectionStart() {
        HapticEngine.selectionStart();
      };
      /**
       * Tell the haptic engine that a selection changed during a gesture.
       */


      var hapticSelectionChanged = function hapticSelectionChanged() {
        HapticEngine.selectionChanged();
      };
      /**
       * Tell the haptic engine we are done with a gesture. This needs to be
       * called lest resources are not properly recycled.
       */


      var hapticSelectionEnd = function hapticSelectionEnd() {
        HapticEngine.selectionEnd();
      };
      /**
       * Use this to indicate success/failure/warning to the user.
       * options should be of the type `{ style: 'light' }` (or `medium`/`heavy`)
       */


      var hapticImpact = function hapticImpact(options) {
        HapticEngine.impact(options);
      };
      /***/

    },

    /***/
    "r8bU":
    /*!***********************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/appointment-reminder/appointment-reminder.page.html ***!
      \***********************************************************************************************************/

    /*! exports provided: default */

    /***/
    function r8bU(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-button color=\"danger\" (click)=\"dismiss()\">Cancel</ion-button>\n    </ion-buttons>\n    <ion-title>New Appointment</ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-button (click)=\"save()\">Done</ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <form [formGroup]=\"form\">\n    <ion-card>\n      <ion-item>\n        <ion-input placeholder='Title' formControlName=\"title\"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-input placeholder='Doctor' formControlName=\"doctor\"></ion-input>\n      </ion-item>\n      <ion-item lines=\"none\">\n        <ion-input placeholder='Location' formControlName=\"location\"></ion-input>\n      </ion-item>\n    </ion-card>\n\n    <ion-card>\n      <ion-item lines=\"none\">\n        <ion-icon name=\"calendar-clear-outline\" slot=\"start\"></ion-icon>\n        <ion-label>Date</ion-label>\n        <ion-datetime \n        placeholder=\"Select Date\"\n        display-format=\"D/MMM/YYYY HH:mm\" \n        formControlName=\"appointmentDate\"></ion-datetime>\n      </ion-item>\n    </ion-card>\n\n    <ion-card>\n      <ion-item lines=\"none\">\n        <ion-icon name=\"alarm-outline\" slot=\"start\"></ion-icon>\n        <ion-label>Alarm</ion-label>\n        <ion-select \n        formControlName=\"alarmDateTime\" \n        interface=\"action-sheet\"\n        style=\"max-width: 100%;\">\n        <ion-select-option value={{0}}>At time of event</ion-select-option>\n          <ion-select-option value={{1000*60*30}}>30 minutes before</ion-select-option>\n          <ion-select-option value={{1000*60*60}}>1 hour before</ion-select-option>\n          <ion-select-option value={{1000*60*120}}>2 hours before</ion-select-option>\n          <ion-select-option value={{1000*60*60*24}}>1 day before</ion-select-option>\n          <ion-select-option value={{1000*60*60*48}}>2 days before</ion-select-option>\n          <ion-select-option value={{1000*60*60*24*7}}>1 week before</ion-select-option>\n        </ion-select>\n      </ion-item>\n    </ion-card>\n  </form>\n</ion-content>\n";
      /***/
    },

    /***/
    "tWnK":
    /*!*******************************************************!*\
      !*** ./src/app/edit-pathology/edit-pathology.page.ts ***!
      \*******************************************************/

    /*! exports provided: EditPathologyPage */

    /***/
    function tWnK(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "EditPathologyPage", function () {
        return EditPathologyPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_edit_pathology_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./edit-pathology.page.html */
      "L1bm");
      /* harmony import */


      var _edit_pathology_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./edit-pathology.page.scss */
      "65gq");
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


      var _services_user_data_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../services/user-data.service */
      "DPk/");

      var EditPathologyPage = /*#__PURE__*/function () {
        function EditPathologyPage(modalCtrl, fb, userDataService) {
          _classCallCheck(this, EditPathologyPage);

          this.modalCtrl = modalCtrl;
          this.fb = fb;
          this.userDataService = userDataService;
          this.tubeSizeList = ['2.5', '3.0', '3.5', '4.0', '4.5', '5.0', '6.0', '7.0', '8.0'];
          this.form = this.fb.group({
            pathology: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
            intubatation: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
            airwayGrade: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
            tubeSize: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
            details: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]
          });
        }

        _createClass(EditPathologyPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee13() {
              var _this8 = this;

              return regeneratorRuntime.wrap(function _callee13$(_context13) {
                while (1) {
                  switch (_context13.prev = _context13.next) {
                    case 0:
                      _context13.next = 2;
                      return this.userDataService.loadMedicalRecord();

                    case 2:
                      Object.keys(this.form.controls).forEach(function (key) {
                        _this8.form.get(key).setValue(_this8.userDataService.medicalRecordValue[key]);

                        console.log(key, _this8.form.get(key).value);
                      });

                    case 3:
                    case "end":
                      return _context13.stop();
                  }
                }
              }, _callee13, this);
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
            var _this9 = this;

            Object.keys(this.form.controls).forEach(function (key) {
              _this9.userDataService.medicalRecordValue[key] = _this9.form.value[key];
              console.log(key, _this9.form.get(key).value);
            });
            this.userDataService.saveMedicalRecord();
            location.reload();
          }
        }, {
          key: "intubatation",
          value: function intubatation() {
            console.log(this.form.value.intubatation);
          }
        }]);

        return EditPathologyPage;
      }();

      EditPathologyPage.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"]
        }, {
          type: _services_user_data_service__WEBPACK_IMPORTED_MODULE_6__["UserDataService"]
        }];
      };

      EditPathologyPage.propDecorators = {
        isModal: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }]
      };
      EditPathologyPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-edit-pathology',
        template: _raw_loader_edit_pathology_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_edit_pathology_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], EditPathologyPage);
      /***/
    },

    /***/
    "tXud":
    /*!*****************************************************!*\
      !*** ./src/app/open-version/open-version.page.scss ***!
      \*****************************************************/

    /*! exports provided: default */

    /***/
    function tXud(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".userProfile ion-label:last-child {\n  text-align: end;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL29wZW4tdmVyc2lvbi5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxlQUFBO0FBQ0oiLCJmaWxlIjoib3Blbi12ZXJzaW9uLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi51c2VyUHJvZmlsZSBpb24tbGFiZWw6bGFzdC1jaGlsZHtcbiAgICB0ZXh0LWFsaWduOiBlbmQ7XG59Il19 */";
      /***/
    },

    /***/
    "txDb":
    /*!*********************************************************************!*\
      !*** ./src/app/appointment-reminder/appointment-reminder.page.scss ***!
      \*********************************************************************/

    /*! exports provided: default */

    /***/
    function txDb(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-button {\n  width: 90%;\n  margin: auto;\n  margin-top: 10%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2FwcG9pbnRtZW50LXJlbWluZGVyLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFVBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtBQUNKIiwiZmlsZSI6ImFwcG9pbnRtZW50LXJlbWluZGVyLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1idXR0b24ge1xuICAgIHdpZHRoOiA5MCU7XG4gICAgbWFyZ2luOiBhdXRvO1xuICAgIG1hcmdpbi10b3A6IDEwJTtcbn0iXX0= */";
      /***/
    },

    /***/
    "vpZA":
    /*!*****************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/edit-medical-conditions/edit-medical-conditions.page.html ***!
      \*****************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function vpZA(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-button color=\"danger\" (click)=\"dismiss()\">Cancel</ion-button>\n    </ion-buttons>\n    <ion-title>Edit</ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-button (click)=\"save()\">Done</ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <form [formGroup]=\"form\">\n    <ion-list>\n      <ion-list-header lines=\"full\">\n        <ion-label>\n          Allergies\n        </ion-label>\n      </ion-list-header>\n\n      <ion-item lines='full'>\n        <ion-textarea autoGrow=\"true\" rows=\"2\"\n        placeholder=\"Enter any known allergies\"\n        formControlName=\"allergies\"></ion-textarea>\n      </ion-item>\n    </ion-list>\n\n    <ion-list>\n      <ion-list-header lines=\"full\">\n        <ion-label>\n          Medications\n        </ion-label>\n      </ion-list-header>\n\n      <ion-item lines='full'>\n        <ion-textarea autoGrow=\"true\" rows=\"2\"\n        placeholder=\"Enter current medications\"\n        formControlName=\"medications\"></ion-textarea>\n      </ion-item>\n    </ion-list>\n\n    <ion-list>\n      <ion-list-header lines=\"full\">\n        <ion-label>\n          Other Medical Conditions\n        </ion-label>\n      </ion-list-header>\n\n      <ion-item lines='full'>\n        <ion-textarea autoGrow=\"true\" rows=\"2\"\n        placeholder=\"Enter other medical conditions\"\n        formControlName=\"otherMedicalConditions\"></ion-textarea>\n      </ion-item>\n    </ion-list>\n  </form>\n</ion-content>\n";
      /***/
    },

    /***/
    "wK3v":
    /*!*************************************************************************!*\
      !*** ./src/app/edit-operative-history/edit-operative-history.page.scss ***!
      \*************************************************************************/

    /*! exports provided: default */

    /***/
    function wK3v(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJlZGl0LW9wZXJhdGl2ZS1oaXN0b3J5LnBhZ2Uuc2NzcyJ9 */";
      /***/
    },

    /***/
    "yr4Q":
    /*!***************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/edit-operative-history/edit-operative-history.page.html ***!
      \***************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function yr4Q(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-button color=\"danger\" (click)=\"dismiss()\">Cancel</ion-button>\n    </ion-buttons>\n    <ion-title>Add New Record</ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-button (click)=\"save()\">Save</ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <form [formGroup]=\"form\">\n    <ion-list>\n      <ion-list-header lines=\"full\">\n        <ion-label>\n          Operative History\n        </ion-label>\n      </ion-list-header>\n\n      <ion-item>\n        <ion-label>Date</ion-label>\n        <ion-datetime placeholder=\"Select Date\"\n        display-format=\"D MMM YYYY\" \n        picker-format=\"D MMM YYYY\" \n        formControlName=\"date\" \n        style=\"color: dodgerblue;\"></ion-datetime>\n      </ion-item>\n\n      <ion-item>\n        <ion-label>Type</ion-label>\n        <ion-input \n          formControlName=\"type\" \n          placeholder=\"Operation Type\"\n          style=\"color: dodgerblue; text-align: end;\">\n        </ion-input>\n      </ion-item>\n\n      <ion-item lines=\"full\"> \n        <ion-label position=\"stacked\">Details</ion-label>\n        <ion-textarea rows=\"5\"\n        placeholder=\"Enter Details\" \n        formControlName=\"details\"></ion-textarea>\n      </ion-item>\n    </ion-list>\n  </form>\n\n  <ion-item lines='full' (click)=\"addPhotoToGallery()\">\n    <ion-icon name=\"add-circle-outline\" style=\"color:dodgerblue;\"></ion-icon>\n    Add pictures\n  </ion-item>\n\n  <ion-grid>\n    <ion-row>\n    <ion-col size=\"6\"\n      *ngFor=\"let photo of photos; index as position; let counter = index\">\n        <ion-img [src]=\"photo.webviewPath\" (click)=\"openViewer(photo.webviewPath)\"></ion-img>\n    </ion-col>\n    </ion-row>\n  </ion-grid>\n\n</ion-content>\n";
      /***/
    }
  }]);
})();
//# sourceMappingURL=common-es5.js.map