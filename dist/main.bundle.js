webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".bg-inverse {\n    background-color: #5cb85c!important;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'Camaleon GiftCards';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* unused harmony export MyTestAppModule */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_mydaterangepicker__ = __webpack_require__("../../../../mydaterangepicker/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ngx_cookie_service__ = __webpack_require__("../../../../ngx-cookie-service/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__auth_dashboard_component__ = __webpack_require__("../../../../../src/app/auth/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__auth_dashboard_main_component__ = __webpack_require__("../../../../../src/app/auth/dashboard.main.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__menu_navbar_component__ = __webpack_require__("../../../../../src/app/menu/navbar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__menu_sidebar_component__ = __webpack_require__("../../../../../src/app/menu/sidebar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__auth_login_component__ = __webpack_require__("../../../../../src/app/auth/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__auth_auth_service__ = __webpack_require__("../../../../../src/app/auth/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__auth_alwaysauthguard_service__ = __webpack_require__("../../../../../src/app/auth/alwaysauthguard.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__auth_setup_service__ = __webpack_require__("../../../../../src/app/auth/setup.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__auth_dashboard_main_service__ = __webpack_require__("../../../../../src/app/auth/dashboard.main.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__auth_barcode_detail_component__ = __webpack_require__("../../../../../src/app/auth/barcode_detail.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


















var appRoutes = [
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_12__auth_login_component__["a" /* LoginComponent */] },
    {
        path: '', component: __WEBPACK_IMPORTED_MODULE_8__auth_dashboard_component__["a" /* DashboardComponent */],
        canActivate: [__WEBPACK_IMPORTED_MODULE_14__auth_alwaysauthguard_service__["a" /* AlwaysAuthGuard */]],
        children: [
            {
                path: '',
                component: __WEBPACK_IMPORTED_MODULE_9__auth_dashboard_main_component__["a" /* DashboardMainComponent */]
            },
            {
                path: 'detail/:barcode',
                component: __WEBPACK_IMPORTED_MODULE_17__auth_barcode_detail_component__["a" /* DetailComponent */]
            }
        ]
    }
];
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["M" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_8__auth_dashboard_component__["a" /* DashboardComponent */],
            __WEBPACK_IMPORTED_MODULE_9__auth_dashboard_main_component__["a" /* DashboardMainComponent */],
            __WEBPACK_IMPORTED_MODULE_12__auth_login_component__["a" /* LoginComponent */],
            __WEBPACK_IMPORTED_MODULE_10__menu_navbar_component__["a" /* NavBarComponent */],
            __WEBPACK_IMPORTED_MODULE_11__menu_sidebar_component__["a" /* SideBarComponent */],
            __WEBPACK_IMPORTED_MODULE_17__auth_barcode_detail_component__["a" /* DetailComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_4__angular_http__["b" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_7__angular_router__["c" /* RouterModule */].forRoot(appRoutes, { enableTracing: false } // <-- debugging purposes only
            ),
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_1_mydaterangepicker__["MyDateRangePickerModule"]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_15__auth_setup_service__["a" /* SetupService */],
            __WEBPACK_IMPORTED_MODULE_13__auth_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_16__auth_dashboard_main_service__["a" /* DashboardMainService */],
            __WEBPACK_IMPORTED_MODULE_3_ngx_cookie_service__["a" /* CookieService */],
            __WEBPACK_IMPORTED_MODULE_14__auth_alwaysauthguard_service__["a" /* AlwaysAuthGuard */]
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */]]
    })
], AppModule);

var MyTestAppModule = (function () {
    function MyTestAppModule() {
    }
    return MyTestAppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/auth/alwaysauthguard.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AlwaysAuthGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__auth_service__ = __webpack_require__("../../../../../src/app/auth/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AlwaysAuthGuard = (function () {
    // constructor function
    // @param auth_service: Authentication service
    // @param router: router service
    // @returns none
    function AlwaysAuthGuard(auth_service, router) {
        this.auth_service = auth_service;
        this.router = router;
    }
    // can activate
    // Verification of the login
    // @params none
    // @returns boolean
    AlwaysAuthGuard.prototype.canActivate = function () {
        if (this.auth_service.viewVerification()) {
            return true;
        }
        else {
            this.router.navigate(['/login']);
            return false;
        }
    };
    return AlwaysAuthGuard;
}());
AlwaysAuthGuard = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object])
], AlwaysAuthGuard);

