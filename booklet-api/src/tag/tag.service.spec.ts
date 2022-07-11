import { getModelToken } from '@nestjs/mongoose';
import { Test, TestingModule } from '@nestjs/testing';
import { Tag } from './schemas/tag.schema';
import { TagService } from './tag.service';

describe('TagService', () => {
  let service: TagService;
  const mockRepository = {
    find() {
      return {};
    }
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        TagService,
        {provide: getModelToken(Tag.name), useValue: mockRepository},
      ],
    }).compile();

    service = module.get<TagService>(TagService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
