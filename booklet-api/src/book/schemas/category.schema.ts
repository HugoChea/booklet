import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document } from 'mongoose';
import { Book } from './book.schema';
import { CategoryItem } from './category-item.schema';

export type CategoryDocument = Category & Document;

@Schema()
export class Category {

  _id: string

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Book' })
  book: Book;
  
  @Prop()
  name: string; // ex: Theme, Event, Personnage

  @Prop([{ type: mongoose.Schema.Types.ObjectId, ref: 'CategoryItem' }])
  categoryItems: CategoryItem;

}

export const CategorySchema = SchemaFactory.createForClass(Category);
