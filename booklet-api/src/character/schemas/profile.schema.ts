import { GeneralInformation } from './general-information.schema';
import { PhysicalInformation } from './physical-information.schema';
import { PsychologicInformation } from './psychologic-information.schema';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { ApiProperty } from '@nestjs/swagger';

export type ProfileDocument = Profile & Document;

@Schema()
export class Profile {
  @ApiProperty()
  @Prop()
  generalInfo: GeneralInformation;

  @ApiProperty()
  @Prop()
  physicalInfo: PhysicalInformation;

  @ApiProperty()
  @Prop()
  psychologicInfo: PsychologicInformation;
}

export const ProfileSchema = SchemaFactory.createForClass(Profile);
