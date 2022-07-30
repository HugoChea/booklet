import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PanelGeneralityComponent } from './panel-generality.component';

describe('PanelGeneralityComponent', () => {
  let component: PanelGeneralityComponent;
  let fixture: ComponentFixture<PanelGeneralityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PanelGeneralityComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PanelGeneralityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
