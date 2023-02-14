import { ComponentFixture, TestBed } from '@angular/core/testing';
import {
  FakeCardPanelComponent,
  FakeEmptyFieldComponent,
  FakeRadarGraphComponent,
} from '@shared/mocks/fake-components.mock.spec';

import { DisplayCharacterAbilitiesComponent } from './display-character-abilities.component';

describe('DisplayCharacterAbilitiesComponent', () => {
  let component: DisplayCharacterAbilitiesComponent;
  let fixture: ComponentFixture<DisplayCharacterAbilitiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        DisplayCharacterAbilitiesComponent,
        FakeRadarGraphComponent,
        FakeEmptyFieldComponent,
        FakeCardPanelComponent,
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(DisplayCharacterAbilitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
