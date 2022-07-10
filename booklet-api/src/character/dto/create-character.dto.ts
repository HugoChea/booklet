import { Types } from "mongoose";

export class CreateCharacterDto {

  tags: Types.ObjectId[];

  name: string;
}
