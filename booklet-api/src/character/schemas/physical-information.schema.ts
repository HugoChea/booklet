import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document } from 'mongoose';

export type PhysicalInformationDocument = PhysicalInformation & Document;

@Schema()
export class PhysicalInformation{
    // physical
    @Prop()
    height: string;

    @Prop()
    weight: string;

    @Prop()
    hair: string;

    @Prop()
    eyes: string;

    @Prop()
    dressStyle: string;

    @Prop()
    accessories: string;
    
}

export const PhysicalInformationSchema = SchemaFactory.createForClass(PhysicalInformation);