import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginDto } from '@core/dto/login-dto';
import { AuthService } from '@core/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  loginForm : FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['',  Validators.required]
    });
  }

  login(loginDto: LoginDto): void {
    if (this.loginForm.valid) {
      this.authService.login(loginDto).subscribe({
        next : () => {
          this.router.navigate(['/app/book']);
        },
        error: (error) => {
          if (error.statusCode === 401){
            this.loginForm.setErrors({ invalid: 'Invalid login request' });
          }
          else{
            this.loginForm.setErrors({ server: 'Server down' });
          }        
        },
      });
    }
  }

}
