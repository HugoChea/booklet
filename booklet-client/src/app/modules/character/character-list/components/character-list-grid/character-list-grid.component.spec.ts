import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MaterialModule } from '@shared/material/material.module';

import { CharacterListGridComponent } from './character-list-grid.component';

describe('CharacterListGridComponent', () => {
  let component: CharacterListGridComponent;
  let fixture: ComponentFixture<CharacterListGridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CharacterListGridComponent ],
      imports: [MaterialModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CharacterListGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
