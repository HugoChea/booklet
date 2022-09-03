import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Book } from '@core/models/book/book';
import { Character } from '@core/models/character/character';
import { CharacterService } from '@core/services/character.service';
import { selectedBook } from '@core/store/selectors/books.selectors';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  book?: Book;

  books$ = this.store.select(selectedBook);

  constructor(
    private store: Store,
    private characterService: CharacterService
  ) { }

  /**
   * Get selected book from store
   */
  ngOnInit(): void {
    this.books$.subscribe({
      next : (book) => {
        if (book){
          this.book = book;
          // this.characterService.getListLatestCharacterByBook(this.book._id).subscribe({
          //   next: (res) => {
          //     console.log(res)
          //     this.listCharacter = res;
          //   }
          // })
        }
        else{
          console.log("error")
        }
      }
    })
    
  }

}
