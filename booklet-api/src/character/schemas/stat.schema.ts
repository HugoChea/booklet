import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document } from 'mongoose';

export type StatDocument = Stat & Document;

@Schema()
export class Stat{

    @Prop()
    characteristicName: string;

    @Prop()
    characteristicValue: number;

}

export const StatSchema = SchemaFactory.createForClass(Stat);
