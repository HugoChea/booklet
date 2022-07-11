import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document } from 'mongoose';
import { Tag } from 'src/tag/schemas/tag.schema';
import { CharacteristicValue } from '../entities/characterictic-value.entity';

export type CategoryItemDocument = CategoryItem & Document;

@Schema({
  timestamps: true,
})
export class CategoryItem {

  _id: string

  @Prop()
  name: string; // ex: Theme, Event, Personnage

  @Prop([{ type: mongoose.Schema.Types.ObjectId, ref: 'Tag' }])
  tags: Tag;

  // image: string,

  @Prop()
  characteristicValue: CharacteristicValue[];
  // relations: Relationship,
  // remarque: string,
  // texte: string,
  @Prop()
  text: string;

}

export const CategoryItemSchema = SchemaFactory.createForClass(CategoryItem);
