import { Ability } from "@core/models/character/abilitiy";
import { Description } from "@core/models/character/description";
import { Profile } from "@core/models/character/profile";

export interface CreateCharacterDto {

    book: string;

    imageBase64: string;

    profile: Profile;

    description: Description;

    chronology: string;//to be defined

    relationship: string;//to be defined

    abilities: Ability;

    tags: string[];
    
}