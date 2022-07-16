import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';
import { Book, BookDocument } from './schemas/book.schema';
import { getDownloadURL, getStorage, ref, uploadBytes } from "firebase/storage";
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class BookService {

  constructor(@InjectModel(Book.name) private bookModel: Model<BookDocument>) {
  }

  async create(createBookDto: CreateBookDto, file?: Buffer): Promise<Book> {

    if (file){
      const image: [string, string] = await this.uploadImage(file);
      createBookDto.image = image[0];
      createBookDto.imageRef = image[1];
    }

    const newBook = new this.bookModel(createBookDto);

    return newBook.save();
  }

  findAll() {
    return `This action returns all book`;
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

  async uploadImage(file: Buffer): Promise<[string, string]> {

    const storage = getStorage();
    const refName = "book/" + uuidv4();
    const imageRef = ref(storage, refName);

    await uploadBytes(imageRef, file, {
      contentType: 'image/jpg',
    })

    const url = await getDownloadURL(ref(storage, refName))

    return [url, refName];
  }
}
