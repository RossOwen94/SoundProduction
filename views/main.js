(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".containerr{\r\n    height: 100%;\r\n    width: 100%;\r\n    background-color: #4a4e4e;\r\n}\r\n\r\n\r\n.navImage{\r\n    height: 50px;\r\n    margin-left: 10px;\r\n}\r\n\r\n\r\n.main{\r\n    display: -ms-grid;\r\n    display: grid;\r\n    -ms-grid-columns: 1fr 1fr 1fr;\r\n        grid-template-columns: 1fr 1fr 1fr;\r\n    height: 300px;\r\n    color: white;\r\n    margin-right: 100px;\r\n}\r\n\r\n\r\n.info{\r\n    height: 300px;\r\n    margin-left:100px;\r\n}\r\n\r\n\r\nhr{\r\n    width: 90%;\r\n    border-color:white;\r\n}\r\n\r\n\r\n#dot1{\r\n    color: rgb(128, 228, 35);\r\n}\r\n\r\n\r\n#dot2{\r\n    color: rgb(224, 144, 52);\r\n}\r\n\r\n\r\n#dot3{\r\n    color: rgb(216, 51, 10);\r\n}\r\n\r\n\r\n.slogan{\r\n    text-align: center;\r\n    color: white;\r\n    font-size: 50px;\r\n    letter-spacing: 10px;\r\n    text-shadow: 4px 4px 3px rgba(0,0,0,0.1);\r\n}\r\n\r\n\r\n.banner{\r\n    width: 100%;\r\n    height: 400px;\r\n}\r\n\r\n\r\n.collapse.navbar-collapse{\r\n    width: 33%;\r\n}\r\n\r\n\r\n#topBar{\r\n    width: 20%;\r\n    font-family: Helvetica;\r\n}\r\n\r\n\r\n.fbButtons{\r\n    width:33%;\r\n    display: -ms-grid;\r\n    display: grid;\r\n    -ms-grid-columns: 3fr 1fr;\r\n        grid-template-columns: 3fr 1fr;\r\n}\r\n\r\n\r\n.fb-like{\r\n    width: 200px;\r\n}\r\n\r\n\r\n.footerLink{\r\n    margin-right:10px;\r\n    color: white;\r\n    border-left: 2px solid white;\r\n    padding-left: 5px;\r\n}\r\n\r\n\r\n.myFooter{\r\n    display:-ms-grid;\r\n    display:grid;\r\n    -ms-grid-columns: 1fr 3fr 1fr;\r\n        grid-template-columns: 1fr 3fr 1fr;\r\n    height: 40px;\r\n    padding-top: 10px;\r\n}\r\n\r\n\r\n.copyright{\r\n    padding-left:10px;\r\n}\r\n\r\n\r\nfooter{\r\n    background-color: #c03b06;\r\n    color: white;\r\n    font-family: Helvetica;\r\n}"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar sticky-top navbar-expand-lg navbar-light bg-light\">\n    <a class=\"navbar-brand\" id=\"topBar\" routerLink=\"/\">Lorenz Productions<img class=\"navImage\" src=\"https://gideonsystems.net/images/mic.jpg\"></a>\n    <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n      <span class=\"navbar-toggler-icon\"></span>\n    </button>\n  \n    <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\n      <ul class=\"navbar-nav mr-auto\">\n        <li class=\"nav-item active\">\n          <a class=\"nav-link\" routerLink=\"\">Home <span class=\"sr-only\">(current)</span></a>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" routerLink=\"/samples\">Buy Scores</a>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" routerLink=\"/payment\">Checkout</a>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" routerLink=\"/contactMe\">Contact</a>\n        </li>\n        <li *ngIf=\"!auth.isLoggedIn()\" class=\"nav-item\">\n          <a class=\"nav-link\" routerLink=\"/login\">Login</a>\n        </li>\n        <li *ngIf=\"!auth.isLoggedIn()\" class=\"nav-item\">\n          <a class=\"nav-link\" routerLink=\"/register\">Register</a>\n        </li>\n        <li *ngIf=\"auth.isLoggedIn()\" class=\"nav-item\">\n          <a class=\"nav-link\" routerLink=\"/profile\">Profile</a>\n        </li>\n        <li *ngIf=\"auth.isLoggedIn()\" class=\"nav-item\">\n          <a class=\"nav-link\" routerLink=\"/logout\">Logout</a>\n        </li>\n      </ul>\n    </div>\n    <div id=\"fb-root\"></div>\n    <script>(function(d, s, id) {\n      var js, fjs = d.getElementsByTagName(s)[0];\n      if (d.getElementById(id)) return;\n      js = d.createElement(s); js.id = id;\n      js.src = \"https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v3.0\";\n      fjs.parentNode.insertBefore(js, fjs);\n    }(document, 'script', 'facebook-jssdk'));</script>\n  \n    <!-- Your like button code -->\n    <div class=\"fbButtons\">\n        <span class=\"fb-like\" \n          data-href=\"https://gideonsystems.net\" \n          data-layout=\"standard\" \n          data-action=\"like\" \n          data-show-faces=\"true\">\n        </span>\n  \n        <span class=\"fb-share-button\" \n          data-href=\"https://gideonsystems.net\" \n          data-layout=\"button_count\">\n        </span>\n      </div>\n  </nav>\n\n\n<div class=\"containerr\">\n    <img class=\"banner\" src=\"https://gideonsystems.net/images/studio.jpg\">\n  <router-outlet></router-outlet>\n</div>\n<footer>\n  <div class=\"myFooter\">\n      <span class=\"copyright\">&copy; Gideon-Systems</span>\n        <span class=\"footerButtons\">\n          <a class=\"footerLink\" routerLink=\"#\">About</a>\n          <a class=\"footerLink\" routerLink=\"/contactMe\">Contact</a>\n          <a class=\"footerLink\" onclick=\"window.scrollTo(0,0)\">Back to Top</a>\n        </span>\n  </div>\n</footer>"

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
/* harmony import */ var _authentication_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./authentication.service */ "./src/app/authentication.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = /** @class */ (function () {
    function AppComponent(auth) {
        this.auth = auth;
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [_authentication_service__WEBPACK_IMPORTED_MODULE_1__["AuthenticationService"]])
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
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _home_page_home_page_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./home-page/home-page.component */ "./src/app/home-page/home-page.component.ts");
/* harmony import */ var _samples_samples_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./samples/samples.component */ "./src/app/samples/samples.component.ts");
/* harmony import */ var _payment_payment_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./payment/payment.component */ "./src/app/payment/payment.component.ts");
/* harmony import */ var _cart_cart_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./cart/cart.component */ "./src/app/cart/cart.component.ts");
/* harmony import */ var _side_cart_side_cart_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./side-cart/side-cart.component */ "./src/app/side-cart/side-cart.component.ts");
/* harmony import */ var _download_download_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./download/download.component */ "./src/app/download/download.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _contact_me_contact_me_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./contact-me/contact-me.component */ "./src/app/contact-me/contact-me.component.ts");
/* harmony import */ var _profile_profile_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./profile/profile.component */ "./src/app/profile/profile.component.ts");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./register/register.component */ "./src/app/register/register.component.ts");
/* harmony import */ var _authentication_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./authentication.service */ "./src/app/authentication.service.ts");
/* harmony import */ var _auth_guard_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./auth-guard.service */ "./src/app/auth-guard.service.ts");
/* harmony import */ var _cart_service__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./cart.service */ "./src/app/cart.service.ts");
/* harmony import */ var _logout_logout_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./logout/logout.component */ "./src/app/logout/logout.component.ts");
/* harmony import */ var _login_message_login_message_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./login-message/login-message.component */ "./src/app/login-message/login-message.component.ts");
/* harmony import */ var _forgot_forgot_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./forgot/forgot.component */ "./src/app/forgot/forgot.component.ts");
/* harmony import */ var _score_details_score_details_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./score-details/score-details.component */ "./src/app/score-details/score-details.component.ts");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/dashboard/dashboard.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


























var appRoutes = [
    { path: '', component: _home_page_home_page_component__WEBPACK_IMPORTED_MODULE_7__["HomePageComponent"] },
    { path: 'samples', component: _samples_samples_component__WEBPACK_IMPORTED_MODULE_8__["SamplesComponent"] },
    { path: 'payment', component: _payment_payment_component__WEBPACK_IMPORTED_MODULE_9__["PaymentComponent"] },
    { path: 'download', component: _download_download_component__WEBPACK_IMPORTED_MODULE_12__["DownloadComponent"] },
    { path: 'contactMe', component: _contact_me_contact_me_component__WEBPACK_IMPORTED_MODULE_14__["ContactMeComponent"] },
    { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_13__["LoginComponent"] },
    { path: 'register', component: _register_register_component__WEBPACK_IMPORTED_MODULE_16__["RegisterComponent"] },
    { path: 'profile', component: _profile_profile_component__WEBPACK_IMPORTED_MODULE_15__["ProfileComponent"], canActivate: [_auth_guard_service__WEBPACK_IMPORTED_MODULE_18__["AuthGuardService"]] },
    { path: 'logout', component: _logout_logout_component__WEBPACK_IMPORTED_MODULE_20__["LogoutComponent"] },
    { path: 'login-message', component: _login_message_login_message_component__WEBPACK_IMPORTED_MODULE_21__["LoginMessageComponent"] },
    { path: 'forgot', component: _forgot_forgot_component__WEBPACK_IMPORTED_MODULE_22__["ForgotComponent"] },
    { path: 'score-details/:name', component: _score_details_score_details_component__WEBPACK_IMPORTED_MODULE_23__["ScoreDetailsComponent"] },
    { path: 'dashboard', component: _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_24__["DashboardComponent"] }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
                _home_page_home_page_component__WEBPACK_IMPORTED_MODULE_7__["HomePageComponent"],
                _samples_samples_component__WEBPACK_IMPORTED_MODULE_8__["SamplesComponent"],
                _payment_payment_component__WEBPACK_IMPORTED_MODULE_9__["PaymentComponent"],
                _cart_cart_component__WEBPACK_IMPORTED_MODULE_10__["CartComponent"],
                _side_cart_side_cart_component__WEBPACK_IMPORTED_MODULE_11__["SideCartComponent"],
                _download_download_component__WEBPACK_IMPORTED_MODULE_12__["DownloadComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_13__["LoginComponent"],
                _contact_me_contact_me_component__WEBPACK_IMPORTED_MODULE_14__["ContactMeComponent"],
                _profile_profile_component__WEBPACK_IMPORTED_MODULE_15__["ProfileComponent"],
                _register_register_component__WEBPACK_IMPORTED_MODULE_16__["RegisterComponent"],
                _logout_logout_component__WEBPACK_IMPORTED_MODULE_20__["LogoutComponent"],
                _login_message_login_message_component__WEBPACK_IMPORTED_MODULE_21__["LoginMessageComponent"],
                _forgot_forgot_component__WEBPACK_IMPORTED_MODULE_22__["ForgotComponent"],
                _score_details_score_details_component__WEBPACK_IMPORTED_MODULE_23__["ScoreDetailsComponent"],
                _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_24__["DashboardComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                _angular_http__WEBPACK_IMPORTED_MODULE_3__["HttpModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forRoot(appRoutes),
            ],
            providers: [_authentication_service__WEBPACK_IMPORTED_MODULE_17__["AuthenticationService"], _auth_guard_service__WEBPACK_IMPORTED_MODULE_18__["AuthGuardService"], _cart_service__WEBPACK_IMPORTED_MODULE_19__["CartService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/auth-guard.service.ts":
/*!***************************************!*\
  !*** ./src/app/auth-guard.service.ts ***!
  \***************************************/
/*! exports provided: AuthGuardService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuardService", function() { return AuthGuardService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./authentication.service */ "./src/app/authentication.service.ts");
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
    function AuthGuardService(auth, router) {
        this.auth = auth;
        this.router = router;
    }
    AuthGuardService.prototype.canActivate = function () {
        if (!this.auth.isLoggedIn()) {
            this.router.navigateByUrl('/');
            return false;
        }
        return true;
    };
    AuthGuardService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], AuthGuardService);
    return AuthGuardService;
}());



/***/ }),

/***/ "./src/app/authentication.service.ts":
/*!*******************************************!*\
  !*** ./src/app/authentication.service.ts ***!
  \*******************************************/
