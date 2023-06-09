(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tracheostomy-details-tracheostomy-details-module"], {
    /***/
    "3BWf":
    /*!*********************************************************************!*\
      !*** ./src/app/tracheostomy-details/tracheostomy-details.module.ts ***!
      \*********************************************************************/

    /*! exports provided: TracheostomyDetailsPageModule */

    /***/
    function BWf(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TracheostomyDetailsPageModule", function () {
        return TracheostomyDetailsPageModule;
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


      var _tracheostomy_details_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./tracheostomy-details-routing.module */
      "Kj0M");
      /* harmony import */


      var _tracheostomy_details_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./tracheostomy-details.page */
      "nvrn");

      var TracheostomyDetailsPageModule = function TracheostomyDetailsPageModule() {
        _classCallCheck(this, TracheostomyDetailsPageModule);
      };

      TracheostomyDetailsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _tracheostomy_details_routing_module__WEBPACK_IMPORTED_MODULE_5__["TracheostomyDetailsPageRoutingModule"]],
        declarations: [_tracheostomy_details_page__WEBPACK_IMPORTED_MODULE_6__["TracheostomyDetailsPage"]]
      })], TracheostomyDetailsPageModule);
      /***/
    },

    /***/
    "H+xN":
    /*!***********************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tracheostomy-details/tracheostomy-details.page.html ***!
      \***********************************************************************************************************/

    /*! exports provided: default */

    /***/
    function HXN(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar >\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"/medical-record\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>Details</ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-button (click)=\"edit()\">Edit</ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content fullscreen>\n\n  <ion-card>\n    <ion-card-header>\n      <ion-card-subtitle>Tube Type</ion-card-subtitle>\n      <ion-card-title>{{medicalRecord.tubeType}}</ion-card-title>\n    </ion-card-header>\n  </ion-card>\n\n  <ion-card>\n    <ion-card-header>\n      <ion-card-subtitle>SubType</ion-card-subtitle>\n      <ion-card-title>{{medicalRecord.subType}}</ion-card-title>\n    </ion-card-header>\n  </ion-card>\n\n  <ion-card>\n    <ion-card-header>\n      <ion-card-subtitle>Size - ID</ion-card-subtitle>\n      <ion-card-title>{{medicalRecord.sizeID}}\n        <b *ngIf=\"medicalRecord.sizeID != 'Unknown'\">mm</b>\n      </ion-card-title>\n    </ion-card-header>\n  </ion-card>\n\n  <ion-card>\n    <ion-card-header>\n      <div *ngIf=\" medicalRecord.tubeType=='Bivona Hyperflex' \">\n        <ion-card-subtitle>Max usable length</ion-card-subtitle>\n      </div>\n      <div *ngIf=\" medicalRecord.tubeType=='Shiley Uncuffed' || \n      medicalRecord.tubeType=='Shiley Cuffed' || \n      medicalRecord.tubeType=='Adult Portex Blue Line Ultra' || \n      medicalRecord.tubeType=='Adult Bivona' \">\n        <ion-card-subtitle>Length</ion-card-subtitle>\n      </div>\n      <div *ngIf=\" medicalRecord.tubeType!='Bivona Hyperflex' && \n      medicalRecord.tubeType!='Shiley Uncuffed' && \n      medicalRecord.tubeType!='Shiley Cuffed' &&  \n      medicalRecord.tubeType!='Adult Portex Blue Line Ultra' &&  \n      medicalRecord.tubeType!='Adult Bivona' \">\n        <ion-card-subtitle>Shaft Length</ion-card-subtitle>\n      </div>\n      <ion-card-title>{{medicalRecord.shaftLength}}\n        <b *ngIf=\"medicalRecord.shaftLength != 'Unknown'\">mm</b>\n      </ion-card-title>\n    </ion-card-header>\n  </ion-card>\n\n  <ion-card>\n    <ion-card-header>\n      <ion-card-subtitle>Suction Length</ion-card-subtitle>\n      <ion-card-title>{{medicalRecord.suctionLength}}\n        <b *ngIf=\"medicalRecord.suctionLength != 'Unknown'\">mm</b>\n      </ion-card-title>\n    </ion-card-header>\n  </ion-card>\n\n</ion-content>\n";
      /***/
    },

    /***/
    "Kj0M":
    /*!*****************************************************************************!*\
      !*** ./src/app/tracheostomy-details/tracheostomy-details-routing.module.ts ***!
      \*****************************************************************************/

    /*! exports provided: TracheostomyDetailsPageRoutingModule */

    /***/
    function Kj0M(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TracheostomyDetailsPageRoutingModule", function () {
        return TracheostomyDetailsPageRoutingModule;
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


      var _tracheostomy_details_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./tracheostomy-details.page */
      "nvrn");

      var routes = [{
        path: '',
        component: _tracheostomy_details_page__WEBPACK_IMPORTED_MODULE_3__["TracheostomyDetailsPage"]
      }];

      var TracheostomyDetailsPageRoutingModule = function TracheostomyDetailsPageRoutingModule() {
        _classCallCheck(this, TracheostomyDetailsPageRoutingModule);
      };

      TracheostomyDetailsPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], TracheostomyDetailsPageRoutingModule);
      /***/
    },

    /***/
    "nvrn":
    /*!*******************************************************************!*\
      !*** ./src/app/tracheostomy-details/tracheostomy-details.page.ts ***!
      \*******************************************************************/

    /*! exports provided: TracheostomyDetailsPage */

    /***/
    function nvrn(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TracheostomyDetailsPage", function () {
        return TracheostomyDetailsPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_tracheostomy_details_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./tracheostomy-details.page.html */
      "H+xN");
      /* harmony import */


      var _tracheostomy_details_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./tracheostomy-details.page.scss */
      "ptsy");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _edit_tracheostomy_details_edit_tracheostomy_details_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../edit-tracheostomy-details/edit-tracheostomy-details.page */
      "TKui");
      /* harmony import */


      var _services_user_data_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../services/user-data.service */
      "DPk/");

      var TracheostomyDetailsPage = /*#__PURE__*/function () {
        function TracheostomyDetailsPage(modalCtrl, userDataService) {
          _classCallCheck(this, TracheostomyDetailsPage);

          this.modalCtrl = modalCtrl;
          this.userDataService = userDataService;
          this.medicalRecord = {
            tubeType: 'Unknown',
            subType: 'Unknown',
            sizeID: 'Unknown',
            shaftLength: 'Unknown',
            suctionLength: 'Unknown'
          };
        }

        _createClass(TracheostomyDetailsPage, [{
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
                      Object.keys(this.userDataService.medicalRecordValue).forEach(function (key) {
                        if (Object.keys(_this.medicalRecord).includes(key)) {
                          _this.medicalRecord[key] = _this.userDataService.medicalRecordValue[key];
                        }

                        console.log(key, _this.medicalRecord[key]);
                      });
                      console.log(this.medicalRecord);

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
                        component: _edit_tracheostomy_details_edit_tracheostomy_details_page__WEBPACK_IMPORTED_MODULE_5__["EditTracheostomyDetailsPage"],
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
        }]);

        return TracheostomyDetailsPage;
      }();

      TracheostomyDetailsPage.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"]
        }, {
          type: _services_user_data_service__WEBPACK_IMPORTED_MODULE_6__["UserDataService"]
        }];
      };

      TracheostomyDetailsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-tracheostomy-details',
        template: _raw_loader_tracheostomy_details_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_tracheostomy_details_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], TracheostomyDetailsPage);
      /***/
    },

    /***/
    "ptsy":
    /*!*********************************************************************!*\
      !*** ./src/app/tracheostomy-details/tracheostomy-details.page.scss ***!
      \*********************************************************************/

    /*! exports provided: default */

    /***/
    function ptsy(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-card-title {\n  font-size: 22px;\n  margin-top: 8px;\n}\n\nion-card-subtitle {\n  font-size: 14px;\n  color: dodgerblue;\n}\n\nion-card {\n  margin-bottom: -8px;\n}\n\nion-card-header {\n  padding-top: 12px;\n  padding-bottom: 12px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3RyYWNoZW9zdG9teS1kZXRhaWxzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGVBQUE7RUFDQSxlQUFBO0FBQ0o7O0FBRUE7RUFDSSxlQUFBO0VBQ0EsaUJBQUE7QUFDSjs7QUFFQTtFQUNJLG1CQUFBO0FBQ0o7O0FBRUE7RUFDSSxpQkFBQTtFQUNBLG9CQUFBO0FBQ0oiLCJmaWxlIjoidHJhY2hlb3N0b215LWRldGFpbHMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNhcmQtdGl0bGUge1xuICAgIGZvbnQtc2l6ZTogMjJweDtcbiAgICBtYXJnaW4tdG9wOiA4cHg7XG59XG5cbmlvbi1jYXJkLXN1YnRpdGxlIHtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgY29sb3I6ZG9kZ2VyYmx1ZTtcbn1cblxuaW9uLWNhcmQge1xuICAgIG1hcmdpbi1ib3R0b206IC04cHg7XG59XG5cbmlvbi1jYXJkLWhlYWRlciB7XG4gICAgcGFkZGluZy10b3A6IDEycHg7XG4gICAgcGFkZGluZy1ib3R0b206IDEycHg7XG59Il19 */";
      /***/
    }
  }]);
})();
//# sourceMappingURL=tracheostomy-details-tracheostomy-details-module-es5.js.map