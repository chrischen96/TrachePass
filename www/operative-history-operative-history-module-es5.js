(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["operative-history-operative-history-module"], {
    /***/
    "0mJ1":
    /*!*************************************************************!*\
      !*** ./src/app/operative-history/operative-history.page.ts ***!
      \*************************************************************/

    /*! exports provided: OperativeHistoryPage */

    /***/
    function mJ1(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "OperativeHistoryPage", function () {
        return OperativeHistoryPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_operative_history_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./operative-history.page.html */
      "u8H5");
      /* harmony import */


      var _operative_history_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./operative-history.page.scss */
      "CvjF");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _edit_operative_history_edit_operative_history_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../edit-operative-history/edit-operative-history.page */
      "8x4H");
      /* harmony import */


      var _services_user_data_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../services/user-data.service */
      "DPk/");
      /* harmony import */


      var _services_photo_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../services/photo.service */
      "6/gD");
      /* harmony import */


      var _view_operative_history_view_operative_history_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../view-operative-history/view-operative-history.page */
      "TR9v");

      var OperativeHistoryPage = /*#__PURE__*/function () {
        function OperativeHistoryPage(modalCtrl, userDataService, actionSheetController, photoService) {
          _classCallCheck(this, OperativeHistoryPage);

          this.modalCtrl = modalCtrl;
          this.userDataService = userDataService;
          this.actionSheetController = actionSheetController;
          this.photoService = photoService;
          this.operativeHistoryJSON = {};
          this.operativeHistoryString = '';
          this.histories = [];
          this.photos = [];
        }

        _createClass(OperativeHistoryPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var _this = this;

              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      _context.next = 2;
                      return this.userDataService.loadMedicalRecord();

                    case 2:
                      this.operativeHistoryString = this.userDataService.medicalRecordValue['operativeHistory'];

                      if (this.operativeHistoryString != '' && this.operativeHistoryString != null) {
                        this.operativeHistoryJSON = JSON.parse(this.operativeHistoryString);
                        Object.keys(this.operativeHistoryJSON).forEach(function (key) {
                          _this.histories.push(_this.operativeHistoryJSON[key]);
                        });
                      }

                    case 4:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }, {
          key: "edit",
          value: function edit() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              var modal;
              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      _context2.next = 2;
                      return this.modalCtrl.create({
                        component: _edit_operative_history_edit_operative_history_page__WEBPACK_IMPORTED_MODULE_5__["EditOperativeHistoryPage"],
                        backdropDismiss: false,
                        componentProps: {
                          isModal: true
                        }
                      });

                    case 2:
                      modal = _context2.sent;
                      modal.present();

                    case 4:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this);
            }));
          }
        }, {
          key: "viewPhoto",
          value: function viewPhoto(x) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
              var modal;
              return regeneratorRuntime.wrap(function _callee3$(_context3) {
                while (1) {
                  switch (_context3.prev = _context3.next) {
                    case 0:
                      _context3.next = 2;
                      return this.modalCtrl.create({
                        component: _view_operative_history_view_operative_history_page__WEBPACK_IMPORTED_MODULE_8__["ViewOperativeHistoryPage"],
                        backdropDismiss: false,
                        componentProps: {
                          index: x
                        }
                      });

                    case 2:
                      modal = _context3.sent;
                      modal.present();

                    case 4:
                    case "end":
                      return _context3.stop();
                  }
                }
              }, _callee3, this);
            }));
          }
        }, {
          key: "choose",
          value: function choose(x) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
              var _this2 = this;

              var actionSheet;
              return regeneratorRuntime.wrap(function _callee4$(_context4) {
                while (1) {
                  switch (_context4.prev = _context4.next) {
                    case 0:
                      _context4.next = 2;
                      return this.actionSheetController.create({
                        header: 'Options',
                        buttons: [{
                          text: 'View and Edit',
                          handler: function handler() {
                            _this2.viewPhoto(x);
                          }
                        }, {
                          text: 'Delete',
                          role: 'destructive',
                          handler: function handler() {
                            console.log('Delete clicked');
                            console.log(x);

                            _this2.histories.splice(x, 1);

                            console.log(_this2.histories);
                            _this2.operativeHistoryJSON = {};

                            for (var i = 0; i < _this2.histories.length; i++) {
                              console.log(i.toString());
                              _this2.operativeHistoryJSON[i] = _this2.histories[i];
                            }
                            /*           const lastKey=Object.keys(this.operativeHistoryJSON)[Object.keys(this.operativeHistoryJSON).length-1];
                                      delete this.operativeHistoryJSON[lastKey]; */


                            console.log(_this2.histories);
                            console.log(_this2.operativeHistoryJSON);
                            _this2.userDataService.medicalRecordValue['operativeHistory'] = JSON.stringify(_this2.operativeHistoryJSON);

                            _this2.userDataService.saveMedicalRecord();
                          }
                        }, {
                          text: 'Cancel',
                          role: 'cancel'
                        }]
                      });

                    case 2:
                      actionSheet = _context4.sent;
                      _context4.next = 5;
                      return actionSheet.present();

                    case 5:
                    case "end":
                      return _context4.stop();
                  }
                }
              }, _callee4, this);
            }));
          }
        }]);

        return OperativeHistoryPage;
      }();

      OperativeHistoryPage.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"]
        }, {
          type: _services_user_data_service__WEBPACK_IMPORTED_MODULE_6__["UserDataService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ActionSheetController"]
        }, {
          type: _services_photo_service__WEBPACK_IMPORTED_MODULE_7__["PhotoService"]
        }];
      };

      OperativeHistoryPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-operative-history',
        template: _raw_loader_operative_history_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_operative_history_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], OperativeHistoryPage);
      /***/
    },

    /***/
    "9cPT":
    /*!***********************************************************************!*\
      !*** ./src/app/operative-history/operative-history-routing.module.ts ***!
      \***********************************************************************/

    /*! exports provided: OperativeHistoryPageRoutingModule */

    /***/
    function cPT(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "OperativeHistoryPageRoutingModule", function () {
        return OperativeHistoryPageRoutingModule;
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


      var _operative_history_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./operative-history.page */
      "0mJ1");

      var routes = [{
        path: '',
        component: _operative_history_page__WEBPACK_IMPORTED_MODULE_3__["OperativeHistoryPage"]
      }];

      var OperativeHistoryPageRoutingModule = function OperativeHistoryPageRoutingModule() {
        _classCallCheck(this, OperativeHistoryPageRoutingModule);
      };

      OperativeHistoryPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], OperativeHistoryPageRoutingModule);
      /***/
    },

    /***/
    "CvjF":
    /*!***************************************************************!*\
      !*** ./src/app/operative-history/operative-history.page.scss ***!
      \***************************************************************/

    /*! exports provided: default */

    /***/
    function CvjF(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "h3:first-child {\n  font-weight: bold;\n  color: #797979;\n  margin-bottom: 5px;\n}\n\nion-card-content {\n  padding-top: 0;\n  color: black;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL29wZXJhdGl2ZS1oaXN0b3J5LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0FBQ0o7O0FBRUE7RUFDSSxjQUFBO0VBQ0EsWUFBQTtBQUNKIiwiZmlsZSI6Im9wZXJhdGl2ZS1oaXN0b3J5LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImgzOmZpcnN0LWNoaWxke1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGNvbG9yOiByZ2IoMTIxLCAxMjEsIDEyMSk7XG4gICAgbWFyZ2luLWJvdHRvbTogNXB4O1xufVxuXG5pb24tY2FyZC1jb250ZW50e1xuICAgIHBhZGRpbmctdG9wOiAwO1xuICAgIGNvbG9yOiBibGFjaztcbn1cblxuIl19 */";
      /***/
    },

    /***/
    "tiJM":
    /*!***************************************************************!*\
      !*** ./src/app/operative-history/operative-history.module.ts ***!
      \***************************************************************/

    /*! exports provided: OperativeHistoryPageModule */

    /***/
    function tiJM(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "OperativeHistoryPageModule", function () {
        return OperativeHistoryPageModule;
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


      var _operative_history_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./operative-history-routing.module */
      "9cPT");
      /* harmony import */


      var _operative_history_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./operative-history.page */
      "0mJ1");

      var OperativeHistoryPageModule = function OperativeHistoryPageModule() {
        _classCallCheck(this, OperativeHistoryPageModule);
      };

      OperativeHistoryPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _operative_history_routing_module__WEBPACK_IMPORTED_MODULE_5__["OperativeHistoryPageRoutingModule"]],
        declarations: [_operative_history_page__WEBPACK_IMPORTED_MODULE_6__["OperativeHistoryPage"]]
      })], OperativeHistoryPageModule);
      /***/
    },

    /***/
    "u8H5":
    /*!*****************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/operative-history/operative-history.page.html ***!
      \*****************************************************************************************************/

    /*! exports provided: default */

    /***/
    function u8H5(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"/medical-record\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>Operative History</ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-button (click)=\"edit()\">Add</ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-card *ngIf=\"histories.length == 0\">\n    <ion-card-header>\n      <ion-card-title>No History</ion-card-title>\n    </ion-card-header>\n  </ion-card>\n\n  <ion-card *ngFor=\"let history of histories; let i = index\" (click)=choose(i)>\n\n    <ion-item lines=\"full\">\n      <ion-label style=\"font-weight: bold; color: mediumseagreen\">\n        {{history.date | date : 'd MMM y'}}\n      </ion-label>\n    </ion-item>\n\n    <ion-item lines=\"none\">\n      <ion-label style=\"margin-bottom: 0%;\">\n        <h3>{{history.type}} Details</h3>\n      </ion-label>\n    </ion-item>\n\n    <ion-card-content>\n      {{history.details}}\n    </ion-card-content>\n\n  </ion-card>\n</ion-content>\n";
      /***/
    }
  }]);
})();
//# sourceMappingURL=operative-history-operative-history-module-es5.js.map