/*! exports provided: AuthenticationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthenticationService", function() { return AuthenticationService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
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
    function AuthenticationService(http, router) {
        this.http = http;
        this.router = router;
    }
    AuthenticationService.prototype.saveToken = function (token) {
        localStorage.setItem('mean-token', token);
        this.token = token;
    };
    AuthenticationService.prototype.getToken = function () {
        if (!this.token) {
            this.token = localStorage.getItem('mean-token');
        }
        return this.token;
    };
    AuthenticationService.prototype.logout = function () {
        this.token = '';
        window.localStorage.removeItem('mean-token');
        this.router.navigateByUrl('/');
    };
    AuthenticationService.prototype.getUserDetails = function () {
        var token = this.getToken();
        var payload;
        if (token) {
            payload = token.split('.')[1];
            payload = window.atob(payload);
            return JSON.parse(payload);
        }
        else {
            return null;
        }
    };
    AuthenticationService.prototype.isLoggedIn = function () {
        var user = this.getUserDetails();
        if (user) {
            return user.exp > Date.now() / 1000;
        }
        else {
            return false;
        }
    };
    AuthenticationService.prototype.request = function (method, type, user) {
        var _this = this;
        var base;
        if (method === 'post') {
            base = this.http.post("https://gideonsystems.net/users/" + type, user);
        }
        else {
            base = this.http.get("https://gideonsystems.net/users/" + type, { headers: { Authorization: "Bearer " + this.getToken() } });
        }
        var request = base.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (data) {
            if (data.token) {
                _this.saveToken(data.token);
            }
            return data;
        }));
        return request;
    };
    AuthenticationService.prototype.transaction = function (transactionData) {
        var _this = this;
        console.log(transactionData);
        var transToken = this.http.post('https://gideonsystems.net/users/transaction', { transactionData: transactionData }, { headers: { Authorization: "Bearer " + this.getToken() } });
        var token = transToken.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (data) {
            if (data.token) {
                console.log(data.token);
                _this.saveToken(data.token);
            }
            return data;
        }));
        return token;
    };
    AuthenticationService.prototype.register = function (user) {
        return this.request('post', 'register', user);
    };
    AuthenticationService.prototype.login = function (user) {
        console.log(user);
        return this.request('post', 'login', user);
    };
    AuthenticationService.prototype.profile = function () {
        return this.request('get', 'profile');
    };
    AuthenticationService.prototype.updateToken = function (data) {
        localStorage.setItem('mean-token', data);
        this.token = data;
    };
    AuthenticationService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], AuthenticationService);
    return AuthenticationService;
}());



/***/ }),

/***/ "./src/app/cart.service.ts":
/*!*********************************!*\
  !*** ./src/app/cart.service.ts ***!
  \*********************************/
/*! exports provided: CartService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartService", function() { return CartService; });
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

var CartService = /** @class */ (function () {
    function CartService() {
        this.samples = [];
        this.subTotal = 0.00;
        this.itemCount = 0;
    }
    CartService.prototype.ngOnInit = function () {
    };
    CartService.prototype.getSelectedSamples = function () {
        return this.samples;
    };
    CartService.prototype.getSubTotal = function () {
        return this.subTotal;
    };
    CartService.prototype.getItemCount = function () {
        return this.itemCount;
    };
    CartService.prototype.addSample = function (Sample) {
        if (this.findSample(Sample) != -1) {
            window.alert('The selected score is already in your cart.');
            return;
        }
        this.samples.push(Sample);
        this.itemCount++;
        this.subTotal += Sample.price;
    };
    CartService.prototype.findSample = function (Sample) {
        for (var i = 0; i < this.samples.length; i++) {
            if (this.samples[i].name === Sample.name) {
                return i;
            }
        }
        return -1;
    };
    CartService.prototype.removeSample = function (Sample) {
        this.subTotal -= Sample.price;
        this.samples.splice(this.findSample(Sample), 1);
        this.itemCount--;
    };
    CartService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], CartService);
    return CartService;
}());



/***/ }),

/***/ "./src/app/cart/cart.component.css":
/*!*****************************************!*\
  !*** ./src/app/cart/cart.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/cart/cart.component.html":
/*!******************************************!*\
  !*** ./src/app/cart/cart.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  cart works!\n</p>\n"

/***/ }),

/***/ "./src/app/cart/cart.component.ts":
/*!****************************************!*\
  !*** ./src/app/cart/cart.component.ts ***!
  \****************************************/
/*! exports provided: CartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartComponent", function() { return CartComponent; });
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

var CartComponent = /** @class */ (function () {
    function CartComponent() {
    }
    CartComponent.prototype.ngOnInit = function () {
    };
    CartComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-cart',
            template: __webpack_require__(/*! ./cart.component.html */ "./src/app/cart/cart.component.html"),
            styles: [__webpack_require__(/*! ./cart.component.css */ "./src/app/cart/cart.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], CartComponent);
    return CartComponent;
}());



/***/ }),

/***/ "./src/app/contact-me/contact-me.component.css":
/*!*****************************************************!*\
  !*** ./src/app/contact-me/contact-me.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".emailForm{\r\n    margin-left: 200px;\r\n    margin-top: 100px;\r\n    margin-bottom: 100px;\r\n    width: 500px;\r\n    color: white;\r\n}\r\n\r\n.formField{\r\n    margin-top: 10px;\r\n}\r\n\r\nlabel{\r\n    margin-left: 10px;\r\n\r\n}\r\n\r\n.buttons{\r\n    display: -ms-grid;\r\n    display: grid;\r\n    -ms-grid-columns: 2fr 1fr;\r\n        grid-template-columns: 2fr 1fr;\r\n    grid-column-gap: 5px;\r\n    width: 40%;\r\n}\r\n\r\n.successMessage{\r\n    width: 500px;\r\n    height: 300px;\r\n    margin-left: 100px;\r\n    margin-top: 100px;\r\n    margin-bottom: 100px;\r\n    color: white;\r\n}\r\n\r\n.successText{\r\n    font-size: 25px;\r\n}\r\n\r\n.contactMePage{\r\n    background-color:  #4a4e4e;\r\n}\r\n\r\n.successActions{\r\n    width:50%;\r\n    margin-top: 15px;\r\n}\r\n\r\n.extraText{\r\n    font-size: 15px;\r\n    margin-top:15px;\r\n}\r\n\r\n.supportLabel{\r\nfont-size: 35px;\r\ncolor: white;\r\n}\r\n\r\nhr{\r\n    border-color: white;\r\n}"

/***/ }),

/***/ "./src/app/contact-me/contact-me.component.html":
/*!******************************************************!*\
  !*** ./src/app/contact-me/contact-me.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"contactMePage\">\n    <form *ngIf=\"!emailSuccess\" [formGroup]=\"rForm\" #myForm=\"ngForm\" class=\"emailForm\" (ngSubmit)=\"submitForm(rForm.value,myForm)\">\n        <div class=\"supportLabel\">Submit Your Ticket Below :</div>\n        <hr>\n        <div class=\"formField\" >\n          <label for=\"name\">Full Name</label>\n          <input type=\"text\" class=\"form-control\" formControlName=\"name\" name=\"name\" placeholder=\"First Last\" [(ngModel)]=\"name\">\n        </div>\n        <div class=\"formField\">\n          <label for=\"email\">Email address</label>\n          <input type=\"email\" class=\"form-control\" formControlName=\"email\" name=\"email\" placeholder=\"Enter email\" [(ngModel)]=\"email\">\n        </div>\n        <div class=\"formField\">\n          <label for=\"message\">Describe your concern or question below in detail:</label>\n          <textarea name=\"message\" formControlName=\"message\" rows=\"6\" cols=\"68\" placeholder=\"Tip: Include details from site generated emails/paypal payment details for faster inquiries...\" [(ngModel)]=\"message\"></textarea>\n        </div>\n        <div class=\"buttons\">\n          <button type=\"submit\" class=\"btn btn-default\" [disabled]=\"!rForm.valid\">Submit Ticket</button>\n        </div>\n      </form>\n      <div *ngIf=\"emailSuccess\" class=\"successMessage\">\n        <div class=\"successText\">\n            Your ticket has been submitted!\n        </div>\n        <div class=\"extraText\">\n          If you don't get a confirmation email shortly\n          be sure the information was correct and resubmit your\n          request, or contact us directly at supportemail@gmail.com\n        </div>\n        \n        <div class=\"successActions\">\n          <a routerLink=\"/\"><button class=\"btn btn-default\">Home Page</button></a>\n        </div>\n      </div>\n</div>\n\n\n\n\n"

/***/ }),

/***/ "./src/app/contact-me/contact-me.component.ts":
/*!****************************************************!*\
  !*** ./src/app/contact-me/contact-me.component.ts ***!
  \****************************************************/
/*! exports provided: ContactMeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactMeComponent", function() { return ContactMeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ContactMeComponent = /** @class */ (function () {
    function ContactMeComponent(http, fb) {
        this.http = http;
        this.fb = fb;
        this.emailSuccess = false;
        this.rForm = fb.group({
            'name': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            'email': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])],
            'message': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
    }
    ContactMeComponent.prototype.ngOnInit = function () {
    };
    ContactMeComponent.prototype.submitForm = function (formData, form) {
        var _this = this;
        this.sendEmail(formData).subscribe(function (success) {
            if (success) {
                _this.emailSuccess = true;
            }
        });
    };
    ContactMeComponent.prototype.sendEmail = function (formData) {
        return this.http.post('https://gideonsystems.net/contact/ticket', formData);
    };
    ContactMeComponent.prototype.resetForm = function () {
        this.emailSuccess = false;
        return;
    };
    ContactMeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-contact-me',
            template: __webpack_require__(/*! ./contact-me.component.html */ "./src/app/contact-me/contact-me.component.html"),
            styles: [__webpack_require__(/*! ./contact-me.component.css */ "./src/app/contact-me/contact-me.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]])
    ], ContactMeComponent);
    return ContactMeComponent;
}());



/***/ }),

