import { Component, Input, OnInit } from '@angular/core';
import { Character } from '@core/models/character/character';

@Component({
  selector: 'app-character-list-card',
  templateUrl: './character-list-card.component.html',
  styleUrls: ['./character-list-card.component.scss']
})
export class CharacterListCardComponent implements OnInit {

  @Input()
  listCharacter: Character[] = [];

  @Input()
  bookId: string | undefined;

  constructor() { }

  ngOnInit(): void {
  }

}
