import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form-character-general',
  templateUrl: './form-character-general.component.html',
  styleUrls: ['./form-character-general.component.scss']
})
export class FormCharacterGeneralComponent {

  /**
   * Form shared from parent component
   */
  @Input() newCharacterForm!: FormGroup;

  constructor() { }

}
