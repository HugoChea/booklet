import { Component, OnDestroy, OnInit } from '@angular/core';
import { Book } from '@core/models/book/book';
import { Character } from '@core/models/character/character';
import { CharacterService } from '@core/services/character.service';
import { selectedBook } from '@core/store/selectors/books.selectors';
import { Store } from '@ngrx/store';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-character-list',
  templateUrl: './character-list.component.html',
  styleUrls: ['./character-list.component.scss']
})
export class CharacterListComponent implements OnInit, OnDestroy {

  private destroy$ = new Subject<void>();

  book: Book | undefined;

  listCharacter: Character[] = [];

  displayMode: string;

  constructor(
    private store: Store,
    private characterService: CharacterService
  ) {
    this.displayMode = "card";
  }

  ngOnInit(): void {
    this.store.select(selectedBook)
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: (book) => {
          if (book) {
            this.book = book;
            this.characterService.getListCharacterByBook(book._id).subscribe({
              next: (res) => {
                this.listCharacter = res;
              }
            });
          }
        }
      });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

}
