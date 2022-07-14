import { NgModule } from '@angular/core';

import { BookRoutingModule } from './book-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { BookComponent } from './book/book.component';


@NgModule({
  declarations: [
    BookComponent
  ],
  imports: [
    SharedModule,
    BookRoutingModule
  ]
})
export class BookModule { }
