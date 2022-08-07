import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document } from 'mongoose';

export type PsychologicInformationDocument = PsychologicInformation & Document;

@Schema()
export class PsychologicInformation{
    // mental
    @Prop()
    flaws: string;

    @Prop()
    qualities: string;

    @Prop()
    education: string;

    @Prop()
    intelligence: string;

    @Prop()
    mentalIllness: string;

    @Prop()
    learningExperiences: string;

    @Prop()
    positivePersonalityTraits: string;

    @Prop()
    negativePersonalityTraits: string;

    @Prop()
    philosophyOfLife: string;

    @Prop()
    politicalAttitude: string;

    @Prop()
    goalAchievement: string;

    @Prop()
    greatestDream: string;

    @Prop()
    considerationForOthers: string;

    @Prop()
    selfPerception: string;

    @Prop()
    othersPerception: string;

    @Prop()
    selfConfidence: string;
    
    @Prop()
    senseOfHumour: string;

    @Prop()
    temper: string;

    @Prop()
    emotionOrLogic: string;

    @Prop()
    leaderOrFollower: string;

    @Prop()
    embarassements: string;
}

export const PsychologicInformationSchema = SchemaFactory.createForClass(PsychologicInformation);