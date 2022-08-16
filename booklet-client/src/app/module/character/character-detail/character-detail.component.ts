import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Character } from '@core/models/character/character';
import { CharacterService } from '@core/services/character.service';

@Component({
  selector: 'app-character-detail',
  templateUrl: './character-detail.component.html',
  styleUrls: ['./character-detail.component.scss']
})
export class CharacterDetailComponent implements OnInit {

  character!: Character;

  constructor(
    private route: ActivatedRoute,
    private characterService: CharacterService
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      console.log(params)
      this.characterService.getCharacterById(params['character']).subscribe({
        next: (character) => {
          console.log(character)
          this.character = character;
        }
      })
    });
  }

}
