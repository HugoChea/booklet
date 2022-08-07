import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document } from 'mongoose';
import { Stat } from './stat.schema';

export type AbilityDocument = Ability & Document;

@Schema()
export class Ability{

    @Prop()
    physicalAbility: string;

    @Prop()
    magicalAbility: string;

    @Prop()
    equipement: string;

    @Prop()
    stats: Stat[];
}

export const AbilitySchema = SchemaFactory.createForClass(Ability);
