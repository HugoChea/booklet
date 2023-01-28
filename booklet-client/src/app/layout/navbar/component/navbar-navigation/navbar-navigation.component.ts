import { Component } from '@angular/core';
import { selectedBook } from '@core/store/selectors/books.selectors';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-navbar-navigation',
  templateUrl: './navbar-navigation.component.html',
  styleUrls: ['./navbar-navigation.component.scss']
})
export class NavbarNavigationComponent {

  books$ = this.store.select(selectedBook);

  constructor(
    private store: Store,
  ) { }

}
