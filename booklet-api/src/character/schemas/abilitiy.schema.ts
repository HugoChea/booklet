import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document } from 'mongoose';

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
    stats: string;
}

export const AbilitySchema = SchemaFactory.createForClass(Ability);
