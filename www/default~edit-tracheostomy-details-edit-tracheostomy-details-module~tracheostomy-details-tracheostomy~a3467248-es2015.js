(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~edit-tracheostomy-details-edit-tracheostomy-details-module~tracheostomy-details-tracheostomy~a3467248"],{

/***/ "/flB":
/*!*******************************************************************************!*\
  !*** ./src/app/edit-tracheostomy-details/edit-tracheostomy-details.page.scss ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-input:last-child {\n  text-align: end;\n}\n\nion-input {\n  color: dodgerblue;\n}\n\nion-select {\n  max-width: 70%;\n  padding: 0%;\n  padding-right: 10px;\n  color: dodgerblue;\n}\n\nion-label {\n  padding: 0%;\n  min-width: 90px;\n}\n\n.length {\n  text-align: end;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VkaXQtdHJhY2hlb3N0b215LWRldGFpbHMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZUFBQTtBQUNKOztBQUVBO0VBQ0ksaUJBQUE7QUFDSjs7QUFFQTtFQUNJLGNBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtBQUNKOztBQUVBO0VBQ0ksV0FBQTtFQUNBLGVBQUE7QUFDSjs7QUFFQTtFQUNJLGVBQUE7QUFDSiIsImZpbGUiOiJlZGl0LXRyYWNoZW9zdG9teS1kZXRhaWxzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1pbnB1dDpsYXN0LWNoaWxkIHtcbiAgICB0ZXh0LWFsaWduOiBlbmQ7XG59XG5cbmlvbi1pbnB1dCB7XG4gICAgY29sb3I6ZG9kZ2VyYmx1ZTtcbn1cblxuaW9uLXNlbGVjdCB7XG4gICAgbWF4LXdpZHRoOiA3MCU7XG4gICAgcGFkZGluZzogMCU7XG4gICAgcGFkZGluZy1yaWdodDogMTBweDtcbiAgICBjb2xvcjogZG9kZ2VyYmx1ZTtcbn1cblxuaW9uLWxhYmVse1xuICAgIHBhZGRpbmc6IDAlO1xuICAgIG1pbi13aWR0aDogOTBweDtcbn1cblxuLmxlbmd0aCB7XG4gICAgdGV4dC1hbGlnbjogZW5kO1xufSJdfQ== */");

/***/ }),

