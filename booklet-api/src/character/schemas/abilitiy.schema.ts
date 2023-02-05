import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { ApiProperty } from '@nestjs/swagger';
import { Document } from 'mongoose';
import { Stat } from './stat.schema';

export type AbilityDocument = Ability & Document;

@Schema()
export class Ability {
  @ApiProperty()
  @Prop()
  physicalAbility: string;

  @ApiProperty()
  @Prop()
  magicalAbility: string;

  @ApiProperty()
  @Prop()
  equipement: string;

  @ApiProperty()
  @Prop()
  stats: Stat[];
}

export const AbilitySchema = SchemaFactory.createForClass(Ability);
