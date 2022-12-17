import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document } from 'mongoose';

export type DescriptionDocument = Description & Document;

@Schema()
export class Description {

    @Prop()
    localisation: string;

    @Prop()
    livingWith: string;

    @Prop()
    homeDescription: string;

    @Prop()
    neighbourhood: string;

    @Prop()
    occupation: string;

    @Prop()
    jobSatisfaction: string;

    @Prop()
    summary: string;

    @Prop()
    background: string;

    @Prop()
    personality: string;

}

export const DescriptionSchema = SchemaFactory.createForClass(Description);