import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-theme-toggler',
  templateUrl: './theme-toggler.component.html',
  styleUrls: ['./theme-toggler.component.scss']
})
export class ThemeTogglerComponent implements OnInit {

  darkMode: boolean;

  constructor() {
    this.darkMode = true;
  }

  ngOnInit(): void {
  }

  switchMode(): void {
    document.body.classList.toggle('theme-alternate');
    this.darkMode = !this.darkMode;
  }

}
