import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CreateCharacterDto } from 'src/app/core/dto/create-character-dto';

@Component({
  selector: 'app-new-character',
  templateUrl: './new-character.component.html',
  styleUrls: ['./new-character.component.scss']
})
export class NewCharacterComponent implements OnInit {

  newCharacterForm: FormGroup;
  file!: Blob;

  constructor(private formBuilder: FormBuilder) {
    this.newCharacterForm = this.formBuilder.group({
      firstname: ['', Validators.required],
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
      // physical
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
      qualities: [''],
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
      description: [''],
      story: [''],
      //relationship
      // relationshiptype
      //skills & abilities
      skills: [''],
      abilities: [''],
      // stats
    })
  }

  ngOnInit(): void {
    
  }

  uploadFile(file: Blob){
    this.file = file;
  }

  create(createCharacterDto: CreateCharacterDto){
  }
}
