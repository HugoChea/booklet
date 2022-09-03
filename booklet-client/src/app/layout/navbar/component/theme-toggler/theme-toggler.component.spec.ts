import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MaterialModule } from '@shared/material.module';

import { ThemeTogglerComponent } from './theme-toggler.component';

describe('ThemeTogglerComponent', () => {
  let component: ThemeTogglerComponent;
  let fixture: ComponentFixture<ThemeTogglerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThemeTogglerComponent ],
      imports: [ MaterialModule ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ThemeTogglerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
