import { Component, Input } from '@angular/core';
import { Character } from '@core/models/character/character';

@Component({
  selector: 'app-display-character-description',
  templateUrl: './display-character-description.component.html',
  styleUrls: ['./display-character-description.component.scss']
})
export class DisplayCharacterDescriptionComponent {

  @Input() character: Character | undefined;

  displayMode: string;

  constructor() {
    this.displayMode = 'plot';
  }

}
