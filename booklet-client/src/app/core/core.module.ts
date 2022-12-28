import { NgModule, Optional, SkipSelf } from '@angular/core';
import { throwIfAlreadyLoaded } from './guards/module-import.guard';

@NgModule({
  declarations: [],
  imports: [
  ]
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    if(parentModule){
      throwIfAlreadyLoaded('CoreModule');
    }
  }
}
