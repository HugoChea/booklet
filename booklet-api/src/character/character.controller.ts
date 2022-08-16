import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CharacterService } from './character.service';
import { CreateCharacterDto } from './dto/create-character.dto';
import { UpdateCharacterDto } from './dto/update-character.dto';

@Controller('character')
export class CharacterController {
  constructor(private readonly characterService: CharacterService) {}

  @Post()
  create(@Body() createCharacterDto: CreateCharacterDto) {
    return this.characterService.create(createCharacterDto);
  }

  @Get('list/:id')
  findAll(@Param('id') bookId: string) {
    return this.characterService.findAll(bookId);
  }

  @Get('list-latest/:id')
  findAllLastModified(@Param('id') bookId: string) {
    return this.characterService.findAllLastModified(bookId);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    console.log('waa')
    return this.characterService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCharacterDto: UpdateCharacterDto) {
    return this.characterService.update(+id, updateCharacterDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.characterService.remove(+id);
  }
}
