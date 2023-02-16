import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsOptional } from "class-validator";

export class CreateBookDto {

  @ApiProperty({
    description: 'The age of a cat',
    example: '1'
  })
  @IsNotEmpty()
  userId: string;

  @ApiProperty({
    description: 'The age of a cat',
    example: '1'
  })
  @IsNotEmpty()
  name: string;

  @ApiProperty({
    description: 'The age of a cat',
    example: '1'
  })
  @IsOptional()
  description: string;

  @ApiProperty({
    description: 'The age of a cat',
    example: '1'
  })
  @IsOptional()
  imageBase64: string;

  @ApiProperty({
    description: 'The age of a cat',
    example: '1'
  })
  @IsOptional()
  image: string;

  @ApiProperty({
    description: 'The age of a cat',
    example: '1'
  })
  @IsOptional()
  imageRef: string;
  
}
