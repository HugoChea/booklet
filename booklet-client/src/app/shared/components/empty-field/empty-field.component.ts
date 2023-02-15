import { Component } from '@angular/core';

@Component({
  selector: 'app-empty-field',
  templateUrl: './empty-field.component.html',
  styleUrls: ['./empty-field.component.scss'],
})
export class EmptyFieldComponent {
  icon: string;

  term: string;

  constructor() {
    const term = this.getTerm(this.getRandomInt());
    this.icon = term[0];
    this.term = term[1];
  }

  getRandomInt(): number {
    return Math.floor(Math.random() * (5 - 0)); // The maximum is exclusive and the minimum is inclusive
  }

  getTerm(seed: number): [string, string] {
    switch (seed) {
      case 0:
        return ['coffee', 'coffee'];
      case 1:
        return ['kebab_dining', 'kebab'];
      case 2:
        return ['sports_bar', 'beer'];
      case 3:
        return ['fastfood', 'burger'];
      case 4:
        return ['icecream', 'ice cream'];
      case 5:
        return ['ramen_dining', 'noodle'];
    }
    return ['coffee', 'coffee'];
  }
}
