import { Component, NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NglModule } from 'ng-lightning';
import { BrowserModule } from '@angular/platform-browser';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class AppComponent {
    constructor() {
    }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
}
AppComponent.decorators = [
    { type: Component, args: [{
                selector: 'app-root',
                template: `<!--The content below is only a placeholder and can be replaced.-->
<div>
 <app-especifico-test></app-especifico-test>
</div>
`,
                styles: [``]
            },] },
];
/** @nocollapse */
AppComponent.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class EspecificoTestComponent {
    constructor() {
        this.title = 'esto es un modulo';
        this.count = 0;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
    /**
     * @return {?}
     */
    test() {
        //navigator.notification.alert(message, alertCallback, [title], [buttonName])
        this.count++;
    }
}
EspecificoTestComponent.decorators = [
    { type: Component, args: [{
                selector: 'app-especifico-test',
                template: `<div fxLayout="row" fxLayoutGap="20px">
  <button
    type="button"
    (click)="test()"
    nglButton="neutral"
  >Hola soy ngl
  </button>
  <div>{{count}}</div>
</div>
`,
                styles: [``]
            },] },
];
/** @nocollapse */
EspecificoTestComponent.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
const routes = [
    {
        path: '', component: EspecificoTestComponent
    }
];
//,{path: 'salesforce/authorize/', loadChildren:'app/modules/login-oauth/login-oauth.module#LoginOauthModule' }
const RoutesModule = RouterModule.forChild(routes);

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class EspecificoTestModule {
}
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
/** @nocollapse */
EspecificoTestModule.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class AppModule {
}
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
/** @nocollapse */
AppModule.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * Generated bundle index. Do not edit.
 */

export { AppModule, AppComponent as ɵa, EspecificoTestComponent as ɵe, EspecificoTestModule as ɵb, RoutesModule as ɵd, routes as ɵc };
//# sourceMappingURL=especificoTest.js.map
