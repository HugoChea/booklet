import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { ApiProperty } from '@nestjs/swagger';
import { Document } from 'mongoose';

export type PsychologicInformationDocument = PsychologicInformation & Document;

@Schema()
export class PsychologicInformation {
  // mental
  @ApiProperty()
  @Prop()
  mbtiFocus: string;

  @ApiProperty()
  @Prop()
  mbtiInformation: string;

  @ApiProperty()
  @Prop()
  mbtiDecision: string;

  @ApiProperty()
  @Prop()
  mbtiLife: string;

  @ApiProperty()
  @Prop()
  intelligence: string;

  @ApiProperty()
  @Prop()
  selfConfidence: string;

  @ApiProperty()
  @Prop()
  flaws: string;

  @ApiProperty()
  @Prop()
  qualities: string;

  @ApiProperty()
  @Prop()
  politicalAttitude: string;

  @ApiProperty()
  @Prop()
  selfPerception: string;

  @ApiProperty()
  @Prop()
  othersPerception: string;

  @ApiProperty()
  @Prop()
  regrets: string;

  @ApiProperty()
  @Prop()
  accomplishments: string;

  @ApiProperty()
  @Prop()
  shortTermGoals: string;

  @ApiProperty()
  @Prop()
  longTermGoals: string;

  @ApiProperty()
  @Prop()
  goalsFeasability: string;

  @ApiProperty()
  @Prop()
  hobbies: string;

  @ApiProperty()
  @Prop()
  specialTalents: string;

  @ApiProperty()
  @Prop()
  unskilledAt: string;

  @ApiProperty()
  @Prop()
  likes: string;

  @ApiProperty()
  @Prop()
  dislikes: string;
}

export const PsychologicInformationSchema = SchemaFactory.createForClass(
  PsychologicInformation,
);
