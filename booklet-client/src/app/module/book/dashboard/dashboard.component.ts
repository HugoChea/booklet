import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Book } from '@core/models/book/book';
import { BookService } from '@core/services/book.service';
import { selectedBookId } from '@core/store/selectors/books.selectors';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  book?: Book;

  books$ = this.store.select(selectedBookId);

  constructor(
    private router: Router,
    private store: Store
  ) { }

  ngOnInit(): void {
    this.books$.subscribe({
      next : (res) => {
        this.book = res.selectedBook;
      }
    })
  }

  toCreateCharacter(){
    this.router.navigate(['/app', 'book', this.book?._id, 'character', 'new-character']);
  }

}
