import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { MaterialModule } from '@shared/material/material.module';
import { FakeEmptyFieldComponent, FakeCardPanelComponent } from '@shared/mocks/fake-components.mock.spec';

import { DisplayCharacterDescriptionComponent } from './display-character-description.component';

describe('DisplayCharacterDescriptionComponent', () => {
  let component: DisplayCharacterDescriptionComponent;
  let fixture: ComponentFixture<DisplayCharacterDescriptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisplayCharacterDescriptionComponent, FakeEmptyFieldComponent, FakeCardPanelComponent ],
      imports: [ RouterTestingModule, MaterialModule, FormsModule ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DisplayCharacterDescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
