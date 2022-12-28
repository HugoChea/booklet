import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Book } from '@core/models/book/book';
import { BookService } from '@core/services/book.service';
import { TokenStorageService } from '@core/services/token-storage.service';
import { Store } from '@ngrx/store';

import { clearSelectedBook, selectBook } from '@core/store/actions/books.actions';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss']
})
export class BookComponent implements OnInit {

  bookList: Book[] = [];

  constructor(
    private bookService: BookService,
    private tokenStorage: TokenStorageService,
    private router: Router,
    private store: Store
  ) {
  }

  /**
   * Get all book created by users to choose from
   */
  ngOnInit(): void {
    this.store.dispatch(clearSelectedBook());
    const userId: string | undefined = this.tokenStorage.getUser()?.id;
    if (userId) {
      this.bookService.getListBookByUser(userId).subscribe({
        next: (res) => {
          this.bookList = res;
        },
        error: (error) => {
          console.log(error);
        }
      });
    }
  }

  /**
   * Redirect to selected book dashboard
   * Perform action dispatched to store by saving selected book for further api calls
   * @param book 
   */
  toDashboard(book: Book): void {
    this.store.dispatch(selectBook({ book: book }));
    this.router.navigate(['/app/book', book._id, 'dashboard']);
  }

}