var _a, _b;
//# sourceMappingURL=alwaysauthguard.service.js.map

/***/ }),

/***/ "../../../../../src/app/auth/auth.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ngx_cookie_service__ = __webpack_require__("../../../../ngx-cookie-service/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__setup_service__ = __webpack_require__("../../../../../src/app/auth/setup.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



// Import RxJs required methods



var AuthService = (function () {
    // Constructor function
    // @param http_service:Http serivce
    // @param cookie_service:Cookie service 
    // @returns none
    function AuthService(http_service, cookie_service, setup_service) {
        var _this = this;
        this.http_service = http_service;
        this.cookie_service = cookie_service;
        this.setup_service = setup_service;
        // View validation
        // Verifies that the user is logged in
        // @params none
        // @return boolean
        this.viewVerification = function () {
            return localStorage.getItem('userdata') || null ? true : false;
        };
        // Log out function
        // This will handle the http pettition to log out
        // @params none
        // @returns a logout pettition
        this.logout = function () {
            localStorage.removeItem('userdata');
            return _this.http_service.post(_this.setup_service.getAPIUri() + 'auth/logout/', {});
        };
    }
    // Login function
    // This will handle the http pettiton to login on the server side
    // @param email : string - user email for auth
    // @param password : string - user password for auth
    // @returns a login pettition
    AuthService.prototype.login = function (email, password) {
        return this.http_service.post(this.setup_service.getAPIUri() + 'auth/login/', { 'email': email, 'password': password });
    };
    return AuthService;
}());
AuthService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_ngx_cookie_service__["a" /* CookieService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ngx_cookie_service__["a" /* CookieService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_5__setup_service__["a" /* SetupService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__setup_service__["a" /* SetupService */]) === "function" && _c || Object])
], AuthService);

var _a, _b, _c;
//# sourceMappingURL=auth.service.js.map

/***/ }),

