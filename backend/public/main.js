(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pannel/pannel.module": [
		"./src/app/pannel/pannel.module.ts",
		"pannel-pannel-module"
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids) {
		return Promise.resolve().then(function() {
			var e = new Error('Cannot find module "' + req + '".');
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}
	return __webpack_require__.e(ids[1]).then(function() {
		var module = __webpack_require__(ids[0]);
		return module;
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Bootstrap CSS CDN -->\n<link rel=\"stylesheet\" href=\"https://stackpath.bootstrapcdn.com/bootstrap/4.1.0/css/bootstrap.min.css\" integrity=\"sha384-9gVQ4dYFwwWSjIDZnLEWnxCjeSWFphJiwGPXr1jddIhOegiu1FwO5qRGvFXOdJZ4\"\n    crossorigin=\"anonymous\">\n<!-- Bootstrap JS -->\n<script src=\"https://stackpath.bootstrapcdn.com/bootstrap/4.1.0/js/bootstrap.min.js\" integrity=\"sha384-uefMccjFJAIv6A+rW+L4AHf99KvxDjWSu1z9VI8SKNVmz4sk7buKt/6v9KI65qnm\"\n    crossorigin=\"anonymous\"></script>\n<!-- Font Awesome JS -->\n<script defer src=\"https://use.fontawesome.com/releases/v5.0.13/js/solid.js\" integrity=\"sha384-tzzSw1/Vo+0N5UhStP3bvwWPq+uvzCMfrN1fEFe+xBmv1C/AtVX5K0uZtmcHitFZ\"\n    crossorigin=\"anonymous\"></script>\n<script defer src=\"https://use.fontawesome.com/releases/v5.0.13/js/fontawesome.js\" integrity=\"sha384-6OIrr52G08NpOFSZdxxz1xdNSndlD4vdcf/q2myIUVO0VsqaGHJsB0RaBE01VTOY\"\n    crossorigin=\"anonymous\"></script>\n<link rel=\"stylesheet\" href=\"https://use.fontawesome.com/releases/v5.1.0/css/all.css\" integrity=\"sha384-lKuwvrZot6UHsBSfcMvOkWwlCMgc0TaWr+30HWe3a4ltaBwTZhyTEggF5tJv8tbt\"\n    crossorigin=\"anonymous\">\n\n\n<div class=\"wrapper\">\n    <!-- Sidebar  -->\n    <app-sidebar></app-sidebar>\n\n    <!-- Page Content  -->\n    <div id=\"content\">\n        <spinner [backgroundColor]=\"'#2d1dc1'\" [debounceDelay]=\"100\" [minDuration]=\"300\">></spinner>\n\n        <router-outlet></router-outlet>\n\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* ---------------------------------------------------\n    SIDEBAR STYLE\n----------------------------------------------------- */\n.wrapper {\n  display: flex;\n  align-items: stretch; }\n/* ---------------------------------------------------\n    CONTENT STYLE\n----------------------------------------------------- */\n#content {\n  width: 100%;\n  padding: 20px;\n  min-height: 100vh;\n  transition: all 0.3s; }\nbody {\n  font-family: \"Poppins\", sans-serif;\n  background: #fafafa; }\np {\n  font-family: \"Poppins\", sans-serif;\n  font-size: 1.1em;\n  font-weight: 300;\n  line-height: 1.7em;\n  color: #999; }\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _core_core_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./core/core.module */ "./src/app/core/core.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]],
            imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _core_core_module__WEBPACK_IMPORTED_MODULE_3__["CoreModule"]],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/core/core-routing.module.ts":
/*!*********************************************!*\
  !*** ./src/app/core/core-routing.module.ts ***!
  \*********************************************/
/*! exports provided: CoreRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreRoutingModule", function() { return CoreRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./not-found/not-found.component */ "./src/app/core/not-found/not-found.component.ts");
/* harmony import */ var _services_auth_guard_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./services/auth-guard.service */ "./src/app/core/services/auth-guard.service.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./login/login.component */ "./src/app/core/login/login.component.ts");
/* harmony import */ var _forget_password_forget_password_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./forget-password/forget-password.component */ "./src/app/core/forget-password/forget-password.component.ts");
/* harmony import */ var _reset_password_reset_password_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./reset-password/reset-password.component */ "./src/app/core/reset-password/reset-password.component.ts");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./register/register.component */ "./src/app/core/register/register.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var routes = [
    {
        path: "",
        redirectTo: "login",
        pathMatch: "full"
    },
    {
        path: "register",
        component: _register_register_component__WEBPACK_IMPORTED_MODULE_7__["RegisterComponent"]
    },
    {
        path: "login",
        component: _login_login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"]
    },
    {
        path: "forget",
        component: _forget_password_forget_password_component__WEBPACK_IMPORTED_MODULE_5__["ForgetPasswordComponent"]
    },
    {
        path: "reset",
        component: _reset_password_reset_password_component__WEBPACK_IMPORTED_MODULE_6__["ResetPasswordComponent"]
    },
    {
        path: "pannel",
        canActivate: [_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_3__["AuthGuardService"]],
        loadChildren: "../pannel/pannel.module#PannelModule"
    },
    {
        path: "**",
        component: _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_2__["NotFoundComponent"]
    }
];
var CoreRoutingModule = /** @class */ (function () {
    function CoreRoutingModule() {
    }
    CoreRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], CoreRoutingModule);
    return CoreRoutingModule;
}());



/***/ }),

/***/ "./src/app/core/core.module.ts":
/*!*************************************!*\
  !*** ./src/app/core/core.module.ts ***!
  \*************************************/
