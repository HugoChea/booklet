import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { environment } from '@env';

import { BookService } from './book.service';
import { mockCreateBookDto } from './mocks/book.mock.spec';

const apiURL = environment.url + '/book';

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

  it('createBook', () => {
    service.createBook(mockCreateBookDto).subscribe(
      (createBookDto) => {
        // TODO : improve test case
        console.log(createBookDto);
      }
    );
    
    controller.expectOne(apiURL);
  });

  it('getListBookByUser', () => {
    service.getListBookByUser("123").subscribe(
      (listBook) => {
        // TODO : improve test case
        console.log(listBook);
      }
    );
    
    controller.expectOne(apiURL + "/list/123");
  });
});
