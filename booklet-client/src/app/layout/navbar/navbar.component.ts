import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '@core/models/user';
import { AuthService } from '@core/services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  user: User | undefined;

  darkMode: boolean = true;

  constructor(
    private authService: AuthService,
    private router: Router,
  ) {
    this.authService.user$.subscribe({
      next: (user) => {
        this.user = user;
      }
    });

    this.authService.userOnRefresh();
  }

  ngOnInit(): void {
  }

  logout(){
    this.authService.logout();
    this.router.navigate(['/home'])
  }

  switchMode(){
    document.body.classList.toggle('theme-alternate');
    this.darkMode = !this.darkMode;
    
  }

}
