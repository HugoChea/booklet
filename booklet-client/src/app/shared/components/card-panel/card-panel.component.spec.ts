import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatCardModule } from '@angular/material/card';

import { CardPanelComponent } from './card-panel.component';

describe('CardPanelComponent', () => {
  let component: CardPanelComponent;
  let fixture: ComponentFixture<CardPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ MatCardModule ],
      declarations: [ CardPanelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
