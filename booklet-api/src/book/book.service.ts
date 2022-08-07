import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';
import { Book, BookDocument } from './schemas/book.schema';
import { getDownloadURL, getStorage, ref, uploadString } from "firebase/storage";
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class BookService {

  constructor(@InjectModel(Book.name) private bookModel: Model<BookDocument>) {
  }

  async create(createBookDto: CreateBookDto): Promise<Book> {
    if (createBookDto.imageBase64){
      const image: [string, string] = await this.uploadImage(createBookDto.imageBase64);
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

  async uploadImage(file: string): Promise<[string, string]> {
    const storage = getStorage();
    const refName = "book/" + uuidv4();
    const imageRef = ref(storage, refName);

    await uploadString(imageRef, file, 'data_url')

    const url = await getDownloadURL(ref(storage, refName))

    return [url, refName];
  }
}
