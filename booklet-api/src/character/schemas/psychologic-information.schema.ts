import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document } from 'mongoose';

export type PsychologicInformationDocument = PsychologicInformation & Document;

@Schema()
export class PsychologicInformation{
    // mental
    @Prop()
    education: string;

    @Prop()
    intelligence: string;

    @Prop()
    grade: string;

    @Prop()
    attitudeTowardSchool: string;

    @Prop()
    mentalIllness: string;

    @Prop()
    learningExperiences: string;

    @Prop()
    positivePersonalityTraits: string;

    @Prop()
    negativePersonalityTraits: string;

    @Prop()
    badHabits: string;

    @Prop()
    philosophyOfLife: string;

    @Prop()
    politicalAttitude: string;

    @Prop()
    shortTermGoals: string;

    @Prop()
    longTermGoals: string;

    @Prop()
    goalAchievement: string;

    @Prop()
    greatestDream: string;

    @Prop()
    secretDream: string;

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