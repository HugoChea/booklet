import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from '@shared/material/material.module';

import { PanelChronologyComponent } from './panel-chronology.component';

describe('PanelChronologyComponent', () => {
  let component: PanelChronologyComponent;
  let fixture: ComponentFixture<PanelChronologyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MaterialModule, BrowserAnimationsModule],
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
