import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';
import { Character } from '@core/models/character/character';
import { CharacterService } from '@core/services/character.service';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { MaterialModule } from '@shared/material/material.module';
import { of } from 'rxjs';

import { CharacterDetailComponent } from './character-detail.component';
import {
  FakeActionsHeaderComponent,
  FakeDisplayCharacterAbilitiesComponent,
  FakeDisplayCharacterDescriptionComponent,
  FakeDisplayCharacterRelationshipComponent,
} from './mocks/fake-components.mock.spec';

describe('CharacterDetailComponent', () => {
  let component: CharacterDetailComponent;
  let fixture: ComponentFixture<CharacterDetailComponent>;
  let characterServiceSpy: jasmine.SpyObj<CharacterService>;

  let store: MockStore;
  const initialState = { selectedBook: null };

  beforeEach(async () => {
    characterServiceSpy = jasmine.createSpyObj('CharacterService', [
      'getCharacterById',
    ]);
    const mockCharacterDetail = {} as Character;
    characterServiceSpy.getCharacterById.and.returnValue(
      of(mockCharacterDetail)
    );

    await TestBed.configureTestingModule({
      declarations: [
        CharacterDetailComponent,
        FakeDisplayCharacterDescriptionComponent,
        FakeDisplayCharacterAbilitiesComponent,
        FakeDisplayCharacterRelationshipComponent,
        FakeActionsHeaderComponent,
      ],
      imports: [RouterTestingModule, MaterialModule, BrowserAnimationsModule],
      providers: [
        { provide: CharacterService, useValue: characterServiceSpy },
        provideMockStore({ initialState }),
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(CharacterDetailComponent);
    component = fixture.componentInstance;
    store = TestBed.inject(MockStore);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
