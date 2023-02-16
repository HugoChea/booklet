import { Test, TestingModule } from '@nestjs/testing';
import { ParseUtilitiesService } from './parse-utilities.service';

describe('ParseUtilitiesService', () => {
  let service: ParseUtilitiesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ParseUtilitiesService],
    }).compile();

    service = module.get<ParseUtilitiesService>(ParseUtilitiesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
