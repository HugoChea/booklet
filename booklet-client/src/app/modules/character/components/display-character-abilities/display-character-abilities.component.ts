import { Component, Input, OnInit } from '@angular/core';
import { Character } from '@core/models/character/character';

@Component({
  selector: 'app-display-character-abilities',
  templateUrl: './display-character-abilities.component.html',
  styleUrls: ['./display-character-abilities.component.scss']
})
export class DisplayCharacterAbilitiesComponent implements OnInit {

  @Input() character: Character | undefined;

  constructor() { }

  ngOnInit(): void {
  }

}
