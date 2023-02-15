import { ComponentFixture, TestBed } from '@angular/core/testing';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { AuthService } from '@core/services/auth.service';
import { of, throwError } from 'rxjs';
import { RegisterComponent } from './register.component';
import { MaterialModule } from '@shared/material/material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RegisterDto } from '@core/dto/register-dto';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';

describe('RegisterComponent', () => {
  let component: RegisterComponent;
  let fixture: ComponentFixture<RegisterComponent>;

  let authServiceSpy: jasmine.SpyObj<AuthService>;
  let snackbarSpy: jasmine.SpyObj<MatSnackBar>;
  let router: Router;

  beforeEach(async () => {
    authServiceSpy = jasmine.createSpyObj('AuthService', ['register']);
    snackbarSpy = jasmine.createSpyObj('MatSnackBar', ['open']);

    await TestBed.configureTestingModule({
      declarations: [RegisterComponent],
      imports: [
        RouterTestingModule,
        FormsModule,
        ReactiveFormsModule,
        MaterialModule,
        BrowserAnimationsModule,
      ],
      providers: [
        { provide: AuthService, useValue: authServiceSpy },
        { provide: MatSnackBar, useValue: snackbarSpy },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(RegisterComponent);
    router = TestBed.inject(Router);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('form is valid', () => {
    beforeEach(() => {
      component.registerForm = new FormGroup({
        username: new FormControl('username'),
        email: new FormControl('email'),
        password: new FormControl('password'),
      });
    });

    describe('response is success', () => {
      it('should open snackbar and route away on success http call', () => {
        authServiceSpy.register.and.returnValue(
          of({ data: { message: 'Success' } })
        );
        const navigateSpy = spyOn(router, 'navigate');

        component.register(component.registerForm.value as RegisterDto);
        expect(authServiceSpy.register).toHaveBeenCalledWith(
          component.registerForm.value as RegisterDto
        );
        expect(snackbarSpy.open).toHaveBeenCalled();
        expect(navigateSpy).toHaveBeenCalledWith(['/auth/login']);
      });
    });

    describe('response is error', () => {
      [
        {
          mockHttpErrorResponse: new HttpErrorResponse({
            error: { statusCode: 409, message: 'Username already used' },
          }),
        },
        {
          mockHttpErrorResponse: new HttpErrorResponse({
            error: { statusCode: 409, message: 'Email already used' },
          }),
        },
        {
          mockHttpErrorResponse: new HttpErrorResponse({
            error: { statusCode: 500, message: 'Internal Server Error' },
          }),
        },
      ].forEach((scenario) => {
        it('should set errors on error Username already used', () => {
          authServiceSpy.register.and.returnValue(
            throwError(() => scenario.mockHttpErrorResponse.error)
          );

          component.register(component.registerForm.value as RegisterDto);

          expect(component.registerForm.invalid).toBeTrue();
        });
      });
    });
  });

  describe('form is invalid', () => {
    it('should not call service', () => {
      expect(authServiceSpy.register).not.toHaveBeenCalledWith(
        component.registerForm.value as RegisterDto
      );
    });
  });
});
