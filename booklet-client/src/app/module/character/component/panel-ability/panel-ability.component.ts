import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ChartConfiguration, ChartDataset } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';
import { Editor, Toolbar } from 'ngx-editor';

@Component({
  selector: 'app-panel-ability',
  templateUrl: './panel-ability.component.html',
  styleUrls: ['./panel-ability.component.scss']
})
export class PanelAbilityComponent implements OnInit {

  @ViewChild(BaseChartDirective) chart?: BaseChartDirective;

  @Input() newCharacterForm!: FormGroup;

  items!: FormArray;

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
        suggestedMin: 0,
        suggestedMax: 100
      }
    }
  };
  public radarChartLabels: string[] = [];

  public radarChartDatasets: ChartConfiguration<'radar'>['data']['datasets'] = [
    { data: [], label: 'Series A' }
  ];

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.editor1 = new Editor();
    this.editor2 = new Editor();
    this.editor3 = new Editor();
    this.items = this.newCharacterForm.get('abilities')?.get('stats') as FormArray;

  }

  generateTemplateStatsForm(){
    
    console.log(this.items)
    this.items.clear()
    this.addItem('Strenght', 50);
    this.addItem('Endurance', 50);
    this.addItem('Agility', 50);
    this.addItem('Mana', 50);
    this.radarChartLabels = this.items.value.map((res: { characteristicName: any; }) => res.characteristicName)
    this.radarChartDatasets = [
      { data: this.items.value.map((res: { characteristicValue : number; }) => res.characteristicValue), label: 'Series A' }
    ] 
    //this.chart?.update();
  }

  createItem(name: string, value: number): FormGroup {
    return this.formBuilder.group({
      characteristicName: name,
      characteristicValue: [value, Validators.compose([Validators.min(0), Validators.max(100)])]
    });
  }

  addItem(name: string, value: number): void {
    
    this.items.push(this.createItem(name, value));
  }

}
