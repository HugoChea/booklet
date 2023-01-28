import { Module } from '@nestjs/common';
import { BookService } from './book.service';
import { BookController } from './book.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Book, BookSchema } from './schemas/book.schema';
import { ImageUploaderService } from 'src/common/services/image-uploader/image-uploader.service';

@Module({
  imports: [MongooseModule.forFeature([{ name: Book.name, schema: BookSchema }])],
  controllers: [BookController],
  providers: [
    BookService,
    ImageUploaderService
  ]
})
export class BookModule {}