/*! exports provided: CoreModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreModule", function() { return CoreModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ng_http_loader__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-http-loader */ "./node_modules/ng-http-loader/fesm5/ng-http-loader.js");
/* harmony import */ var ng2_bootstrap_modal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng2-bootstrap-modal */ "./node_modules/ng2-bootstrap-modal/index.js");
/* harmony import */ var ng2_bootstrap_modal__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(ng2_bootstrap_modal__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _core_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./core-routing.module */ "./src/app/core/core-routing.module.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./login/login.component */ "./src/app/core/login/login.component.ts");
/* harmony import */ var _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./sidebar/sidebar.component */ "./src/app/core/sidebar/sidebar.component.ts");
/* harmony import */ var _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./not-found/not-found.component */ "./src/app/core/not-found/not-found.component.ts");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./register/register.component */ "./src/app/core/register/register.component.ts");
/* harmony import */ var _forget_password_forget_password_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./forget-password/forget-password.component */ "./src/app/core/forget-password/forget-password.component.ts");
/* harmony import */ var _reset_password_reset_password_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./reset-password/reset-password.component */ "./src/app/core/reset-password/reset-password.component.ts");
/* harmony import */ var _text_modal_text_modal_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./text-modal/text-modal.component */ "./src/app/core/text-modal/text-modal.component.ts");
/* harmony import */ var _services_api_manager_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./services/api-manager.service */ "./src/app/core/services/api-manager.service.ts");
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./services/authentication.service */ "./src/app/core/services/authentication.service.ts");
/* harmony import */ var _services_auth_guard_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./services/auth-guard.service */ "./src/app/core/services/auth-guard.service.ts");
/* harmony import */ var _services_api_interceptor_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./services/api-interceptor.service */ "./src/app/core/services/api-interceptor.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



















var CoreModule = /** @class */ (function () {
    function CoreModule() {
    }
    CoreModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _core_routing_module__WEBPACK_IMPORTED_MODULE_7__["CoreRoutingModule"],
                ng2_bootstrap_modal__WEBPACK_IMPORTED_MODULE_6__["BootstrapModalModule"].forRoot({ container: document.body }),
                _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
                ng_http_loader__WEBPACK_IMPORTED_MODULE_5__["NgHttpLoaderModule"] //TODO Test if spinner works
            ],
            declarations: [
                _login_login_component__WEBPACK_IMPORTED_MODULE_8__["LoginComponent"],
                _register_register_component__WEBPACK_IMPORTED_MODULE_11__["RegisterComponent"],
                _forget_password_forget_password_component__WEBPACK_IMPORTED_MODULE_12__["ForgetPasswordComponent"],
                _reset_password_reset_password_component__WEBPACK_IMPORTED_MODULE_13__["ResetPasswordComponent"],
                _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_9__["SidebarComponent"],
                _text_modal_text_modal_component__WEBPACK_IMPORTED_MODULE_14__["TextModalComponent"],
                _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_10__["NotFoundComponent"]
            ],
            entryComponents: [_text_modal_text_modal_component__WEBPACK_IMPORTED_MODULE_14__["TextModalComponent"]],
            exports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"],
                _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_9__["SidebarComponent"],
                ng_http_loader__WEBPACK_IMPORTED_MODULE_5__["NgHttpLoaderModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                ng2_bootstrap_modal__WEBPACK_IMPORTED_MODULE_6__["BootstrapModalModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"]
            ],
            schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["NO_ERRORS_SCHEMA"]],
            providers: [
                _services_authentication_service__WEBPACK_IMPORTED_MODULE_16__["AuthenticationService"],
                _services_auth_guard_service__WEBPACK_IMPORTED_MODULE_17__["AuthGuardService"],
                _services_api_manager_service__WEBPACK_IMPORTED_MODULE_15__["ApiManagerService"],
                {
                    provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HTTP_INTERCEPTORS"],
                    useClass: _services_api_interceptor_service__WEBPACK_IMPORTED_MODULE_18__["ApiInterceptorService"],
                    multi: true
                }
            ]
        })
    ], CoreModule);
    return CoreModule;
}());



/***/ }),

/***/ "./src/app/core/forget-password/forget-password.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/core/forget-password/forget-password.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form class=\"form-horizontal container\" [formGroup]=\"forgetForm\" (ngSubmit)=\"onFormSubmit()\">\n  <div class=\"row register-header\">\n    <div class=\"col-lg-8\">\n      <p>Forget Passwod</p>\n    </div>\n  </div>\n  <fieldset>\n    <div class=\"row\">\n      <div class=\"form-group col-lg-8\">\n        <label for=\"inputEmail\" class=\"control-label\">Email</label>\n        <input type=\"text\" class=\"form-control\" id=\"inputEmail\" formControlName=\"email\">\n        <div *ngIf=\"email.invalid && email.touched\" class=\"col-sm-8 text-danger\">\n          <p class=\"text-danger\" *ngIf=\"email.errors?.pattern\">Please enter a valid email</p>\n        </div>\n      </div>\n    </div>\n    <div class=\"form-group col-lg-8 submit-register\">\n      <button type=\"submit\" [disabled]=\"!forgetForm.valid\" class=\"form-submit-button btn btn-primary\">Send Token</button>\n      <div style=\"padding-top: 3%;\">Already have a valid Token?\n        <u style=\"cursor: pointer;\" routerLink=\"/reset\">Reset</u>\n      </div>\n    </div>\n  </fieldset>\n</form>"

/***/ }),

/***/ "./src/app/core/forget-password/forget-password.component.scss":
/*!*********************************************************************!*\
  !*** ./src/app/core/forget-password/forget-password.component.scss ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".form-horizontal {\n  padding: 10%; }\n\n.submit-register {\n  margin-top: 50px;\n  text-align: center; }\n\n.form-submit-button {\n  background-color: #2d1dc1 !important;\n  width: 100%;\n  border-radius: 0; }\n\n.register-header {\n  margin-bottom: 50px; }\n"

/***/ }),

/***/ "./src/app/core/forget-password/forget-password.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/core/forget-password/forget-password.component.ts ***!
  \*******************************************************************/
