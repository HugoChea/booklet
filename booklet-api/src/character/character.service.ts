import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateCharacterDto } from './dto/create-character.dto';
import { UpdateCharacterDto } from './dto/update-character.dto';
import { Character, CharacterDocument } from './schemas/character.schema';
import { getDownloadURL, getStorage, ref, uploadString } from "firebase/storage";
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class CharacterService {

  constructor(@InjectModel(Character.name) private characterModel: Model<CharacterDocument>) {
  }
  
  async create(createCharacterDto: CreateCharacterDto): Promise<Character> {

    createCharacterDto.image = ''
    createCharacterDto.imageRef = '';
    if (createCharacterDto.imageBase64){
      const image: [string, string] = await this.uploadImage(createCharacterDto.imageBase64);
      createCharacterDto.image = image[0];
      createCharacterDto.imageRef = image[1];
    }
    
    const newCharacter = new this.characterModel(createCharacterDto);
    await newCharacter.populate({ 
      path: 'relationship',
      populate: {
        path: 'involvedWith',
        model: 'Character'
      } 
   });
    await newCharacter.populate('tags');
    return newCharacter.save();
  }

  findAll(bookId: string): Promise<Character[]> {
    return this.characterModel.find({ 'book': bookId }).sort({ 'profile.generalInfo.firstname': 1 , 'profile.generalInfo.lastname': 1}).populate("tags").exec();
  }

  findAllLastModified(bookId: string): Promise<Character[]> {
    return this.characterModel.find({ 'book': bookId }).sort({'updatedAt': -1}).limit(3).populate("tags").exec();
  }

  findOne(id: string): Promise<Character | undefined> {
    return this.characterModel.findById(id).populate("tags").populate(
      {
        path: 'relationship',
        populate: {
          path: 'involvedWith',
          model: 'Character',
          select: 'image profile'
        }
      }).exec();
  }

  update(id: number, updateCharacterDto: UpdateCharacterDto) {
    return `This action updates a #${id} character`;
  }

  remove(id: number) {
    return `This action removes a #${id} character`;
  }

  async uploadImage(file: string): Promise<[string, string]> {
    const storage = getStorage();
    const refName = "characters/" + uuidv4();
    const imageRef = ref(storage, refName);

    await uploadString(imageRef, file, 'data_url')

    const url = await getDownloadURL(ref(storage, refName))

    return [url, refName];
  }
}
