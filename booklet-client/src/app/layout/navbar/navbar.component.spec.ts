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
import { Router } from '@angular/router';

describe('NavbarComponent', () => {
  let component: NavbarComponent;
  let fixture: ComponentFixture<NavbarComponent>;

  let authServiceSpy: jasmine.SpyObj<AuthService>;
  const subject = new Subject<User | undefined>();
  let router: Router;
  
  beforeEach(async () => {

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
    router = TestBed.inject(Router);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should get user on subscribe', () => {
    // GIVEN
    const user: User = {
      id : "123",
      username: "username"
    };
    // WHEN
    subject.next(user);

    // THEN
    expect(component.user).toBe(user);
  });

  it('should route to home when logout', () => {
    const navigateSpy = spyOn(router, 'navigate');

    component.logout();
    
    expect(navigateSpy).toHaveBeenCalledWith(['/home']);
  });
});
