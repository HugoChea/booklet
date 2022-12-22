import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CharacterService } from '@core/services/character.service';
import { MaterialModule } from '@shared/material/material.module';

import { NewCharacterComponent } from './new-character.component';
import { of } from 'rxjs';
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Component, Input } from '@angular/core';
import { PanelAbilityComponent } from '../components/panel-ability/panel-ability.component';
import { ImageUploaderComponent } from '@shared/component/image-uploader/image-uploader.component';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { RouterTestingModule } from '@angular/router/testing';

@Component({
  selector: 'app-form-character-general',
  template: '',
})
class FakeFormCharacterGeneralComponent implements Partial<PanelAbilityComponent> {
  @Input()
  newCharacterForm!: FormGroup;
}

@Component({
  selector: 'app-panel-generality',
  template: '',
})
class FakePanelGeneralityComponent implements Partial<PanelAbilityComponent> {
  @Input()
  newCharacterForm!: FormGroup;
}

@Component({
  selector: 'app-panel-chronology',
  template: '',
})
class FakePanelChornologyComponent implements Partial<PanelAbilityComponent> {
  @Input()
  newCharacterForm!: FormGroup;
}

@Component({
  selector: 'app-panel-description',
  template: '',
})
class FakePanelDescriptionComponent implements Partial<PanelAbilityComponent> {
  @Input()
  newCharacterForm!: FormGroup;
}

@Component({
  selector: 'app-panel-relationship',
  template: '',
})
class FakePanelRelationshipComponent implements Partial<PanelAbilityComponent> {
  @Input()
  newCharacterForm!: FormGroup;
}


@Component({
  selector: 'app-panel-ability',
  template: '',
})
class FakePanelAbilityComponent implements Partial<PanelAbilityComponent> {
  @Input()
  newCharacterForm!: FormGroup;
}

describe('NewCharacterComponent', () => {
  let component: NewCharacterComponent;
  let fixture: ComponentFixture<NewCharacterComponent>;

  let characterServiceSpy: jasmine.SpyObj<CharacterService>;

  let store: MockStore;
  const initialState = { selectedBook: null };

  beforeEach(async () => {
    characterServiceSpy = jasmine.createSpyObj('CharacterService', ['createCharacter']);
    characterServiceSpy.createCharacter.and.returnValue(of("createCharmock"))
    await TestBed.configureTestingModule({
      imports: [MaterialModule, BrowserAnimationsModule, FormsModule, ReactiveFormsModule, RouterTestingModule],
      declarations: [ NewCharacterComponent, FakeFormCharacterGeneralComponent, FakePanelGeneralityComponent, FakePanelChornologyComponent, FakePanelDescriptionComponent, FakePanelRelationshipComponent, FakePanelAbilityComponent, ImageUploaderComponent ],
      providers: [
        { provide: CharacterService, useValue: characterServiceSpy },
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
});
