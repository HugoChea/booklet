import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateCharacterDto } from './dto/create-character.dto';
import { UpdateCharacterDto } from './dto/update-character.dto';
import { Character, CharacterDocument } from './schemas/character.schema';
import { FindAllCharacterDto } from './dto/find-all-character.dto';
import { ImageUploaderService } from 'src/common/services/image-uploader/image-uploader.service';
import { ParseUtilitiesService } from 'src/common/services/parse-utilities/parse-utilities.service';

@Injectable()
export class CharacterService {

  readonly BASIC_PROJECTION = 'book image profile.generalInfo status createdAt updatedAt';

  constructor(
    @InjectModel(Character.name) private characterModel: Model<CharacterDocument>,
    private imageUploaderService: ImageUploaderService,
    private parseUtilitiesService: ParseUtilitiesService
  ) { }
  
  async create(createCharacterDto: CreateCharacterDto): Promise<Character> {
    createCharacterDto.image = ''
    createCharacterDto.imageRef = '';
    if (createCharacterDto.imageBase64){
      const image: [string, string] = await this.imageUploaderService.uploadImage(createCharacterDto.imageBase64, 'characters');
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

  findAll(bookId: string): Promise<FindAllCharacterDto[]> {
    return this.characterModel.find({ 'book': bookId }, this.BASIC_PROJECTION).sort({ 'profile.generalInfo.firstname': 1 , 'profile.generalInfo.lastname': 1}).populate("tags").exec();
  }

  findAllLastModified(bookId: string): Promise<FindAllCharacterDto[]> {
    return this.characterModel.find({ 'book': bookId }, this.BASIC_PROJECTION).sort({'updatedAt': -1}).limit(3).populate("tags").exec();
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

  update(id: string, updateCharacterDto: UpdateCharacterDto) {
    return this.characterModel.findOneAndUpdate({ _id: id }, { $set : this.parseUtilitiesService.nestedObjectParser(updateCharacterDto)}, { new: true });
  }

  remove(id: number) {
    return `This action removes a #${id} character`;
  }

}
