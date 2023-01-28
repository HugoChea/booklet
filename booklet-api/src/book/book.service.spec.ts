import { getModelToken } from '@nestjs/mongoose';
import { Test, TestingModule } from '@nestjs/testing';
import { ImageUploaderService } from 'src/common/services/image-uploader/image-uploader.service';
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
        ImageUploaderService,
        {provide: getModelToken(Book.name), useValue: mockRepository},
      ],
    }).compile();

    service = module.get<BookService>(BookService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
