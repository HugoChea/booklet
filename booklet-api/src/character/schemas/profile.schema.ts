import { GeneralInformation } from "./general-information.schema";
import { PhysicalInformation } from "./physical-information.schema";
import { PsychologicInformation } from "./psychologic-information.schema";
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document } from 'mongoose';

export type ProfileDocument = Profile & Document;

@Schema()
export class Profile {

    @Prop()
    generalInfo: GeneralInformation;

    @Prop()
    physicalInfo: PhysicalInformation;

    @Prop()
    psychologicInfo: PsychologicInformation;

}

export const ProfileSchema = SchemaFactory.createForClass(Profile);