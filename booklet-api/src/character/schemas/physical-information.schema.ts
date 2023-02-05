import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { ApiProperty } from '@nestjs/swagger';
import { Document } from 'mongoose';

export type PhysicalInformationDocument = PhysicalInformation & Document;

@Schema()
export class PhysicalInformation {
  // physical
  @ApiProperty()
  @Prop()
  height: string;

  @ApiProperty()
  @Prop()
  weight: string;

  @ApiProperty()
  @Prop()
  hair: string;

  @ApiProperty()
  @Prop()
  eyes: string;

  @ApiProperty()
  @Prop()
  dressStyle: string;

  @ApiProperty()
  @Prop()
  accessories: string;
}

export const PhysicalInformationSchema =
  SchemaFactory.createForClass(PhysicalInformation);
