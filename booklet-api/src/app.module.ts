import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './users/user.module';
import { BookModule } from './book/book.module';
import { TagModule } from './tag/tag.module';
import { CharacterModule } from './character/character.module';
import { ConfigModule, ConfigService } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    MongooseModule.forRootAsync(
      {
        imports: [ConfigModule],
        inject: [ConfigService],
        useFactory: async (config: ConfigService) => ({
          uri: process.env.MONGO_URI || config.get<string>('MONGODB_URI'), // Loaded from .ENV
        })
      }
    ),
    AuthModule,
    UserModule,
    BookModule,
    CharacterModule,
    TagModule
  ]
})
export class AppModule { }
