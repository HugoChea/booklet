import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type CategoryDocument = Category & Document;

@Schema()
export class Category {

  _id: string
  
  @Prop()
  name: string; // ex: Theme, Event, Personnage

  @Prop()
  tags: string; // tags

}

export const UserSchema = SchemaFactory.createForClass(Category);
