import { Status } from "@core/enums/status.enum";
import { Tag } from "../tag";
import { Ability } from "./abilitiy";
import { Description } from "./description";
import { Profile } from "./profile";
import { Relationship } from "./relationship";

export interface Character {

    _id: string;

    imageRef: string;
    
    image: string;

    profile: Profile;

    description: Description;

    chronology: string;//to be defined

    relationship: Relationship[];

    abilities: Ability;

    tags: Tag[];

    status: Status;
    
}