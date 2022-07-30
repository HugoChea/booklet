import { Component, OnInit } from '@angular/core';
import { Editor } from 'ngx-editor';

@Component({
  selector: 'app-panel-description',
  templateUrl: './panel-description.component.html',
  styleUrls: ['./panel-description.component.scss']
})
export class PanelDescriptionComponent implements OnInit {

  editor1!: Editor;
  html1!: '';

  editor2!: Editor;
  html2!: '';

  editor3!: Editor;
  html3!: '';

  constructor() { }

  ngOnInit(): void {
    this.editor1 = new Editor();
    this.editor2 = new Editor();
    this.editor3 = new Editor();
  }

}
