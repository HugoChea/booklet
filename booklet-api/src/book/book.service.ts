import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';
import { Book, BookDocument } from './schemas/book.schema';
import { ImageUploaderService } from 'src/common/services/image-uploader/image-uploader.service';

@Injectable()
export class BookService {

  constructor(
    @InjectModel(Book.name) private bookModel: Model<BookDocument>,
    private imageUploaderService: ImageUploaderService
  ) { }

  async create(createBookDto: CreateBookDto): Promise<Book> {
    if (createBookDto.imageBase64){
      const image: [string, string] = await this.imageUploaderService.uploadImage(createBookDto.imageBase64, 'book');
      createBookDto.image = image[0];
      createBookDto.imageRef = image[1];
    }
    const newBook = new this.bookModel(createBookDto);
    return newBook.save();
  }

  findAll(userId: string): Promise<Book[]> {
    return this.bookModel.find({ 'userId': userId }).exec();
  }

  findOne(id: number) {
    return `This action returns a #${id} book`;
  }

  update(id: number, updateBookDto: UpdateBookDto) {
    return `This action updates a #${id} book`;
  }

  remove(id: number) {
    return `This action removes a #${id} book`;
  }

}