/*! exports provided: ForgetPasswordComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForgetPasswordComponent", function() { return ForgetPasswordComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var node_modules_ng2_bootstrap_modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! node_modules/ng2-bootstrap-modal */ "./node_modules/ng2-bootstrap-modal/index.js");
/* harmony import */ var node_modules_ng2_bootstrap_modal__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(node_modules_ng2_bootstrap_modal__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _text_modal_text_modal_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../text-modal/text-modal.component */ "./src/app/core/text-modal/text-modal.component.ts");
/* harmony import */ var _services_api_manager_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/api-manager.service */ "./src/app/core/services/api-manager.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ForgetPasswordComponent = /** @class */ (function () {
    function ForgetPasswordComponent(fb, api, router, dialogService) {
        this.fb = fb;
        this.api = api;
        this.router = router;
        this.dialogService = dialogService;
    }
    ForgetPasswordComponent.prototype.ngOnInit = function () {
        this.forgetForm = this.fb.group({
            email: [
                "",
                [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern("[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,3}$")
                ]
            ]
        });
    };
    Object.defineProperty(ForgetPasswordComponent.prototype, "email", {
        get: function () {
            return this.forgetForm.get("email");
        },
        enumerable: true,
        configurable: true
    });
    ForgetPasswordComponent.prototype.showError = function (title, message) {
        var disposable = this.dialogService.addDialog(_text_modal_text_modal_component__WEBPACK_IMPORTED_MODULE_4__["TextModalComponent"], {
            title: title,
            message: message
        });
    };
    ForgetPasswordComponent.prototype.onFormSubmit = function () {
        var _this = this;
        if (this.forgetForm.valid) {
            this.user = this.forgetForm.value;
            this.api
                .forget({
                email: this.user.email
            })
                .then(function (data) {
                _this.router.navigate(["reset"]);
            })
                .catch(function (err) {
                console.log(err);
                _this.showError("Token Request Failed", err);
            });
        }
    };
    ForgetPasswordComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-forget-password",
            template: __webpack_require__(/*! ./forget-password.component.html */ "./src/app/core/forget-password/forget-password.component.html"),
            styles: [__webpack_require__(/*! ./forget-password.component.scss */ "./src/app/core/forget-password/forget-password.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            _services_api_manager_service__WEBPACK_IMPORTED_MODULE_5__["ApiManagerService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            node_modules_ng2_bootstrap_modal__WEBPACK_IMPORTED_MODULE_3__["DialogService"]])
    ], ForgetPasswordComponent);
    return ForgetPasswordComponent;
}());



/***/ }),

/***/ "./src/app/core/login/login.component.html":
/*!*************************************************!*\
  !*** ./src/app/core/login/login.component.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form class=\"form-horizontal container\" [formGroup]=\"loginForm\" (ngSubmit)=\"onFormSubmit()\">\n  <div class=\"row register-header\">\n    <div class=\"col-lg-8\">\n      <h5>Login</h5>\n    </div>\n  </div>\n  <fieldset>\n    <div class=\"form-group col-lg-8\">\n      <label for=\"inputEmail\" class=\"control-label\">Email</label>\n      <input type=\"text\" class=\"form-control\" id=\"inputEmail\" formControlName=\"email\">\n      <div *ngIf=\"email.invalid && email.touched\" class=\"col-sm-8 text-danger\">\n        <p class=\"text-danger\" *ngIf=\"email.errors?.pattern\">Please enter a valid email</p>\n      </div>\n    </div>\n    <div class=\"form-group col-lg-8\">\n      <label for=\"inputPassword\" class=\"control-label\">Password</label>\n      <input type=\"password\" formControlName=\"password\" id=\"inputPassword\" class=\"form-control\">\n      <div class=\"text-danger\" *ngIf=\"(password.invalid && password.touched)\" class=\"text-danger\">\n        Password needs to be more than 8 characters\n      </div>\n    </div>\n    <div class=\"form-group col-lg-8 submit-register\">\n      <button type=\"submit\" [disabled]=\"!loginForm.valid\" class=\"form-submit-button btn btn-primary\">Sign in</button>\n      <div style=\"padding-top: 3%;\">New User?\n        <u style=\"cursor: pointer;\" routerLink=\"/register\">Sign up</u>\n      </div>\n      <div style=\"padding-top: 1%;\">\n        <u style=\"cursor: pointer;\" routerLink=\"/forget\">Forgot Password?</u>\n      </div>\n    </div>\n  </fieldset>\n</form>"

/***/ }),

/***/ "./src/app/core/login/login.component.scss":
/*!*************************************************!*\
  !*** ./src/app/core/login/login.component.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".form-horizontal {\n  padding: 10%; }\n\n.submit-register {\n  margin-top: 50px;\n  text-align: center; }\n\n.form-submit-button {\n  background-color: #2d1dc1 !important;\n  width: 100%;\n  border-radius: 0; }\n\n.register-header {\n  margin-bottom: 50px; }\n"

/***/ }),

/***/ "./src/app/core/login/login.component.ts":
/*!***********************************************!*\
  !*** ./src/app/core/login/login.component.ts ***!
  \***********************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var node_modules_ng2_bootstrap_modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! node_modules/ng2-bootstrap-modal */ "./node_modules/ng2-bootstrap-modal/index.js");
