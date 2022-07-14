import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RegisterDto } from 'src/app/core/dto/register-dto';
import { AuthService } from 'src/app/core/services/auth.service';

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
    private router: Router
  ) {
    this.registerForm = this.formBuilder.group({
      username: ['', Validators.required],
      email: ['', Validators.compose([Validators.required, Validators.email])],
      password: ['', Validators.required]
    })
  }

  ngOnInit(): void {
  }

  register(registerDto: RegisterDto){
    console.log(registerDto)
    this.authService.register(registerDto).subscribe({
      next : (res) => {
        console.log(res)
        this.router.navigate(['/auth/login']);
      },
      error(err) {
        console.log(err)
      },
    })
  }

}
