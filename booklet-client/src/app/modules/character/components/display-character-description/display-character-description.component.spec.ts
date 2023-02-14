import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { CardPanelComponent } from '@shared/components/card-panel/card-panel.component';
import { EmptyFieldComponent } from '@shared/components/empty-field/empty-field.component';
import { MaterialModule } from '@shared/material/material.module';

import { DisplayCharacterDescriptionComponent } from './display-character-description.component';

describe('DisplayCharacterDescriptionComponent', () => {
  let component: DisplayCharacterDescriptionComponent;
  let fixture: ComponentFixture<DisplayCharacterDescriptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisplayCharacterDescriptionComponent, EmptyFieldComponent, CardPanelComponent ],
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
