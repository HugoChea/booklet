import { Component, OnInit } from '@angular/core';
import { ChartConfiguration, ChartDataset } from 'chart.js';

@Component({
  selector: 'app-panel-ability',
  templateUrl: './panel-ability.component.html',
  styleUrls: ['./panel-ability.component.scss']
})
export class PanelAbilityComponent implements OnInit {

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
  }

}
