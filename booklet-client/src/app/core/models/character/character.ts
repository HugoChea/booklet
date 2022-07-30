import { Ability } from "./abilitiy";
import { Description } from "./description";
import { Profile } from "./profile";

export interface Character {

    name: string;

    profile: Profile;

    description: Description;

    chronology: string;//to be defined

    relationship: string;//to be defined

    abilities: Ability;
    
}