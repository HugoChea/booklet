import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from '@shared/material.module';

import { PanelRelationshipComponent } from './panel-relationship.component';

describe('PanelRelationshipComponent', () => {
  let component: PanelRelationshipComponent;
  let fixture: ComponentFixture<PanelRelationshipComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MaterialModule, BrowserAnimationsModule],
      declarations: [ PanelRelationshipComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PanelRelationshipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
