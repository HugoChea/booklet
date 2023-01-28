import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-actions-header',
  templateUrl: './actions-header.component.html',
  styleUrls: ['./actions-header.component.scss']
})
export class ActionsHeaderComponent {

  @Input()
  title = '';

  constructor() {}

}
