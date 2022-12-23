import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
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

  const formBuilder: FormBuilder = new FormBuilder();
  let newCharacterForm = formBuilder.group({
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
        disabilites: ['']
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
      })
    }),
    description: formBuilder.group({
      summary: [''],
      personality: [''],
      background: ['']
    }),
    abilities: formBuilder.group({
      physicalAbility: [''],
      magicalAbility: [''],
      equipement: [''],
      stats: formBuilder.array([])
    }),
    relationship: formBuilder.array([])
  })

  beforeEach(async () => {

    characterServiceSpy = jasmine.createSpyObj('CharacterService', ['getListCharacterByBook']);
    const mockCharacterList: Character[] = [];
    characterServiceSpy.getListCharacterByBook.and.returnValue(of(mockCharacterList));

    await TestBed.configureTestingModule({
      imports: [MaterialModule, BrowserAnimationsModule, FormsModule, ReactiveFormsModule],
      declarations: [ PanelRelationshipComponent ],
      providers: [
        {provide: CharacterService, useValue: characterServiceSpy},
        provideMockStore({ initialState }),
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PanelRelationshipComponent);
    component = fixture.componentInstance;
    component.newCharacterForm = newCharacterForm;
    store = TestBed.inject(MockStore);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