/***/ "../../../../../src/app/auth/barcode_detail.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/auth/barcode_detail.component.html":
/***/ (function(module, exports) {

module.exports = "<br>\n<br>\n<br>\n\n\n<div class=\"col-12\">\n    <div class=\"card\">\n        <div class=\"card-header\">\n            Barcode : \n        </div>\n\n        <div class=\"card-body card-daterange\" style=\"padding: 1.25rem;\">\n\n            <div class=\"row\">\n                <div class=\"col-6\">\n                    <strong>Current Balance:</strong> $120.00\n                </div>\n                <div class=\"col-6\">\n                    <strong>Total Value Redeemed:</strong> $15.00\n                    <br>\n                    <strong>Total Value Sold:</strong> $135.00\n                </div>\n            </div>\n\n        </div>\n    </div>\n</div>\n\n<br>\n\n<div class=\"row col-12\">\n    <div class=\"table-responsive\">\n        <table class=\"table table-striped\">\n            <thead class=\"thead-dark\">\n                <tr>\n\n                    <!-- <th>Barcode</th>\n                        <th>Total Sold</th>\n                        <th>Total Redeemed</th>\n                        <th>Balance</th> -->\n                    <th class=\"text-right\">Transaction</th>\n                    <th class=\"text-right\">Date</th>\n                    <th class=\"text-right\">Barcode</th>\n                    <th class=\"text-right\">Approved Amount</th>\n                    <th class=\"text-right\">Location</th>\n                </tr>\n            </thead>\n            <tbody>\n                <tr *ngFor=\"let curentGiftCard of giftCardData\">\n                    <td class=\"text-right\">{{curentGiftCard.trans_id}}</td>\n                    <td class=\"text-right\">{{curentGiftCard.date}}</td>\n                    <td class=\"text-right\">{{curentGiftCard.barcode}}</td>\n                    <td class=\"text-right\">\n                        <span class=\"badge\" [class.badge-success]=\"curentGiftCard.approved_quantity >= 0\" [class.badge-danger]=\"curentGiftCard.approved_quantity <= 0\">\n                            {{curentGiftCard.approved_quantity | number : '1.2-2'}}\n                        </span>\n                    </td>\n                    <td class=\"text-right\">{{curentGiftCard.location}}</td>\n                </tr>\n\n\n            </tbody>\n        </table>\n    </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/auth/barcode_detail.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DetailComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__auth_service__ = __webpack_require__("../../../../../src/app/auth/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__dashboard_main_service__ = __webpack_require__("../../../../../src/app/auth/dashboard.main.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var DetailComponent = (function () {
    function DetailComponent(router, auth_service, service, route) {
        this.router = router;
        this.auth_service = auth_service;
        this.service = service;
        this.route = route;
        this.giftCardData = [];
        this.valueSold = 0;
        this.valueRedeemed = 0;
        console.log(this.route.snapshot.params['barcode']);
    }
    // Init function
    // This will initialize the consturctor and validates login
    // @params none
    // @returns void
    DetailComponent.prototype.ngOnInit = function () {
        //console.log( "Is in dasboard" )
        this.getGiftCardBalance();
    };
    DetailComponent.prototype.getGiftCardBalance = function () {
        var _this = this;
        this.service.giftCardsTransByBarcode({
            barcode: this.route.snapshot.params['barcode'],
            business: JSON.parse(localStorage.getItem('userdata')).business_id
        })
            .map(function (res) { return res.json(); })
            .subscribe(function (response) {
            if (response.error) {
                console.log("There was an error getting the response");
            }
            else {
                console.log(response.data);
                _this.giftCardData = response.data;
            }
        });
    };
    return DetailComponent;
}());
DetailComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-dashboard',
        template: __webpack_require__("../../../../../src/app/auth/barcode_detail.component.html"),
        styles: [__webpack_require__("../../../../../src/app/auth/barcode_detail.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__auth_service__["a" /* AuthService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__dashboard_main_service__["a" /* DashboardMainService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__dashboard_main_service__["a" /* DashboardMainService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]) === "function" && _d || Object])
], DetailComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=barcode_detail.component.js.map

/***/ }),

/***/ "../../../../../src/app/auth/dashboard.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/*\n * Base structure\n */\n\n/* Move down content because we have a fixed navbar that is 3.5rem tall */\nbody {\n    padding-top: 3.5rem;\n  }\n  \n  /*\n   * Typography\n   */\n  \n  h1 {\n    padding-bottom: 9px;\n    margin-bottom: 20px;\n    border-bottom: 1px solid #eee;\n  }\n  \n  /*\n   * Sidebar\n   */\n  \n  .sidebar {\n    position: fixed;\n    top: 51px;\n    bottom: 0;\n    left: 0;\n    z-index: 1000;\n    padding: 20px 0;\n    overflow-x: hidden;\n    overflow-y: auto; /* Scrollable contents if viewport is shorter than content. */\n    border-right: 1px solid #eee;\n  }\n  \n  .sidebar .nav {\n    margin-bottom: 20px;\n  }\n  \n  .sidebar .nav-item {\n    width: 100%;\n  }\n  \n  .sidebar .nav-item + .nav-item {\n    margin-left: 0;\n  }\n  \n  .sidebar .nav-link {\n    border-radius: 0;\n  }\n  \n  /*\n   * Dashboard\n   */\n  \n  /* Placeholders */\n  .placeholders {\n    padding-bottom: 3rem;\n  }\n  \n  .placeholder img {\n    padding-top: 1.5rem;\n    padding-bottom: 1.5rem;\n  }\n\n  .card-daterange {\n    -webkit-box-flex: 1;\n    -ms-flex: 1 1 auto;\n    flex: 1 1 auto;\n    padding: 1.25rem;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/auth/dashboard.component.html":
/***/ (function(module, exports) {

module.exports = "\n<camaleon-navbar></camaleon-navbar>\n\n<main role=\"main\" class=\"container\">\n   \n    \n<!-- \n        <nav class=\"col-sm-3 col-md-2 hidden-xs-down bg-faded sidebar\">\n            <camaleon-sidebar></camaleon-sidebar>\n        </nav>\n        <main class=\"col-sm-9 offset-sm-3 col-md-10 offset-md-2 pt-3\">\n            <br>\n            <br>\n            <br>\n            <!-- Content-->\n            \n                    <router-outlet></router-outlet>\n        \n            \n        <!-- </main> -->\n       \n\n</main>"

/***/ }),

