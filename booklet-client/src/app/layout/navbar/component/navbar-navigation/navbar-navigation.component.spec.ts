import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { MaterialModule } from '@shared/material.module';

import { NavbarNavigationComponent } from './navbar-navigation.component';

describe('NavbarNavigationComponent', () => {
  let component: NavbarNavigationComponent;
  let fixture: ComponentFixture<NavbarNavigationComponent>;
  let store: MockStore;
  const initialState = { selectedBook: null };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavbarNavigationComponent ],
      imports: [ MaterialModule ],
      providers: [
        provideMockStore({ initialState }),
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavbarNavigationComponent);
    component = fixture.componentInstance;
    store = TestBed.inject(MockStore);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
