import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NgChartsModule } from 'ng2-charts';

import { RadarGraphComponent } from './radar-graph.component';

describe('GraphComponent', () => {
  let component: RadarGraphComponent;
  let fixture: ComponentFixture<RadarGraphComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ NgChartsModule ],
      declarations: [ RadarGraphComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RadarGraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
