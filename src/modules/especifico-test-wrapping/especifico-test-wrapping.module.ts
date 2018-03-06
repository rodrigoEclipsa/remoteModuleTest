import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EspecificoTestWrappingComponent } from './especifico-test-wrapping.component';

import {RoutesModule} from './especifico-test-wrapping.routes';


@NgModule({
  imports: [
    CommonModule,

    RoutesModule
  ],
  declarations: [EspecificoTestWrappingComponent],
  bootstrap:[EspecificoTestWrappingComponent],
  entryComponents: [EspecificoTestWrappingComponent],

})
export class EspecificoTestWrappingModule
{

  static entry = EspecificoTestWrappingComponent;
}