/***/ "../../../../../src/app/auth/dashboard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__auth_service__ = __webpack_require__("../../../../../src/app/auth/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DashboardComponent = (function () {
    // Constructor function
    // @param router : router service
    // @returns none
    function DashboardComponent(router, auth_service) {
        this.router = router;
        this.auth_service = auth_service;
    }
    // Init function
    // This will initialize the consturctor and validates login
    // @params none
    // @returns void
    DashboardComponent.prototype.ngOnInit = function () {
        //console.log( "Is in dasboard" )
    };
    DashboardComponent.prototype.Logout = function () {
        this.auth_service.logout();
    };
    return DashboardComponent;
}());
DashboardComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-dashboard',
        template: __webpack_require__("../../../../../src/app/auth/dashboard.component.html"),
        styles: [__webpack_require__("../../../../../src/app/auth/dashboard.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__auth_service__["a" /* AuthService */]) === "function" && _b || Object])
], DashboardComponent);

var _a, _b;
//# sourceMappingURL=dashboard.component.js.map

/***/ }),

/***/ "../../../../../src/app/auth/dashboard.main.component.html":
/***/ (function(module, exports) {

module.exports = "<br>\n<br>\n<br>\n\n\n\n<div class=\"col-12\">\n\n\n\n    <form class=\"form-inline\" #f=\"ngForm\" (ngSubmit)=\"onSubmitNgModel()\" novalidate>\n        <label class=\"sr-only\" for=\"inlineFormInputName2\">Name</label>\n        <input type=\"text\" class=\"form-control mb-2 mr-sm-2\" id=\"inlineFormInputName2\" placeholder=\"Search Gift Card Number\">\n        <my-date-range-picker style=\"padding-top: 5px;\" class=\"mb-2 mr-sm-2 pull-right\" name=\"ngModelDateRange\" [options]=\"myDateRangePickerOptions\"\n            [(ngModel)]=\"dateRange\" required></my-date-range-picker>\n\n        <!-- <button class=\"button\" type=\"submit\">Submit</button> -->\n        <!-- <p class=\"error\" *ngIf=\"!f.valid\">Date range is required!</p> -->\n\n        <button  class=\"btn btn-primary mb-2 pull-right\" (click)=\"getDate()\">Get Report</button>\n\n\n    </form>\n\n</div>\n\n<div class=\"col-12\">\n    <div class=\"card\">\n        <div class=\"card-header\">\n            Gift Cards Summary\n        </div>\n\n        <div class=\"card-body card-daterange\" style=\"padding: 1.25rem;\">\n           \n            <div class=\"row\">\n                <div class=\"col-6\">\n                    <strong>Total Value Sold:</strong> ${{valueSold| number : '1.2-2'}}\n                    <br>\n                    <strong>Outstanding Balance:</strong> ${{valueSold+valueRedeemed| number : '1.2-2'}}\n                </div>\n                <div class=\"col-6\">\n                    <strong>Total Value Redeemed:</strong> ${{valueRedeemed| number : '1.2-2'}}\n                    <br>\n                    <strong>Total Transactions:</strong> {{trans_count}}\n                </div>\n            </div>\n\n        </div>\n    </div>\n</div>\n\n<br>\n\n<div class=\"row col-12\">\n    <div class=\"table-responsive\">\n        <table class=\"table table-striped\">\n            <thead class=\"thead-dark\">\n                <tr>\n\n                    <!-- <th>Barcode</th>\n                    <th>Total Sold</th>\n                    <th>Total Redeemed</th>\n                    <th>Balance</th> -->\n                    <th class=\"text-right\">Transaction</th>\n                    <th class=\"text-right\">Date</th>\n                    <th class=\"text-right\">Barcode</th>\n                    <th class=\"text-right\">Approved Amount</th>\n                    <th class=\"text-right\">Location</th>\n                </tr>\n            </thead>\n            <tbody>\n                <tr *ngFor=\"let curentGiftCard of GiftCardData\">\n                    <td class=\"text-right\">{{curentGiftCard.trans_id}}</td>\n                    <td class=\"text-right\">{{curentGiftCard.date}}</td>\n                    <td class=\"text-right\"><a routerLink=\"detail/{{curentGiftCard.barcode}}\">{{curentGiftCard.barcode}}</a></td>\n                    <td class=\"text-right\">\n                        <span class= \"badge\"\n                            [class.badge-success]=\"curentGiftCard.approved_quantity >= 0\"\n                            [class.badge-danger]=\"curentGiftCard.approved_quantity <= 0\"\n                         >\n                            {{curentGiftCard.approved_quantity | number : '1.2-2'}}\n                        </span></td>\n                    <td class=\"text-right\">{{curentGiftCard.location}}</td>\n                </tr>\n                \n\n            </tbody>\n        </table>\n    </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/auth/dashboard.main.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardMainComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__auth_service__ = __webpack_require__("../../../../../src/app/auth/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__dashboard_main_service__ = __webpack_require__("../../../../../src/app/auth/dashboard.main.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var DashboardMainComponent = (function () {
    // Constructor function
    // @param auth_service : authentication service
    // @param router : router service
    // @returns none
    function DashboardMainComponent(auth_service, router, service) {
        this.auth_service = auth_service;
        this.router = router;
        this.service = service;
        this.myDatePickerOptions = {
            // other options...
            dateFormat: 'yyyy-dd-mm',
        };
        this.today = new Date();
        this.lastDayOfMonth = new Date(this.today.getFullYear(), this.today.getMonth() + 1, 0);
        this.GiftCardData = [];
        this.dateRange = { beginDate: { year: this.today.getFullYear(), month: this.today.getMonth() + 1, day: 1 },
            endDate: { year: this.today.getFullYear(), month: this.today.getMonth() + 1, day: this.lastDayOfMonth.getDate() } };
        this.currentGiftCardBalance = 0.0;
        this.valueSold = 0;
        this.valueRedeemed = 0;
        this.trans_count = 0;
    }
    // Init function
    // This will initialize the consturctor and validates login
    // @params none
    // @returns void
    DashboardMainComponent.prototype.ngOnInit = function () {
        console.log(JSON.parse(localStorage.getItem('userdata')));
        //this.getGiftCardBalance()
        //this.getTransByDateRange()
        console.log("month");
        console.log(this.lastDayOfMonth.getDate());
        var beginDate = this.dateRange['beginDate']['year'] + '-' + this.dateRange['beginDate']['month'] + '-' + this.dateRange['beginDate']['day'] + '+00:00:01';
        var endDate = this.dateRange['endDate']['year'] + '-' + this.dateRange['endDate']['month'] + '-' + this.dateRange['endDate']['day'] + '+23:59:59';
        console.log(beginDate + ' ooo ' + endDate);
        this.getTransByDateRange(beginDate, endDate);
    };
    DashboardMainComponent.prototype.getDate = function () {
        console.log(this.dateRange);
        var beginDate = this.dateRange['beginDate']['year'] + '-' + this.dateRange['beginDate']['month'] + '-' + this.dateRange['beginDate']['day'] + '+00:00:01';
        var endDate = this.dateRange['endDate']['year'] + '-' + this.dateRange['endDate']['month'] + '-' + this.dateRange['endDate']['day'] + '+23:59:59';
        console.log(beginDate + ' ooo ' + endDate);
        this.getTransByDateRange(beginDate, endDate);
        //this.getTransByDateRange('2017-12-03+21:00:59','2018-12-07+21:00:59');
    };
    DashboardMainComponent.prototype.getGiftCardBalance = function () {
        var _this = this;
        this.service.getBalance({ barcode: 51000, business: 2 })
            .map(function (res) { return res.json(); })
            .subscribe(function (response) {
            if (response.error) {
                console.log("There was an error getting the response");
            }
            else {
                console.log(response.data);
                _this.currentGiftCardBalance = response.data;
            }
        });
    };
    DashboardMainComponent.prototype.getTransByDateRange = function (startDate, endDate) {
        var _this = this;
        //var userdata = JSON.parse(req.cookies['userdata']);
        this.service.giftCardsTransByDateRange({ start_date: startDate,
            end_date: endDate,
            loc: 0,
            bussines: JSON.parse(localStorage.getItem('userdata')).business_id
        })
            .map(function (res) { return res.json(); })
            .subscribe(function (response) {
            if (response.error) {
                console.log("There was an error getting the response");
            }
            else {
                _this.GiftCardData = response.data;
                for (var i = 0; i < _this.GiftCardData.length; i++) {
                    if (_this.GiftCardData[i].approved_quantity < 0) {
                        _this.valueRedeemed += _this.GiftCardData[i].approved_quantity;
                    }
                    else {
                        _this.valueSold += _this.GiftCardData[i].approved_quantity;
                    }
                }
                _this.trans_count = _this.GiftCardData.length;
            }
        });
    };
    return DashboardMainComponent;
}());
DashboardMainComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-dashboard-main',
        template: __webpack_require__("../../../../../src/app/auth/dashboard.main.component.html")
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__dashboard_main_service__["a" /* DashboardMainService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__dashboard_main_service__["a" /* DashboardMainService */]) === "function" && _c || Object])
], DashboardMainComponent);