/***/ "./src/app/dashboard/dashboard.component.css":
/*!***************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".dashboardWindow{\r\n    color: white;\r\n    margin-left: 100px;\r\n    margin-top: 100px;\r\n    margin-right: 100px;\r\n    margin-bottom: 400px;\r\n}\r\n\r\nlabel{\r\n    margin-left: 10px;\r\n}\r\n\r\n.formField{\r\n    margin-top: 10px;\r\n\r\n}\r\n\r\n.dashButton{\r\n    border:none;\r\n    background-color:white;\r\n    cursor: pointer;\r\n    height: 50px;\r\n    margin-left:30px;\r\n}\r\n\r\nli{\r\n    list-style-type: none;\r\n}\r\n\r\n.dashboardNav{\r\n    background-color: white;\r\n    box-shadow: 5px 10px 18px black;\r\n    color: black;\r\n    display: -ms-grid;\r\n    display: grid;\r\n    -ms-grid-columns: 1fr 1fr 1fr;\r\n        grid-template-columns: 1fr 1fr 1fr;\r\n    width: 50%;\r\n}\r\n\r\n.dashboardHead{\r\n    margin-left: 20px;\r\n}\r\n\r\nhr{\r\n    border-color:white;\r\n}\r\n\r\n.singleSample{\r\n    margin-bottom:20px;\r\n    background-color: white;\r\n    color: black;\r\n    box-shadow: 5px 10px 18px black;\r\n    padding-top: 30px;\r\n    padding-bottom:30px;\r\n    padding-left: 30px;\r\n    padding-right:30px;\r\n    word-break: break-all;\r\n    border-radius: 5px;\r\n    font-size: 15px;\r\n}\r\n\r\n#addButton{\r\n    margin-top: 50px;\r\n    margin-right: 10px;\r\n}\r\n\r\n.remove{\r\n    margin-top:50px;\r\n}\r\n\r\n.dataField{\r\n    display: -ms-grid;\r\n    display: grid;\r\n    -ms-grid-columns: 1fr 3fr;\r\n        grid-template-columns: 1fr 3fr;\r\n}\r\n\r\n.content{\r\n    margin-top: 50px;\r\n}\r\n\r\n.allSamples{\r\n    display: -ms-grid;\r\n    display: grid;\r\n    -ms-grid-columns: 1fr 1fr ;\r\n        grid-template-columns: 1fr 1fr ;\r\n    -ms-grid-rows: 1fr 1fr ;\r\n        grid-template-rows: 1fr 1fr ;\r\n    grid-column-gap: 5px;\r\n}\r\n\r\n.updateForm{\r\n    width: 100%;\r\n    margin-top:30px;\r\n}\r\n\r\n.scoreLabel{\r\n    color:rgb(10, 10, 134);\r\n    font-size: 25px;\r\n\r\n}\r\n\r\n.updateLabel{\r\n    font-size: 30px;\r\n}\r\n\r\n.editButton{\r\n    background-color: rgb(73, 73, 204);\r\n    border-radius: 5px;\r\n    border: 1px solid black;\r\n    margin-right: 10px;\r\n    margin-top: 10px;\r\n    color:white;\r\n}\r\n\r\n.success{\r\n    font-size: 25px;\r\n\r\n}\r\n\r\n#submit{\r\n    margin-top: 50px;\r\n    margin-right: 10px;\r\n}\r\n\r\n.removeButton{\r\n    background-color: rgb(180, 3, 3);\r\n    color:white;\r\n    border-radius: 5px;\r\n    border: 1px solid black;\r\n    width:100px;\r\n    height: 30px;\r\n}\r\n\r\n.editButton{\r\n    width: 100px;\r\n    height: 30px;\r\n}\r\n\r\n.emailForm{\r\n    width: 60%\r\n}\r\n\r\n.closeEdit{\r\n    background-color: rgb(1, 158, 197);\r\n    color:  white;\r\n}\r\n\r\n#nameField{\r\n    display:none;\r\n}\r\n\r\n\r\n\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.html":
/*!****************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"dashboardWindow\">\n    <h3 class=\"dashboardHead\">Admin Dashboard</h3>\n    <hr>\n    <div class=\"dashboardContent\">\n      <div class=\"dashboardNav\">\n        <li><button class=\"dashButton\" (click)=\"this.setOption('add')\">Add Score</button></li>\n        <li><button class=\"dashButton\" (click)=\"this.setOption('scores')\">View/Edit Scores</button></li>\n        <li><button class=\"dashButton\" (click)=\"this.setOption('sales')\">View all Sales</button></li>\n      </div>\n      <div class=\"content\">\n          <div *ngIf=\"this.option=='add'\">\n              <form *ngIf=\"!addSuccess\" [formGroup]=\"rForm\" #myForm=\"ngForm\" class=\"emailForm\" (ngSubmit)=\"addScore(rForm.value,myForm)\">\n                  <div class=\"supportLabel\">Enter score details below to add a score :</div>\n                  <hr>\n                  <div class=\"formField\" >\n                      <label for=\"name\">Name of Score(.pdf filename must match exactly):</label>\n                      <input type=\"text\" class=\"form-control\" formControlName=\"name\" name=\"name\" placeholder=\"Score Name\">\n                    </div>\n                  <div class=\"formField\">\n                    <label for=\"soundcloud\">SoundCloud URL(Find the 'src' string from the 'Embed Code'. i.e. src=\"https://....\"</label>\n                    <input type=\"text\" class=\"form-control\" formControlName=\"soundcloud\" name=\"soundcloud\" placeholder=\"e.x. https://w.soundcloud.com/player/?url=https%3A//api.sound...\">\n                  </div>\n                  <div class=\"formField\" >\n                    <label for=\"difficulty\">Difficulty( single number from 1-10)</label>\n                    <input type=\"number\" class=\"form-control\" formControlName=\"difficulty\" name=\"difficulty\" placeholder=\"Enter 1-10\">\n                  </div>\n                  <div class=\"formField\" >\n                      <label for=\"Instrumentation\">Instrumentation(Enter a comma separated list like 'Marimba(3),Vibe(2),Timpani,Accessories' </label>\n                      <input type=\"text\" class=\"form-control\" formControlName=\"instrumentation\" name=\"instrumentation\" placeholder=\"e.x. Marimba 3,Zylophone (2), Two Zylophones,etc,etc\">\n                  </div>\n                  <div class=\"formField\" >\n                      <label for=\"shortDesc\">Enter a sentence or two to get peoples attention/ give a short description.</label>\n                      <input type=\"text\" class=\"form-control\" formControlName=\"shortDesc\" name=\"shortDesc\" placeholder=\"e.x. An ominous build of emotions leads to a blah blah blah in this great piece\">\n                  </div>\n                  <div class=\"formField\" >\n                      <label for=\"longDesc\">Enter a longer description of the piece to be displayed on it's individual page </label>\n                      <textarea  class=\"form-control\" formControlName=\"longDesc\" name=\"longDesc\" rows=\"15\" cols=\"50\" placeholder=\"e.x. Marimba 3,Zylophone (2), Two Zylophones,etc,etc\"></textarea>\n                  </div>\n                  <div class=\"formField\" >\n                      <label for=\"price\">Enter a number, no dollar sign.</label>\n                      <input type=\"number\" class=\"form-control\" formControlName=\"price\" name=\"price\" placeholder=\"e.x. '40' or '39.99'\">\n                  </div>\n\n                  <div class=\"buttons\">\n                    <button id=\"addButton\"type=\"submit\" class=\"btn btn-default\" [disabled]=\"!rForm.valid\">Add Score</button>\n                  </div>\n                </form> \n                <div *ngIf=\"addSuccess\">\n                        <div class=\"success\">Score Added to Database</div>\n                        <button class=\"btn btn-primary\" (click)=\"closeAddForm()\">Close</button>\n                </div>\n          </div>\n          <div class=\"allSamples\" *ngIf=\"this.option=='scores'\">\n              <li *ngFor=\"let sample of samples\">\n                  <div *ngIf=\"!isEditing || selectedScore == sample.name\" class=\"singleSample\">\n                      <div class=\"dataField\"><span class=\"dataLabel\">Name:</span>{{sample.name}}</div>\n                      <div class=\"dataField\"><span class=\"dataLabel\">Short Description:</span>{{sample.description}}</div>\n                      <div class=\"dataField\"><span class=\"dataLabel\">Long Description:</span>{{sample.longDesc}}</div>\n                      <div class=\"dataField\"><span class=\"dataLabel\">Difficulty:</span>{{sample.difficulty}}</div>\n                      <div class=\"dataField\"><span class=\"dataLabel\">Price:</span>{{sample.price}}</div>\n                      <div class=\"dataField\"><span class=\"dataLabel\">Instrumentation:</span>{{sample.instrumentation}}</div>\n                      <div class=\"dataLabel\">SoundCloud URL:</div>\n                      <div class=\"soundcloudURL\">{{sample.soundCloud}}</div>\n                      <button class=\"editButton\" (click)=\"setSelectedScore(sample.name)\">Edit</button>\n                      <button class=\"removeButton\" (click)=\"openRemove(sample.name)\" >Remove</button>\n                      <div *ngIf=\"selectedScore == sample.name\">\n                                \n                            <div *ngIf=\"!removing\">\n                                    <form *ngIf=\"!updateSuccess\" [formGroup]=\"rForm\" #myForm=\"ngForm\" class=\"updateForm\" (ngSubmit)=\"updateScore(rForm.value,myForm,sample.name)\">\n                                            <div class=\"updateLabel\">Enter New Score Details Below for</div>\n                                            <div ><span class=\"scoreLabel\">{{sample.name}}</span> - Name cannot be changed</div>\n                                            <div>If a field will stay the same, copy and paste from the data bove.</div>\n                                            <hr>\n                                            <div class=\"formField\">\n                                                <input id=\"nameField\" type=\"text\" class=\"form-control\" formControlName=\"name\" name=\"name\" value=\"sample.name\">\n                                            </div>\n                                            <div class=\"formField\">\n                                              <label for=\"soundcloud\">SoundCloud URL(Since you are editing, you will likely copy from above)</label>\n                                              <input type=\"text\" class=\"form-control\" formControlName=\"soundcloud\" name=\"soundcloud\" placeholder=\"e.x. https://w.soundcloud.com/player/?url=https%3A//api.sound...\">\n                                            </div>\n                                            <div class=\"formField\" >\n                                              <label for=\"difficulty\">Difficulty( single number from 1-10)</label>\n                                              <input type=\"number\" class=\"form-control\" formControlName=\"difficulty\" name=\"difficulty\" placeholder=\"Enter 1-10\">\n                                            </div>\n                                            <div class=\"formField\" >\n                                                <label for=\"Instrumentation\">Instrumentation(Enter a comma separated list like 'Marimba(3),Vibe(2),Timpani,Accessories' </label>\n                                                <input type=\"text\" class=\"form-control\" formControlName=\"instrumentation\" name=\"instrumentation\" placeholder=\"e.x. Marimba 3,Zylophone (2), Two Zylophones,etc,etc\">\n                                            </div>\n                                            <div class=\"formField\" >\n                                                <label for=\"shortDesc\">Enter a sentence or two to get peoples attention/ give a short description.</label>\n                                                <input type=\"text\" class=\"form-control\" formControlName=\"shortDesc\" name=\"shortDesc\"placeholder=\"e.x. An ominous build of emotions leads to a blah blah blah in this great piece\">\n                                            </div>\n                                            <div class=\"formField\" >\n                                                <label for=\"longDesc\">Enter a longer description of the piece to be displayed on it's individual page </label>\n                                                <textarea  class=\"form-control\" formControlName=\"longDesc\" name=\"longDesc\" rows=\"15\" cols=\"50\" placeholder=\"Be descriptive\"></textarea>\n                                            </div>\n                                            <div class=\"formField\" >\n                                                <label for=\"price\">Enter a number, no dollar sign.</label>\n                                                <input type=\"number\" class=\"form-control\" formControlName=\"price\" name=\"price\" placeholder=\"e.x. '40' or '39.99'\">\n                                            </div>\n                          \n                                            <div class=\"buttons\">\n                                              <button id=\"submit\" type=\"submit\" class=\"btn btn-primary\" [disabled]=\"!rForm.valid\">Save</button>\n                                              <button id=\"addButton\" class=\"btn btn-secondary\" (click)=\"closeEditor()\">Cancel</button>\n                                            </div>\n                                          </form>\n                                          <div *ngIf=\"updateSuccess\">\n                                              <div class=\"success\">{{sample.name}} has been updated.</div>\n                                              <button class=\"btn btn-primary\" (click)=\"closeEditor()\">Close</button>\n                                          </div>\n                            </div>\n                            <div class=\"remove\" *ngIf=\"removing\">\n                                <div *ngIf=\"!removeSuccess\">\n                                    <div class=\"updateLabel\">Are You Sure You Want To Remove:</div>\n                                    <div class=\"scoreLabel\">{{sample.name}}</div>\n                                    <button id=\"addButton\" class=\"btn btn-danger\" (click)=\"removeScore(sample.name)\">Remove</button>\n                                    <button id=\"addButton\" class=\"btn btn-secondary\" (click)=\"closeEditor()\">Cancel</button>\n                                </div>\n                                <div *ngIf=\"removeSuccess\">\n                                        <div class=\"success\">{{sample.name}} has been removed.</div>\n                                        <button class=\"btn btn-primary\" (click)=\"closeEditor()\">Close</button>\n                                </div>\n                            </div>\n                      </div>\n                  </div>\n              </li>\n          </div>\n          <div class=\"allSamples\" *ngIf=\"this.option=='sales'\">\n              <li *ngFor=\"let transaction of transactions\">\n                  <div class=\"singleSample\">\n                      <div class=\"dataField\"><span class=\"dataLabel\">Transaction Date:</span>{{transaction.date}}</div>\n                      <div class=\"dataField\"><span class=\"dataLabel\">Buyer Name:</span>{{transaction.name}}</div>\n                      <div class=\"dataField\"><span class=\"dataLabel\">Email(username):</span>{{transaction.email}}</div>\n                      <div class=\"dataField\"><span class=\"dataLabel\">Paypal-Email:</span>{{transaction.paypalEmail}}</div>\n                      <div class=\"dataField\"><span class=\"dataLabel\">Items:</span>{{transaction.items}}</div>\n                      <div class=\"dataField\"><span class=\"dataLabel\">Total:</span>{{transaction.total | currency}}</div>\n                      <div class=\"dataField\"><span class=\"dataLabel\">Paypal Transaction ID:</span>{{transaction.transactionId}}</div>\n                      <div class=\"dataField\"><span class=\"dataLabel\">Expiration:</span>{{transaction.exp}}</div>\n                  </div>\n              </li>\n          </div>\n      </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.ts":
/*!**************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.ts ***!
  \**************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _authentication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../authentication.service */ "./src/app/authentication.service.ts");
