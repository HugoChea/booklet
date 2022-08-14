import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginDto } from '@core/dto/login-dto';
import { AuthService } from '@core/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm : FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['',  Validators.required]
    })
  }

  ngOnInit(): void {
  }

  login(loginDto: LoginDto){
    this.authService.login(loginDto).subscribe({
      next : (res) => {
        this.router.navigate(['/app/book']);
      },
      error: (error) => {
        if (error.status === 401){
          this.loginForm.setErrors({ invalid: 'Invalid login request' });
        }
        else{
          this.loginForm.setErrors({ server: 'Server down' });
        }        
      },
    })
  }

}
