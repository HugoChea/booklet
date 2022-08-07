import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CreateCharacterDto } from 'src/app/core/dto/create-character-dto';
import { Description } from 'src/app/core/models/character/description';

@Component({
  selector: 'app-new-character',
  templateUrl: './new-character.component.html',
  styleUrls: ['./new-character.component.scss']
})
export class NewCharacterComponent implements OnInit {

  newCharacterForm: FormGroup;
  chronology!: string;
  relationship!: string;

  file!: Blob;

  constructor(private formBuilder: FormBuilder) {

    this.newCharacterForm = this.formBuilder.group({
      profile: this.formBuilder.group({
        generalInfo: this.formBuilder.group({
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
        physicalInfo: this.formBuilder.group({
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
        psychologicInfo: this.formBuilder.group({
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
      description: this.formBuilder.group({
        summary: [''],
        personality: [''],
        background: ['']
      }),
      abilities: this.formBuilder.group({
        physicalAbility: [''],
        magicalAbility: [''],
        equipement: [''],
        stats: this.formBuilder.array([])
      })
    })
  }

  ngOnInit(): void {

  }

  uploadFile(file: Blob) {
    this.file = file;
  }

  create(createCharacterDto: CreateCharacterDto) {
    console.log(this.newCharacterForm.valid)
    console.log(createCharacterDto.abilities)
  }
}
