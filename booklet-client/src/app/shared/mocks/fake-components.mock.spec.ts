import { Component, Input } from '@angular/core';
import { ChartConfiguration } from 'chart.js';

@Component({
  selector: 'app-card-panel',
  template: ``,
})
export class FakeCardPanelComponent {}

@Component({
  selector: 'app-empty-field',
  template: ``,
})
export class FakeEmptyFieldComponent {}

@Component({
  selector: 'app-radar-graph',
  template: ``,
})
export class FakeRadarGraphComponent {
  @Input() datasets: ChartConfiguration<'radar'>['data']['datasets'] = [
    { data: [] },
  ];

  @Input() labels: string[] = [];

  @Input() options: ChartConfiguration<'radar'>['options'] = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      r: {
        suggestedMin: 0,
        suggestedMax: 100,
      },
    },
  };

  @Input() height = 300;
}
