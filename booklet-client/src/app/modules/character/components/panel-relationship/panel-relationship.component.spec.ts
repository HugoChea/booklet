import { ComponentFixture, TestBed } from '@angular/core/testing';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { MatOptionSelectionChange } from '@angular/material/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Character } from '@core/models/character/character';
import { CharacterService } from '@core/services/character.service';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { MaterialModule } from '@shared/material/material.module';
import { of } from 'rxjs';

import { PanelRelationshipComponent } from './panel-relationship.component';

describe('PanelRelationshipComponent', () => {
  let component: PanelRelationshipComponent;
  let fixture: ComponentFixture<PanelRelationshipComponent>;
  let characterServiceSpy: jasmine.SpyObj<CharacterService>;

  let store: MockStore;
  const initialState = { selectedBook: null };
  const mockCharacterList: Character[] = [];

  beforeEach(async () => {
    characterServiceSpy = jasmine.createSpyObj('CharacterService', [
      'getListCharacterByBook',
    ]);
    characterServiceSpy.getListCharacterByBook.and.returnValue(
      of(mockCharacterList)
    );
    const formBuilder: FormBuilder = new FormBuilder();
    const newCharacterForm = formBuilder.group({
      profile: formBuilder.group({
        generalInfo: formBuilder.group({
          firstname: [''],
          lastname: [''],
          surname: [''],
          quote: [''],
          cv: [''],
          nationality: [''],
          age: [''],
          birthdate: [''],
          birthplace: [''],
          species: [''],
          hometown: [''],
          currentPlace: [''],
          homeDescription: [''],
          neighbourhood: [''],
          occupation: [''],
          jobSatisfaction: [''],
          finance: [''],
          personalHabits: [''],
          hobbies: [''],
          favoriteFoods: [''],
          favoriteSaying: [''],
        }),
        physicalInfo: formBuilder.group({
          height: [''],
          weight: [''],
          bodyshape: [''],
          hair: [''],
          ethnicity: [''],
          smell: [''],
          skintone: [''],
          shapeOfFace: [''],
          eyes: [''],
          distinguishMarks: [''],
          dressStyle: [''],
          accesories: [''],
          mannerism: [''],
          physicalPosture: [''],
          speechPattern: [''],
          gestures: [''],
          disabilites: [''],
        }),
        psychologicInfo: formBuilder.group({
          flaws: [''],
          qualities: [''],
          education: [''],
          intelligence: [''],
          mentalIllness: [''],
          learningExperiences: [''],
          positivePersonalityTraits: [''],
          negativePersonalityTraits: [''],
          philosophyOfLife: [''],
          politicalAttitude: [''],
          goalAchievement: [''],
          greatestDream: [''],
          considerationForOthers: [''],
          selfPerception: [''],
          othersPerception: [''],
          selfConfidence: [''],
          senseOfHumour: [''],
          temper: [''],
          emotionOrLogic: [''],
          leaderOrFollower: [''],
          embarassements: [''],
        }),
      }),
      description: formBuilder.group({
        summary: [''],
        personality: [''],
        background: [''],
      }),
      abilities: formBuilder.group({
        physicalAbility: [''],
        magicalAbility: [''],
        equipement: [''],
        stats: formBuilder.array([]),
      }),
      relationship: formBuilder.array([]),
    });

    await TestBed.configureTestingModule({
      imports: [
        MaterialModule,
        BrowserAnimationsModule,
        FormsModule,
        ReactiveFormsModule,
      ],
      declarations: [PanelRelationshipComponent],
      providers: [
        { provide: CharacterService, useValue: characterServiceSpy },
        provideMockStore({ initialState }),
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(PanelRelationshipComponent);
    component = fixture.componentInstance;
    component.newCharacterForm = newCharacterForm;
    store = TestBed.inject(MockStore);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should set the book property when selected book changes', () => {
    const selectedBook = { id: 1, name: 'Book 1' };
    const selectedBook$ = of(selectedBook);
    spyOn(selectedBook$, 'pipe').and.returnValue(selectedBook$);
    spyOn(store, 'select').and.returnValue(selectedBook$);
    component.ngOnInit();
    expect(component.listCharacter).toEqual(mockCharacterList as unknown as Character[]);
  });

  it('should create a new relationship FormGroup', () => {
    const character = {
      _id: '1',
      profile: { generalInfo: { firstname: '', lastname: '' } },
    };
    const result = component.createRelationship(
      character as unknown as Character
    );

    fixture.detectChanges();
    expect(result).toBeInstanceOf(FormGroup);
    expect(result.value).toEqual({
      involvedWith: '1',
      character: character,
      type: '',
      text: '',
    });
  });

  it('should add a new relationship to the form group when a character is selected', () => {
    const character = {
      _id: '1',
      profile: { generalInfo: { firstname: '', lastname: '' } },
    };
    const event = {
      source: {
        selected: true,
        value: character,
      },
    } as MatOptionSelectionChange;
    component.onSelection(event);
    fixture.detectChanges();
    expect(component.relationship.length).toBe(1);
    expect(component.relationship.at(0).value).toEqual({
      involvedWith: '1',
      character: character,
      type: '',
      text: '',
    });
  });

  it('should remove a relationship from the form group when a character is deselected', () => {
    const character = {
      _id: '1',
      profile: { generalInfo: { firstname: '', lastname: '' } },
    };
    component.relationship.push(
      component.createRelationship(character as unknown as Character)
    );
    const event = {
      source: {
        selected: false,
        value: character,
      },
    } as MatOptionSelectionChange;
    component.onSelection(event);
    expect(component.relationship.length).toBe(0);
  });
});
