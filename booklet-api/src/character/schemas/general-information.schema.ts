import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document } from 'mongoose';
import { Gender } from '../enums/gender.enum';

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
    race: string;

    @Prop({ type: String, enum: Gender })
    sexe: Gender;

    @Prop()
    nationality: string;

    @Prop()
    age: string;

    @Prop()
    birthdate: string;

    @Prop()
    birthplace: string;

}

export const GeneralInformationSchema = SchemaFactory.createForClass(GeneralInformation);