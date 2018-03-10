(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/router'), require('@angular/common'), require('@angular/flex-layout'), require('ng-lightning'), require('@angular/platform-browser')) :
	typeof define === 'function' && define.amd ? define(['exports', '@angular/core', '@angular/router', '@angular/common', '@angular/flex-layout', 'ng-lightning', '@angular/platform-browser'], factory) :
	(factory((global.especificoTest = {}),global.ng.core,global.ng.router,global.ng.common,global.ng['flex-layout'],global.ngLightning,global.ng.platformBrowser));
}(this, (function (exports,core,router,common,flexLayout,ngLightning,platformBrowser) { 'use strict';

var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent.prototype.ngOnInit = function () {
    };
    return AppComponent;
}());
AppComponent.decorators = [
    { type: core.Component, args: [{
                selector: 'app-root',
                template: "<!--The content below is only a placeholder and can be replaced.-->\n<div>\n <app-especifico-test></app-especifico-test>\n</div>\n",
                styles: [""]
            },] },
];
AppComponent.ctorParameters = function () { return []; };
var EspecificoTestComponent = /** @class */ (function () {
    function EspecificoTestComponent() {
        this.title = 'esto es un modulo';
        this.count = 0;
    }
    EspecificoTestComponent.prototype.ngOnInit = function () {
    };
    EspecificoTestComponent.prototype.test = function () {
        this.count++;
    };
    return EspecificoTestComponent;
}());
EspecificoTestComponent.decorators = [
    { type: core.Component, args: [{
                selector: 'app-especifico-test',
                template: "<div fxLayout=\"row\" fxLayoutGap=\"20px\">\n  <button\n    type=\"button\"\n    (click)=\"test()\"\n    nglButton=\"neutral\"\n  >Hola soy ngl\n  </button>\n  <div>{{count}}</div>\n</div>\n",
                styles: [""]
            },] },
];
EspecificoTestComponent.ctorParameters = function () { return []; };
var routes = [
    {
        path: '', component: EspecificoTestComponent
    }
];
var RoutesModule = router.RouterModule.forChild(routes);
var EspecificoTestModule = /** @class */ (function () {
    function EspecificoTestModule() {
    }
    return EspecificoTestModule;
}());
EspecificoTestModule.entry = EspecificoTestComponent;
EspecificoTestModule.decorators = [
    { type: core.NgModule, args: [{
                imports: [
                    common.CommonModule,
                    ngLightning.NglModule,
                    flexLayout.FlexLayoutModule,
                    RoutesModule
                ],
                declarations: [EspecificoTestComponent],
                bootstrap: [EspecificoTestComponent],
                exports: [EspecificoTestComponent],
                entryComponents: [EspecificoTestComponent],
            },] },
];
EspecificoTestModule.ctorParameters = function () { return []; };
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule.decorators = [
    { type: core.NgModule, args: [{
                declarations: [
                    AppComponent
                ],
                imports: [
                    platformBrowser.BrowserModule,
                    ngLightning.NglModule.forRoot(),
                    flexLayout.FlexLayoutModule,
                    EspecificoTestModule
                ],
                providers: [],
                exports: [EspecificoTestModule],
                bootstrap: [AppComponent],
                schemas: [core.CUSTOM_ELEMENTS_SCHEMA],
            },] },
];
AppModule.ctorParameters = function () { return []; };

exports.AppModule = AppModule;
exports.ɵa = AppComponent;
exports.ɵe = EspecificoTestComponent;
exports.ɵb = EspecificoTestModule;
exports.ɵd = RoutesModule;
exports.ɵc = routes;

Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=especificoTest.umd.js.map
