import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { RegisterDto } from '@core/dto/register-dto';
import { AuthService } from '@core/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  registerForm : FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router,
    private snackbar: MatSnackBar
  ) {
    this.registerForm = this.formBuilder.group({
      username: ['', Validators.required],
      email: ['', Validators.compose([Validators.required, Validators.email])],
      password: ['', Validators.required]
    });
  }

  ngOnInit(): void {
  }

  register(registerDto: RegisterDto): void {
    this.authService.register(registerDto).subscribe({
      next : () => {
        this.snackbar.open('Account successfully registered', '', {
          duration: 5000,
          horizontalPosition: "center",
          verticalPosition: "top",
        });
        this.router.navigate(['/auth/login']);
      },
      error: (error) => {
        if (error.status === 409){
          if (error.message === 'Username already used'){
            this.registerForm.setErrors({ usernameused: 'Username already used' });
          }
          else{
            this.registerForm.setErrors({ emailused: 'Email already used' });
          }
          
        }
        else{
          this.registerForm.setErrors({ server: 'Server down' });
        }     
      },
    });
  }

}
