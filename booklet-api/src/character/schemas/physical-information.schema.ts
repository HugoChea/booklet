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
    bodyshape: string;

    @Prop()
    hair: string;

    @Prop()
    ethnicity: string;

    @Prop()
    smell: string;

    @Prop()
    skintone: string;

    @Prop()
    shapeOfFace: string;

    @Prop()
    eyes: string;

    @Prop()
    distinguishMarks: string;

    @Prop()
    dressStyle: string;

    @Prop()
    accessories: string;

    @Prop()
    mannerism: string;

    @Prop()
    physicalPosture: string;

    @Prop()
    speechPattern: string;

    @Prop()
    gestures: string;

    @Prop()
    disabilities: string;
    
}

export const PhysicalInformationSchema = SchemaFactory.createForClass(PhysicalInformation);