import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { Character } from '@core/models/character/character';
import { CharacterService } from '@core/services/character.service';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { ActionsHeaderComponent } from '@shared/components/actions-header/actions-header.component';
import { MaterialModule } from '@shared/material/material.module';
import { of } from 'rxjs';

import { CharacterListComponent } from './character-list.component';
import { CharacterListCardComponent } from './components/character-list-card/character-list-card.component';
import { CharacterListGridComponent } from './components/character-list-grid/character-list-grid.component';

describe('CharacterListComponent', () => {
  let component: CharacterListComponent;
  let fixture: ComponentFixture<CharacterListComponent>;
  let store: MockStore;
  const initialState = { selectedBook: null };
  let characterServiceSpy: jasmine.SpyObj<CharacterService>;

  beforeEach(async () => {

    characterServiceSpy = jasmine.createSpyObj('CharacterService', ['getListCharacterByBook']);
    const mockCharacterList: Character[]= [];
    characterServiceSpy.getListCharacterByBook.and.returnValue(of(mockCharacterList));

    await TestBed.configureTestingModule({
      declarations: [CharacterListComponent, ActionsHeaderComponent, CharacterListCardComponent, CharacterListGridComponent],
      imports: [RouterTestingModule, MaterialModule, FormsModule],
      providers: [
        provideMockStore({ initialState }),
        { provide: CharacterService, useValue: characterServiceSpy },
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
