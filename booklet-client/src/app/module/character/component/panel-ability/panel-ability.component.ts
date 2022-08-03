import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ChartConfiguration, ChartDataset } from 'chart.js';
import { Editor, Toolbar } from 'ngx-editor';

@Component({
  selector: 'app-panel-ability',
  templateUrl: './panel-ability.component.html',
  styleUrls: ['./panel-ability.component.scss']
})
export class PanelAbilityComponent implements OnInit {

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

  public radarChartOptions: ChartConfiguration<'radar'>['options'] = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      r: {
        suggestedMin: 50,
        suggestedMax: 100
      }
    }
  };
  public radarChartLabels: string[] = ['Strenght', 'Endurance', 'Agility', 'Mana'];

  public radarChartDatasets: ChartConfiguration<'radar'>['data']['datasets'] = [
    { data: [65, 59, 90, 81], label: 'Series A' }
  ];

  constructor() { }

  ngOnInit(): void {
    this.editor1 = new Editor();
    this.editor2 = new Editor();
    this.editor3 = new Editor();
  }

}
