import { ApiProperty } from '@nestjs/swagger';
import { Book } from 'src/book/schemas/book.schema';
import { Tag } from 'src/tag/schemas/tag.schema';
import { Status } from '../enums/status.enum';
import { Profile } from '../schemas/profile.schema';

export class FindAllCharacterDto {
  @ApiProperty()
  _id: string;

  @ApiProperty()
  book: Book;

  @ApiProperty()
  status: Status;

  @ApiProperty()
  tags: Tag[];

  @ApiProperty()
  image: string;

  @ApiProperty()
  profile: Profile;
}
