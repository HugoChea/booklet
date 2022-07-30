import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-panel-generality',
  templateUrl: './panel-generality.component.html',
  styleUrls: ['./panel-generality.component.scss']
})
export class PanelGeneralityComponent implements OnInit {

  @Input() newCharacterForm!: FormGroup;

  constructor() { }

  ngOnInit(): void {
  }

}
