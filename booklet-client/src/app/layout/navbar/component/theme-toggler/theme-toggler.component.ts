import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-theme-toggler',
  templateUrl: './theme-toggler.component.html',
  styleUrls: ['./theme-toggler.component.scss']
})
export class ThemeTogglerComponent implements OnInit {

  darkMode: boolean = true;

  constructor() { }

  ngOnInit(): void {
  }

  switchMode(){
    document.body.classList.toggle('theme-alternate');
    this.darkMode = !this.darkMode;
    
  }

}