var _a, _b, _c;
//# sourceMappingURL=dashboard.main.component.js.map

/***/ }),

/***/ "../../../../../src/app/auth/dashboard.main.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardMainService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__setup_service__ = __webpack_require__("../../../../../src/app/auth/setup.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ngx_cookie_service__ = __webpack_require__("../../../../ngx-cookie-service/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var DashboardMainService = (function () {
    function DashboardMainService(http_service, cookie_service, setup_service) {
        this.http_service = http_service;
        this.cookie_service = cookie_service;
        this.setup_service = setup_service;
    }
    DashboardMainService.prototype.getBalance = function (data) {
        var formated_request = this.setup_service.getAPIUri() + "reports/balance?barcode=" + data.barcode + "&business=" + data.business;
        //console.log(formated_request)
        return this.http_service.get(formated_request);
    };
    DashboardMainService.prototype.giftCardsTransByDateRange = function (data) {
        var formated_request = this.setup_service.getAPIUri() + "reports/transbydaterange?start_date=" + data.start_date + "&end_date=" + data.end_date + "&loc=" + data.loc + "&bussines=" + data.bussines;
        //console.log(formated_request)
        return this.http_service.get(formated_request);
    };
    DashboardMainService.prototype.giftCardsTransByBarcode = function (data) {
        var formated_request = this.setup_service.getAPIUri() + "reports/giftcardstransbybarcode?barcode=" + data.barcode + "&business=" + data.business;
        console.log(formated_request);
        return this.http_service.get(formated_request);
    };
    return DashboardMainService;
}());
DashboardMainService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_5_ngx_cookie_service__["a" /* CookieService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5_ngx_cookie_service__["a" /* CookieService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__setup_service__["a" /* SetupService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__setup_service__["a" /* SetupService */]) === "function" && _c || Object])
], DashboardMainService);