/* harmony import */ var node_modules_ng2_bootstrap_modal__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(node_modules_ng2_bootstrap_modal__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _text_modal_text_modal_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../text-modal/text-modal.component */ "./src/app/core/text-modal/text-modal.component.ts");
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/authentication.service */ "./src/app/core/services/authentication.service.ts");
/* harmony import */ var _services_api_manager_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/api-manager.service */ "./src/app/core/services/api-manager.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var LoginComponent = /** @class */ (function () {
    function LoginComponent(authentication, fb, api, dialogService) {
        this.authentication = authentication;
        this.fb = fb;
        this.api = api;
        this.dialogService = dialogService;
    }
    LoginComponent.prototype.showError = function (title, message) {
        var disposable = this.dialogService.addDialog(_text_modal_text_modal_component__WEBPACK_IMPORTED_MODULE_3__["TextModalComponent"], {
            title: title,
            message: message
        });
    };
    LoginComponent.prototype.ngOnInit = function () {
        this.loginForm = this.fb.group({
            email: [
                "",
                [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern("[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,3}$")
                ]
            ],
            password: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(8)]]
        });
    };
    Object.defineProperty(LoginComponent.prototype, "email", {
        get: function () {
            return this.loginForm.get("email");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LoginComponent.prototype, "password", {
        get: function () {
            return this.loginForm.get("password");
        },
        enumerable: true,
        configurable: true
    });
    LoginComponent.prototype.onFormSubmit = function () {
        var _this = this;
        if (this.loginForm.valid) {
            this.user = this.loginForm.value;
            this.api
                .login({
                email: this.user.email,
                password: this.user.password
            })
                .then(function (data) {
                _this.authentication.login(data.token);
                _this.authentication.setAccountText("Log Out");
                _this.authentication.setSidebarValue(0);
            })
                .catch(function (err) {
                console.log(err);
                _this.showError("Sign In Failed", err);
            });
        }
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-login",
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/core/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.scss */ "./src/app/core/login/login.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_authentication_service__WEBPACK_IMPORTED_MODULE_4__["AuthenticationService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            _services_api_manager_service__WEBPACK_IMPORTED_MODULE_5__["ApiManagerService"],
            node_modules_ng2_bootstrap_modal__WEBPACK_IMPORTED_MODULE_2__["DialogService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/core/not-found/not-found.component.html":
/*!*********************************************************!*\
  !*** ./src/app/core/not-found/not-found.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  not-found works!\n</p>\n"

/***/ }),

/***/ "./src/app/core/not-found/not-found.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/core/not-found/not-found.component.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/core/not-found/not-found.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/core/not-found/not-found.component.ts ***!
  \*******************************************************/
/*! exports provided: NotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotFoundComponent", function() { return NotFoundComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NotFoundComponent = /** @class */ (function () {
    function NotFoundComponent() {
    }
    NotFoundComponent.prototype.ngOnInit = function () {
    };
    NotFoundComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-not-found',
            template: __webpack_require__(/*! ./not-found.component.html */ "./src/app/core/not-found/not-found.component.html"),
            styles: [__webpack_require__(/*! ./not-found.component.scss */ "./src/app/core/not-found/not-found.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], NotFoundComponent);
    return NotFoundComponent;
}());



/***/ }),

/***/ "./src/app/core/register/register.component.html":
/*!*******************************************************!*\
  !*** ./src/app/core/register/register.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form class=\"form-horizontal container\" [formGroup]=\"signupForm\" (ngSubmit)=\"onFormSubmit()\">\n  <div class=\"row register-header\">\n    <div class=\"col-lg-8\">\n      <h5>Register</h5>\n    </div>\n  </div>\n  <fieldset>\n    <div class=\"row\">\n      <div class=\"form-group col-lg-4\">\n        <label for=\"inputEmail\" class=\"control-label\">Email</label>\n        <input type=\"text\" class=\"form-control\" id=\"inputEmail\" formControlName=\"email\">\n        <div *ngIf=\"email.invalid && email.touched\" class=\"col-sm-8 text-danger\">\n          <p class=\"text-danger\" *ngIf=\"email.errors?.required\">Email field can't be blank</p>\n          <p class=\"text-danger\" *ngIf=\"email.errors?.pattern\">Please enter a valid email</p>\n        </div>\n      </div>\n      <div class=\"form-group col-lg-4\">\n        <label for=\"inputName\" class=\"control-label\">Name</label>\n        <input type=\"text\" class=\"form-control\" id=\"inputName\" formControlName=\"name\">\n        <p class=\"text-danger\" *ngIf=\"name.touched && name.invalid\">Name field can't be blank</p>\n      </div>\n    </div>\n    <div class=\"row\" formGroupName=\"password\">\n      <div class=\"form-group col-lg-4\">\n        <label for=\"inputPassword\" class=\"control-label\">Password</label>\n        <input type=\"password\" formControlName=\"pwd\" id=\"inputPassword\" class=\"form-control\">\n        <div class=\"text-danger\" *ngIf=\"(password.controls.pwd.invalid && password.controls.pwd.touched)\" class=\"text-danger\">\n          Password needs to be more than 8 characters\n        </div>\n      </div>\n      <div class=\"form-group col-lg-4\">\n        <label for=\"confirmPassword\" class=\"control-label\">Confirm Password</label>\n        <input type=\"password\" formControlName=\"confirmPwd\" id=\"confirmPassword\" class=\"form-control\">\n        <div class=\"text-danger\" *ngIf=\"signupForm.get(['password','pwd']).value != signupForm.get(['password','confirmPwd']).value && signupForm.get(['password','confirmPwd']).value\n                    != null\">\n          Password does not match\n        </div>\n      </div>\n    </div>\n    <div class=\"form-group col-lg-8 submit-register\">\n      <button type=\"submit\" [disabled]=\"!signupForm.valid\" class=\"form-submit-button btn btn-primary\">Sign up</button>\n      <div style=\"padding-top: 3%;\">Already have an account?\n        <u style=\"cursor: pointer;\" routerLink=\"/login\">Sign in</u>\n      </div>\n    </div>\n  </fieldset>\n</form>"

/***/ }),

/***/ "./src/app/core/register/register.component.scss":
/*!*******************************************************!*\
  !*** ./src/app/core/register/register.component.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".form-horizontal {\n  padding: 10%; }\n\n.submit-register {\n  margin-top: 50px;\n  text-align: center; }\n\n.form-submit-button {\n  background-color: #2d1dc1 !important;\n  width: 100%;\n  border-radius: 0; }\n\n.register-header {\n  margin-bottom: 50px; }\n"

/***/ }),

/***/ "./src/app/core/register/register.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/core/register/register.component.ts ***!
  \*****************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var node_modules_ng2_bootstrap_modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! node_modules/ng2-bootstrap-modal */ "./node_modules/ng2-bootstrap-modal/index.js");
