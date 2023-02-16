import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CharacterService } from '@core/services/character.service';
import { MaterialModule } from '@shared/material/material.module';
import { NewCharacterComponent } from './new-character.component';
import { of, throwError } from 'rxjs';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ImageUploaderComponent } from '@shared/components/image-uploader/image-uploader.component';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ActionsHeaderComponent } from '@shared/components/actions-header/actions-header.component';
import { CreateCharacterDto } from '@core/dto/create-character-dto';
import { FakeFormCharacterGeneralComponent, FakePanelGeneralityComponent, FakePanelChornologyComponent, FakePanelDescriptionComponent, FakePanelRelationshipComponent, FakePanelAbilityComponent } from './mocks/fake-components.mock.spec';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Status } from '@core/enums/status.enum';
import { Book } from '@core/models/book/book';

describe('NewCharacterComponent', () => {
  let component: NewCharacterComponent;
  let fixture: ComponentFixture<NewCharacterComponent>;

  let characterServiceSpy: jasmine.SpyObj<CharacterService>;
  let snackbarSpy: jasmine.SpyObj<MatSnackBar>;

  let store: MockStore;
  const initialState = { selectedBook: null };

  beforeEach(async () => {
    characterServiceSpy = jasmine.createSpyObj('CharacterService', ['createCharacter']);
    snackbarSpy = jasmine.createSpyObj('MatSnackBar', ['open']);
    
    await TestBed.configureTestingModule({
      imports: [MaterialModule, BrowserAnimationsModule, FormsModule, ReactiveFormsModule, RouterTestingModule],
      declarations: [
        NewCharacterComponent,
        FakeFormCharacterGeneralComponent,
        FakePanelGeneralityComponent,
        FakePanelChornologyComponent,
        FakePanelDescriptionComponent,
        FakePanelRelationshipComponent,
        FakePanelAbilityComponent,
        ImageUploaderComponent,
        ActionsHeaderComponent
      ],
      providers: [
        { provide: CharacterService, useValue: characterServiceSpy },
        { provide: MatSnackBar, useValue: snackbarSpy },
        provideMockStore({ initialState }),
      ]
    })
      .compileComponents();

    fixture = TestBed.createComponent(NewCharacterComponent);
    component = fixture.componentInstance;
    store = TestBed.inject(MockStore);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should set the book property when selected book changes', () => {
    const selectedBook = { id: 1, title: 'Book 1' };
    const selectedBook$ = of(selectedBook);
    spyOn(selectedBook$, 'pipe').and.returnValue(selectedBook$);
    spyOn(store, 'select').and.returnValue(selectedBook$);
    component.ngOnInit();
    expect(component.book).toEqual(selectedBook as unknown as Book);
  });

  describe('createCharacter', () => {
    beforeEach(() => {
      component.newCharacterForm = new FormGroup({
        field: new FormControl('somefield')
      });
      component.newCharacterForm.markAsDirty();
    });

    it('should create a character successfully', () => {
      const createCharacterDto: CreateCharacterDto = {
        book: '12345',
        imageBase64: 'base64ImageString',
        status: Status.TODO,
      } as CreateCharacterDto;
  
      characterServiceSpy.createCharacter.and.returnValue(of({} as CreateCharacterDto));

      component.create(createCharacterDto);

      expect(characterServiceSpy.createCharacter).toHaveBeenCalledWith(createCharacterDto);
      expect(snackbarSpy.open).toHaveBeenCalledWith('Character successfully created', '', {
        duration: 5000,
        horizontalPosition: "center",
        verticalPosition: "top",
      });
    });

    it('should display an error message if character creation fails', () => {
      const createCharacterDto: CreateCharacterDto = {
        book: '12345',
        imageBase64: 'base64ImageString',
        status: Status.TODO,
      } as CreateCharacterDto;
  
      characterServiceSpy.createCharacter.and.returnValue(throwError(() => new Error()));

      component.create(createCharacterDto);

      expect(characterServiceSpy.createCharacter).toHaveBeenCalledWith(createCharacterDto);
      expect(snackbarSpy.open).toHaveBeenCalledWith('Something happened', '', {
        duration: 5000,
        horizontalPosition: "center",
        verticalPosition: "top",
      });
    });
  });

  describe('uploadFile', () => {
    it('should set the file property if a file is provided', () => {
      const file = 'base64ImageString';
  
      component.uploadFile(file);
  
      expect(component.file).toEqual(file);
    });
  
    it('should not set the file property if no file is provided', () => {
      const file = null;
  
      component.uploadFile(file);
  
      expect(component.file).toBeUndefined();
    });
  });

});