/***/ "7Tad":
/*!*********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/edit-tracheostomy-details/edit-tracheostomy-details.page.html ***!
  \*********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-button color=\"danger\" (click)=\"dismiss()\">Cancel</ion-button>\n    </ion-buttons>\n    <ion-title>Edit</ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-button (click)=\"save()\">Done</ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <form [formGroup]=\"form\">\n    <ion-list>\n      <ion-list-header lines=\"full\">\n        <ion-label>\n          Tracheostomy Details\n        </ion-label>\n      </ion-list-header>\n\n      <ion-item>\n        <ion-label>Manual input</ion-label>\n        <ion-toggle formControlName=\"customize\" (ionChange)=\"toggleCustom()\"></ion-toggle>\n      </ion-item>\n\n      <div *ngIf=\"!form.value.customize\">\n        <ion-item>\n          <ion-label>Tube Type: </ion-label>\n          <ion-select (ionChange)=\"selectedTubeType()\" formControlName=\"tubeType\">\n            <div *ngFor=\"let tubetype of tubeTypes | keyvalue\">\n              <!-- <ion-text>{{tubetype.tubeTypeName}}</ion-text> -->\n              <ion-select-option value=\"{{tubetype.key}}\">{{tubetype.key}}</ion-select-option>\n            </div>\n          </ion-select>\n        </ion-item>\n        <ion-item>\n          <ion-label>Sub Type: </ion-label>\n          <ion-select (ionChange)=\"selectedSubTubeType()\" formControlName=\"subType\">\n            <div *ngFor=\"let subtype of subTypeList | keyvalue\">\n              <!-- <ion-text>{{tubetype.tubeTypeName}}</ion-text> -->\n              <ion-select-option value=\"{{subtype.key}}\">{{subtype.key}}</ion-select-option>\n            </div>\n          </ion-select>\n        </ion-item>\n        <ion-item>\n          <ion-label>Size - ID (mm): </ion-label>\n          <ion-select (ionChange)=\"selectedSize()\" formControlName=\"sizeID\">\n            <div *ngFor=\"let sizeID of sizeIDList | keyvalue\">\n              <ion-select-option value=\"{{sizeID.key}}\">{{sizeID.key}}</ion-select-option>\n            </div>\n          </ion-select>\n        </ion-item>\n        <ion-item>\n          <ion-label *ngIf=\" form.value.tubeType=='Bivona Hyperflex' \">\n            Max usable length (mm): \n          </ion-label>\n          <ion-label *ngIf=\" form.value.tubeType=='Shiley Uncuffed' || \n          form.value.tubeType=='Shiley Cuffed' || \n          form.value.tubeType=='Adult Portex Blue Line Ultra' || \n          form.value.tubeType=='Adult Bivona' \">\n            Length (mm): \n          </ion-label>\n          <ion-label *ngIf=\" form.value.tubeType!='Bivona Hyperflex' && \n          form.value.tubeType!='Shiley Uncuffed' && \n          form.value.tubeType!='Shiley Cuffed' &&  \n          form.value.tubeType!='Adult Portex Blue Line Ultra' &&  \n          form.value.tubeType!='Adult Bivona' \">\n            Shaft Length (mm): \n          </ion-label>\n          <ion-input class=\"length\" formControlName=\"shaftLength\">\n          </ion-input>\n        </ion-item> \n      </div>\n\n      <div *ngIf=\"form.value.customize\">\n        <ion-item>\n          <ion-label>Tube Type: </ion-label>\n          <ion-input type=\"text\" formControlName=\"tubeType\"></ion-input>\n        </ion-item>\n        \n        <ion-item>\n          <ion-label>Sub Type: </ion-label>\n          <ion-input type=\"text\" formControlName=\"subType\"></ion-input>\n        </ion-item>\n\n        <ion-item>\n          <ion-label>Size - ID (mm): </ion-label>\n          <ion-input type=\"text\" formControlName=\"sizeID\"></ion-input>\n        </ion-item>\n\n        <ion-item>\n          <ion-label>Shaft Length (mm): </ion-label>\n          <ion-input type=\"text\" formControlName=\"shaftLength\"></ion-input>\n        </ion-item>\n      </div>\n\n      <ion-item>\n        <ion-label>Suction Length (mm): </ion-label>\n        <ion-input type=\"text\" formControlName=\"suctionLength\"></ion-input>\n      </ion-item>\n\n    </ion-list>\n  </form>\n</ion-content>\n");

/***/ }),

/***/ "DPk/":
/*!***********************************************!*\
  !*** ./src/app/services/user-data.service.ts ***!
  \***********************************************/
/*! exports provided: UserDataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserDataService", function() { return UserDataService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @capacitor/core */ "gcOT");



