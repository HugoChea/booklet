import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { AuthService } from 'src/app/core/services/auth.service';
import { of } from 'rxjs';
import { RegisterComponent } from './register.component';
import { MaterialModule } from '@shared/material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('RegisterComponent', () => {
  let component: RegisterComponent;
  let fixture: ComponentFixture<RegisterComponent>;

  let authServiceSpy: jasmine.SpyObj<AuthService>;

  beforeEach(async () => {

    authServiceSpy = jasmine.createSpyObj('AuthService', ['register']);
    authServiceSpy.register.and.returnValue(of("registermock"))

    await TestBed.configureTestingModule({
      declarations: [ RegisterComponent ],
      imports: [RouterTestingModule, FormsModule, ReactiveFormsModule, MaterialModule, BrowserAnimationsModule],
      providers: [
        {provide: AuthService, useValue: authServiceSpy},
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
