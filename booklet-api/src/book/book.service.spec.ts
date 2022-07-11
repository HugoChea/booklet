import { getModelToken } from '@nestjs/mongoose';
import { Test, TestingModule } from '@nestjs/testing';
import { BookService } from './book.service';
import { Book } from './schemas/book.schema';

describe('BookService', () => {
  let service: BookService;
  const mockRepository = {
    find() {
      return {};
    }
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        BookService,
        {provide: getModelToken(Book.name), useValue: mockRepository},
      ],
    }).compile();

    service = module.get<BookService>(BookService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
