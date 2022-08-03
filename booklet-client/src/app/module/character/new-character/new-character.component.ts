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
  description!: Description;
  chronology!: string;
  relationship!: string;

  file!: Blob;

  constructor(private formBuilder: FormBuilder) {

    this.newCharacterForm = this.formBuilder.group({
      name: ['', Validators.required],
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
          hometown: [''],
          currentPlace: [''],
          homeDescription: [''],
          neighbourhood: [''],
          occupation: [''],
          jobSatisfaction: [''],
          finance: [''],
          income: [''],
          personalHabits: [''],
          hobbies: [''],
          favoriteSports: [''],
          favoriteFoods: [''],
          favoriteMusics: [''],
          favoriteMovies: [''],
          favoriteHolidays: [''],
          favoriteSaying: [''],
        }),
        physicalInfo: this.formBuilder.group({
          height: [''],
          weight: [''],
          bodyshape: [''],
          hair: [''],
          ethnicity: [''],
          species: [''],
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
          style: [''],
          flaws: [''],
          qualities: ['']
        }),
        psychologicInfo: this.formBuilder.group({
          education: [''],
          intelligence: [''],
          grade: [''],
          attitudeTowardSchool: [''],
          mentalIllness: [''],
          learningExperiences: [''],
          positivePersonalityTraits: [''],
          negativePersonalityTraits: [''],
          badHabits: [''],
          philosophyOfLife: [''],
          politicalAttitude: [''],
          shortTermGoals: [''],
          longTermGoals: [''],
          goalAchievement: [''],
          greatestDream: [''],
          secretDream: [''],
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
        equipement: ['']
      })
    })
  }

  ngOnInit(): void {

  }

  uploadFile(file: Blob) {
    this.file = file;
  }

  create(createCharacterDto: CreateCharacterDto) {
    console.log(createCharacterDto.description)
  }
}
