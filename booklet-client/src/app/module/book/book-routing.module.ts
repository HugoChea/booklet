import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '@module/home/home/home.component';
import { BookComponent } from './book/book.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NewBookComponent } from './new-book/new-book.component';

const routes: Routes = [
  {
    path: 'book',
    component: BookComponent
  },
  {
    path: 'book/new',
    component: NewBookComponent
  },
  {
    path: 'book/:id/dashboard',
    component: DashboardComponent
  },
  // {
  //   path: ':id/characters',
  //   //component: BookComponent
  // },
  // {
  //   path: ':id/characters/:character',
  //   //component: BookComponent
  // },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BookRoutingModule { }
