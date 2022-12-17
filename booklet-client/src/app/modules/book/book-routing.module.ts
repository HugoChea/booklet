import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
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
    path: 'book/:bookId/dashboard',
    component: DashboardComponent
  },
  {
    path: 'book/:bookId/character',
    loadChildren: () =>
      import('@module/character/character.module').then(m => m.CharacterModule)
  },
  {
    path: 'book/:bookId/chapter',
    loadChildren: () =>
      import('@module/chapter/chapter.module').then(m => m.ChapterModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BookRoutingModule { }
