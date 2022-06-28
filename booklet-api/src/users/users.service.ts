import { Injectable } from '@nestjs/common';
import { User } from './schemas/user.schema';

@Injectable()
export class UsersService {

    private readonly users = [
        {
          _id: '1',
          username: 'john',
          password: 'changeme',
        },
        {
          _id: '2',
          username: 'maria',
          password: 'guess',
        },
      ];

    async findOne(username: string): Promise<User | undefined> {
        return this.users.find(user => user.username === username);
    }
}
