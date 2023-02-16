import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsOptional } from "class-validator";
import { Types } from "mongoose";
import { Status } from "../enums/status.enum";
import { Ability } from "../schemas/abilitiy.schema";
import { Description } from "../schemas/description.schema";
import { Profile } from "../schemas/profile.schema";
import { Relationship } from "../schemas/relationship.schema";

export class CreateCharacterDto {

  @ApiProperty()
  @IsOptional()
  tags: Types.ObjectId[];

  @ApiProperty()
  @IsNotEmpty()
  status: Status;

  @ApiProperty()
  @IsNotEmpty()
  book: Types.ObjectId;

  @ApiProperty()
  @IsOptional()
  imageBase64: string;

  @ApiProperty()
  @IsOptional()
  image: string;

  @ApiProperty()
  @IsOptional()
  imageRef: string;

  @ApiProperty()
  @IsNotEmpty()
  profile: Profile;

  @ApiProperty()
  @IsOptional()
  description: Description;

  @ApiProperty()
  @IsOptional()
  chronology: string;

  @ApiProperty()
  @IsOptional()
  relationship: Relationship[];

  @ApiProperty()
  @IsOptional()
  abilities: Ability;
}
