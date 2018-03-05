import {PreloadAllModules, RouterModule, Routes} from "@angular/router";
import {ModuleWithProviders} from "@angular/core";
import {EspecificoTestWrappingComponent} from './especifico-test-wrapping.component';




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

  {
    path:'',component:EspecificoTestWrappingComponent

  }

];

//,{path: 'salesforce/authorize/', loadChildren:'app/modules/login-oauth/login-oauth.module#LoginOauthModule' }

export const RoutesModule:ModuleWithProviders = RouterModule.forChild(routes);

