import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { CharacterService } from '@core/services/character.service';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { MaterialModule } from '@shared/material.module';
import { of } from 'rxjs';

import { CharacterListComponent } from './character-list.component';

describe('CharacterListComponent', () => {
  let component: CharacterListComponent;
  let fixture: ComponentFixture<CharacterListComponent>;
  let store: MockStore;
  const initialState = { selectedBook: null };
  let characterServiceSpy: jasmine.SpyObj<CharacterService>;

  beforeEach(async () => {

    characterServiceSpy = jasmine.createSpyObj('CharacterService', ['getListCharacterByBook']);
    characterServiceSpy.getListCharacterByBook.and.returnValue(of("createmock"))

    await TestBed.configureTestingModule({
      declarations: [ CharacterListComponent ],
      imports: [RouterTestingModule, MaterialModule, FormsModule ],
      providers: [
        provideMockStore({ initialState }),
        {provide: CharacterService, useValue: characterServiceSpy},
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CharacterListComponent);
    component = fixture.componentInstance;
    store = TestBed.inject(MockStore);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
