import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';
import { CharacterService } from '@core/services/character.service';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { MaterialModule } from '@shared/material.module';
import { of } from 'rxjs';
import { DisplayCharacterDescriptionComponent } from '../component/display-character-description/display-character-description.component';

import { CharacterDetailComponent } from './character-detail.component';

describe('CharacterDetailComponent', () => {
  let component: CharacterDetailComponent;
  let fixture: ComponentFixture<CharacterDetailComponent>;
  let characterServiceSpy: jasmine.SpyObj<CharacterService>;

  let store: MockStore;
  const initialState = { selectedBook: null };

  beforeEach(async () => {

    characterServiceSpy = jasmine.createSpyObj('CharacterService', ['getCharacterById']);
    characterServiceSpy.getCharacterById.and.returnValue(of("createmock"))


    await TestBed.configureTestingModule({
      declarations: [ CharacterDetailComponent, DisplayCharacterDescriptionComponent ],
      imports: [RouterTestingModule, MaterialModule, BrowserAnimationsModule],
      providers: [
        {provide: CharacterService, useValue: characterServiceSpy},
        provideMockStore({ initialState }),
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CharacterDetailComponent);
    component = fixture.componentInstance;
    store = TestBed.inject(MockStore);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
