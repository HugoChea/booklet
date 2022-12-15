import { NgModule } from '@angular/core';

import { BookRoutingModule } from './book-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { BookComponent } from './book/book.component';
import { NewBookComponent } from './new-book/new-book.component';
import { DashboardComponent } from './dashboard/dashboard.component';


@NgModule({
  declarations: [
    BookComponent,
    NewBookComponent,
    DashboardComponent
  ],
  imports: [
    SharedModule,
    BookRoutingModule,
  ]
})
export class BookModule { }
