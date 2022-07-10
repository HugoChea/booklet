import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document } from 'mongoose';
import { Tag } from 'src/tag/schemas/tag.schema';
import { CategoryItem } from './category-item.schema';

export type CategoryDocument = Category & Document;

@Schema()
export class Category {

  _id: string

  @Prop()
  bookId: string;
  
  @Prop()
  name: string; // ex: Theme, Event, Personnage

  @Prop([{ type: mongoose.Schema.Types.ObjectId, ref: 'Tag' }])
  tags: Tag[];

  @Prop([{ type: mongoose.Schema.Types.ObjectId, ref: 'CategoryItem' }])
  categoryItems: CategoryItem[];

}

export const CategorySchema = SchemaFactory.createForClass(Category);