const { Storage } = _capacitor_core__WEBPACK_IMPORTED_MODULE_2__["Plugins"];
let UserDataService = class UserDataService {
    constructor() {
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
    exportData() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.userProfileString = JSON.stringify(this.userProfileValue);
            this.medicalRecordString = JSON.stringify(this.medicalRecordValue);
            this.exporter = {
                userProfile: this.userProfileString,
                medicalRecord: this.medicalRecordString,
            };
            this.exporterString = JSON.stringify(this.exporter);
        });
    }
    loadUserProfile() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const userProfileGet = yield Storage.get({ key: this.userProfileKey });
            this.userProfileValue = JSON.parse(userProfileGet.value) || {};
            console.log("finished loading");
            const versionHistoryGet = yield Storage.get({ key: this.versionHistoryKey });
            this.versionHistoryValue = JSON.parse(versionHistoryGet.value) || [];
        });
    } //load user profile from storage
    saveUserProfile() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const oldDataGet = yield Storage.get({ key: this.userProfileKey });
            const oldDataValue = JSON.parse(oldDataGet.value) || {};
            console.log(oldDataValue);
            const toSave = {
                time: new Date().toISOString().slice(0, 16),
                type: 'User Profile',
                value: oldDataValue,
            };
            this.saveVersion(toSave);
            Storage.set({
                key: this.userProfileKey,
                value: JSON.stringify(this.userProfileValue),
            });
        });
    } //save updated user profile to storage
    loadMedicalRecord() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const medicalRecordGet = yield Storage.get({ key: this.medicalRecordKey });
            this.medicalRecordValue = JSON.parse(medicalRecordGet.value) || {};
            console.log("finished loading");
            const versionHistoryGet = yield Storage.get({ key: this.versionHistoryKey });
            this.versionHistoryValue = JSON.parse(versionHistoryGet.value) || [];
        });
    } //load medical record from storage
    saveMedicalRecord() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const oldDataGet = yield Storage.get({ key: this.medicalRecordKey });
            const oldDataValue = JSON.parse(oldDataGet.value) || {};
            const toSave = {
                time: new Date().toISOString().slice(0, 16),
                type: 'Medical Record',
                value: oldDataValue,
            };
            this.saveVersion(toSave);
            Storage.set({
                key: this.medicalRecordKey,
                value: JSON.stringify(this.medicalRecordValue),
            });
        });
    } //save new medical record to storage
    saveVersion(toSave) {
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
    convertToString() {
        this.userProfileString = JSON.stringify(this.userProfileValue);
    }
};
UserDataService.ctorParameters = () => [];
UserDataService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], UserDataService);



/***/ }),

/***/ "TKui":
/*!*****************************************************************************!*\
  !*** ./src/app/edit-tracheostomy-details/edit-tracheostomy-details.page.ts ***!
  \*****************************************************************************/
/*! exports provided: EditTracheostomyDetailsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditTracheostomyDetailsPage", function() { return EditTracheostomyDetailsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_edit_tracheostomy_details_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./edit-tracheostomy-details.page.html */ "7Tad");
/* harmony import */ var _edit_tracheostomy_details_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./edit-tracheostomy-details.page.scss */ "/flB");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _services_user_data_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/user-data.service */ "DPk/");







