import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { ApiProperty } from '@nestjs/swagger';
import mongoose, { Document } from 'mongoose';
import { Character } from './character.schema';

export type RelationshipDocument = Relationship & Document;

@Schema()
export class Relationship {
  _id: string;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Character' })
  involvedWith: Character;

  @ApiProperty()
  @Prop()
  type: string;

  @ApiProperty()
  @Prop()
  text: string;
}

export const RelationshipSchema = SchemaFactory.createForClass(Relationship);
