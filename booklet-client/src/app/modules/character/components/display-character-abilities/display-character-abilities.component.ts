import { Component, Input, OnInit } from '@angular/core';
import { Character } from '@core/models/character/character';
import { ChartConfiguration } from 'chart.js';

@Component({
  selector: 'app-display-character-abilities',
  templateUrl: './display-character-abilities.component.html',
  styleUrls: ['./display-character-abilities.component.scss']
})
export class DisplayCharacterAbilitiesComponent implements OnInit {

  @Input() character: Character | undefined;

  radarChartOptions: ChartConfiguration<'radar'>['options'] = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      r: {
        suggestedMin: 0,
        suggestedMax: 100
      }
    }
  };
  
  radarChartLabels: string[] = [];

  radarChartDatasets: ChartConfiguration<'radar'>['data']['datasets'] = [
    { data: [] }
  ];

  constructor() { }

  ngOnInit(): void {
    if (this.character){
      this.radarChartLabels = this.character?.abilities?.stats.map((res: { characteristicName: string; }) => res.characteristicName);
      this.radarChartDatasets = [
        { data: this.character?.abilities?.stats.map((res: { characteristicValue : number; }) => res.characteristicValue), label: 'Statistiques' }
      ];
    }
    
  }

}
