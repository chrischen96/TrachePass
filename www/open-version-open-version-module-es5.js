(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["open-version-open-version-module"], {
    /***/
    "Ndta":
    /*!*************************************************************!*\
      !*** ./src/app/open-version/open-version-routing.module.ts ***!
      \*************************************************************/

    /*! exports provided: OpenVersionPageRoutingModule */

    /***/
    function Ndta(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "OpenVersionPageRoutingModule", function () {
        return OpenVersionPageRoutingModule;
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


      var _open_version_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./open-version.page */
      "GaT9");

      var routes = [{
        path: '',
        component: _open_version_page__WEBPACK_IMPORTED_MODULE_3__["OpenVersionPage"]
      }];

      var OpenVersionPageRoutingModule = function OpenVersionPageRoutingModule() {
        _classCallCheck(this, OpenVersionPageRoutingModule);
      };

      OpenVersionPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], OpenVersionPageRoutingModule);
      /***/
    },

    /***/
    "TqIz":
    /*!*****************************************************!*\
      !*** ./src/app/open-version/open-version.module.ts ***!
      \*****************************************************/

    /*! exports provided: OpenVersionPageModule */

    /***/
    function TqIz(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "OpenVersionPageModule", function () {
        return OpenVersionPageModule;
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


      var _open_version_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./open-version-routing.module */
      "Ndta");
      /* harmony import */


      var _open_version_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./open-version.page */
      "GaT9");

      var OpenVersionPageModule = function OpenVersionPageModule() {
        _classCallCheck(this, OpenVersionPageModule);
      };

      OpenVersionPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _open_version_routing_module__WEBPACK_IMPORTED_MODULE_5__["OpenVersionPageRoutingModule"]],
        declarations: [_open_version_page__WEBPACK_IMPORTED_MODULE_6__["OpenVersionPage"]]
      })], OpenVersionPageModule);
      /***/
    }
  }]);
})();
//# sourceMappingURL=open-version-open-version-module-es5.js.map