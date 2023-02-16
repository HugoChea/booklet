import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ApiCreatedResponse, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { CharacterService } from './character.service';
import { CreateCharacterDto } from './dto/create-character.dto';
import { FindAllCharacterDto } from './dto/find-all-character.dto';
import { UpdateCharacterDto } from './dto/update-character.dto';

@ApiTags('Character')
@Controller('character')
export class CharacterController {
  constructor(private readonly characterService: CharacterService) {}

  @Post()
  @ApiCreatedResponse()
  create(@Body() createCharacterDto: CreateCharacterDto) {
    return this.characterService.create(createCharacterDto);
  }

  @Get('list/:id')
  @ApiOkResponse({
    description: 'Get list of character in basic projection',
    type: FindAllCharacterDto,
  })
  findAll(@Param('id') bookId: string) {
    return this.characterService.findAll(bookId);
  }

  @Get('list-latest/:id')
  @ApiOkResponse()
  findAllLastModified(@Param('id') bookId: string) {
    return this.characterService.findAllLastModified(bookId);
  }

  @Get(':id')
  @ApiOkResponse()
  findOne(@Param('id') id: string) {
    return this.characterService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCharacterDto: UpdateCharacterDto) {
    return this.characterService.update(id, updateCharacterDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.characterService.remove(+id);
  }
}
