import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateCharacterDto } from './dto/create-character.dto';
import { UpdateCharacterDto } from './dto/update-character.dto';
import { Character, CharacterDocument } from './schemas/character.schema';

@Injectable()
export class CharacterService {

  constructor(@InjectModel(Character.name) private characterModel: Model<CharacterDocument>) {
  }
  
  async create(createCharacterDto: CreateCharacterDto) {
    const newCharacter = new this.characterModel(createCharacterDto);
    await newCharacter.populate('tags');
    return newCharacter.save();
  }

  findAll() {
    return this.characterModel.find().populate("tags").exec();;
  }

  findOne(id: number) {
    return `This action returns a #${id} character`;
  }

  update(id: number, updateCharacterDto: UpdateCharacterDto) {
    return `This action updates a #${id} character`;
  }

  remove(id: number) {
    return `This action removes a #${id} character`;
  }
}
