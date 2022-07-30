import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form-character-general',
  templateUrl: './form-character-general.component.html',
  styleUrls: ['./form-character-general.component.scss']
})
export class FormCharacterGeneralComponent implements OnInit {

  @Input() newCharacterForm!: FormGroup;

  constructor() { }

  ngOnInit(): void {
  }

}