/* harmony import */ var node_modules_ng2_bootstrap_modal__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(node_modules_ng2_bootstrap_modal__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _text_modal_text_modal_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../text-modal/text-modal.component */ "./src/app/core/text-modal/text-modal.component.ts");
/* harmony import */ var _services_api_manager_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/api-manager.service */ "./src/app/core/services/api-manager.service.ts");
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/authentication.service */ "./src/app/core/services/authentication.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(authentication, fb, api, dialogService) {
        this.authentication = authentication;
        this.fb = fb;
        this.api = api;
        this.dialogService = dialogService;
    }
    RegisterComponent.prototype.ngOnInit = function () {
        this.signupForm = this.fb.group({
            email: [
                "",
                [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern("[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,3}$")
                ]
            ],
            name: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            password: this.fb.group({
                pwd: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(8)]],
                confirmPwd: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(8)]]
            }, { validator: this.passwordConfirming })
        });
    };
    Object.defineProperty(RegisterComponent.prototype, "email", {
        get: function () {
            return this.signupForm.get("email");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RegisterComponent.prototype, "password", {
        get: function () {
            return this.signupForm.get("password");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RegisterComponent.prototype, "name", {
        get: function () {
            return this.signupForm.get("name");
        },
        enumerable: true,
        configurable: true
    });
    RegisterComponent.prototype.passwordConfirming = function (c) {
        if (c.get("pwd").value !== c.get("confirmPwd").value) {
            return { invalid: true };
        }
    };
    RegisterComponent.prototype.showError = function (title, message) {
        var disposable = this.dialogService.addDialog(_text_modal_text_modal_component__WEBPACK_IMPORTED_MODULE_3__["TextModalComponent"], {
            title: title,
            message: message
        });
    };
    RegisterComponent.prototype.onFormSubmit = function () {
        var _this = this;
        if (this.signupForm.valid) {
            this.user = this.signupForm.value;
            this.api
                .register({
                email: this.user.email,
                name: this.user.name,
                password: this.user.password.pwd
            })
                .then(function (data) {
                _this.authentication.login(data.token);
                _this.authentication.setAccountText("Log Out");
                _this.authentication.setSidebarValue(0);
            })
                .catch(function (err) {
                console.log(err);
                _this.showError("Sign Up Failed", err);
            });
        }
    };
    RegisterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-register",
            template: __webpack_require__(/*! ./register.component.html */ "./src/app/core/register/register.component.html"),
            styles: [__webpack_require__(/*! ./register.component.scss */ "./src/app/core/register/register.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_authentication_service__WEBPACK_IMPORTED_MODULE_5__["AuthenticationService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            _services_api_manager_service__WEBPACK_IMPORTED_MODULE_4__["ApiManagerService"],
            node_modules_ng2_bootstrap_modal__WEBPACK_IMPORTED_MODULE_2__["DialogService"]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "./src/app/core/reset-password/reset-password.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/core/reset-password/reset-password.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form class=\"form-horizontal container\" [formGroup]=\"resetForm\" (ngSubmit)=\"onFormSubmit()\">\n  <div class=\"row register-header\">\n    <div class=\"col-lg-8\">\n      <h5>Reset Password</h5>\n    </div>\n  </div>\n  <fieldset>\n    <div class=\"row\">\n      <div class=\"form-group col-lg-8\">\n        <label for=\"inputToken\" class=\"control-label\">Token</label>\n        <div>\n          <input type=\"text\" class=\"form-control\" id=\"inputToken\" formControlName=\"token\">\n        </div>\n        <p class=\"text-danger\" *ngIf=\"token.touched && token.invalid\">Token field can't be blank</p>\n        <div class=\"row\" formGroupName=\"password\" style=\"margin-top: 2em;\">\n          <div class=\"form-group col-lg-6\">\n            <label for=\"inputPassword\" class=\"control-label\">Password</label>\n            <input type=\"password\" formControlName=\"pwd\" id=\"inputPassword\" class=\"form-control\">\n            <div class=\"text-danger\" *ngIf=\"(password.controls.pwd.invalid && password.controls.pwd.touched)\" class=\"text-danger\">\n              Password needs to be more than 8 characters\n            </div>\n          </div>\n          <div class=\"form-group col-lg-6\">\n            <label for=\"confirmPassword\" class=\"control-label\">Confirm Password</label>\n            <input type=\"password\" formControlName=\"confirmPwd\" id=\"confirmPassword\" class=\"form-control\">\n            <div class=\"text-danger\" *ngIf=\"resetForm.get(['password','pwd']).value != resetForm.get(['password','confirmPwd']).value && resetForm.get(['password','confirmPwd']).value\n            != null\">\n              Password does not match\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class=\" form-group col-lg-8 submit-register \">\n      <button type=\"submit \" [disabled]=\"!resetForm.valid \" class=\"form-submit-button btn btn-primary \">Reset</button>\n    </div>\n  </fieldset>\n</form>"

/***/ }),

/***/ "./src/app/core/reset-password/reset-password.component.scss":
/*!*******************************************************************!*\
  !*** ./src/app/core/reset-password/reset-password.component.scss ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".form-horizontal {\n  padding: 10%; }\n\n.submit-register {\n  margin-top: 50px;\n  text-align: center; }\n\n.form-submit-button {\n  background-color: #2d1dc1 !important;\n  width: 100%;\n  border-radius: 0; }\n\n.register-header {\n  margin-bottom: 50px; }\n"

/***/ }),

/***/ "./src/app/core/reset-password/reset-password.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/core/reset-password/reset-password.component.ts ***!
  \*****************************************************************/
/*! exports provided: ResetPasswordComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResetPasswordComponent", function() { return ResetPasswordComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var node_modules_ng2_bootstrap_modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! node_modules/ng2-bootstrap-modal */ "./node_modules/ng2-bootstrap-modal/index.js");
/* harmony import */ var node_modules_ng2_bootstrap_modal__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(node_modules_ng2_bootstrap_modal__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _text_modal_text_modal_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../text-modal/text-modal.component */ "./src/app/core/text-modal/text-modal.component.ts");
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/authentication.service */ "./src/app/core/services/authentication.service.ts");
/* harmony import */ var _services_api_manager_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/api-manager.service */ "./src/app/core/services/api-manager.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ResetPasswordComponent = /** @class */ (function () {
    function ResetPasswordComponent(authentication, fb, api, dialogService) {
        this.authentication = authentication;
        this.fb = fb;
        this.api = api;
        this.dialogService = dialogService;
    }
    ResetPasswordComponent.prototype.ngOnInit = function () {
        this.resetForm = this.fb.group({
            token: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            password: this.fb.group({
                pwd: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(8)]],
                confirmPwd: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(8)]]
            }, { validator: this.passwordConfirming })
        });
    };
    Object.defineProperty(ResetPasswordComponent.prototype, "token", {
        get: function () {
            return this.resetForm.get("token");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ResetPasswordComponent.prototype, "password", {
        get: function () {
            return this.resetForm.get("password");
        },
        enumerable: true,
        configurable: true
    });
    ResetPasswordComponent.prototype.passwordConfirming = function (c) {
        if (c.get("pwd").value !== c.get("confirmPwd").value) {
            return { erinvalid: true };
        }
    };
    ResetPasswordComponent.prototype.showError = function (title, message) {
        var disposable = this.dialogService.addDialog(_text_modal_text_modal_component__WEBPACK_IMPORTED_MODULE_3__["TextModalComponent"], {
            title: title,
            message: message
        });
    };
    ResetPasswordComponent.prototype.onFormSubmit = function () {
        var _this = this;
        if (this.resetForm.valid) {
            this.user = this.resetForm.value;
            this.api
                .reset({
                token: this.user.token,
                password: this.user.password.pwd
            })
                .then(function (data) {
                console.log(data);
            })
                .catch(function (err) {
                console.log(err);
                _this.showError("Reset Password Failed", err);
            });
        }
    };
    ResetPasswordComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-reset-password",
            template: __webpack_require__(/*! ./reset-password.component.html */ "./src/app/core/reset-password/reset-password.component.html"),
            styles: [__webpack_require__(/*! ./reset-password.component.scss */ "./src/app/core/reset-password/reset-password.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_authentication_service__WEBPACK_IMPORTED_MODULE_4__["AuthenticationService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            _services_api_manager_service__WEBPACK_IMPORTED_MODULE_5__["ApiManagerService"],
            node_modules_ng2_bootstrap_modal__WEBPACK_IMPORTED_MODULE_2__["DialogService"]])
    ], ResetPasswordComponent);
    return ResetPasswordComponent;
}());



