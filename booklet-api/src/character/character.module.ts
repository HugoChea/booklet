import { Module } from '@nestjs/common';
import { CharacterService } from './character.service';
import { CharacterController } from './character.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Character, CharacterSchema } from './schemas/character.schema';
import { ImageUploaderService } from 'src/common/services/image-uploader/image-uploader.service';
import { ParseUtilitiesService } from 'src/common/services/parse-utilities/parse-utilities.service';

@Module({
  imports: [MongooseModule.forFeature([{ name: Character.name, schema: CharacterSchema }])],
  controllers: [CharacterController],
  providers: [
    CharacterService,
    ImageUploaderService,
    ParseUtilitiesService
  ]
})
export class CharacterModule {}
