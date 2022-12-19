import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { MaterialModule } from '@shared/material.module';

import { DisplayCharacterDescriptionComponent } from './display-character-description.component';

describe('DisplayCharacterDescriptionComponent', () => {
  let component: DisplayCharacterDescriptionComponent;
  let fixture: ComponentFixture<DisplayCharacterDescriptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisplayCharacterDescriptionComponent ],
      imports: [RouterTestingModule, MaterialModule ]
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