/***/ }),

/***/ "./src/app/core/services/api-interceptor.service.ts":
/*!**********************************************************!*\
  !*** ./src/app/core/services/api-interceptor.service.ts ***!
  \**********************************************************/
/*! exports provided: ApiInterceptorService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiInterceptorService", function() { return ApiInterceptorService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./authentication.service */ "./src/app/core/services/authentication.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ApiInterceptorService = /** @class */ (function () {
    function ApiInterceptorService(auth) {
        this.auth = auth;
    }
    ApiInterceptorService.prototype.intercept = function (request, next) {
        //TODO Check Interceptor
        // const requestNew = request.clone({
        // setHeaders: {
        //   "x-access-token": this.auth.getToken()
        // }
        // });
        if (this.auth.isAuthenticated())
            request = request.clone({
                headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                    "Content-Type": "application/json",
                    "x-access-token": this.auth.getToken()
                })
            });
        return next.handle(request).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (event) {
            if (event instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpResponse"]) {
                // do stuff with response if you want
            }
        }, function (err) {
            if (err instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpErrorResponse"] && err.status === 401)
                console.log("this.auth.collectFailedRequest(request);");
        }));
    };
    ApiInterceptorService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"]])
    ], ApiInterceptorService);
    return ApiInterceptorService;
}());



/***/ }),

/***/ "./src/app/core/services/api-manager.service.ts":
/*!******************************************************!*\
  !*** ./src/app/core/services/api-manager.service.ts ***!
  \******************************************************/
/*! exports provided: ApiManagerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiManagerService", function() { return ApiManagerService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ApiManagerService = /** @class */ (function () {
    function ApiManagerService(http) {
        this.http = http;
    }
    ApiManagerService.prototype.register = function (data) {
        return this.http.post("/api/auth/signup", data).toPromise();
    };
    ApiManagerService.prototype.login = function (data) {
        return this.http.post("/api/auth/signin", data).toPromise();
    };
    ApiManagerService.prototype.reset = function (data) {
        return this.http.post("/api/auth/reset", data).toPromise();
    };
    ApiManagerService.prototype.forget = function (data) {
        return this.http.post("/api/auth/forget", data).toPromise();
    };
    ApiManagerService.prototype.getItem = function (id) {
        return this.http.get("/api/todo/" + id).toPromise();
    };
    ApiManagerService.prototype.todos = function () {
        return this.http.get("/api/todo").toPromise();
    };
    ApiManagerService.prototype.add = function (data) {
        return this.http.post("/api/todo", data).toPromise();
    };
    ApiManagerService.prototype.edit = function (data, id) {
        return this.http.patch("/api/todo/" + id, data).toPromise();
    };
    ApiManagerService.prototype.delete = function (id) {
        return this.http.delete("/api/todo/" + id).toPromise();
    };
    ApiManagerService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], ApiManagerService);
    return ApiManagerService;
}());



/***/ }),

/***/ "./src/app/core/services/auth-guard.service.ts":
/*!*****************************************************!*\
  !*** ./src/app/core/services/auth-guard.service.ts ***!
  \*****************************************************/
/*! exports provided: AuthGuardService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuardService", function() { return AuthGuardService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _authentication_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./authentication.service */ "./src/app/core/services/authentication.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthGuardService = /** @class */ (function () {
    function AuthGuardService(authentication, router) {
        this.authentication = authentication;
        this.router = router;
    }
    AuthGuardService.prototype.canActivate = function () {
        return this.authentication.isAuthenticated();
    };
    AuthGuardService.prototype.redirectToLoginPage = function () {
        this.router.navigate(["/login"]);
    };
    AuthGuardService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_authentication_service__WEBPACK_IMPORTED_MODULE_1__["AuthenticationService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], AuthGuardService);
    return AuthGuardService;
}());



/***/ }),

/***/ "./src/app/core/services/authentication.service.ts":
/*!*********************************************************!*\
  !*** ./src/app/core/services/authentication.service.ts ***!
  \*********************************************************/
/*! exports provided: AuthenticationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthenticationService", function() { return AuthenticationService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthenticationService = /** @class */ (function () {
    function AuthenticationService(router) {
        this.router = router;
        this.token = "ewrewfewf";
        this.tokenKey = "a5smm_utoken";
        this.accountValue = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.sidebarValue = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
    }
    AuthenticationService.prototype.login = function (token) {
        this.setToken(token);
        this.router.navigate(["pannel", "dashboard"]);
    };
    AuthenticationService.prototype.logout = function () {
        this.removeToken();
        this.router.navigate(["login"]);
    };
    AuthenticationService.prototype.getToken = function () {
        return localStorage.getItem(this.tokenKey);
    };
    AuthenticationService.prototype.setToken = function (token) {
        localStorage.setItem(this.tokenKey, token);
    };
    AuthenticationService.prototype.isAuthenticated = function () {
        var token = this.getToken();
        if (token) {
            return true;
        }
        else {
            return false;
        }
    };
    AuthenticationService.prototype.removeToken = function () {
        localStorage.removeItem(this.tokenKey);
    };
    AuthenticationService.prototype.getAccountText = function () {
        return this.accountValue.asObservable();
    };
    AuthenticationService.prototype.setAccountText = function (value) {
        this.accountValue.next(value);
    };
    AuthenticationService.prototype.getSidebarValue = function () {
        return this.sidebarValue.asObservable();
    };
    AuthenticationService.prototype.setSidebarValue = function (value) {
        this.sidebarValue.next(value);
    };
    AuthenticationService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], AuthenticationService);
    return AuthenticationService;
}());



