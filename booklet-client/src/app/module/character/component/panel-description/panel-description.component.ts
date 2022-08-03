import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Editor, Toolbar } from 'ngx-editor';

@Component({
  selector: 'app-panel-description',
  templateUrl: './panel-description.component.html',
  styleUrls: ['./panel-description.component.scss']
})
export class PanelDescriptionComponent implements OnInit {

  @Input() newCharacterForm!: FormGroup;

  toolbar: Toolbar = [
    ['bold', 'italic'],
    ['underline', 'strike'],
    ['code', 'blockquote'],
    ['ordered_list', 'bullet_list'],
    [{ heading: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'] }],
    ['link', 'image'],
    ['text_color', 'background_color'],
    ['align_left', 'align_center', 'align_right', 'align_justify'],
  ];

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