var _a, _b, _c;
//# sourceMappingURL=dashboard.main.service.js.map

/***/ }),

/***/ "../../../../../src/app/auth/login.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "body {\n    padding-top: 40px;\n    padding-bottom: 40px;\n    background-color: #eee;\n}\n.container {\n    margin-top: 70px;\n}\n.form-signin {\n    max-width: 330px;\n    padding: 15px;\n    margin: 0 auto;\n}\n.form-signin .form-signin-heading,\n.form-signin .checkbox {\n    margin-bottom: 10px;\n}\n.form-signin .checkbox {\n    font-weight: normal;\n}\n.form-signin .form-control {\n    position: relative;\n    height: auto;\n    box-sizing: border-box;\n    padding: 10px;\n    font-size: 16px;\n}\n.form-signin .form-control:focus {\n    z-index: 2;\n}\n.form-signin input[type=\"email\"] {\n    margin-bottom: -1px;\n    border-bottom-right-radius: 0;\n    border-bottom-left-radius: 0;\n}\n.form-signin input[type=\"password\"] {\n    margin-bottom: 10px;\n    border-top-left-radius: 0;\n    border-top-right-radius: 0;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/auth/login.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n\n    <form #log=\"ngForm\" class=\"form-signin\" (ngSubmit)=\"login(log)\">\n        <h2 class=\"form-signin-heading\">Camaleon Reports Control Panel</h2>\n        <br>\n        <label for=\"inputEmail\" class=\"sr-only\">Email address</label>\n        <input type=\"email\" id=\"inputEmail\" class=\"form-control\" placeholder=\"Email address\" name=\"email\" required autofocus ngModel>\n        <label for=\"inputPassword\" class=\"sr-only\">Password</label>\n        <input type=\"password\" id=\"inputPassword\" class=\"form-control\" placeholder=\"Password\" name=\"password\" required ngModel>\n        <br>\n        <button class=\"btn btn-lg btn-primary btn-block\" type=\"submit\">Sign in</button>\n    </form>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/auth/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__auth_service__ = __webpack_require__("../../../../../src/app/auth/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LoginComponent = (function () {
    // Constructor function
    // @param authservice: authentication service
    // @param router : router service
    // @returns none
    function LoginComponent(authservice, router) {
        var _this = this;
        this.authservice = authservice;
        this.router = router;
        // Login function
        // This uses the authentication service to validate the user and password
        // @params none
        // @returns void
        this.login = function (log) {
            if (log.valid) {
                _this.authservice.login(log.value.email, log.value.password)
                    .map(function (res) { return res.json(); })
                    .subscribe(function (response) {
                    if (!response.error) {
                        console.log("Valid credentials");
                        _this.router.navigateByUrl('/');
                        localStorage.setItem('userdata', JSON.stringify(response.user_data));
                    }
                    else {
                        console.log("Not valid login", response.message);
                        alert(response.message);
                    }
                });
            }
        };
    }
    return LoginComponent;
}());
LoginComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-login',
        template: __webpack_require__("../../../../../src/app/auth/login.component.html"),
        styles: [__webpack_require__("../../../../../src/app/auth/login.component.css")]
    })
    // Login component is the main login view
    ,
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object])
], LoginComponent);

