import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayCharacterRelationshipComponent } from './display-character-relationship.component';

describe('DisplayCharacterRelationshipComponent', () => {
  let component: DisplayCharacterRelationshipComponent;
  let fixture: ComponentFixture<DisplayCharacterRelationshipComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisplayCharacterRelationshipComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DisplayCharacterRelationshipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
