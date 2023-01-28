import { Component, Input } from '@angular/core';
import { ChartConfiguration } from 'chart.js';

@Component({
  selector: 'app-radar-graph',
  templateUrl: './radar-graph.component.html',
  styleUrls: ['./radar-graph.component.scss']
})
export class RadarGraphComponent {

  @Input() datasets: ChartConfiguration<'radar'>['data']['datasets'] = [
    { data: [] }
  ];

  @Input() labels: string[] = [];

  @Input() options: ChartConfiguration<'radar'>['options'] = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      r: {
        suggestedMin: 0,
        suggestedMax: 100
      }
    }
  };

  @Input() height = 300;

}
