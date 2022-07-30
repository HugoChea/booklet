import { GeneralInformation } from "./general-information";
import { PhysicalInformation } from "./physical-information";
import { PhychologicInformation } from "./psychologic-information";

export interface Profile {

    generalInfo: GeneralInformation;

    physicalInfo: PhysicalInformation;

    psychologicInfo: PhychologicInformation;

}