/* harmony import */ var _sample_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../sample.service */ "./src/app/sample.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var DashboardComponent = /** @class */ (function () {
    function DashboardComponent(fb, http, auth, sampleService) {
        this.fb = fb;
        this.http = http;
        this.auth = auth;
        this.sampleService = sampleService;
        this.addSuccess = false;
        this.isEditing = false;
        this.updateSuccess = false;
        this.removeSuccess = false;
        this.removing = false;
        this.rForm = fb.group({
            'name': [null],
            'soundcloud': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required])],
            'difficulty': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            'instrumentation': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            'shortDesc': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            'longDesc': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            'price': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
        });
    }
    DashboardComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.getTransactions().subscribe(function (newtrans) {
            _this.transactions = newtrans;
            console.log(_this.transactions);
        });
        this.getUsers().subscribe(function (newusers) {
            _this.users = newusers;
            console.log(_this.users);
        });
        this.sampleService.getSamples().subscribe(function (newsamples) {
            _this.samples = newsamples;
            console.log(_this.samples);
        });
    };
    DashboardComponent.prototype.setOption = function (newOption) {
        this.option = newOption;
    };
    DashboardComponent.prototype.addScore = function (formData, form) {
        this.sendForm(formData).subscribe();
        this.addSuccess = true;
    };
    DashboardComponent.prototype.closeAddForm = function () {
        var _this = this;
        this.rForm.reset();
        this.addSuccess = false;
        this.sampleService.getSamples().subscribe(function (newsamples) {
            _this.samples = newsamples;
        });
    };
    DashboardComponent.prototype.sendForm = function (formData) {
        return this.http.post('https://gideonsystems.net/admin/add', { scoreData: formData }, { headers: { Authorization: "Bearer " + this.auth.getToken() } });
    };
    DashboardComponent.prototype.getTransactions = function () {
        return this.http.get('https://gideonsystems.net/admin/transactions', { headers: { Authorization: "Bearer " + this.auth.getToken() } });
    };
    DashboardComponent.prototype.getUsers = function () {
        return this.http.get('https://gideonsystems.net/admin/users', { headers: { Authorization: "Bearer " + this.auth.getToken() } });
    };
    DashboardComponent.prototype.setSelectedScore = function (score) {
        this.selectedScore = score;
        this.isEditing = true;
        this.removing = false;
    };
    DashboardComponent.prototype.closeEditor = function () {
        var _this = this;
        this.isEditing = false;
        this.removing = false;
        this.selectedScore = "";
        this.updateSuccess = false;
        this.removeSuccess = false;
        this.rForm.reset();
        this.sampleService.getSamples().subscribe(function (newsamples) {
            _this.samples = newsamples;
        });
    };
    DashboardComponent.prototype.updateScore = function (formData, form, scoreName) {
        var _this = this;
        this.sendUpdate(formData, scoreName).subscribe(function (response) {
            if (response) {
                _this.updateSuccess = true;
                return;
            }
        });
    };
    DashboardComponent.prototype.sendUpdate = function (formData, scoreName) {
        return this.http.post('https://gideonsystems.net/admin/update', { scoreData: formData, scoreName: scoreName }, { headers: { Authorization: "Bearer " + this.auth.getToken() } });
    };
    DashboardComponent.prototype.openRemove = function (score) {
        this.removing = true;
        this.isEditing = true;
        this.selectedScore = score;
    };
    DashboardComponent.prototype.removeScore = function (score) {
        var _this = this;
        this.sendRemoval(score).subscribe(function () {
            _this.removeSuccess = true;
        }, function (err) {
            console.log(err);
        });
        return;
    };
    DashboardComponent.prototype.sendRemoval = function (score) {
        return this.http.post('https://gideonsystems.net/admin/remove', { scoreName: score }, { headers: { Authorization: "Bearer " + this.auth.getToken() } });
    };
    DashboardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__(/*! ./dashboard.component.html */ "./src/app/dashboard/dashboard.component.html"),
            styles: [__webpack_require__(/*! ./dashboard.component.css */ "./src/app/dashboard/dashboard.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"], _sample_service__WEBPACK_IMPORTED_MODULE_4__["SampleService"]])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/download/download.component.css":
/*!*************************************************!*\
  !*** ./src/app/download/download.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".downloadContainer{\r\n    height: 800px;\r\n    margin-left:150px;\r\n    margin-top:100px;\r\n    color: white;\r\n    width: 50%;\r\n}\r\n.scoreLabel{\r\n    font-size: 25px;\r\n    margin-right:30px;\r\n}\r\n.singleDownload{\r\n    width: 50%;\r\n    display: -ms-grid;\r\n    display: grid;\r\n    -ms-grid-columns: 2fr 1fr;\r\n        grid-template-columns: 2fr 1fr;\r\n}\r\nli{\r\n    list-style-type: none;\r\n    margin-bottom: 15px;\r\n}\r\nhr{\r\n    border-color: white;\r\n}\r\n.dlLabel{\r\n    font-size: 50px;\r\n}\r\n.downloadLink{\r\n    font-size: 15px;\r\n    background-color: rgb(26, 26, 129);\r\n    color: white;\r\n    border: 1px solid black;\r\n    border-radius:3px;\r\n    cursor: pointer;\r\n}"

/***/ }),

/***/ "./src/app/download/download.component.html":
/*!**************************************************!*\
  !*** ./src/app/download/download.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"downloadContainer\">\n  <div class=\"dlLabel\">Your Downloads :</div>\n  <hr>\n  <li *ngFor=\"let linkscore of linkscores \">\n    <span class=\"singleDownload\">\n      <span class=\"scoreLabel\">{{linkscore.name}}</span>\n      <span><button [attr.data-sample]=\"linkscore.name\" class=\"downloadLink\" >Download</button></span>\n    </span>\n</li>\n</div>\n\n"

/***/ }),

/***/ "./src/app/download/download.component.ts":
/*!************************************************!*\
  !*** ./src/app/download/download.component.ts ***!
  \************************************************/
/*! exports provided: DownloadComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DownloadComponent", function() { return DownloadComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../authentication.service */ "./src/app/authentication.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DownloadComponent = /** @class */ (function () {
    function DownloadComponent(auth, http) {
        this.auth = auth;
        this.http = http;
        this.firstCheck = true;
    }
    //This component is going to be a page with a shit ton of links(potentially) 
    //This list will be the result of hitting the download controller with a post request
    //Containing just the user token. The user token will contain all purchaseTokens the user has 
    //Ever gotten. The download controller will loop through the purchaseTokens and build an array 
    //of links,one for each score(so long as the token is not expired). The page will display
    //These links as <a> tags that either open in another window or trigger an auto download in the 
    //Same page
    DownloadComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.linkscores = [];
        this.getURLs().subscribe(function (URLs) {
            for (var i = 0; i < URLs.verifiedURLs.length; i++) {
                var newLink = new Object({ href: URLs.verifiedURLs[i], name: _this.getName(URLs.verifiedURLs[i]) });
                _this.linkscores.push({ href: URLs.verifiedURLs[i], name: _this.getName(URLs.verifiedURLs[i]) });
            }
        });
    };
    DownloadComponent.prototype.ngAfterViewChecked = function () {
        var _this = this;
        var downloadlinks = document.getElementsByClassName('downloadLink');
        if (this.firstCheck) {
            var _loop_1 = function (i) {
                this_1.firstCheck = false;
                downloadlinks[i].addEventListener('click', function () {
                    var baseUrl = 'https://gideonsystems.net/download/serve?id=';
                    return _this.http.get("" + baseUrl + ("" + downloadlinks[i].getAttribute('data-sample')), { headers: { Authorization: "Bearer " + _this.auth.getToken() }, responseType: 'blob' })
                        .pipe().subscribe(function (data) {
                        console.log(data);
                        var file = new Blob([data], { type: 'application/pdf' });
                        var link = document.createElement('a');
                        var fileUrl = URL.createObjectURL(file);
                        link.href = fileUrl;
                        link.download = 'score_download.pdf';
                        link.click();
                    });
                });
            };
            var this_1 = this;
            for (var i = 0; i < downloadlinks.length; i++) {
                _loop_1(i);
            }
        }
    };
    DownloadComponent.prototype.getName = function (url) {
        var name = url.split('=')[1];
        return name;
    };
    DownloadComponent.prototype.getURLs = function () {
        var response = this.http.get('https://gideonsystems.net/download/userScores', { headers: { Authorization: "Bearer " + this.auth.getToken() } });
        return response;
    };
    DownloadComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-download',
            template: __webpack_require__(/*! ./download.component.html */ "./src/app/download/download.component.html"),
            styles: [__webpack_require__(/*! ./download.component.css */ "./src/app/download/download.component.css")]
        }),
        __metadata("design:paramtypes", [_authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"], _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], DownloadComponent);
    return DownloadComponent;
}());



/***/ }),

/***/ "./src/app/forgot/forgot.component.css":
/*!*********************************************!*\
  !*** ./src/app/forgot/forgot.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".supportLabel{\r\n    font-size: 15px;\r\n    color: black;\r\n}\r\n.failureMessage{\r\n    color:rgb(209, 19, 19);\r\n\r\n\r\n}\r\n.successMessage{\r\n    font-size: 25px;\r\n    color: white;\r\n    margin-left: 100px;\r\n    margin-top: 100px;\r\n    margin-bottom:200px;\r\n}\r\n.formField{\r\n    margin-top: 10px;\r\n    margin-bottom: 10px;\r\n}\r\n.forgotForm{\r\n    margin-left: 200px;\r\n    margin-top: 100px;\r\n    margin-bottom: 100px;\r\n    width: 600px;\r\n    color: black;\r\n    margin: 30px auto;\r\n    background-color: rgba(250, 250, 249, 0.527);\r\n    padding: 40px;\r\n    border-radius: 5px;\r\n    border: 1px solid rgb(53, 52, 52);\r\n    box-shadow: 5px 10px 18px black;\r\n}"

/***/ }),

/***/ "./src/app/forgot/forgot.component.html":
/*!**********************************************!*\
  !*** ./src/app/forgot/forgot.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div  class=\"forgotPage\">\n    <form  *ngIf=\"!emailSuccess\" [formGroup]=\"rForm\" #myForm=\"ngForm\" class=\"forgotForm\" (ngSubmit)=\"recover(rForm.value,myForm)\">\n        <div class=\"supportLabel\">Enter the email associated with your account and we will email you instructions\n          to reset your password  :</div>\n        <hr>\n        <div class=\"failureMessage\" *ngIf=\"emailFailure\">No user was found with that email address.</div>\n        <div class=\"formField\">\n          <label for=\"email\">Email :</label>\n          <input type=\"email\" class=\"form-control\" formControlName=\"email\" name=\"email\" placeholder=\"Enter email\" [(ngModel)]=\"email\">\n        </div>\n        <div class=\"buttons\">\n          <button type=\"submit\" class=\"btn btn-default\" [disabled]=\"!rForm.valid\">Submit</button>\n        </div>\n    </form>\n    \n    <div *ngIf=\"emailSuccess\" class=\"successMessage\">An email has been sent to {{this.email}} with a link to reset your password.</div>\n\n\n\n</div>"

/***/ }),

/***/ "./src/app/forgot/forgot.component.ts":
/*!********************************************!*\
  !*** ./src/app/forgot/forgot.component.ts ***!
  \********************************************/
/*! exports provided: ForgotComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForgotComponent", function() { return ForgotComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../authentication.service */ "./src/app/authentication.service.ts");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ForgotComponent = /** @class */ (function () {
    function ForgotComponent(http, auth, fb) {
        this.http = http;
        this.auth = auth;
        this.fb = fb;
        this.emailSuccess = false;
        this.emailFailure = false;
        this.rForm = fb.group({
            'email': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required])]
        });
    }
    ForgotComponent.prototype.ngOnInit = function () {
    };
    ForgotComponent.prototype.recover = function (formData, form) {
        var _this = this;
        var result = this.sendRecovery(formData).subscribe(function (result) {
            if (result.status == 200) {
                _this.emailSuccess = true;
            }
            else {
                _this.emailFailure = true;
            }
        });
        return;
    };
    ForgotComponent.prototype.sendRecovery = function (formData) {
        return this.http.post('http://localhost:1737/forgot/recover', formData);
    };
    ForgotComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-forgot',
            template: __webpack_require__(/*! ./forgot.component.html */ "./src/app/forgot/forgot.component.html"),
            styles: [__webpack_require__(/*! ./forgot.component.css */ "./src/app/forgot/forgot.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_3__["Http"], _authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]])
    ], ForgotComponent);
    return ForgotComponent;
}());



