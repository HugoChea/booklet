import { Component, OnInit } from '@angular/core';
import { Book } from '@core/models/book/book';
import { selectedBook } from '@core/store/selectors/books.selectors';
import { Store } from '@ngrx/store';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  private destroy$ = new Subject<void>();

  book: Book | undefined;

  constructor(
    private store: Store,
    // private characterService: CharacterService
  ) { }

  /**
   * Get selected book from store
   */
  ngOnInit(): void {
    this.store.select(selectedBook)
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: (book) => {
          if (book) {
            this.book = book;
          }
          else {
            console.log("error");
          }
        }
      });

  }

}
