import { Types } from "mongoose";

export class CreateCharacterDto {

  tags: Types.ObjectId[];

  book: Types.ObjectId;

  name: string;
}
