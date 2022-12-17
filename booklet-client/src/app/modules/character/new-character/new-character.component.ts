import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CreateCharacterDto } from '@core/dto/create-character-dto';
import { Book } from '@core/models/book/book';
import { CharacterService } from '@core/services/character.service';
import { Store } from '@ngrx/store';
import { selectedBook } from '@core/store/selectors/books.selectors';

@Component({
  selector: 'app-new-character',
  templateUrl: './new-character.component.html',
  styleUrls: ['./new-character.component.scss']
})
export class NewCharacterComponent implements OnInit {

  /**
   * Form to create a new character
   * Shared with children component
   */
  newCharacterForm: FormGroup;

  /**
   * Not used yet (maybe specific type not used in form group ?)
   */
  chronology!: string;
  relationship!: string;

  /**
   * File uploaded in base64
   */
  file!: string;

  book?: Book;

  books$ = this.store.select(selectedBook);

  constructor(
    private characterService: CharacterService,
    private formBuilder: FormBuilder,
    private snackbar: MatSnackBar,
    private store: Store
    ) {

    this.newCharacterForm = this.formBuilder.group({
      profile: this.formBuilder.group({
        generalInfo: this.formBuilder.group({
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
        physicalInfo: this.formBuilder.group({
          height: [''],
          weight: [''],
          hair: [''],
          eyes: [''],
          dressStyle: [''],
          accessories: ['']
        }),
        psychologicInfo: this.formBuilder.group({
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
      description: this.formBuilder.group({
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
      abilities: this.formBuilder.group({
        physicalAbility: [''],
        magicalAbility: [''],
        equipement: [''],
        stats: this.formBuilder.array([])
      }),
      relationship: this.formBuilder.array([])
    })
  }

  ngOnInit(): void {
    this.books$.subscribe({
      next : (res) => {
        this.book = res;
      }
    })
  }

  /**
   * Get output value from child component image-uploader
   * @param file 
   */
  uploadFile(file: string) {
    if (file){
      this.file = file;
    }
  }

  /**
   * Call service to perform http call
   * @param createCharacterDto 
   */
  create(createCharacterDto: CreateCharacterDto) {
    if (this.newCharacterForm.valid && !this.newCharacterForm.pristine) {
      createCharacterDto.book = this.book?._id ? this.book._id : '';
      createCharacterDto.imageBase64 = this.file;
      createCharacterDto.status = "Todo";
      this.characterService.createCharacter(createCharacterDto).subscribe({
        next: (res) => {
          this.snackbar.open('Character successfully created', '', {
            duration: 5000,
            horizontalPosition: "center",
            verticalPosition: "top",
          });
        },
        error: (error) => {
          this.snackbar.open('Something happened', '', {
            duration: 5000,
            horizontalPosition: "center",
            verticalPosition: "top",
          });
        }
      });
    }
  }
}
