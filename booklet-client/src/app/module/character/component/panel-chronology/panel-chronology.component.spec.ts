import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PanelChronologyComponent } from './panel-chronology.component';

describe('PanelChronologyComponent', () => {
  let component: PanelChronologyComponent;
  let fixture: ComponentFixture<PanelChronologyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PanelChronologyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PanelChronologyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
