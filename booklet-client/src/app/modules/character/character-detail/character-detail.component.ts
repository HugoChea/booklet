import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Book } from '@core/models/book/book';
import { Character } from '@core/models/character/character';
import { CharacterService } from '@core/services/character.service';
import { selectedBook } from '@core/store/selectors/books.selectors';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-character-detail',
  templateUrl: './character-detail.component.html',
  styleUrls: ['./character-detail.component.scss']
})
export class CharacterDetailComponent implements OnInit {

  book?: Book;

  books$ = this.store.select(selectedBook);

  character: Character | undefined;

  constructor(
    private route: ActivatedRoute,
    private characterService: CharacterService,
    private store: Store
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.characterService.getCharacterById(params['character']).subscribe({
        next: (character) => {
          this.character = character;
        }
      })
    });
  }

}
