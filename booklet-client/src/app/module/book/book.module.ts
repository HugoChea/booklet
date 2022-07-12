import { NgModule } from '@angular/core';

import { BookRoutingModule } from './book-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [],
  imports: [
    SharedModule,
    BookRoutingModule
  ]
})
export class BookModule { }
