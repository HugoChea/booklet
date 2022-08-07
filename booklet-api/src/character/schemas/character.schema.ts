import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document } from 'mongoose';
import { Book } from 'src/book/schemas/book.schema';
import { Tag } from 'src/tag/schemas/tag.schema';
import { Ability } from './abilitiy.schema';
import { Description } from './description.schema';
import { Profile } from './profile.schema';

export type CharacterDocument = Character & Document;

@Schema({
  timestamps: true,
})
export class Character {

  _id: string

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Book' })
  book: Book;

  @Prop([{ type: mongoose.Schema.Types.ObjectId, ref: 'Tag' }])
  tags: Tag;

  @Prop()
  image: string;

  @Prop()
  imageRef: string;

  @Prop()
  profile: Profile;

  @Prop()
  description: Description;

  @Prop()
  chronology: string;

  @Prop()
  relationship: string;

  @Prop()
  abilities: Ability;

}

export const CharacterSchema = SchemaFactory.createForClass(Character);
