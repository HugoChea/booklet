import { ApiProperty } from "@nestjs/swagger";
import { Types } from "mongoose";
import { Status } from "../enums/status.enum";
import { Ability } from "../schemas/abilitiy.schema";
import { Description } from "../schemas/description.schema";
import { Profile } from "../schemas/profile.schema";
import { Relationship } from "../schemas/relationship.schema";

export class CreateCharacterDto {

  @ApiProperty()
  tags: Types.ObjectId[];

  @ApiProperty()
  status: Status;

  @ApiProperty()
  book: Types.ObjectId;

  @ApiProperty()
  imageBase64: string;

  @ApiProperty()
  image: string;

  @ApiProperty()
  imageRef: string;

  @ApiProperty()
  profile: Profile;

  @ApiProperty()
  description: Description;

  @ApiProperty()
  chronology: string;

  @ApiProperty()
  relationship: Relationship[];

  @ApiProperty()
  abilities: Ability;
}
