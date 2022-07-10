import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { BookModule } from './book/book.module';
import { TagModule } from './tag/tag.module';
import { CharacterModule } from './character/character.module';

const uri =
  process.env.MONGO_URI ||
  'mongodb://root:root@localhost:27017/bookletDB';

@Module({
  imports: [AuthModule, UsersModule, MongooseModule.forRoot(uri), BookModule, CharacterModule, TagModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
