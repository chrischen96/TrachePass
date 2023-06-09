(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["medical-record-medical-record-module"], {
    /***/
    "CO38":
    /*!***********************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/medical-record/medical-record.page.html ***!
      \***********************************************************************************************/

    /*! exports provided: default */

    /***/
    function CO38(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"home\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>Medical Record</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <ion-card routerLink=\"./pathology\">\n    <ion-item lines=\"none\" href=\"#\">\n      <ion-icon name=\"flask-outline\" slot=\"start\" style=\"color:darkorange;\"></ion-icon>\n      <ion-label style=\"font-weight: bold; color:darkorange;\">Airway Pathology</ion-label>\n    </ion-item>\n    <ion-card-content style=\"font-weight: bold;\">\n      <ion-label>- Reason for Tracheostomy</ion-label><br>\n      <ion-label>- Upper Airway Condition</ion-label><br>\n    </ion-card-content>\n  </ion-card>\n\n  <ion-card routerLink=\"./tracheostomy-details\">\n    <ion-item lines=\"none\" href=\"#\">\n      <ion-icon name=\"document-text-outline\" slot=\"start\" style=\"color:dodgerblue;\"></ion-icon>\n      <ion-label style=\"font-weight: bold; color:dodgerblue;\">Tracheostomy Details</ion-label>\n    </ion-item>\n    <ion-card-content style=\"font-weight: bold;\">\n      <ion-label>- Tube Type and Size</ion-label><br>\n      <ion-label>- Shaft and Suction Length</ion-label><br>\n    </ion-card-content>\n  </ion-card>\n\n  <ion-card routerLink=\"./operative-history\">\n    <ion-item lines=\"none\" href=\"#\">\n      <ion-icon name=\"file-tray-full-outline\" slot=\"start\" style=\"color:mediumseagreen;\"></ion-icon>\n      <ion-label style=\"font-weight: bold; color:mediumseagreen;\">Operative History</ion-label>\n    </ion-item>\n    <ion-card-content style=\"font-weight: bold;\">\n      <ion-label>- Details of Surgery</ion-label><br>\n      <ion-label>- Details from MLBs</ion-label><br>\n    </ion-card-content>\n  </ion-card>\n\n  <ion-card routerLink=\"./medical-condition\">\n    <ion-item lines=\"none\" href=\"#\">\n      <ion-icon name=\"medical-outline\" slot=\"start\" style=\"color:orangered;\"></ion-icon>\n      <ion-label style=\"font-weight: bold; color:orangered\">Medical Conditions</ion-label>\n    </ion-item>\n    <ion-card-content style=\"font-weight: bold;\">\n      <ion-label>- Allergies</ion-label><br>\n      <ion-label>- Medications</ion-label><br>\n    </ion-card-content>\n  </ion-card>\n\n</ion-content>";
      /***/
    },

    /***/
    "jxKX":
    /*!*****************************************************************!*\
      !*** ./src/app/medical-record/medical-record-routing.module.ts ***!
      \*****************************************************************/

    /*! exports provided: MedicalRecordPageRoutingModule */

    /***/
    function jxKX(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MedicalRecordPageRoutingModule", function () {
        return MedicalRecordPageRoutingModule;
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


      var _medical_record_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./medical-record.page */
      "yZ6O");

      var routes = [{
        path: '',
        component: _medical_record_page__WEBPACK_IMPORTED_MODULE_3__["MedicalRecordPage"]
      }];

      var MedicalRecordPageRoutingModule = function MedicalRecordPageRoutingModule() {
        _classCallCheck(this, MedicalRecordPageRoutingModule);
      };

      MedicalRecordPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], MedicalRecordPageRoutingModule);
      /***/
    },

    /***/
    "qoxf":
    /*!*********************************************************!*\
      !*** ./src/app/medical-record/medical-record.page.scss ***!
      \*********************************************************/

    /*! exports provided: default */

    /***/
    function qoxf(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-list-header {\n  padding-top: 20px;\n  padding-bottom: 5px;\n}\n\nion-card-content {\n  padding-top: 5px;\n  padding-bottom: 15px;\n}\n\nion-card {\n  outline: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL21lZGljYWwtcmVjb3JkLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGlCQUFBO0VBQ0EsbUJBQUE7QUFDSjs7QUFFQTtFQUNJLGdCQUFBO0VBQ0Esb0JBQUE7QUFDSjs7QUFFQTtFQUNJLGFBQUE7QUFDSiIsImZpbGUiOiJtZWRpY2FsLXJlY29yZC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tbGlzdC1oZWFkZXIge1xuICAgIHBhZGRpbmctdG9wOiAyMHB4OyBcbiAgICBwYWRkaW5nLWJvdHRvbTogNXB4O1xufVxuXG5pb24tY2FyZC1jb250ZW50IHtcbiAgICBwYWRkaW5nLXRvcDogNXB4O1xuICAgIHBhZGRpbmctYm90dG9tOiAxNXB4O1xufVxuXG5pb24tY2FyZCB7XG4gICAgb3V0bGluZTogbm9uZTtcbn0iXX0= */";
      /***/
    },

    /***/
    "ujJ6":
    /*!*********************************************************!*\
      !*** ./src/app/medical-record/medical-record.module.ts ***!
      \*********************************************************/

    /*! exports provided: MedicalRecordPageModule */

    /***/
    function ujJ6(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MedicalRecordPageModule", function () {
        return MedicalRecordPageModule;
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


      var _medical_record_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./medical-record-routing.module */
      "jxKX");
      /* harmony import */


      var _medical_record_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./medical-record.page */
      "yZ6O");

      var MedicalRecordPageModule = function MedicalRecordPageModule() {
        _classCallCheck(this, MedicalRecordPageModule);
      };

      MedicalRecordPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _medical_record_routing_module__WEBPACK_IMPORTED_MODULE_5__["MedicalRecordPageRoutingModule"]],
        declarations: [_medical_record_page__WEBPACK_IMPORTED_MODULE_6__["MedicalRecordPage"]]
      })], MedicalRecordPageModule);
      /***/
    },

    /***/
    "yZ6O":
    /*!*******************************************************!*\
      !*** ./src/app/medical-record/medical-record.page.ts ***!
      \*******************************************************/

    /*! exports provided: MedicalRecordPage */

    /***/
    function yZ6O(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MedicalRecordPage", function () {
        return MedicalRecordPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_medical_record_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./medical-record.page.html */
      "CO38");
      /* harmony import */


      var _medical_record_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./medical-record.page.scss */
      "qoxf");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var MedicalRecordPage = /*#__PURE__*/function () {
        function MedicalRecordPage() {
          _classCallCheck(this, MedicalRecordPage);
        }

        _createClass(MedicalRecordPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return MedicalRecordPage;
      }();

      MedicalRecordPage.ctorParameters = function () {
        return [];
      };

      MedicalRecordPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-medical-record',
        template: _raw_loader_medical_record_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_medical_record_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], MedicalRecordPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=medical-record-medical-record-module-es5.js.map