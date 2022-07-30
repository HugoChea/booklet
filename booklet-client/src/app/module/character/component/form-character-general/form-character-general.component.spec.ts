import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormCharacterGeneralComponent } from './form-character-general.component';

describe('FormCharacterGeneralComponent', () => {
  let component: FormCharacterGeneralComponent;
  let fixture: ComponentFixture<FormCharacterGeneralComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormCharacterGeneralComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormCharacterGeneralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
