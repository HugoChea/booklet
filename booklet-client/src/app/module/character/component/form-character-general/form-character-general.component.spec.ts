import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from '@shared/material.module';

import { FormCharacterGeneralComponent } from './form-character-general.component';

describe('FormCharacterGeneralComponent', () => {
  let component: FormCharacterGeneralComponent;
  let fixture: ComponentFixture<FormCharacterGeneralComponent>;
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
    })
  })

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MaterialModule, BrowserAnimationsModule, FormsModule, ReactiveFormsModule],
      declarations: [ FormCharacterGeneralComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormCharacterGeneralComponent);
    component = fixture.componentInstance;
    component.newCharacterForm = newCharacterForm;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
