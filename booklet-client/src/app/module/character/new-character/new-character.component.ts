import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CreateCharacterDto } from 'src/app/core/dto/create-character-dto';
import { ChartConfiguration, ChartDataset } from 'chart.js';
import { Editor, toDoc } from 'ngx-editor';
@Component({
  selector: 'app-new-character',
  templateUrl: './new-character.component.html',
  styleUrls: ['./new-character.component.scss']
})
export class NewCharacterComponent implements OnInit {

  newCharacterForm: FormGroup;
  file!: Blob;

  public radarChartOptions: ChartConfiguration<'radar'>['options'] = {
    responsive: true,
  };
  public radarChartLabels: string[] = ['Eating', 'Drinking', 'Sleeping', 'Designing', 'Coding', 'Cycling', 'Running'];

  public radarChartDatasets: ChartConfiguration<'radar'>['data']['datasets'] = [
    { data: [65, 59, 90, 81, 56, 55, 40], label: 'Series A' },
    { data: [28, 48, 40, 19, 96, 27, 100], label: 'Series B' }
  ];

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
