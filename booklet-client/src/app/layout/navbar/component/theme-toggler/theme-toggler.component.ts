import { Component } from '@angular/core';

@Component({
  selector: 'app-theme-toggler',
  templateUrl: './theme-toggler.component.html',
  styleUrls: ['./theme-toggler.component.scss']
})
export class ThemeTogglerComponent {

  darkMode: boolean;

  constructor() {
    this.darkMode = true;
  }

  switchMode(): void {
    document.body.classList.toggle('light-theme');
    this.darkMode = !this.darkMode;
  }

}
