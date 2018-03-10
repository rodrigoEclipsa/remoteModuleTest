import { Component, NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NglModule } from 'ng-lightning';
import { BrowserModule } from '@angular/platform-browser';

var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent.prototype.ngOnInit = function () {
    };
    return AppComponent;
}());
AppComponent.decorators = [
    { type: Component, args: [{
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
    { type: Component, args: [{
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
var RoutesModule = RouterModule.forChild(routes);
var EspecificoTestModule = /** @class */ (function () {
    function EspecificoTestModule() {
    }
    return EspecificoTestModule;
}());
EspecificoTestModule.entry = EspecificoTestComponent;
EspecificoTestModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule,
                    NglModule,
                    FlexLayoutModule,
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
    { type: NgModule, args: [{
                declarations: [
                    AppComponent
                ],
                imports: [
                    BrowserModule,
                    NglModule.forRoot(),
                    FlexLayoutModule,
                    EspecificoTestModule
                ],
                providers: [],
                exports: [EspecificoTestModule],
                bootstrap: [AppComponent],
                schemas: [CUSTOM_ELEMENTS_SCHEMA],
            },] },
];
AppModule.ctorParameters = function () { return []; };

export { AppModule, AppComponent as ɵa, EspecificoTestComponent as ɵe, EspecificoTestModule as ɵb, RoutesModule as ɵd, routes as ɵc };
//# sourceMappingURL=especificoTest.js.map
