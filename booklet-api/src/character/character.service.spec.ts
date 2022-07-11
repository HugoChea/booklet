import { getModelToken } from '@nestjs/mongoose';
import { Test, TestingModule } from '@nestjs/testing';
import { CharacterService } from './character.service';
import { Character } from './schemas/character.schema';

describe('CharacterService', () => {
  let service: CharacterService;

  const mockRepository = {
    find() {
      return {};
    }
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        CharacterService,
        {provide: getModelToken(Character.name), useValue: mockRepository},
      ],
    }).compile();

    service = module.get<CharacterService>(CharacterService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
