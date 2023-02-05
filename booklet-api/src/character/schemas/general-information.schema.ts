import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { ApiProperty } from '@nestjs/swagger';
import { Document } from 'mongoose';
import { Gender } from '../enums/gender.enum';

export type GeneralInformationDocument = GeneralInformation & Document;

@Schema()
export class GeneralInformation {
  @ApiProperty()
  @Prop()
  firstname: string;

  @ApiProperty()
  @Prop()
  lastname: string;

  @ApiProperty()
  @Prop()
  surname: string;

  @ApiProperty()
  @Prop()
  quote: string;

  @ApiProperty()
  @Prop()
  cv: string;

  @ApiProperty()
  @Prop()
  race: string;

  @ApiProperty()
  @Prop({ type: String, enum: Gender })
  sexe: Gender;

  @ApiProperty()
  @Prop()
  nationality: string;

  @ApiProperty()
  @Prop()
  age: string;

  @ApiProperty()
  @Prop()
  birthdate: string;

  @ApiProperty()
  @Prop()
  birthplace: string;
}

export const GeneralInformationSchema =
  SchemaFactory.createForClass(GeneralInformation);
