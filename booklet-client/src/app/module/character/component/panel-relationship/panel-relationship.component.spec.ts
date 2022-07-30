import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PanelRelationshipComponent } from './panel-relationship.component';

describe('PanelRelationshipComponent', () => {
  let component: PanelRelationshipComponent;
  let fixture: ComponentFixture<PanelRelationshipComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
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
