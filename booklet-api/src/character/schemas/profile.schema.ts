import { GeneralInformation } from "./general-information.schema";
import { PhysicalInformation } from "./physical-information.schema";
import { PhychologicInformation } from "./psychologic-information.schema";
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
    psychologicInfo: PhychologicInformation;

}

export const ProfileSchema = SchemaFactory.createForClass(Profile);