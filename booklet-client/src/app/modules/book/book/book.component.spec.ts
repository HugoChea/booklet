import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from '@shared/material.module';
import { BookService } from '@core/services/book.service';
import { provideMockStore, MockStore } from '@ngrx/store/testing';
import { of } from 'rxjs';

import { BookComponent } from './book.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('BookComponent', () => {
  let component: BookComponent;
  let fixture: ComponentFixture<BookComponent>;

  let store: MockStore;
  const initialState = { selectedBook: null };

  let bookServiceSpy: jasmine.SpyObj<BookService>;

  beforeEach(async () => {

    bookServiceSpy = jasmine.createSpyObj('BookService', ['getListBookByUser']);
    bookServiceSpy.getListBookByUser.and.returnValue(of("getlistmock"))

    await TestBed.configureTestingModule({
      declarations: [BookComponent],
      imports: [MaterialModule, BrowserAnimationsModule, RouterTestingModule],
      providers: [
        { provide: BookService, useValue: bookServiceSpy },
        provideMockStore({ initialState }),
      ]
    })
      .compileComponents();

    fixture = TestBed.createComponent(BookComponent);
    component = fixture.componentInstance;
    store = TestBed.inject(MockStore);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