/***/ }),

/***/ "./src/app/home-page/home-page.component.css":
/*!***************************************************!*\
  !*** ./src/app/home-page/home-page.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n.slogan{\r\n    text-align: center;\r\n    color: white;\r\n    font-size: 50px;\r\n    letter-spacing: 10px;\r\n    text-shadow: 4px 4px 3px rgba(0,0,0,0.1);\r\n}\r\n\r\n.pianoImage{\r\n    width:100%;\r\n    height: 400px;\r\n}\r\n\r\n.vinylImage{\r\n    width:100%;\r\n    height: 400px;\r\n}\r\n\r\n.slogan2{\r\n    font-size: 30px;\r\n    font-family: 'Comfortaa', cursive;\r\n}\r\n\r\n.main{\r\n    color: white;\r\n}\r\n\r\n.info{\r\n    margin-left:100px;\r\n}\r\n\r\n#scoreCard{\r\n    height: 400px;\r\n    width: 400px;\r\n    background-image: url(\"https://gideonsystems.net/images/piano.jpg\");\r\n    background-size: 400px 400px;\r\n    border-radius: 5px;\r\n    font-family: 'Comfortaa', cursive;\r\n}\r\n\r\n#recordCard{\r\n    height: 400px;\r\n    width: 400px;\r\n    background-image: url(\"https://gideonsystems.net/images/vinyl.jpg\");\r\n    background-size: 400px 400px;\r\n    border-radius: 5px;\r\n    font-family: 'Comfortaa', cursive;\r\n}\r\n\r\n#scoreCard:hover{\r\n    box-shadow: 5px 5px 10px rgb(148, 145, 145);\r\n}\r\n\r\n#recordCard:hover{\r\n    box-shadow: 5px 5px 10px rgb(148, 145, 145);\r\n}\r\n\r\na:hover{\r\n    text-decoration: none;\r\n}\r\n\r\n.floatText{\r\n    margin-top: 150px;\r\n    margin-left: 100px;\r\n    color: white;\r\n    font-size: 40px;\r\n}\r\n\r\n.info1{\r\n    text-align:center;\r\n    margin-top: 80px;\r\n    margin-bottom: 30px;\r\n}\r\n\r\n#buyButton{\r\n    margin-top: 40px;\r\n}\r\n\r\n.productCards{\r\n    display: -ms-grid;\r\n    display: grid;\r\n    -ms-grid-columns: 1fr 1fr;\r\n        grid-template-columns: 1fr 1fr;\r\n    justify-items: center;\r\n    margin-bottom: 125px;\r\n    width:100%;\r\n}\r\n"

/***/ }),

/***/ "./src/app/home-page/home-page.component.html":
/*!****************************************************!*\
  !*** ./src/app/home-page/home-page.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "   <div class=\"homePage\">\n            <div class=\"main\">\n                <div class=\"info1\">\n                    <div class=\"slogan2\">\n                    Sophisticated Scores. Simple Pricing. No Hassles.\n                    </div>\n                </div>\n                <div class=\"productCards\">\n                    <a routerLink=\"/samples\"><div id=\"scoreCard\" class=\"card\">\n                        <div class=\"floatText\">Browse Scores </div>\n                    </div></a>\n                    <div  id=\"recordCard\" class=\"card\">\n                        <div class=\"floatText\">Recording Sessions</div>\n                    </div>\n\n                </div>\n            </div>         \n   </div>\n   \n   \n    "

/***/ }),

/***/ "./src/app/home-page/home-page.component.ts":
/*!**************************************************!*\
  !*** ./src/app/home-page/home-page.component.ts ***!
  \**************************************************/
/*! exports provided: HomePageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageComponent", function() { return HomePageComponent; });
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

var HomePageComponent = /** @class */ (function () {
    function HomePageComponent() {
    }
    HomePageComponent.prototype.ngOnInit = function () {
    };
    HomePageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home-page',
            template: __webpack_require__(/*! ./home-page.component.html */ "./src/app/home-page/home-page.component.html"),
            styles: [__webpack_require__(/*! ./home-page.component.css */ "./src/app/home-page/home-page.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HomePageComponent);
    return HomePageComponent;
}());



/***/ }),

/***/ "./src/app/login-message/login-message.component.css":
/*!***********************************************************!*\
  !*** ./src/app/login-message/login-message.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n.loginMessage{\r\n    margin-left: 200px;\r\n    margin-top: 100px;\r\n    color: white;\r\n    margin-bottom:200px;\r\n}\r\n.topMessage{\r\n    font-size: 25px;\r\n    margin-bottom: 20px;\r\n}\r\n.subMessage{\r\n    margin-bottom: 30px;\r\n    width: 50%;\r\n}\r\n.paymentWindow{\r\n    height: 500px;;\r\n}\r\n#loginButton{\r\n    margin-right: 10px;\r\n}"

/***/ }),

/***/ "./src/app/login-message/login-message.component.html":
/*!************************************************************!*\
  !*** ./src/app/login-message/login-message.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"loginMessage\">  \n    <div class=\"topMessage\"><b>Wait!</b> You need to login or register with our site to complete a purchase!</div>\n    <div class=\"subMessage\">Registering with our site is easy and will give you access to your purchased \n        scores through your profile in the future.\n    </div>\n    <a routerLink=\"/login\"><button id=\"loginButton\" class=\"btn btn-default\">Login</button></a>\n    <a routerLink=\"/register\"><button class=\"btn btn-default\">Register</button></a> \n</div>"

/***/ }),

/***/ "./src/app/login-message/login-message.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/login-message/login-message.component.ts ***!
  \**********************************************************/
/*! exports provided: LoginMessageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginMessageComponent", function() { return LoginMessageComponent; });
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

var LoginMessageComponent = /** @class */ (function () {
    function LoginMessageComponent() {
    }
    LoginMessageComponent.prototype.ngOnInit = function () {
    };
    LoginMessageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login-message',
            template: __webpack_require__(/*! ./login-message.component.html */ "./src/app/login-message/login-message.component.html"),
            styles: [__webpack_require__(/*! ./login-message.component.css */ "./src/app/login-message/login-message.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], LoginMessageComponent);
    return LoginMessageComponent;
}());



/***/ }),

/***/ "./src/app/login/login.component.css":
/*!*******************************************!*\
  !*** ./src/app/login/login.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".emailForm{\r\n    margin-left: 200px;\r\n    margin-top: 100px;\r\n    margin-bottom: 100px;\r\n    width: 600px;\r\n    color: black;\r\n    margin: 30px auto;\r\n    background-color: rgba(250, 250, 249, 0.527);\r\n    padding: 40px;\r\n    border-radius: 5px;\r\n    border: 1px solid rgb(53, 52, 52);\r\n    box-shadow: 5px 10px 18px black;\r\n}\r\n\r\n\r\n.passwordTrouble{\r\n    font-size: 13px;\r\n}\r\n\r\n\r\n.formField{\r\n    margin-top: 10px;\r\n    margin-bottom: 10px;\r\n}\r\n\r\n\r\nlabel{\r\n    margin-left: 10px;\r\n\r\n}\r\n\r\n\r\n.buttons{\r\n    display: -ms-grid;\r\n    display: grid;\r\n    -ms-grid-columns: 2fr 1fr;\r\n        grid-template-columns: 2fr 1fr;\r\n    grid-column-gap: 5px;\r\n    width: 40%;\r\n}\r\n\r\n\r\n.supportLabel{\r\nfont-size: 35px;\r\ncolor: black;\r\n}\r\n\r\n\r\nhr{\r\n    border-color: white;\r\n}"

/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form  [formGroup]=\"rForm\" #myForm=\"ngForm\" class=\"emailForm\" (ngSubmit)=\"login(rForm.value,myForm)\">\n  <div class=\"supportLabel\">Login to Lorenz Productions :</div>\n  <hr>\n  \n  <div class=\"formField\">\n    <label for=\"email\">Email :</label>\n    <input type=\"email\" class=\"form-control\" formControlName=\"email\" name=\"email\" placeholder=\"Enter email\" [(ngModel)]=\"email\">\n  </div>\n  <div class=\"formField\" >\n    <label for=\"password\">Password :</label>\n    <input type=\"password\" class=\"form-control\" formControlName=\"password\" name=\"password\" placeholder=\"Enter password\" [(ngModel)]=\"name\">\n  </div>\n  <div class=\"buttons\">\n    <button type=\"submit\" class=\"btn btn-default\" [disabled]=\"!rForm.valid\">Login</button>\n    <a routerLink=\"/register\"><button class=\"btn btn-default\">Register</button></a>\n  </div>\n  <div class=\"passwordTrouble\">Having trouble logging in? Click <a routerLink=\"/forgot\">here</a> to recover your password.</div>\n</form>\n"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _authentication_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../authentication.service */ "./src/app/authentication.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
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
    function LoginComponent(auth, router, fb) {
        this.auth = auth;
        this.router = router;
        this.fb = fb;
        this.credentials = {
            email: '',
            password: '',
            subscription: false
        };
        this.rForm = fb.group({
            'email': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].email, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required])],
            'password': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(6)])]
        });
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.login = function (formData, form) {
        var _this = this;
        this.credentials.email = formData.email;
        this.credentials.password = formData.password;
        this.auth.login(this.credentials).subscribe(function () {
            _this.router.navigateByUrl('/profile');
        }, function (err) {
            console.error(err);
        });
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [_authentication_service__WEBPACK_IMPORTED_MODULE_1__["AuthenticationService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/logout/logout.component.css":
/*!*********************************************!*\
  !*** ./src/app/logout/logout.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/logout/logout.component.html":
/*!**********************************************!*\
  !*** ./src/app/logout/logout.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  logout works!\n</p>\n"

/***/ }),

/***/ "./src/app/logout/logout.component.ts":
/*!********************************************!*\
  !*** ./src/app/logout/logout.component.ts ***!
  \********************************************/
/*! exports provided: LogoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogoutComponent", function() { return LogoutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../authentication.service */ "./src/app/authentication.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LogoutComponent = /** @class */ (function () {
    function LogoutComponent(auth, router) {
        this.auth = auth;
        this.router = router;
    }
    LogoutComponent.prototype.ngOnInit = function () {
        this.auth.logout();
    };
    LogoutComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-logout',
            template: __webpack_require__(/*! ./logout.component.html */ "./src/app/logout/logout.component.html"),
            styles: [__webpack_require__(/*! ./logout.component.css */ "./src/app/logout/logout.component.css")]
        }),
        __metadata("design:paramtypes", [_authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], LogoutComponent);
    return LogoutComponent;
}());



/***/ }),

/***/ "./src/app/payment/payment.component.css":
/*!***********************************************!*\
  !*** ./src/app/payment/payment.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".shoppingCart{\r\n    color: black;\r\n    margin-bottom: 20px;\r\n}\r\n\r\n.removeButton{\r\n    display: hidden !important;\r\n\r\n}\r\n\r\n.paymentWindow{\r\n    margin-left: 200px;\r\n    margin-top: 100px;\r\n    width:500px;\r\n    background-color: rgba(212, 212, 212);\r\n    color: black;\r\n    box-shadow: 5px 10px 18px black;\r\n    border-radius: 3px;\r\n}\r\n\r\n.cartWindow{\r\n    margin-bottom: 200px;\r\n    margin-left: 50px;\r\n    margin-right: 50px;\r\n    padding-bottom:20px;\r\n    padding-top:5px;\r\n    \r\n}\r\n\r\n.loginMessage{\r\n    margin-left: 200px;\r\n    margin-top: 200px;\r\n    color: white;\r\n}\r\n\r\n.topMessage{\r\n    font-size: 25px;\r\n    margin-bottom: 20px;\r\n}\r\n\r\n.subMessage{\r\n    margin-bottom: 30px;\r\n    width: 50%;\r\n}\r\n\r\n#loginButton{\r\n    margin-right: 10px;\r\n}\r\n"

/***/ }),

