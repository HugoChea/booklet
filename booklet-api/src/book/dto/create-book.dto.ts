import { ApiProperty } from "@nestjs/swagger";

export class CreateBookDto {

  @ApiProperty({
    description: 'The age of a cat',
    example: '1'
  })
  userId: string;

  @ApiProperty({
    description: 'The age of a cat',
    example: '1'
  })
  name: string;

  @ApiProperty({
    description: 'The age of a cat',
    example: '1'
  })
  description: string;

  @ApiProperty({
    description: 'The age of a cat',
    example: '1'
  })
  imageBase64: string;

  @ApiProperty({
    description: 'The age of a cat',
    example: '1'
  })
  image: string;

  @ApiProperty({
    description: 'The age of a cat',
    example: '1'
  })
  imageRef: string;
  
}
