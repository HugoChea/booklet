import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    //component: BookComponent
  },
  {
    path: ':id',
    //component: BookComponent
  },
  {
    path: ':id/characters',
    //component: BookComponent
  },
  {
    path: ':id/characters/:character',
    //component: BookComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BookRoutingModule { }