/***/ "./src/app/payment/payment.component.html":
/*!************************************************!*\
  !*** ./src/app/payment/payment.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"paymentWindow\">\n        <div class=\"cartWindow\">\n            <div class=\"shoppingCart\">\n               <app-side-cart></app-side-cart>\n            </div>\n            <div id=\"paypal-button\" (onPaymentCompleted)=\"goToDownload($event)\" ></div>\n        </div>\n        <div *ngIf=\"!this.auth.isLoggedIn()\" class=\"loginMessage\">  \n            <div class=\"topMessage\"><b>Wait!</b> You need to login or register with our site to complete a purchase!</div>\n            <div class=\"subMessage\">Registering with our site is easy and will give you access to your purchased \n                scores through your profile in the future.\n            </div>\n            <a routerLink=\"/login\"><button id=\"loginButton\" class=\"btn btn-default\">Login</button></a>\n            <a routerLink=\"/register\"><button class=\"btn btn-default\">Register</button></a> \n        </div>\n</div>\n"

/***/ }),

/***/ "./src/app/payment/payment.component.ts":
/*!**********************************************!*\
  !*** ./src/app/payment/payment.component.ts ***!
  \**********************************************/
/*! exports provided: PaymentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaymentComponent", function() { return PaymentComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _cart_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../cart.service */ "./src/app/cart.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _authentication_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../authentication.service */ "./src/app/authentication.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var PaymentComponent = /** @class */ (function () {
    function PaymentComponent(auth, cartService, router, http) {
        this.auth = auth;
        this.cartService = cartService;
        this.router = router;
        this.http = http;
        this.buttonScriptLoaded = false;
        this.loggedIn = false;
    }
    PaymentComponent.prototype.buildItemList = function (samples) {
        var i = 0;
        var item_list_string = "item_list: { items: [";
        for (i = 0; i < samples.length; i++) {
            item_list_string += "{ name: '" + samples[i].name + "',quantity: '1',price: '" + samples[i].price +
                "',currency: 'USD'}";
            if (i != (samples.length - 1)) {
                item_list_string += ",";
            }
        }
        item_list_string += "]}";
        return item_list_string;
    };
    PaymentComponent.prototype.ngOnInit = function () {
        if (!this.auth.isLoggedIn()) {
            this.router.navigate(['/login-message']);
        }
        this.samples = this.cartService.getSelectedSamples();
        this.checkScores();
        this.samples = this.cartService.getSelectedSamples();
        this.subTotal = this.cartService.getSubTotal();
        this.item_list = this.buildItemList(this.samples);
        var paypalScript = document.createElement('script');
        paypalScript.textContent = "paypal.Button.render({\
      env: 'production',\
      client: {\
        production:'AUO6x_LnK6xbnnnVNjENeMseWEPiE2kjUMZLYc6W7gfsArvPjMxso3woKrILKk-QzBDzEpcoxGPTbY4D'\
      },\
      payment: function (data, actions) {\
        \
        return actions.payment.create({\
          transactions: [{\
            amount: {\
              total: '" + this.subTotal + "',\
              currency: 'USD'\
            },\
            " + this.item_list + "\
          }]\
        });\
      },\
      onAuthorize:function(data, actions) {\
          return actions.payment.execute()\
            .then((data,actions)=>{\
              document.querySelector('#paypal-button').dispatchEvent(new CustomEvent('onPaymentCompleted', {bubbles: true, detail: {transactionData: data} }));\
            });\
      }\
    }, '#paypal-button');";
        document.body.appendChild(paypalScript);
        this.buttonScriptLoaded = true;
    };
    PaymentComponent.prototype.ngAfterViewChecked = function () {
        var removeButtons = document.getElementsByClassName('removeButton');
        for (var i = 0; i < removeButtons.length; i++) {
            removeButtons[i].parentNode.removeChild(removeButtons[i]);
        }
        var checkout = document.getElementsByClassName('btn btn-secondary');
        if (checkout.length) {
            //Remove it
            checkout[0].parentNode.removeChild(checkout[0]);
        }
    };
    PaymentComponent.prototype.goToDownload = function (data) {
        var _this = this;
        var data = data.detail.transactionData;
        var transactionData = {
            name: data.payer.payer_info.first_name + " " + data.payer.payer_info.last_name,
            email: data.payer.payer_info.email,
            total: data.transactions[0].amount.total,
            items: data.transactions[0].item_list.items,
            saleId: data.transactions[0].related_resources[0].sale.id
        };
        this.auth.transaction(transactionData).subscribe(function (data) {
            _this.router.navigate(['/download']);
        });
    };
    PaymentComponent.prototype.checkScores = function () {
        var decodedToken;
        var token = this.auth.getToken();
        var payload = token.split('.')[1];
        payload = window.atob(payload);
        decodedToken = JSON.parse(payload);
        for (var i = 0; i < decodedToken.purchases.length; i++) {
            var decodedPayToken;
            var purchaseToken = decodedToken.purchases[i];
            payload = purchaseToken.split('.')[1];
            payload = window.atob(payload);
            decodedPayToken = JSON.parse(payload);
            for (var j = 0; j < decodedPayToken.scores.length; j++) {
                for (var k = 0; k < this.samples.length; k++) {
                    if (decodedPayToken.scores[j] === this.samples[k].name) {
                        window.alert('You own this score already! <' + this.samples[k].name + '>\nIt has been removed from your cart.');
                        this.cartService.removeSample(this.samples[k]);
                    }
                }
            }
        }
    };
    PaymentComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-payment',
            template: __webpack_require__(/*! ./payment.component.html */ "./src/app/payment/payment.component.html"),
            styles: [__webpack_require__(/*! ./payment.component.css */ "./src/app/payment/payment.component.css")]
        }),
        __metadata("design:paramtypes", [_authentication_service__WEBPACK_IMPORTED_MODULE_4__["AuthenticationService"], _cart_service__WEBPACK_IMPORTED_MODULE_1__["CartService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
    ], PaymentComponent);
    return PaymentComponent;
}());



/***/ }),

/***/ "./src/app/profile/profile.component.css":
/*!***********************************************!*\
  !*** ./src/app/profile/profile.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".profileContainer{\r\n    margin-left: 60px;\r\n    margin-top:30px;\r\n    margin-bottom:200px;\r\n    color:white;\r\n}\r\n\r\nhr{\r\n    border-color: white;\r\n}\r\n\r\n.content{\r\n    display: -ms-grid;\r\n    display: grid;\r\n    -ms-grid-columns: 1fr 4fr;\r\n        grid-template-columns: 1fr 4fr;\r\n}\r\n\r\n.purchaseLabel{\r\n    font-size: 25px;\r\n}\r\n\r\n.accountDetails{\r\n    font-size: 25px;\r\n}\r\n\r\n.mainContent{\r\n    margin-left: 75px;\r\n    width: 50%;\r\n}\r\n\r\nul{\r\n    padding: 0;\r\n}\r\n\r\nli{\r\n    list-style-type: none;\r\n    margin-left: 20px;\r\n    margin-top:20px;\r\n    margin-bottom:20px;\r\n}\r\n\r\na{\r\n    color:black;\r\n}\r\n\r\n.optionsBar{\r\n    background-color: rgb(201, 197, 195);\r\n    height: 400px;\r\n    border-radius: 3px;\r\n    border: 1px solid rgb(58, 57, 57);\r\n}\r\n\r\n.profileHeader{\r\n    text-align: center;\r\n    font-size: 30px;\r\n    width: 75%;\r\n}\r\n\r\n.scoreList{\r\n    margin-top:50px;\r\n}\r\n\r\n.content{\r\n    margin-top:100px;\r\n}"

/***/ }),

/***/ "./src/app/profile/profile.component.html":
/*!************************************************!*\
  !*** ./src/app/profile/profile.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"profileContainer\">\n    <div class=\"profileHeader\">Welcome Back, {{this.name}}!<hr></div>\n    \n    \n    <div class=\"content\">\n            <span class=\"optionsBar\">\n                <ul>\n                    <li><a routerLink='/profile'>Account ></a></li>\n                    <hr>\n                    <li><a routerLink='/download'>My Downloads</a></li>\n                    <hr>\n                    <li><a routerLink='/contactMe'>Submit a Support Request</a></li>\n                    <hr>\n                    <li><a routerLink='/forgot'>Reset Password</a></li>\n                    <hr>\n                    <li><a *ngIf=\"this.showDash()\" routerLink='/dashboard'>Admin Dashboard</a></li>\n                </ul>\n            </span>\n            <span class=\"mainContent\">\n                    <div class=\"userInfo\">\n                        <div class=\"accountDetails\">Account Details :</div>\n                        <hr>\n                        <div class=\"email\">Email : {{details?.email}}</div>\n                        <div class=\"name\">Name : {{details?.name}}</div>\n                        <hr>\n                    </div>\n                    <div class=\"scoreList\">\n                        <div class=\"purchaseLabel\">Your Purchases:</div>\n                        <hr>\n                        <div class=\"noPurchaseMessage\" *ngIf=\"!scores.length\">You haven't purchased any scores yet! Go to the samples page to browse our selections.</div>\n                        <li *ngFor=\"let score of scores\">\n                                <div class=\"scoreName\">{{score?.name}}</div>\n                                <div class=\"exp\">Expires : {{score?.exp | date : 'longDate' }}</div>\n                        </li>\n                        <hr>\n                    </div>\n            </span>\n    </div>   \n</div>\n\n  \n"

/***/ }),

/***/ "./src/app/profile/profile.component.ts":
/*!**********************************************!*\
  !*** ./src/app/profile/profile.component.ts ***!
  \**********************************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _authentication_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../authentication.service */ "./src/app/authentication.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ProfileComponent = /** @class */ (function () {
    function ProfileComponent(auth) {
        this.auth = auth;
    }
    //This component will display some basic profile info like 
    //The users name,email,list of purchased scores
    //Options to: reset password, go to downloads, logout
    //            submit a support ticket
    //
    ProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        window.scrollTo(0, 300);
        this.auth.profile().subscribe(function (user) {
            _this.details = user;
            _this.getScoresFromToken();
            _this.name = _this.details.name.split(' ')[0];
        }, function (err) {
            console.error(err);
        });
    };
    ProfileComponent.prototype.getScoresFromToken = function () {
        var payload, token, k = 0;
        var decodedToken;
        this.scores = [];
        for (var i = 0; i < this.details.purchases.length; i++) {
            token = this.details.purchases[i];
            payload = token.split('.')[1];
            payload = window.atob(payload);
            decodedToken = JSON.parse(payload);
            for (var j = 0; j < decodedToken.scores.length; j++) {
                var newExp = new Date();
                newExp.setTime(decodedToken.exp * 1000);
                var nextPurchase = { name: decodedToken.scores[j], exp: newExp };
                this.scores.push(nextPurchase);
            }
        }
        return;
    };
    ProfileComponent.prototype.showDash = function () {
        if (this.details.email == "rossgideon@my.unt.edu")
            return true;
        if (this.details.email == "Jarendlorenz@gmail.com")
            return true;
        else
            return false;
    };
    ProfileComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-profile',
            template: __webpack_require__(/*! ./profile.component.html */ "./src/app/profile/profile.component.html"),
            styles: [__webpack_require__(/*! ./profile.component.css */ "./src/app/profile/profile.component.css")]
        }),
        __metadata("design:paramtypes", [_authentication_service__WEBPACK_IMPORTED_MODULE_1__["AuthenticationService"]])
    ], ProfileComponent);
    return ProfileComponent;
}());



/***/ }),

