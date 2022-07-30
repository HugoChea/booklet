import { Component, OnInit } from '@angular/core';
import { Editor } from 'ngx-editor';

@Component({
  selector: 'app-panel-description',
  templateUrl: './panel-description.component.html',
  styleUrls: ['./panel-description.component.scss']
})
export class PanelDescriptionComponent implements OnInit {

  editor!: Editor;
  html!: '';

  constructor() { }

  ngOnInit(): void {
    this.editor = new Editor();
  }

}
