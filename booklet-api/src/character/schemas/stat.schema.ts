import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { ApiProperty } from '@nestjs/swagger';
import { Document } from 'mongoose';

export type StatDocument = Stat & Document;

@Schema()
export class Stat {
  @ApiProperty()
  @Prop()
  characteristicName: string;

  @ApiProperty()
  @Prop()
  characteristicValue: number;
}

export const StatSchema = SchemaFactory.createForClass(Stat);