/***/ "./src/app/register/register.component.css":
/*!*************************************************!*\
  !*** ./src/app/register/register.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".emailForm{\r\n    margin-left: 200px;\r\n    margin-top: 100px;\r\n    margin-bottom: 100px;\r\n    width: 600px;\r\n    color: black;\r\n    margin: 30px auto;\r\n    margin-bottom: 100px;\r\n    background-color:  rgba(250, 250, 249, 0.527);\r\n    padding: 40px;\r\n    border-radius: 5px;\r\n    border: 1px solid rgb(43, 41, 41);\r\n    box-shadow: 5px 10px 18px black;\r\n}\r\n\r\n#fakeLink{\r\n    color: blue;\r\n    cursor:pointer;\r\n}\r\n\r\n.checkBox{\r\n    margin-top: 10px;\r\n    display: -ms-grid;\r\n    display: grid;\r\n    -ms-grid-columns: 1fr 6fr;\r\n        grid-template-columns: 1fr 6fr;\r\n}\r\n\r\n.policyBox{\r\n    overflow: auto;\r\n    color: white !important;\r\n    height: 400px;\r\n    width: 600px;\r\n}\r\n\r\n.passwordTrouble{\r\n    font-size: 13px;\r\n}\r\n\r\n.formField{\r\n    margin-top: 10px;\r\n    margin-bottom: 10px;\r\n}\r\n\r\nlabel{\r\n    margin-left: 10px;\r\n\r\n}\r\n\r\n.buttons{\r\n    display: -ms-grid;\r\n    display: grid;\r\n    -ms-grid-columns: 2fr 1fr;\r\n        grid-template-columns: 2fr 1fr;\r\n    grid-column-gap: 5px;\r\n    width: 40%;\r\n}\r\n\r\n.supportLabel{\r\nfont-size: 35px;\r\ncolor: black;\r\n}\r\n\r\nhr{\r\n    border-color: white;\r\n}\r\n\r\n.registerPage{\r\n    display: -ms-grid;\r\n    display: grid;\r\n    -ms-grid-columns: 2fr 1fr;\r\n        grid-template-columns: 2fr 1fr;\r\n}\r\n\r\n.policies{\r\n    margin-top: 200px;\r\n    margin-right: 150px;\r\n}"

/***/ }),

/***/ "./src/app/register/register.component.html":
/*!**************************************************!*\
  !*** ./src/app/register/register.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"registerPage\">\n    <form *ngIf=\"!emailSuccess\" [formGroup]=\"rForm\" #myForm=\"ngForm\" class=\"emailForm\" (ngSubmit)=\"register(rForm.value,myForm)\">\n        <div class=\"supportLabel\">Register Below with Lorenz Productions :</div>\n        <hr>\n        \n    \n        <div class=\"formField\" >\n            <label for=\"name\">Full Name :</label>\n            <input type=\"text\" class=\"form-control\" formControlName=\"name\" name=\"name\" placeholder=\"First Last\" [(ngModel)]=\"name\">\n          </div>\n        <div class=\"formField\">\n          <label for=\"email\">Email :</label>\n          <input type=\"email\" class=\"form-control\" formControlName=\"email\" name=\"email\" placeholder=\"Enter email\" [(ngModel)]=\"email\">\n        </div>\n        <div class=\"formField\" >\n          <label for=\"password\">Password :</label>\n          <input type=\"password\" class=\"form-control\" formControlName=\"password\" name=\"password\" placeholder=\"Enter password\" [(ngModel)]=\"password\">\n        </div>\n        <div class=\"checkBox\" >\n            <input type=\"checkbox\" class=\"form-control\" formControlName=\"privacy\" name=\"privacy\">\n            <label for=\"privacy\">I have read and agree to the <span id=\"fakeLink\" (click)=\"this.showTerms()\">Terms of Use</span> and <span id=\"fakeLink\" (click)=\"this.showPrivacy()\">Privacy Policy</span></label>\n        </div>\n        <div class=\"checkBox\" >\n            <input type=\"checkbox\" class=\"form-control\" formControlName=\"subscription\" name=\"subscription\" >\n            <label for=\"subscription\">I agree to receive occasional emails about new scores and offers</label>\n        </div>\n        <div class=\"buttons\">\n          <button type=\"submit\" class=\"btn btn-default\" [disabled]=\"!rForm.valid\">Sign Up!</button>\n        </div>\n      </form>\n      <div *ngIf=\"this.viewPolicy\" class=\"policies\">\n          <iframe *ngIf=\"this.viewPrivacy\" class=\"policyBox\" src=\"http://localhost:1737/privacyPolicy.html\"></iframe>\n          <iframe *ngIf=\"this.viewTerms\" class=\"policyBox\" src=\"http://localhost:1737/terms.html\"></iframe>\n      </div>\n\n</div>\n"

/***/ }),

/***/ "./src/app/register/register.component.ts":
/*!************************************************!*\
  !*** ./src/app/register/register.component.ts ***!
  \************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _authentication_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../authentication.service */ "./src/app/authentication.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
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
    function RegisterComponent(auth, router, fb) {
        this.auth = auth;
        this.router = router;
        this.fb = fb;
        this.credentials = {
            email: '',
            name: '',
            password: '',
            subscription: false
        };
        this.viewPolicy = false;
        this.viewPrivacy = false;
        this.viewTerms = false;
        this.rForm = fb.group({
            'email': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].email, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required])],
            'name': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required])],
            'password': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(6)])],
            'privacy': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            'subscription': ['']
        });
    }
    RegisterComponent.prototype.register = function (formData, form) {
        var _this = this;
        console.log(formData);
        this.credentials.email = formData.email;
        this.credentials.password = formData.password;
        this.credentials.name = formData.name;
        this.credentials.subscription = formData.subscription;
        this.auth.register(this.credentials).subscribe(function () {
            _this.router.navigateByUrl('/profile');
        }, function (err) {
            console.error(err);
        });
    };
    RegisterComponent.prototype.showTerms = function () {
        if (this.viewPrivacy == true)
            this.viewPrivacy = false;
        if (this.viewPolicy == false)
            this.viewPolicy = true;
        if (this.viewTerms == false)
            this.viewTerms = true;
    };
    RegisterComponent.prototype.showPrivacy = function () {
        if (this.viewTerms == true)
            this.viewTerms = false;
        if (this.viewPolicy == false)
            this.viewPolicy = true;
        if (this.viewPrivacy == false)
            this.viewPrivacy = true;
    };
    RegisterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-register',
            template: __webpack_require__(/*! ./register.component.html */ "./src/app/register/register.component.html"),
            styles: [__webpack_require__(/*! ./register.component.css */ "./src/app/register/register.component.css")]
        }),
        __metadata("design:paramtypes", [_authentication_service__WEBPACK_IMPORTED_MODULE_1__["AuthenticationService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "./src/app/sample.service.ts":
/*!***********************************!*\
  !*** ./src/app/sample.service.ts ***!
  \***********************************/
/*! exports provided: SampleService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SampleService", function() { return SampleService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SampleService = /** @class */ (function () {
    function SampleService(http) {
        this.http = http;
    }
    SampleService.prototype.getSamples = function () {
        return this.http.get('https://gideonsystems.net/samples/list')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res.json(); }));
    };
    SampleService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"]])
    ], SampleService);
    return SampleService;
}());



/***/ }),

/***/ "./src/app/samples/samples.component.css":
/*!***********************************************!*\
  !*** ./src/app/samples/samples.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".allSamples{\r\nmargin-left:80px;\r\nmargin-top: 40px;\r\nmargin-bottom: 80px;\r\nwidth: 80%;\r\n}\r\n\r\nli{\r\n    list-style-type: none;\r\n\r\n}\r\n\r\n.samplesGrid{\r\n    display: -ms-grid;\r\n    display: grid;\r\n    -ms-grid-columns: 2fr 1fr;\r\n        grid-template-columns: 2fr 1fr;\r\n}\r\n\r\n.shoppingCart{\r\n    color: black;\r\n    background-color: rgb(202, 199, 199);\r\n    width: 80%;\r\n    border-radius: 5px;\r\n    margin-top: 40px;\r\n    box-shadow: -5px 10px 18px black;   \r\n}\r\n\r\nhr{\r\n    border-color: white;\r\n}\r\n\r\n#trackInfo{\r\n    color:white;\r\n    font-size: 12px;\r\n}\r\n\r\n.scorePrice{\r\n    color:white;\r\n}\r\n\r\n#singleSample{\r\n    color: white;\r\n    height: 200px;\r\n}\r\n\r\n.player{    \r\n    width:75%;\r\n    float: left;\r\n}\r\n\r\n.optionButtons{\r\n    width:20%;\r\n    float: right;\r\n    display: -ms-grid;\r\n    display: grid;\r\n    -ms-grid-rows: 2fr 2fr 1fr;\r\n        grid-template-rows: 2fr 2fr 1fr;\r\n}\r\n\r\nbutton{\r\n    margin-bottom: 5px;\r\n}\r\n\r\n#detailsButton{\r\n    width: 100%;\r\n}"

/***/ }),

/***/ "./src/app/samples/samples.component.html":
/*!************************************************!*\
  !*** ./src/app/samples/samples.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div  class=samplesGrid>\n    <span class=\"allSamples\">\n        <li *ngFor=\"let sample of samples\">\n            <div id=\"singleSample\">\n                <h3>{{sample.name}}</h3>\n                <script src=\"https://w.soundcloud.com/player/api.js\"></script>\n                <iframe class=\"player\" width=\"33%\" height=\"120\" scrolling=\"no\" frameborder=\"no\"\n                src=\"\">\n                </iframe>\n                <span class=\"optionButtons\">\n                    <a [routerLink]=\"['/score-details',sample.name]\"><button id=\"detailsButton\" type=\"button\" class=\"btn btn-secondary\">About This Score</button></a>\n                    <button type=\"button\" class=\"btn btn-primary\" >Add to Cart</button>\n                    <span class=\"scorePrice\">Price: {{sample.price | currency}}</span>\n                </span>\n            </div>\n            <section id=\"trackInfo\">\n                {{sample.description}}\n            </section>\n            <hr>\n        </li>\n    </span>\n\n    <span class=\"shoppingCart\">\n        <app-side-cart></app-side-cart>\n    </span>\n\n</div>\n\n"

/***/ }),

/***/ "./src/app/samples/samples.component.ts":
/*!**********************************************!*\
  !*** ./src/app/samples/samples.component.ts ***!
  \**********************************************/
/*! exports provided: SamplesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SamplesComponent", function() { return SamplesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _sample_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../sample.service */ "./src/app/sample.service.ts");
/* harmony import */ var _cart_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../cart.service */ "./src/app/cart.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SamplesComponent = /** @class */ (function () {
    function SamplesComponent(sampleService, cartService) {
        this.sampleService = sampleService;
        this.cartService = cartService;
        this.firstViewCheck = true;
    }
    SamplesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sampleService.getSamples().subscribe(function (newsamples) {
            _this.samples = newsamples;
        });
    };
    SamplesComponent.prototype.ngAfterViewChecked = function () {
        var _this = this;
        var players = document.getElementsByClassName("player");
        var cartButtons = document.getElementsByClassName("btn btn-primary");
        if (this.firstViewCheck && cartButtons.length) {
            var _loop_1 = function (i) {
                players[i].setAttribute('src', this_1.samples[i].soundCloud);
                cartButtons[i].addEventListener('click', function () {
                    _this.cartService.addSample(_this.samples[i]);
                });
            };
            var this_1 = this;
            for (var i = 0; i < players.length; i++) {
                _loop_1(i);
            }
            this.firstViewCheck = false;
        }
    };
    SamplesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-samples',
            template: __webpack_require__(/*! ./samples.component.html */ "./src/app/samples/samples.component.html"),
            styles: [__webpack_require__(/*! ./samples.component.css */ "./src/app/samples/samples.component.css")]
        }),
        __metadata("design:paramtypes", [_sample_service__WEBPACK_IMPORTED_MODULE_1__["SampleService"], _cart_service__WEBPACK_IMPORTED_MODULE_2__["CartService"]])
    ], SamplesComponent);
    return SamplesComponent;
}());



/***/ }),

