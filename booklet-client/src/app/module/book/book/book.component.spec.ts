import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from '@shared/material.module';
import { BookService } from '@core/services/book.service';
import { of } from 'rxjs';

import { BookComponent } from './book.component';

describe('BookComponent', () => {
  let component: BookComponent;
  let fixture: ComponentFixture<BookComponent>;

  let bookServiceSpy: jasmine.SpyObj<BookService>;

  beforeEach(async () => {

    bookServiceSpy = jasmine.createSpyObj('BookService', ['getListBookByUser']);
    bookServiceSpy.getListBookByUser.and.returnValue(of("getlistmock"))

    await TestBed.configureTestingModule({
      declarations: [BookComponent],
      imports: [MaterialModule, BrowserAnimationsModule],
      providers: [
        { provide: BookService, useValue: bookServiceSpy },
      ]
    })
      .compileComponents();

    fixture = TestBed.createComponent(BookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
