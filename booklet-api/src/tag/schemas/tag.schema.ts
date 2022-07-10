import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type TagDocument = Tag & Document;

@Schema()
export class Tag {

  _id: string
  
  @Prop()
  name: string;

  @Prop()
  color: string;

}

export const UserSchema = SchemaFactory.createForClass(Tag);
