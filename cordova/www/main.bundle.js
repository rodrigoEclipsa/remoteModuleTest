webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
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
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<div fxFlex=\"column\" fxLayoutGap=\"6px\">\n\n  <div fxLayout=\"row\">\n\n    <button\n      type=\"button\"\n      (click)=\"test()\"\n      nglButton=\"neutral\"\n    >\n      load module\n    </button>\n\n    <input [(ngModel)]=\"pathModule\" style=\"width: 100%\">\n  </div>\n\n  <div fxLayout=\"row\">\n    <button\n      type=\"button\"\n      (click)=\"listDir_clickHandler(InputPath.value)\"\n      nglButton=\"neutral\"\n    >\n      listDir\n    </button>\n\n    <input #InputPath>\n\n</div>\n\n\n  <div #container>\n\n  </div>\n\n</div>\n\n\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = /** @class */ (function () {
    function AppComponent(router, compiler, viewref, loader, inj) {
        this.router = router;
        this.compiler = compiler;
        this.viewref = viewref;
        this.loader = loader;
        this.inj = inj;
        this.pathModule = '../assets/modules/especifico-test/especifico-test.module#EspecificoTestModule';
    }
    AppComponent.prototype.openWebApp = function () {
        var _this = this;
        var routerSet = [
            {
                path: 'especifico-test',
                // loadChildren:'../assets/modules/especifico-test-wrapping/especifico-test-wrapping.module#EspecificoTestWrappingModule'
                loadChildren: this.pathModule
            }
        ];
        this.router.resetConfig(routerSet);
        /*
         this.moduleNode.modulePath = '../modules/especifico-test-wrapping/especifico-test-wrapping.module#EspecificoTestWrappingModule';
         this.moduleNode.componentName = 'EspecificoTestWrappingComponent';
         */
        var componentName = 'EspecificoTestComponent';
        this.loader.load(this.pathModule) // load the module and its components
            .then(function (modFac) {
            // the missing step, need to use Compiler to resolve the module's embedded components
            _this.compiler.compileModuleAndAllComponentsAsync(modFac.moduleType)
                .then(function (factory) {
                return factory.componentFactories.find(function (x) { return x.componentType.name === componentName; });
            })
                .then(function (cmpFactory) {
                // need to instantiate the Module so we can use it as the provider for the new component
                var modRef = modFac.create(_this.viewref.parentInjector);
                _this.cmpRef = _this.viewref.createComponent(cmpFactory, 0, modRef.injector);
                // done, now Module and main Component are known to NG2
            });
        });
    };
    AppComponent.prototype.test = function () {
        this.openWebApp();
        //navigator.notification.alert(message, alertCallback, [title], [buttonName])
        // alert('holaa')
        // this.router.navigate(['especifico-test']);
        /*
            this.loader.load('app/modules/especifico-test-wrapping/especifico-test-wrapping.module#EspecificoTestWrappingModule')
          //  this.loader.load('modules/especifico-test/bundles/EspecificoTestModule')
                .then((factory:NgModuleFactory<any>) =>
                {
        
                  console.log(factory.moduleType);
                  const entryComponent = (<any>factory.moduleType).entry;
                  const moduleRef:NgModuleRef<any> = factory.create(this.inj);
        
                  const compFactory = moduleRef.componentFactoryResolver.resolveComponentFactory(entryComponent);
                  this.container.createComponent(compFactory);
        
                });
        */
    };
    AppComponent.prototype.listDir_clickHandler = function (path) {
        console.log(cordova['file'].applicationDirectory + path);
        this.listDir(cordova['file'].applicationDirectory + path);
    };
    AppComponent.prototype.ngOnInit = function () {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    };
    AppComponent.prototype.onDeviceReady = function () {
        window['requestFileSystem'](LocalFileSystem.PERSISTENT, 0, onFileSystemSuccess, fail);
        function onFileSystemSuccess(fileSystem) {
            console.log(fileSystem.name);
            console.log(fileSystem.root.name);
        }
        function fail(error) {
            console.log(error.code);
        }
        window['sqlitePlugin'].selfTest(function () {
            alert('SELF test OK');
            // console.log('SELF test OK');
        });
    };
    AppComponent.prototype.listDir = function (path) {
        window['resolveLocalFileSystemURL'](path, function (fileSystem) {
            var reader = fileSystem.createReader();
            reader.readEntries(function (entries) {
                console.log(entries);
            }, function (err) {
                console.log(err);
            });
        }, function (err) {
            console.log(err);
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* ViewChild */])('container', { read: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* ViewContainerRef */] }),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* ViewContainerRef */])
    ], AppComponent.prototype, "container", void 0);
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["l" /* Compiler */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* ViewContainerRef */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* SystemJsNgModuleLoader */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Injector */]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng_lightning__ = __webpack_require__("../../../../ng-lightning/ng-lightning.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_flex_layout__ = __webpack_require__("../../../flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_routes__ = __webpack_require__("../../../../../src/app/app.routes.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_3_ng_lightning__["a" /* NglModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_4__angular_flex_layout__["a" /* FlexLayoutModule */],
                __WEBPACK_IMPORTED_MODULE_5__app_routes__["a" /* RoutesModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_forms__["a" /* FormsModule */]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_1__angular_core__["_5" /* SystemJsNgModuleLoader */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/app.routes.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export routes */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RoutesModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/esm5/router.js");

/**
 {
  path:'authenticate', outlet:'main', component:ProxyRouteComponent,
  children:
    [
      {path:'', loadChildren:'app/modules/login/login.module#LoginModule'}
      ,{path:'**', redirectTo:'/(main:404)'}
    ]
}
 router.navigate(['',{outlets: {main: ['consola-nav']}}],{ replaceUrl: true });
 * @type {({path:string; outlet:string; component:ProxyRouteComponent; children:({path:string; loadChildren:string} |
 *     {path:string; redirectTo:string})[]} | {path:string; outlet:string; component:ProxyRouteComponent;
 *     children:{path:string; loadChildren:string}[]} | {path:string; outlet:string; component:NotFoundComponent} |
 *     {path:string; redirectTo:string})[]}
 */
var routes = [];
//,{path: 'salesforce/authorize/', loadChildren:'app/modules/login-oauth/login-oauth.module#LoginOauthModule' }
var RoutesModule = __WEBPACK_IMPORTED_MODULE_0__angular_router__["b" /* RouterModule */].forRoot(routes);


/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
var environment = {
    production: true
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map