var _a, _b;
//# sourceMappingURL=login.component.js.map

/***/ }),

/***/ "../../../../../src/app/auth/setup.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SetupService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_catch__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

// Import RxJs required methods


var SetupService = (function () {
    // Constructor function
    // @returns none
    function SetupService() {
        this.DEVELOPMENT_MODE = false;
        this.dev_api_uri = "http://localhost:4123/api/";
        this.prod_api_uri = "/api/";
    }
    SetupService.prototype.getAPIUri = function () {
        return this.DEVELOPMENT_MODE ? this.dev_api_uri : this.prod_api_uri;
    };
    return SetupService;
}());
SetupService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [])
], SetupService);

//# sourceMappingURL=setup.service.js.map

/***/ }),

/***/ "../../../../../src/app/menu/navbar.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-toggleable-md navbar-inverse fixed-top bg-inverse\">\n    <button class=\"navbar-toggler navbar-toggler-right hidden-lg-up\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarsExampleDefault\"\n        aria-controls=\"navbarsExampleDefault\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n        <span class=\"navbar-toggler-icon\"></span>\n    </button>\n    <a class=\"navbar-brand\" href=\"#\">Camaleon GifcardCloud</a>\n\n    <div class=\"collapse navbar-collapse\" id=\"navbarsExampleDefault\">\n        <ul class=\"navbar-nav mr-auto\">\n            <li class=\"nav-item active\">\n                <a class=\"nav-link\" href=\"#\">Home\n                    <span class=\"sr-only\">(current)</span>\n                </a>\n            </li>\n            <li class=\"nav-item\">\n                <a class=\"nav-link\" href=\"#\">Settings</a>\n            </li>\n            <li class=\"nav-item\">\n                <a class=\"nav-link\" href=\"#\">Profile</a>\n            </li>\n            <li class=\"nav-item\">\n                <a class=\"nav-link\" href=\"#\">Help</a>\n            </li>\n        </ul>\n\n\n        <button  class=\"btn btn-danger\"  (click)=\"Logout()\">Logout</button>\n\n    </div>\n</nav>"

