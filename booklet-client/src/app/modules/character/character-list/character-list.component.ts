import { Component, OnInit } from '@angular/core';
import { Book } from '@core/models/book/book';
import { Character } from '@core/models/character/character';
import { CharacterService } from '@core/services/character.service';
import { selectedBook } from '@core/store/selectors/books.selectors';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-character-list',
  templateUrl: './character-list.component.html',
  styleUrls: ['./character-list.component.scss']
})
export class CharacterListComponent implements OnInit {

  book?: Book;

  books$ = this.store.select(selectedBook);

  listCharacter: Character[] = [];

  displayMode: string = "card";

  displayedColumns = ['firstname', 'lastname', 'status']; 

  constructor(
    private store: Store,
    private characterService: CharacterService
  ) { }

  ngOnInit(): void {
    this.books$.subscribe({
      next : (book) => {
        if (book){
          this.book= book;
          this.characterService.getListCharacterByBook(book._id).subscribe({
            next: (res) => {
              this.listCharacter = res;
            }
          })
        }
        else{
          console.log("error")
        }
      }
    })
  }

}
