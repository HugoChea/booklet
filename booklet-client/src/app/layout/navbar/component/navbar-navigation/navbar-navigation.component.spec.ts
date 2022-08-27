import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarNavigationComponent } from './navbar-navigation.component';

describe('NavbarNavigationComponent', () => {
  let component: NavbarNavigationComponent;
  let fixture: ComponentFixture<NavbarNavigationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavbarNavigationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavbarNavigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
