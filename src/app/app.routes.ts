import {PreloadAllModules, RouterModule, Routes} from "@angular/router";
import {ModuleWithProviders} from "@angular/core";




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
export const routes:Routes = [
/*
  {
    path:'especifico-test',
    loadChildren:'app/modules/especifico-test-wrapping/especifico-test-wrapping.module#EspecificoTestWrappingModule',

  }
*/
/*
  {
    path:'especifico-test',
    loadChildren:'modules/especifico-test/bundles/EspecificoTestModule',

  }
*/
];

//,{path: 'salesforce/authorize/', loadChildren:'app/modules/login-oauth/login-oauth.module#LoginOauthModule' }

export const RoutesModule:ModuleWithProviders = RouterModule.forRoot(routes);

