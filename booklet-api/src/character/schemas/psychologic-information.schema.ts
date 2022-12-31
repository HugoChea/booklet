import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document } from 'mongoose';

export type PsychologicInformationDocument = PsychologicInformation & Document;

@Schema()
export class PsychologicInformation{
    // mental
    @Prop()
    mbtiFocus: string;

    @Prop()
    mbtiInformation: string;

    @Prop()
    mbtiDecision: string;

    @Prop()
    mbtiLife: string;

    @Prop()
    intelligence: string;

    @Prop()
    selfConfidence: string;

    @Prop()
    flaws: string;

    @Prop()
    qualities: string;

    @Prop()
    politicalAttitude: string;

    @Prop()
    selfPerception: string;

    @Prop()
    othersPerception: string;

    @Prop()
    regrets: string;

    @Prop()
    accomplishments: string;

    @Prop()
    shortTermGoals: string;

    @Prop()
    longTermGoals: string;

    @Prop()
    goalsFeasability: string;

    @Prop()
    hobbies: string;

    @Prop()
    specialTalents: string;

    @Prop()
    unskilledAt: string;

    @Prop()
    likes: string;

    @Prop()
    dislikes: string;
}

export const PsychologicInformationSchema = SchemaFactory.createForClass(PsychologicInformation);