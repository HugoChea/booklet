import { Component, Input, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { MatOptionSelectionChange } from '@angular/material/core';
import { Character } from '@core/models/character/character';
import { Relationship } from '@core/models/character/relationship';
import { CharacterService } from '@core/services/character.service';
import { selectedBook } from '@core/store/selectors/books.selectors';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-panel-relationship',
  templateUrl: './panel-relationship.component.html',
  styleUrls: ['./panel-relationship.component.scss']
})
export class PanelRelationshipComponent implements OnInit {

  /**
   * Form shared from parent component
   */
   @Input() newCharacterForm!: FormGroup;

  listCharacter: Character[] = [];

  listRelationship: Relationship[] = [];

  relationship!: FormArray;

  constructor(
    public characterService: CharacterService,
    private store: Store,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.store.select(selectedBook).subscribe({
      next : (book) => {
        if (book){
          this.characterService.getListCharacterByBook(book._id).subscribe({
            next: (res) => {
              this.listCharacter = res;
            }
          });
        }
        
      }
    });
    this.relationship = this.newCharacterForm.get('relationship') as FormArray;
  }

  createRelationship(character: Character): FormGroup {
    return this.formBuilder.group({
      involvedWith: character._id,
      character: character,
      type: '',
      text: ''
    });
  }

  onSelection(event: MatOptionSelectionChange): void {
    if (event.source.selected){
      this.relationship.push(this.createRelationship(event.source.value));
    }
    else{
      this.relationship.removeAt(this.relationship.value.findIndex((character: Relationship) => character.involvedWith._id === event.source.value._id));
    }
  }
}
