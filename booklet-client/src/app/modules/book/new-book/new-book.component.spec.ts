import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BookService } from '@core/services/book.service';
import { of } from 'rxjs';

import { NewBookComponent } from './new-book.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '@shared/material/material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ImageUploaderComponent } from '@shared/component/image-uploader/image-uploader.component';

describe('NewBookComponent', () => {
  let component: NewBookComponent;
  let fixture: ComponentFixture<NewBookComponent>;

  let bookServiceSpy: jasmine.SpyObj<BookService>;

  beforeEach(async () => {

    bookServiceSpy = jasmine.createSpyObj('BookService', ['createBook']);
    bookServiceSpy.createBook.and.returnValue(of("createmock"))

    await TestBed.configureTestingModule({
      declarations: [ NewBookComponent, ImageUploaderComponent ],
      imports: [FormsModule, ReactiveFormsModule, MaterialModule, BrowserAnimationsModule],
      providers: [
        {provide: BookService, useValue: bookServiceSpy},
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewBookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
