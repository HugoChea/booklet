import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from '@shared/material/material.module';

import { PanelGeneralityComponent } from './panel-generality.component';

describe('PanelGeneralityComponent', () => {
  let component: PanelGeneralityComponent;
  let fixture: ComponentFixture<PanelGeneralityComponent>;
  const formBuilder: FormBuilder = new FormBuilder();
  const newCharacterForm = formBuilder.group({
    profile: formBuilder.group({
      generalInfo: formBuilder.group({
        firstname: [''],
        lastname: [''],
        surname: [''],
        quote: [''],
        cv: [''],
        race: [''],
        sexe: [''],
        nationality: [''],
        age: [''],
        birthdate: [''],
        birthplace: ['']
      }),
      physicalInfo: formBuilder.group({
        height: [''],
        weight: [''],
        hair: [''],
        eyes: [''],
        dressStyle: [''],
        accessories: ['']
      }),
      psychologicInfo: formBuilder.group({
        mbtiFocus: [''],
        mbtiInformation: [''],
        mbtiDecision: [''],
        mbtiLife: [''],
        intelligence: [''],
        selfConfidence: [''],
        flaws: [''],
        qualities: [''],
        politicalAttitude: [''],
        selfPerception: [''],
        othersPerception: [''],
        regrets: [''],
        accomplishments: [''],
        shortTermGoals: [''],
        longTermGoals: [''],
        goalsFeasability: [''],
        hobbies: [''],
        specialTalents: [''],
        unskilledAt: [''],
        likes: [''],
        dislikes: ['']
      })
    }),
    description: formBuilder.group({
      localisation: [''],
      livingWith: [''],
      homeDescription: [''],
      neighbourhood: [''],
      occupation: [''],
      jobSatisfaction: [''],
      summary: [''],
      background: [''],
      personality: ['']
    }),
    abilities: formBuilder.group({
      physicalAbility: [''],
      magicalAbility: [''],
      equipement: [''],
      stats: formBuilder.array([])
    }),
    relationship: formBuilder.array([])
  });
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MaterialModule, BrowserAnimationsModule, FormsModule, ReactiveFormsModule, FormsModule, ReactiveFormsModule],
      declarations: [ PanelGeneralityComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PanelGeneralityComponent);
    component = fixture.componentInstance;
    component.newCharacterForm = newCharacterForm;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
