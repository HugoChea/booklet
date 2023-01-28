import { Module } from '@nestjs/common';
import { CharacterService } from './character.service';
import { CharacterController } from './character.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Character, CharacterSchema } from './schemas/character.schema';
import { ImageUploaderService } from 'src/common/services/image-uploader/image-uploader.service';

@Module({
  imports: [MongooseModule.forFeature([{ name: Character.name, schema: CharacterSchema }])],
  controllers: [CharacterController],
  providers: [
    CharacterService,
    ImageUploaderService
  ]
})
export class CharacterModule {}
