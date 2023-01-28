import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Gender } from '@core/enums/gender.enum';

@Component({
  selector: 'app-panel-generality',
  templateUrl: './panel-generality.component.html',
  styleUrls: ['./panel-generality.component.scss']
})
export class PanelGeneralityComponent {

  /**
   * Form shared from parent component
   */
  @Input() newCharacterForm!: FormGroup;

  gender: typeof Gender = Gender;

  constructor() { }

}
