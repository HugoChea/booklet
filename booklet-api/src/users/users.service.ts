import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { create } from 'domain';
import { Model } from 'mongoose';
import { CreateUserDto } from './dto/CreateUserDto';
import { User, UserDocument } from './schemas/user.schema';

@Injectable()
export class UsersService {

  constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {
  }

  async findOneByUsernameOrEmail(username?: string, email?: string): Promise<User | undefined> {
    return this.userModel.findOne({$or: [{username: username}, {email: email}]});
  }

  async findOneByUsername(username: string): Promise<User | undefined> {
    return this.userModel.findOne({ username: username }).exec();
  }

  async createUser(user: CreateUserDto): Promise<User> {
    const createdUser = new this.userModel(user);

    return createdUser.save();
  }
}
