import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AuthService } from '@core/services/auth.service';
import { Subject } from 'rxjs';
import { NavbarComponent } from './navbar.component';
import { RouterTestingModule } from '@angular/router/testing';
import { User } from '@core/models/user';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from '@shared/material/material.module';
import { NavbarNavigationComponent } from './component/navbar-navigation/navbar-navigation.component';
import { ThemeTogglerComponent } from './component/theme-toggler/theme-toggler.component';

describe('NavbarComponent', () => {
  let component: NavbarComponent;
  let fixture: ComponentFixture<NavbarComponent>;

  let authServiceSpy: jasmine.SpyObj<AuthService>;

  beforeEach(async () => {
    
    const subject = new Subject<User | undefined>();
    authServiceSpy = jasmine.createSpyObj('AuthService', ['logout', 'userOnRefresh'], {'user$': subject });

    await TestBed.configureTestingModule({
      declarations: [ NavbarComponent, NavbarNavigationComponent, ThemeTogglerComponent ],
      imports: [
        RouterTestingModule,
        MaterialModule,
        BrowserAnimationsModule
      ],
      providers: [
        {provide: AuthService, useValue: authServiceSpy}
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
