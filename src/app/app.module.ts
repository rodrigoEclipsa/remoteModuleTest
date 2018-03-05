import { BrowserModule } from '@angular/platform-browser';
import {NgModule, SystemJsNgModuleLoader} from '@angular/core';

import { AppComponent } from './app.component';
import {NglModule} from 'ng-lightning';
import {FlexLayoutModule} from '@angular/flex-layout';
import {RoutesModule} from './app.routes';
import {FormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NglModule.forRoot(),
    FlexLayoutModule,
    RoutesModule,
    FormsModule

  ],

  providers: [SystemJsNgModuleLoader],
  bootstrap: [AppComponent]
})
export class AppModule { }
