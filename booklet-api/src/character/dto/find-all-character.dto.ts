import { Book } from "src/book/schemas/book.schema";
import { Tag } from "src/tag/schemas/tag.schema";
import { Status } from "../enums/status.enum";
import { Profile } from "../schemas/profile.schema";

export class FindAllCharacterDto {

    _id: string;

    book: Book;

    status: Status;

    tags: Tag[];

    image: string;

    profile: Profile;
    
}