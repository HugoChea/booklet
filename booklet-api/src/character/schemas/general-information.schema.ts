import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document } from 'mongoose';

export type GeneralInformationDocument = GeneralInformation & Document;

@Schema()
export class GeneralInformation{

    @Prop()
    firstname: string;

    @Prop()
    lastname: string;

    @Prop()
    surname: string;

    @Prop()
    quote: string;

    @Prop()
    cv: string;

    @Prop()
    nationality: string;

    @Prop()
    age: string;

    @Prop()
    birthdate: string;

    @Prop()
    birthplace: string;

    @Prop()
    hometown: string;

    @Prop()
    currentPlace: string;

    @Prop()
    homeDescription: string;

    @Prop()
    neighbourhood: string;

    @Prop()
    occupation: string;

    @Prop()
    jobSatisfaction: string;

    @Prop()
    finance: string;

    @Prop()
    income: string;

    @Prop()
    personalHabits: string;

    @Prop()
    hobbies: string;

    @Prop()
    favoriteSports: string;

    @Prop()
    favoriteFoods: string;

    @Prop()
    favoriteMusics: string;

    @Prop()
    favoriteMovies: string;

    @Prop()
    favoriteHolidays: string;

    @Prop()
    favoriteSaying: string;
}

export const GeneralInformationSchema = SchemaFactory.createForClass(GeneralInformation);