/***/ }),

/***/ "./src/app/core/sidebar/sidebar.component.html":
/*!*****************************************************!*\
  !*** ./src/app/core/sidebar/sidebar.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Sidebar  -->\n<nav id=\"sidebar\" [ngClass]=\"{'active': switch}\">\n    <div class=\"arrow\" (click)=\"toggle()\">\n        <i [hidden]=\"switch\" id=\"arrow\" class=\"fas fa-angle-left\"></i>\n        <i [hidden]=\"!switch\" id=\"arrow\" class=\"fas fa-angle-right\"></i>\n    </div>\n\n    <div class=\"sidebar-header\">\n        <h2>ES-Task</h2>\n    </div>\n    <ul class=\"list-unstyled components\">\n        <li [ngClass]=\"{'active': selected === 0}\" (click)=\"setSelected(0)\" *ngIf=\"authentication.isAuthenticated()\">\n            <a routerLink=\"/pannel\">\n                <i class=\"fas fa-list-ul\"></i>\n                <div [hidden]=\"switch\">View</div>\n            </a>\n        </li>\n        <li [ngClass]=\"{'active': selected === 1}\" (click)=\"setSelected(1)\" *ngIf=\"authentication.isAuthenticated()\">\n            <a routerLink=\"/pannel/add\">\n                <i class=\"fas fa-plus\"></i>\n                <div [hidden]=\"switch\">Add</div>\n            </a>\n        </li>\n        <li [ngClass]=\"{'active': selected === 5}\" (click)=\"setSelected(5)\">\n            <a routerLink=\"/login\" [ngClass]=\"{'logout': authentication.isAuthenticated()}\">\n                <i class=\"fas fa-user\"></i>\n                <div [hidden]=\"switch\"> {{account}}</div>\n            </a>\n        </li>\n    </ul>\n</nav>"

/***/ }),

/***/ "./src/app/core/sidebar/sidebar.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/core/sidebar/sidebar.component.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*\n    DEMO STYLE\n*/\na,\na:hover,\na:focus {\n  color: inherit;\n  text-decoration: none;\n  transition: all 0.3s; }\n.navbar {\n  padding: 15px 10px;\n  background: #fff;\n  border: none;\n  border-radius: 0;\n  margin-bottom: 40px;\n  box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.1); }\n.navbar-btn {\n  box-shadow: none;\n  outline: none !important;\n  border: none; }\n.line {\n  width: 100%;\n  height: 1px;\n  border-bottom: 1px dashed #ddd;\n  margin: 40px 0; }\ni,\nspan {\n  display: inline-block; }\n/* ---------------------------------------------------\n    SIDEBAR STYLE\n----------------------------------------------------- */\n#sidebar {\n  position: relative;\n  min-width: 250px;\n  max-width: 250px;\n  height: 100%;\n  background: #000000;\n  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.5);\n  color: #fff;\n  transition: all 0.3s; }\n#sidebar.active {\n  min-width: 80px;\n  max-width: 80px;\n  text-align: center; }\n#sidebar.active .sidebar-header,\n#sidebar.active .CTAs {\n  padding: 0px; }\n#sidebar.active .sidebar-header .sidebar-header-photo {\n  padding: 0px;\n  width: 100%; }\n#sidebar.active .sidebar-header strong {\n  display: block; }\n#sidebar ul li a {\n  border-bottom: 1px solid #464343;\n  text-align: left;\n  padding: 20px !important;\n  padding: 20px 20px;\n  font-size: 0.85em; }\n#sidebar.active ul li a {\n  justify-content: center;\n  padding: 20px 10px;\n  text-align: center;\n  font-size: 0.85em; }\n#sidebar.active ul li a i {\n  margin-right: 0;\n  display: block;\n  font-size: 16px;\n  margin-bottom: 5px; }\n#sidebar.active ul ul a {\n  padding: 10px !important; }\n#sidebar.active .dropdown-toggle::after {\n  top: auto;\n  bottom: 10px;\n  right: 50%;\n  -webkit-transform: translateX(50%);\n  transform: translateX(50%); }\n#sidebar .sidebar-header {\n  padding: 20px;\n  background: #ffffff;\n  color: #2d1dc1;\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  flex-direction: column;\n  justify-content: center;\n  height: 10%;\n  padding: 10px 5px;\n  overflow: hidden; }\n#sidebar .sidebar-header .sidebar-header-photo {\n  width: 50%; }\n#sidebar .sidebar-header strong {\n  display: none;\n  font-size: 1.8em; }\n#sidebar ul.components {\n  padding: 20px 0;\n  background-color: #000000;\n  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.5); }\n#sidebar ul li a {\n  display: flex;\n  align-items: baseline;\n  padding: 10px;\n  font-size: 16px;\n  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.5); }\n#sidebar ul li a div {\n  font-family: AvenirNext;\n  letter-spacing: normal;\n  text-align: left; }\n#sidebar ul li a:hover {\n  color: #2d1dc1;\n  background: #fff; }\n.logout:hover {\n  color: #fff !important;\n  background: #c1301d !important; }\n#sidebar ul li a i {\n  margin-right: 10px; }\n#sidebar ul li.active > a,\na[aria-expanded=\"true\"] {\n  color: #fff;\n  background: #2d1dc1; }\na[data-toggle=\"collapse\"] {\n  position: relative; }\n.dropdown-toggle::after {\n  display: block;\n  position: absolute;\n  top: 50%;\n  right: 20px;\n  -webkit-transform: translateY(-50%);\n          transform: translateY(-50%); }\nul ul a {\n  font-size: 0.9em !important;\n  padding-left: 30px !important;\n  background: #2d1dc1; }\nul.CTAs {\n  padding: 20px; }\nul.CTAs a {\n  text-align: center;\n  font-size: 0.9em !important;\n  display: block;\n  border-radius: 5px;\n  margin-bottom: 5px; }\na.download {\n  background: #fff;\n  color: #2d1dc1; }\na.article,\na.article:hover {\n  background: #2d1dc1 !important;\n  color: #fff !important; }\n/* ---------------------------------------------------\n    MEDIAQUERIES\n----------------------------------------------------- */\n@media (max-width: 768px) {\n  #sidebar {\n    min-width: 80px;\n    max-width: 80px;\n    text-align: center;\n    margin-left: -80px !important; }\n  .dropdown-toggle::after {\n    top: auto;\n    bottom: 10px;\n    right: 50%;\n    -webkit-transform: translateX(50%);\n    transform: translateX(50%); }\n  #sidebar.active {\n    margin-left: 0 !important; }\n  #sidebar .sidebar-header h1,\n  #sidebar .CTAs {\n    display: none;\n    height: 20%; }\n  #sidebar .sidebar-header strong {\n    display: block; }\n  #sidebar ul li a {\n    padding: 20px 10px; }\n  #sidebar ul li a span {\n    font-size: 0.85em; }\n  #sidebar ul li a i {\n    margin-right: 0;\n    display: block; }\n  #sidebar ul ul a {\n    padding: 10px !important; }\n  #sidebar ul li a i {\n    font-size: 1.3em; }\n  #sidebar {\n    margin-left: 0; }\n  #sidebarCollapse span {\n    display: none; }\n  #arrow {\n    -webkit-transform: scale(-1, 1);\n            transform: scale(-1, 1); } }\n.arrow {\n  align-items: center;\n  display: flex;\n  justify-content: center;\n  width: 20px;\n  background: #000000;\n  border-top-right-radius: 50%;\n  border-bottom-right-radius: 50%;\n  position: absolute;\n  right: -20px;\n  bottom: 25%;\n  height: 40px;\n  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.5); }\n"

