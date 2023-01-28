import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '@core/models/user';
import { AuthService } from '@core/services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

  user: User | undefined;

  constructor(
    private authService: AuthService,
    private router: Router
  ) {
    this.authService.user$.subscribe({
      next: (user) => {
        this.user = user;
      }
    });

    this.authService.userOnRefresh();
  }

  logout(): void {
    this.authService.logout();
    this.router.navigate(['/home']);
  }

}
