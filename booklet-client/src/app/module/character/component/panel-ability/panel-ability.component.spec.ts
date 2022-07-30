import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PanelAbilityComponent } from './panel-ability.component';

describe('PanelAbilityComponent', () => {
  let component: PanelAbilityComponent;
  let fixture: ComponentFixture<PanelAbilityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PanelAbilityComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PanelAbilityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
