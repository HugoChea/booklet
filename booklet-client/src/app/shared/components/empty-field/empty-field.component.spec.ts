import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatIconModule } from '@angular/material/icon';

import { EmptyFieldComponent } from './empty-field.component';

describe('EmptyFieldComponent', () => {
  let component: EmptyFieldComponent;
  let fixture: ComponentFixture<EmptyFieldComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ MatIconModule ],
      declarations: [ EmptyFieldComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmptyFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
