import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-actions-header',
  templateUrl: './actions-header.component.html',
  styleUrls: ['./actions-header.component.scss']
})
export class ActionsHeaderComponent implements OnInit {

  @Input()
  title: string = '';

  constructor() {}

  ngOnInit(): void {
  }

}
