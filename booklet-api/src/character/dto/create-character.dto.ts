import { Types } from "mongoose";
import { Status } from "../enums/status.enum";
import { Ability } from "../schemas/abilitiy.schema";
import { Description } from "../schemas/description.schema";
import { Profile } from "../schemas/profile.schema";
import { Relationship } from "../schemas/relationship.schema";

export class CreateCharacterDto {

  tags: Types.ObjectId[];

  status: Status.TODO;

  book: Types.ObjectId;

  imageBase64: string;

  image: string;

  imageRef: string;

  profile: Profile;

  description: Description;

  chronology: string;

  relationship: Relationship[];

  abilities: Ability;
}
