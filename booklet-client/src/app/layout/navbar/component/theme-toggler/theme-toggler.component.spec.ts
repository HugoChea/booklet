import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MaterialModule } from '@shared/material/material.module';

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

  afterEach(() => {
    document.body.classList.remove('light-theme');
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should add light-theme class when switch mode', () => {
    component.switchMode();
    expect(component.darkMode).toBeFalse();
    expect(document.body.className).toContain('light-theme');
  });

  it('should remove light-theme class when switch mode', () => {
    component.switchMode();
    component.switchMode();
    expect(component.darkMode).toBeTrue();
    expect(document.body.className).not.toContain('light-theme');
  });
});
