import { getModelToken, MongooseModule } from '@nestjs/mongoose';
import { Test, TestingModule } from '@nestjs/testing';
import { User, UserSchema } from './schemas/user.schema';
import { UsersService } from './users.service';

describe('UsersService', () => {
  let service: UsersService;

  const mockRepository = {
    findOne() {
      return {};
    }
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [MongooseModule.forFeature([{ name: User.name, schema: UserSchema }])],
      providers: [
        UsersService
      ],
    }).overrideProvider(getModelToken(User.name)).useValue(mockRepository).compile();

    service = module.get<UsersService>(UsersService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
