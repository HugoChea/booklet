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
    motherName: string;

    @Prop()
    motherCurrentStatus: string;

    @Prop()
    fatherName: string;

    @Prop()
    fatherCurrentStatus: string;

    @Prop()
    caretakers: string;

    @Prop()
    siblings: string;

    @Prop()
    extendedFamily: string;

    @Prop()
    bestFriend: string;

    @Prop()
    interest: string;

    @Prop()
    loveStory: string;

    @Prop()
    dislikedPeople: string;

    @Prop()
    likedPeople: string;

    @Prop()
    relyPracticalAdvice: string;

    @Prop()
    relyEmotionalSupport: string;

    @Prop()
    summary: string;

    @Prop()
    background: string;

    @Prop()
    personality: string;

}

export const DescriptionSchema = SchemaFactory.createForClass(Description);