/***/ }),

/***/ "../../../../../src/app/menu/navbar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavBarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__auth_auth_service__ = __webpack_require__("../../../../../src/app/auth/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NavBarComponent = (function () {
    // Constructor function
    // @param auth_service : authentication service
    // @param router : router service
    // @returns none
    function NavBarComponent(auth_service, router) {
        var _this = this;
        this.auth_service = auth_service;
        this.router = router;
        // Log out funtion
        // Will logout and clean the cookie on the serve side of the app
        // @params none
        // @returns none
        this.Logout = function () {
            _this.auth_service.logout()
                .map(function (res) { return res.json(); })
                .subscribe(function (response) {
                _this.router.navigateByUrl('/login');
                console.log("Log out succesful");
            });
        };
    }
    return NavBarComponent;
}());
NavBarComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'camaleon-navbar',
        template: __webpack_require__("../../../../../src/app/menu/navbar.component.html")
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__auth_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__auth_auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object])
], NavBarComponent);

var _a, _b;
//# sourceMappingURL=navbar.component.js.map

/***/ }),

/***/ "../../../../../src/app/menu/sidebar.component.html":
/***/ (function(module, exports) {

module.exports = "<ul class=\"nav nav-pills flex-column\">\n    <li class=\"nav-item\">\n        <a class=\"nav-link active\" href=\"#\">Overview\n            <span class=\"sr-only\">(current)</span>\n        </a>\n    </li>\n    <li class=\"nav-item\">\n        <a class=\"nav-link\" href=\"#\">Reports</a>\n    </li>\n    <li class=\"nav-item\">\n        <a class=\"nav-link\" href=\"#\">Analytics</a>\n    </li>\n    <li class=\"nav-item\">\n        <a class=\"nav-link\" href=\"#\">Export</a>\n    </li>\n</ul>\n\n<ul class=\"nav nav-pills flex-column\">\n    <li class=\"nav-item\">\n        <a class=\"nav-link\" href=\"#\">Nav item</a>\n    </li>\n    <li class=\"nav-item\">\n        <a class=\"nav-link\" href=\"#\">Nav item again</a>\n    </li>\n    <li class=\"nav-item\">\n        <a class=\"nav-link\" href=\"#\">One more nav</a>\n    </li>\n    <li class=\"nav-item\">\n        <a class=\"nav-link\" href=\"#\">Another nav item</a>\n    </li>\n</ul>\n\n<ul class=\"nav nav-pills flex-column\">\n    <li class=\"nav-item\">\n        <a class=\"nav-link\" href=\"#\">Nav item again</a>\n    </li>\n    <li class=\"nav-item\">\n        <a class=\"nav-link\" href=\"#\">One more nav</a>\n    </li>\n    <li class=\"nav-item\">\n        <a class=\"nav-link\" href=\"#\">Another nav item</a>\n    </li>\n</ul>"

/***/ }),

/***/ "../../../../../src/app/menu/sidebar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SideBarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__auth_auth_service__ = __webpack_require__("../../../../../src/app/auth/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SideBarComponent = (function () {
    // Constructor function
    // @param auth_service : authentication service
    // @param route : routing service
    function SideBarComponent(auth_service, router) {
        this.auth_service = auth_service;
        this.router = router;
    }
    return SideBarComponent;
}());
SideBarComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'camaleon-sidebar',
        template: __webpack_require__("../../../../../src/app/menu/sidebar.component.html")
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__auth_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__auth_auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object])
], SideBarComponent);

var _a, _b;
//# sourceMappingURL=sidebar.component.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_23" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map