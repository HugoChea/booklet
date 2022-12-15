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

  /**
   * Not used ?
   */
  @ViewChild(BaseChartDirective) chart?: BaseChartDirective;

  /**
   * Form shared from parent component
   */
  @Input() newCharacterForm!: FormGroup;

  /**
   * Stats form used to generate graph
   */
  stats!: FormArray;

  /**
   * Toolbar option for text editor
   */
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

  /**
   * Text editor
   */
  editor1!: Editor;
  html1!: '';

  /**
   * Text editor
   */
  editor2!: Editor;
  html2!: '';

  /**
   * Text editor
   */
  editor3!: Editor;
  html3!: '';

  /**
   * Graph options
   */
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
    this.stats = this.newCharacterForm.get('abilities')?.get('stats') as FormArray;

  }

  /**
   * Generate stats form based on defined value template
   */
  generateTemplateStatsForm(){
    
    this.stats.clear()
    this.addItem('Strenght', 50);
    this.addItem('Endurance', 50);
    this.addItem('Agility', 50);
    this.addItem('Mana', 50);
    
    this.updateGraph();
  }

  /**
   * Update graph data based from stats form
   */
  updateGraph(){
    this.radarChartLabels = this.stats.value.map((res: { characteristicName: any; }) => res.characteristicName)
    this.radarChartDatasets = [
      { data: this.stats.value.map((res: { characteristicValue : number; }) => res.characteristicValue), label: 'Statistiques' }
    ]
    //this.chart?.update();
  }

  /**
   * Return generic form control
   * @param name 
   * @param value 
   * @returns 
   */
  createItem(name: string, value: number): FormGroup {
    return this.formBuilder.group({
      characteristicName: name,
      characteristicValue: [value, Validators.compose([Validators.min(0), Validators.max(100)])]
    });
  }

  /**
   * Add characteristic to form
   * @param name 
   * @param value 
   */
  addItem(name: string, value: number): void {
    
    this.stats.push(this.createItem(name, value));
  }

}
