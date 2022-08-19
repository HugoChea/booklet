import { Types } from "mongoose";
import { Ability } from "../schemas/abilitiy.schema";
import { Description } from "../schemas/description.schema";
import { Profile } from "../schemas/profile.schema";

export class CreateCharacterDto {

  tags: Types.ObjectId[];

  status: string;

  book: Types.ObjectId;

  imageBase64: string;

  image: string;

  imageRef: string;

  profile: Profile;

  description: Description;

  chronology: string;

  relationship: string;

  abilities: Ability;
}
