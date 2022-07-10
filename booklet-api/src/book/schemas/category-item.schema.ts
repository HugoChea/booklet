import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type CategoryItemDocument = CategoryItem & Document;

@Schema()
export class CategoryItem {

  _id: string

  @Prop()
  name: string; // ex: Theme, Event, Personnage

  @Prop()
  tags: string; // tags

  // name: string,
  // balise: string,
  // image: string,
  // metadata: Metadata[],
  // relations: Relationship,
  // remarque: string,
  // texte: string,
  // updatedAt: Date

}

export const CategoryItemSchema = SchemaFactory.createForClass(CategoryItem);
