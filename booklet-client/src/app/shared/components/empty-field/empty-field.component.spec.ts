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

  [
    {
      given: {
        number: 0
      },
      then: {
        icon: 'coffee',
        term: 'coffee'
      }
    },
    {
      given: {
        number: 1
      },
      then: {
        icon: 'kebab_dining',
        term: 'kebab'
      }
    },
    {
      given: {
        number: 2
      },
      then: {
        icon: 'sports_bar',
        term: 'beer'
      }
    },
    {
      given: {
        number: 3
      },
      then: {
        icon: 'fastfood',
        term: 'burger'
      }
    },
    {
      given: {
        number: 4
      },
      then: {
        icon: 'icecream',
        term: 'ice cream'
      }
    },
    {
      given: {
        number: 5
      },
      then: {
        icon: 'ramen_dining',
        term: 'noodle'
      }
    },
    {
      given: {
        number: 6
      },
      then: {
        icon: 'coffee',
        term: 'coffee'
      }
    }
  ].forEach(scenario => {
    it('should have correct icon with correct term', () => {
      spyOn(Math, 'floor').and.callFake(()=>scenario.given.number);
      fixture = TestBed.createComponent(EmptyFieldComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
      expect(component.icon).toBe(scenario.then.icon);
      expect(component.term).toBe(scenario.then.term);
    });
  });
});
