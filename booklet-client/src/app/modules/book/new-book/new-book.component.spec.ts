import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BookService } from '@core/services/book.service';
import { of } from 'rxjs';

import { NewBookComponent } from './new-book.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '@shared/material/material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ImageUploaderComponent } from '@shared/components/image-uploader/image-uploader.component';
import { ActionsHeaderComponent } from '@shared/components/actions-header/actions-header.component';
import { CreateBookDto } from '@core/dto/create-book-dto';

describe('NewBookComponent', () => {
  let component: NewBookComponent;
  let fixture: ComponentFixture<NewBookComponent>;

  let bookServiceSpy: jasmine.SpyObj<BookService>;

  beforeEach(async () => {

    bookServiceSpy = jasmine.createSpyObj('BookService', ['createBook']);
    const mockBook: CreateBookDto = {} as CreateBookDto;
    bookServiceSpy.createBook.and.returnValue(of(mockBook));

    await TestBed.configureTestingModule({
      declarations: [ NewBookComponent, ImageUploaderComponent, ActionsHeaderComponent],
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
