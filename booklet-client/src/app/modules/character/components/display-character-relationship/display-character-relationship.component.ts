import { Component, Input } from '@angular/core';
import { Character } from '@core/models/character/character';

@Component({
  selector: 'app-display-character-relationship',
  templateUrl: './display-character-relationship.component.html',
  styleUrls: ['./display-character-relationship.component.scss']
})
export class DisplayCharacterRelationshipComponent {

  @Input() character: Character | undefined;

  constructor() { }

}
