import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type BookDocument = Book & Document;

@Schema()
export class Book {

  _id: string
  
  @Prop()
  name: string;

}

export const UserSchema = SchemaFactory.createForClass(Book);
