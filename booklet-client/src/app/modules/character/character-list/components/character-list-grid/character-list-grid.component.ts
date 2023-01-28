import { Component, Input } from '@angular/core';
import { Character } from '@core/models/character/character';

@Component({
  selector: 'app-character-list-grid',
  templateUrl: './character-list-grid.component.html',
  styleUrls: ['./character-list-grid.component.scss']
})
export class CharacterListGridComponent {

  @Input()
  listCharacter: Character[] = [];

  displayedColumns = ['firstname', 'lastname', 'status'];

  constructor() { }

}
