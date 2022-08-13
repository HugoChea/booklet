import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document } from 'mongoose';

export type DescriptionDocument = Description & Document;

@Schema()
export class Description {

    @Prop()
    summary: string;

    @Prop()
    personality: string;

    @Prop()
    background: string;

}

export const DescriptionSchema = SchemaFactory.createForClass(Description);