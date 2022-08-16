import { Tag } from "../tag";
import { Ability } from "./abilitiy";
import { Description } from "./description";
import { Profile } from "./profile";

export interface Character {

    _id: string;

    imageRef: string;
    
    image: string;

    profile: Profile;

    description: Description;

    chronology: string;//to be defined

    relationship: string;//to be defined

    abilities: Ability;

    tags: Tag[];
    
}