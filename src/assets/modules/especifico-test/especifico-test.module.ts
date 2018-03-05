import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EspecificoTestComponent } from './especifico-test.component';
import {FlexLayoutModule} from '@angular/flex-layout';
import {NglModule} from 'ng-lightning';
import {RoutesModule} from "./especifico-test.routes";


@NgModule({
  imports: [
    CommonModule,
    NglModule,
    FlexLayoutModule,
    RoutesModule
  ],
  declarations: [EspecificoTestComponent],
  bootstrap: [EspecificoTestComponent],
  exports:[EspecificoTestComponent],
  entryComponents: [EspecificoTestComponent]
})
export class EspecificoTestModule
{

  static entry = EspecificoTestComponent;
}
