import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { ApiProperty } from '@nestjs/swagger';
import { Document } from 'mongoose';

export type DescriptionDocument = Description & Document;

@Schema()
export class Description {
  @ApiProperty()
  @Prop()
  localisation: string;

  @ApiProperty()
  @Prop()
  livingWith: string;

  @ApiProperty()
  @Prop()
  homeDescription: string;

  @ApiProperty()
  @Prop()
  neighbourhood: string;

  @ApiProperty()
  @Prop()
  occupation: string;

  @ApiProperty()
  @Prop()
  jobSatisfaction: string;

  @ApiProperty()
  @Prop()
  motherName: string;

  @ApiProperty()
  @Prop()
  motherCurrentStatus: string;

  @ApiProperty()
  @Prop()
  fatherName: string;

  @ApiProperty()
  @Prop()
  fatherCurrentStatus: string;

  @ApiProperty()
  @Prop()
  caretakers: string;

  @ApiProperty()
  @Prop()
  siblings: string;

  @ApiProperty()
  @Prop()
  extendedFamily: string;

  @ApiProperty()
  @Prop()
  bestFriend: string;

  @ApiProperty()
  @Prop()
  interest: string;

  @ApiProperty()
  @Prop()
  loveStory: string;

  @ApiProperty()
  @Prop()
  dislikedPeople: string;

  @ApiProperty()
  @Prop()
  likedPeople: string;

  @ApiProperty()
  @Prop()
  relyPracticalAdvice: string;

  @ApiProperty()
  @Prop()
  relyEmotionalSupport: string;

  @ApiProperty()
  @Prop()
  summary: string;

  @ApiProperty()
  @Prop()
  background: string;

  @ApiProperty()
  @Prop()
  personality: string;
}

export const DescriptionSchema = SchemaFactory.createForClass(Description);
