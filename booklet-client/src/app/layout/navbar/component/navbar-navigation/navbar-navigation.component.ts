import { Component, OnInit } from '@angular/core';
import { Book } from '@core/models/book/book';
import { selectedBook } from '@core/store/selectors/books.selectors';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-navbar-navigation',
  templateUrl: './navbar-navigation.component.html',
  styleUrls: ['./navbar-navigation.component.scss']
})
export class NavbarNavigationComponent implements OnInit {

  book?: Book;

  books$ = this.store.select(selectedBook);

  constructor(
    private store: Store,
  ) { }

  ngOnInit(): void {
    this.books$.subscribe({
      next : (res) => {
        this.book = res;
      }
    })
  }

}