let EditTracheostomyDetailsPage = class EditTracheostomyDetailsPage {
    constructor(modalCtrl, fb, userDataService) {
        this.modalCtrl = modalCtrl;
        this.fb = fb;
        this.userDataService = userDataService;
        this.subTypeList = {};
        this.sizeIDList = {};
        this.shaftLength = '';
        // Bivona Uncuffed, Bivona Fome-Cuf, Bivona Aire-Cuf, Bivona TTS cuff
        // Bivona Flextend also share the same size
        this.type1 = {
            "Neo (neonatal)": {
                "2.5": "30",
                "3.0": "32",
                "3.5": "34",
                "4.0": "36",
            },
            "Ped (paediatric)": {
                "2.5": "38",
                "3.0": "39",
                "3.5": "40",
                "4.0": "41",
                "4.5": "42",
                "5.0": "44",
                "5.5": "46",
            },
        };
        // Bivona Hyperflex
        this.type2 = {
            "N/A": {
                "2.5": "55",
                "3.0": "60",
                "3.5": "65",
                "4.0": "70",
                "4.5": "75",
                "5.0": "80",
                "5.5": "85",
            },
        };
        //shiley uncuffed
        this.type3 = {
            "Neo (neonatal)": {
                "4.5": "36",
            },
            "Ped (Paediatric)": {
                "3.0": "39",
                "3.5": "40",
                "4.0": "41",
                "4.5": "42",
                "5.0": "44",
                "5.5": "46",
            },
            "Ped - Long": {
                "5.0": "50",
                "5.5": "52",
                "6.0": "54",
                "6.5": "56",
            },
        };
        //shiley cuffed
        this.type4 = {
            "Ped (Paediatric)": {
                "3.0": "39",
                "3.5": "40",
                "4.0": "41",
                "4.5": "42",
                "5.0": "44",
                "5.5": "46",
            },
            "Ped - Long": {
                "5.0": "50",
                "5.5": "52",
                "6.0": "54",
                "6.5": "56",
            },
        };
        //Adul Portex Blue Line Ultra
        this.subtype5 = {
            "6.0": "64.5",
            "7.0": "70"
        };
        this.type5 = {
            "Cuffed unfenstrated": this.subtype5,
            "Cuffed fenstrated": this.subtype5,
            "Uncuffed fenstrated": this.subtype5,
        };
        //Adult Bivona
        this.subtype6 = {
            "5.0": "60",
            "6.0": "70",
            "7.0": "80",
        };
        this.type6 = {
            "Cuffed unfenstrated": this.subtype6,
            "Cuffed fenstrated": this.subtype6,
            "Uncuffed fenstrated": this.subtype6,
        };
        //logic of chain select
        this.tubeTypes = {
            "Bivona Uncuffed": this.type1,
            "Bivona Fome-Cuf": this.type1,
            "Bivona Aire-Cuf": this.type1,
            "Bivona TTS cuff": this.type1,
            "Bivona Flextend": this.type1,
            "Bivona Hyperflex": this.type2,
            "Shiley Uncuffed": this.type3,
            "Shiley Cuffed": this.type4,
            "Adult Portex Blue Line Ultra": this.type5,
            "Adult Bivona": this.type6,
        };
        this.form = this.fb.group({
            tubeType: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
            subType: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
            sizeID: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
            shaftLength: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
            suctionLength: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
            scheduleForChange: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
            customize: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
        });
    }
    ngOnInit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.userDataService.loadMedicalRecord();
            Object.keys(this.form.controls).forEach(key => {
                this.form.get(key).setValue(this.userDataService.medicalRecordValue[key]);
                if (this.userDataService.medicalRecordValue['customize'] == null) {
                    this.form.get('customize').setValue(false);
                }
                console.log(key, this.form.get(key).value);
            });
            if (this.form.value['customize'] == false) {
                console.log(this.form.value["customize"]);
                console.log(this.form.value["tubeType"]);
                this.subTypeList = this.tubeTypes[this.form.value["tubeType"]];
                console.log(this.subTypeList);
                this.sizeIDList = this.subTypeList[this.form.value["subType"]];
                console.log(this.sizeIDList);
                this.shaftLength = this.sizeIDList[this.form.value["sizeID"]];
                console.log(this.shaftLength);
            }
        });
    }
    dismiss() {
        this.modalCtrl.dismiss();
    }
    save() {
        Object.keys(this.form.controls).forEach(key => {
            this.userDataService.medicalRecordValue[key] = this.form.value[key];
            console.log(key, this.form.get(key).value);
        });
        this.userDataService.saveMedicalRecord();
        this.modalCtrl.dismiss();
        location.reload();
    }
    toggleCustom() {
        this.form.patchValue({
            tubeType: "",
            subType: "",
            sizeID: "",
            shaftLength: "",
        });
        console.log(this.form.value['customize']);
    }
    selectedTubeType() {
        console.log(this.form.value.tubeType);
        this.subTypeList = this.tubeTypes[this.form.value.tubeType];
        this.form.get('subType').setValue('');
        this.form.get('sizeID').setValue('');
        this.form.get('shaftLength').setValue('');
        this.shaftLength = '';
    }
    selectedSubTubeType() {
        console.log(this.subTypeList);
        console.log(this.form.value.subType);
        this.sizeIDList = this.subTypeList[this.form.value.subType];
        this.form.get('sizeID').setValue('');
        this.form.get('shaftLength').setValue('');
        this.shaftLength = '';
    }
    selectedSize() {
        this.shaftLength = this.sizeIDList[this.form.value.sizeID];
        this.form.get('shaftLength').setValue(this.shaftLength);
    }
};
EditTracheostomyDetailsPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"] },
    { type: _services_user_data_service__WEBPACK_IMPORTED_MODULE_6__["UserDataService"] }
];
EditTracheostomyDetailsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-edit-tracheostomy-details',
        template: _raw_loader_edit_tracheostomy_details_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_edit_tracheostomy_details_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], EditTracheostomyDetailsPage);



/***/ })

}]);
//# sourceMappingURL=default~edit-tracheostomy-details-edit-tracheostomy-details-module~tracheostomy-details-tracheostomy~a3467248-es2015.js.map