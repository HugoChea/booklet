import { GeneralInformation } from "./general-information";
import { PhysicalInformation } from "./physical-information";
import { PsychologicInformation } from "./psychologic-information";

export interface Profile {

    generalInfo: GeneralInformation;

    physicalInfo: PhysicalInformation;

    psychologicInfo: PsychologicInformation;

}