/***/ "./src/app/score-details/score-details.component.css":
/*!***********************************************************!*\
  !*** ./src/app/score-details/score-details.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".detailsPage{\r\n    color:white;\r\n    margin-left: 100px;\r\n    margin-top: 100px;\r\n    width: 90%;\r\n    display: -ms-grid;\r\n    display: grid;\r\n    -ms-grid-columns: 3fr 1fr;\r\n        grid-template-columns: 3fr 1fr;\r\n}\r\n\r\nhr{\r\n    border-color: white;\r\n    margin-top: 8px;\r\n}\r\n\r\n.singleInstrument{\r\n    margin-left: 50px;\r\n}\r\n\r\nli{\r\n    list-style-type: circle;\r\n}\r\n\r\n.instrumentation{\r\n    margin-bottom: 15px;\r\n}\r\n\r\n.content{\r\n    display: -ms-grid;\r\n    display: grid;\r\n    -ms-grid-columns: 1fr 1fr;\r\n        grid-template-columns: 1fr 1fr;\r\n    margin-bottom: 50px;\r\n}\r\n\r\n.shoppingCart{\r\n    color: black;\r\n    background-color: rgb(202, 199, 199);\r\n    width: 80%;\r\n    border-radius: 5px;\r\n    box-shadow: -5px 10px 18px black;   \r\n}\r\n\r\n.label{\r\n    margin-right: 15px;\r\n    font-size: 15px;\r\n}\r\n\r\n#cartButton{\r\n    margin-top: 10px;\r\n}\r\n\r\n.detailsLabel{\r\n    font-size: 20px;\r\n    margin-bottom: 8px;\r\n}\r\n\r\n#blackHr{\r\n    border-color: black;\r\n}\r\n\r\n.description{\r\n    margin-bottom: 200px;\r\n\r\n}\r\n\r\n.detailsContent{\r\n   background-color: white;\r\n   width: 66%;\r\n   padding-left: 15px;\r\n   padding-bottom: 15px;\r\n   border-radius: 8px; \r\n   color: black;\r\n   box-shadow: 5px 10px 18px black;\r\n}"

/***/ }),

/***/ "./src/app/score-details/score-details.component.html":
/*!************************************************************!*\
  !*** ./src/app/score-details/score-details.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"detailsPage\">\n  <div class=\"container\">\n      <h2>{{this.currentSample.name}}</h2>\n    <hr>\n    <script src=\"https://w.soundcloud.com/player/api.js\"></script>\n    <div class=\"content\">\n      <div class=\"detailsContent\">\n          <div class=\"detailsLabel\">Details:</div>\n          <hr width=\"45%\" align=\"left\" id=\"blackHr\">\n          <div class=\"difficulty\"><span class=\"label\">Difficulty:</span> {{this.currentSample.difficulty}}/10</div>\n          <div class=\"instrumentation\">\n              <span class=\"label\">Instrumentation:</span>\n              <li class=\"singleInstrument\" *ngFor=\"let instrument of this.currentSample.instrumentation\">\n                {{instrument}}\n              </li>\n          </div>\n          <div class=\"price\"><span class=\"label\">Price:</span> {{this.currentSample.price | currency}}</div>\n          <button id=\"cartButton\" type=\"button\" class=\"btn btn-primary\" >Add to Cart</button>\n      </div>\n      <iframe class=\"player\" width=\"100%\" height=\"120\" scrolling=\"no\" frameborder=\"no\" src=\"\"></iframe>\n    </div>\n    <div class=\"description\">Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis laudantium neque magnam veniam aliquam rerum repellat possimus nobis eveniet quam dolores veritatis in non dignissimos fugit nam distinctio blanditiis earum maxime minus perferendis, quis esse saepe placeat! Tempore accusantium, sunt possimus iure molestias libero inventore nobis. Odit ex tenetur enim? Veniam dolorum ea beatae accusantium maxime dolorem voluptatum impedit, aut animi quasi, ab quo soluta. Expedita officiis facilis nihil nesciunt voluptas explicabo perspiciatis excepturi eos amet at, deserunt, nam, placeat alias enim voluptate illum soluta earum veniam fugiat dicta ipsa laborum! Itaque rerum deserunt vitae et, eum omnis consectetur ducimus placeat pariatur excepturi consequuntur culpa illo nemo assumenda nulla, veritatis laboriosam reiciendis voluptatibus maxime. Consequatur totam perferendis debitis? Expedita, maxime earum harum totam corporis sapiente exercitationem neque hic provident minima voluptates consequatur cum quia cumque temporibus sit tenetur. Fugit laboriosam libero reiciendis itaque dolore saepe animi rem obcaecati, quo illo vel velit eaque possimus repudiandae esse necessitatibus debitis tenetur blanditiis voluptas odio eos expedita ab veritatis ratione. Illo, sapiente magnam nostrum maiores aperiam rem minus accusantium. Explicabo omnis debitis illo repudiandae cumque officia. Molestiae necessitatibus dolores similique quidem, rerum sapiente, distinctio architecto quasi numquam voluptatem fuga odio tempore iusto nisi.</div>\n  </div>\n  <div class=\"shoppingCart\">\n    <app-side-cart></app-side-cart>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/score-details/score-details.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/score-details/score-details.component.ts ***!
  \**********************************************************/
/*! exports provided: ScoreDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScoreDetailsComponent", function() { return ScoreDetailsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _sample_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../sample.service */ "./src/app/sample.service.ts");
/* harmony import */ var _cart_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../cart.service */ "./src/app/cart.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ScoreDetailsComponent = /** @class */ (function () {
    function ScoreDetailsComponent(cartService, route, sampleService) {
        this.cartService = cartService;
        this.route = route;
        this.sampleService = sampleService;
    }
    ScoreDetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this.route.params.subscribe(function (params) {
            _this.score = params['name'];
            _this.sampleService.getSamples().subscribe(function (newsamples) {
                _this.samples = newsamples;
                _this.currentSample = _this.getSample(_this.score);
                var player = document.getElementsByClassName("player");
                var cartButton = document.getElementsByClassName("btn btn-primary");
                player[0].setAttribute('src', _this.currentSample.soundCloud);
                cartButton[0].addEventListener('click', function () {
                    _this.cartService.addSample(_this.currentSample);
                });
            });
        });
    };
    ScoreDetailsComponent.prototype.getSample = function (score) {
        for (var i = 0; i < this.samples.length; i++) {
            if (this.samples[i].name == score)
                return this.samples[i];
        }
    };
    ScoreDetailsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-score-details',
            template: __webpack_require__(/*! ./score-details.component.html */ "./src/app/score-details/score-details.component.html"),
            styles: [__webpack_require__(/*! ./score-details.component.css */ "./src/app/score-details/score-details.component.css")]
        }),
        __metadata("design:paramtypes", [_cart_service__WEBPACK_IMPORTED_MODULE_3__["CartService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _sample_service__WEBPACK_IMPORTED_MODULE_2__["SampleService"]])
    ], ScoreDetailsComponent);
    return ScoreDetailsComponent;
}());



/***/ }),

/***/ "./src/app/side-cart/side-cart.component.css":
/*!***************************************************!*\
  !*** ./src/app/side-cart/side-cart.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".cartHeader{\r\n    font-size: 30px;\r\n    text-align: center;\r\n    margin-top: 15px;\r\n}\r\n\r\n.removeButton{\r\n    margin-right: 10px;\r\n    background-color:  #707474;\r\n    color: white;\r\n    border-radius: 5px;\r\n    border: 1px solid rgb(41, 40, 40)\r\n}\r\n\r\nli{\r\n    list-style-type: none;\r\n    margin-bottom: 20px;\r\n}\r\n\r\n.cartItems{\r\n    margin-left: 10px;\r\n    margin-bottom: 60px;\r\n}\r\n\r\n.cartFooter{\r\n    margin-top: 30px;\r\n    display: -ms-grid;\r\n    display: grid;\r\n    -ms-grid-rows: 1fr 1fr;\r\n        grid-template-rows: 1fr 1fr;\r\n}\r\n\r\n.numItems{\r\n    display: -ms-grid;\r\n    display: grid;\r\n    -ms-grid-columns: 3fr 1fr;\r\n        grid-template-columns: 3fr 1fr;\r\n    width: 50%;\r\n}\r\n\r\n.countLabel{\r\n    margin-left: 10px;\r\n    font-size: 20px;\r\n    text-decoration: underline;\r\n    -webkit-text-decoration: 2px;\r\n            text-decoration: 2px;\r\n}\r\n\r\n#checkoutButton{\r\n    margin-left: 10px;\r\n    margin-top: 10px;\r\n}\r\n\r\n.subLabel{\r\n    margin-left: 10px;\r\n    font-size: 20px;\r\n    text-decoration: underline;\r\n    -webkit-text-decoration: 2px;\r\n            text-decoration: 2px;\r\n}\r\n\r\n.subTotal{\r\n    display: -ms-grid;\r\n    display: grid;\r\n    -ms-grid-columns: 3fr 1fr;\r\n        grid-template-columns: 3fr 1fr;\r\n    width: 50%;\r\n}\r\n\r\n.itemTitle{\r\n    display: -ms-grid;\r\n    display: grid;\r\n    -ms-grid-columns: 3fr 1fr;\r\n        grid-template-columns: 3fr 1fr;\r\n}\r\n\r\n.itemName{\r\n    margin-right: 15px;\r\n    font-size:17px;\r\n    \r\n}\r\n\r\n.sideCart{\r\n    position: -webkit-sticky;\r\n    position: sticky;\r\n    top: 100px;\r\n    \r\n}"

/***/ }),

/***/ "./src/app/side-cart/side-cart.component.html":
/*!****************************************************!*\
  !*** ./src/app/side-cart/side-cart.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"sideCart\">\n  <h3 class=\"cartHeader\">Your Cart</h3>\n  <hr>\n  <div  class=\"cartItems\">\n    <li *ngFor=\"let sample of samples\">\n      <div class=\"itemTitle\">\n        <span class=\"itemName\">{{sample.name}} [PDF Download]</span>\n        <button type=\"button\" class=\"removeButton\" [attr.data-samplename]=\"sample.name\">Remove</button>\n      </div>\n        <div>{{sample.price | currency}}</div>\n    </li>\n  </div>\n  <div class=\"cartFooter\">\n    <div class=\"numItems\">\n      <span class=\"countLabel\">Total Scores:</span>\n      <span class=\"countNumber\">{{itemCount}}</span> \n    </div>\n    <div class=\"subTotal\">\n      <span class=\"subLabel\">Subtotal :</span>\n      <span class=\"subNumber\">{{subTotal | currency}}</span>\n    </div>\n  </div>\n  <a routerLink=\"/payment\"><button id=\"checkoutButton\" type=\"button\" class=\"btn btn-secondary\" >Checkout</button></a>\n</div>\n\n\n\n\n\n\n\n\n"

/***/ }),

/***/ "./src/app/side-cart/side-cart.component.ts":
/*!**************************************************!*\
  !*** ./src/app/side-cart/side-cart.component.ts ***!
  \**************************************************/
/*! exports provided: SideCartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SideCartComponent", function() { return SideCartComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _cart_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../cart.service */ "./src/app/cart.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SideCartComponent = /** @class */ (function () {
    function SideCartComponent(cartService) {
        this.cartService = cartService;
        this.prevCount = 0;
    }
    SideCartComponent.prototype.ngOnInit = function () {
        this.samples = this.cartService.getSelectedSamples();
        this.subTotal = this.cartService.getSubTotal();
        this.itemCount = this.cartService.getItemCount();
    };
    SideCartComponent.prototype.ngDoCheck = function () {
        this.samples = this.cartService.getSelectedSamples();
        this.subTotal = this.cartService.getSubTotal();
        this.itemCount = this.cartService.getItemCount();
        if (this.itemCount == (this.prevCount - 1)) {
            this.prevCount = this.itemCount;
        }
    };
    SideCartComponent.prototype.ngAfterViewChecked = function () {
        var _this = this;
        this.subTotal = this.cartService.getSubTotal();
        this.itemCount = this.cartService.getItemCount();
        var removeButtons = document.getElementsByClassName('removeButton');
        if (removeButtons.length > this.prevCount) {
            var currentSample = this.getButtonsSample(removeButtons[this.prevCount].getAttribute('data-samplename'));
            removeButtons[this.prevCount].addEventListener('click', function () {
                _this.cartService.removeSample(currentSample);
            });
            this.prevCount++;
        }
    };
    SideCartComponent.prototype.getButtonsSample = function (sampleName) {
        for (var i = 0; i < this.samples.length; i++) {
            if (this.samples[i].name == sampleName) {
                return this.samples[i];
            }
        }
    };
    SideCartComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-side-cart',
            template: __webpack_require__(/*! ./side-cart.component.html */ "./src/app/side-cart/side-cart.component.html"),
            styles: [__webpack_require__(/*! ./side-cart.component.css */ "./src/app/side-cart/side-cart.component.css")]
        }),
        __metadata("design:paramtypes", [_cart_service__WEBPACK_IMPORTED_MODULE_1__["CartService"]])
    ], SideCartComponent);
    return SideCartComponent;
}());



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

module.exports = __webpack_require__(/*! C:\Users\Ross\Desktop\SoundProduction\soundApp\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map