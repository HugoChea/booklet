import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from '@shared/material/material.module';
import { NgxEditorModule } from 'ngx-editor';

import { PanelDescriptionComponent } from './panel-description.component';

describe('PanelDescriptionComponent', () => {
  let component: PanelDescriptionComponent;
  let fixture: ComponentFixture<PanelDescriptionComponent>;

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
        mbti: [''],
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
      imports: [MaterialModule, BrowserAnimationsModule, NgxEditorModule, FormsModule, ReactiveFormsModule],
      declarations: [ PanelDescriptionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PanelDescriptionComponent);
    component = fixture.componentInstance;
    component.newCharacterForm = newCharacterForm;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
