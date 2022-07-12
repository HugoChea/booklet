import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: '',
    //component: AuthLayoutComponent,
    children: [
      {
        path: 'home',
        loadChildren: () =>
          import('@module/home/home.module').then(m => m.HomeModule)
      },
      {
        path: 'auth',
        loadChildren: () =>
          import('@module/auth/auth.module').then(m => m.AuthModule)
      },
      {
        path: 'book',
        loadChildren: () =>
          import('@module/book/book.module').then(m => m.BookModule)
      },
    ]
  },
  { path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
