import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type BookDocument = Book & Document;

@Schema()
export class Book {

  _id: string

  @Prop()
  userId: string;
  
  @Prop()
  name: string;

  @Prop()
  image: string;

  @Prop()
  imageRef: string;

}

export const BookSchema = SchemaFactory.createForClass(Book);