/***/ }),

/***/ "./src/app/core/sidebar/sidebar.component.ts":
/*!***************************************************!*\
  !*** ./src/app/core/sidebar/sidebar.component.ts ***!
  \***************************************************/
/*! exports provided: SidebarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarComponent", function() { return SidebarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/authentication.service */ "./src/app/core/services/authentication.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SidebarComponent = /** @class */ (function () {
    function SidebarComponent(authentication) {
        var _this = this;
        this.authentication = authentication;
        this.switch = false;
        this.account = "Sign in";
        this.selected = 5;
        this.authentication.getAccountText().subscribe(function (newValue) {
            _this.account = newValue;
        });
        this.authentication.getSidebarValue().subscribe(function (newValue) {
            _this.selected = newValue;
        });
    }
    SidebarComponent.prototype.ngOnInit = function () {
        if (this.authentication.isAuthenticated()) {
            this.account = "Logout";
            this.selected = 0;
        }
    };
    SidebarComponent.prototype.isLoggedIn = function () {
        return this.authentication.isAuthenticated();
    };
    SidebarComponent.prototype.setSelected = function (num) {
        if (this.authentication.isAuthenticated()) {
            this.selected = num;
            if (this.selected === 5) {
                this.authentication.logout();
                this.authentication.setAccountText("Sign in");
            }
        }
    };
    SidebarComponent.prototype.toggle = function () {
        this.switch = !this.switch;
    };
    SidebarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-sidebar",
            template: __webpack_require__(/*! ./sidebar.component.html */ "./src/app/core/sidebar/sidebar.component.html"),
            styles: [__webpack_require__(/*! ./sidebar.component.scss */ "./src/app/core/sidebar/sidebar.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_authentication_service__WEBPACK_IMPORTED_MODULE_1__["AuthenticationService"]])
    ], SidebarComponent);
    return SidebarComponent;
}());



/***/ }),

/***/ "./src/app/core/text-modal/text-modal.component.css":
/*!**********************************************************!*\
  !*** ./src/app/core/text-modal/text-modal.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/core/text-modal/text-modal.component.html":
/*!***********************************************************!*\
  !*** ./src/app/core/text-modal/text-modal.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"modal-dialog\">\n  <div class=\"modal-content\">\n    <div class=\"modal-header\">\n      <h4 class=\"modal-title\">{{title || 'Confirm'}}</h4>\n      <button type=\"button\" class=\"close\" (click)=\"close()\">&times;</button>\n    </div>\n    <div class=\"modal-body\">\n      <p>{{message || 'Are you sure?'}}</p>\n    </div>\n    <div class=\"modal-footer\">\n      <button type=\"button\" class=\"btn btn-default\" (click)=\"close()\">OK</button>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/core/text-modal/text-modal.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/core/text-modal/text-modal.component.ts ***!
  \*********************************************************/
/*! exports provided: TextModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TextModalComponent", function() { return TextModalComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ng2_bootstrap_modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng2-bootstrap-modal */ "./node_modules/ng2-bootstrap-modal/index.js");
/* harmony import */ var ng2_bootstrap_modal__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(ng2_bootstrap_modal__WEBPACK_IMPORTED_MODULE_1__);
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TextModalComponent = /** @class */ (function (_super) {
    __extends(TextModalComponent, _super);
    function TextModalComponent(dialogService) {
        return _super.call(this, dialogService) || this;
    }
    TextModalComponent.prototype.ngOnInit = function () { };
    TextModalComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-text-modal",
            template: __webpack_require__(/*! ./text-modal.component.html */ "./src/app/core/text-modal/text-modal.component.html"),
            styles: [__webpack_require__(/*! ./text-modal.component.css */ "./src/app/core/text-modal/text-modal.component.css")]
        }),
        __metadata("design:paramtypes", [ng2_bootstrap_modal__WEBPACK_IMPORTED_MODULE_1__["DialogService"]])
    ], TextModalComponent);
    return TextModalComponent;
}(ng2_bootstrap_modal__WEBPACK_IMPORTED_MODULE_1__["DialogComponent"]));



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/youssuf/Desktop/es-task/frontend/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map