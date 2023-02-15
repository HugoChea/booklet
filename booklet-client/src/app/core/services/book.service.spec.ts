import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { CreateBookDto } from '@core/dto/create-book-dto';
import { Book } from '@core/models/book/book';
import { environment } from '@env';

import { BookService } from './book.service';
import { mockCreateBookDto } from './mocks/book.mock.spec';

describe('BookService', () => {
  let service: BookService;
  let controller: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(BookService);
    controller = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('createBook', () => {

    const expectedUrl = environment.url + '/book';

    it('should complete create book http call on success', () => {
      // GIVEN
      const expectedResponse = {
        data: {...mockCreateBookDto},
      };
      let actualResponse: CreateBookDto | undefined;

      // WHEN
      service.createBook(mockCreateBookDto).subscribe({
        next: (response) => {
          actualResponse = response;
        },
      });

      // THEN
      const request = controller.expectOne(expectedUrl);
      request.flush(expectedResponse);
      controller.verify();
      expect(actualResponse).toEqual(expectedResponse.data);
    });
  });

  describe('get list book by user', () => {

    const expectedUrl = environment.url + '/book/list/123';

    it('should complete get book http call on success', () => {
      // GIVEN
      const expectedResponse = {
        data: [],
      };
      let actualResponse: Book[] | undefined;

      // WHEN
      service.getListBookByUser("123").subscribe({
        next: (response) => {
          actualResponse = response;
        },
      });

      // THEN
      const request = controller.expectOne(expectedUrl);
      request.flush(expectedResponse);
      controller.verify();
      expect(actualResponse).toEqual(expectedResponse.data);
    });
  });

});
