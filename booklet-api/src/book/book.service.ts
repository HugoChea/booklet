import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';
import { Book, BookDocument } from './schemas/book.schema';
import { getStorage, ref, uploadString  } from "firebase/storage";

@Injectable()
export class BookService {

  constructor(@InjectModel(Book.name) private bookModel: Model<BookDocument>) {
  }

  create(createBookDto: CreateBookDto) {
    // Create a root reference
//     const storage = getStorage();
// ;
//     // Create a reference to 'images/mountains.jpg'
//     const susImagesRef = ref(storage, 'images/sus.jpg');
    
//     uploadString(susImagesRef, sus, 'base64', {contentType: 'image/jpeg',}).then((snapshot) => {
//       console.log('Uploaded a base64 string!');
//     });
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
}
