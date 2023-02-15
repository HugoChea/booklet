import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { AuthService } from '@core/services/auth.service';
import { of, throwError } from 'rxjs';
import { LoginComponent } from './login.component';
import { MaterialModule } from '@shared/material/material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Router } from '@angular/router';
import { LoginDto } from '@core/dto/login-dto';
import { HttpErrorResponse } from '@angular/common/http';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  let authServiceSpy: jasmine.SpyObj<AuthService>;
  let router: Router;

  beforeEach(async () => {

    authServiceSpy = jasmine.createSpyObj('AuthService', ['login']);

    await TestBed.configureTestingModule({
      declarations: [LoginComponent],
      imports: [RouterTestingModule, FormsModule, ReactiveFormsModule, MaterialModule, BrowserAnimationsModule],
      providers: [
        { provide: AuthService, useValue: authServiceSpy },
      ]
    })
      .compileComponents();

    fixture = TestBed.createComponent(LoginComponent);
    router = TestBed.inject(Router);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('form is valid', () => {
    beforeEach(() => {
      component.loginForm = new FormGroup({
        username: new FormControl('username'),
        password: new FormControl('password')
      });
    });

    describe('response is success', () => {
      it('should navigate on success http call', () => {
        authServiceSpy.login.and.returnValue(
          of({ data: { access_token: 'Some token' } })
        );
        const navigateSpy = spyOn(router, 'navigate');

        component.login(component.loginForm.value as LoginDto);
        expect(authServiceSpy.login).toHaveBeenCalledWith(
          component.loginForm.value as LoginDto
        );
        expect(navigateSpy).toHaveBeenCalledWith(['/app/book']);
      });
    });

    describe('response is error', () => {
      [
        {
          mockHttpErrorResponse: new HttpErrorResponse({
            error: { statusCode: 401, message: 'Unauthorized' },
          }),
        },
        {
          mockHttpErrorResponse: new HttpErrorResponse({
            error: { statusCode: 500, message: 'Internal Server Error' },
          }),
        },
      ].forEach((scenario) => {
        it('should set errors on error Username already used', () => {
          authServiceSpy.login.and.returnValue(
            throwError(() => scenario.mockHttpErrorResponse.error)
          );

          component.login(component.loginForm.value as LoginDto);

          expect(component.loginForm.invalid).toBeTrue();
        });
      });
    });
  });

  describe('form is invalid', () => {
    it('should not call service', () => {
      expect(authServiceSpy.login).not.toHaveBeenCalledWith(
        component.loginForm.value as LoginDto
      );
    });
  });
});
