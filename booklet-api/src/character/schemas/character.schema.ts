import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document } from 'mongoose';
import { Book } from 'src/book/schemas/book.schema';
import { Tag } from 'src/tag/schemas/tag.schema';

export type CharacterDocument = Character & Document;

@Schema({
  timestamps: true,
})
export class Character {

  _id: string

  @Prop([{ type: mongoose.Schema.Types.ObjectId, ref: 'Book' }])
  book: Book;

  @Prop([{ type: mongoose.Schema.Types.ObjectId, ref: 'Tag' }])
  tags: Tag;

  @Prop()
  name: string;

  @Prop()
  firstname: string;

  @Prop()
  lastname: string;

  @Prop()
  surname: string;

  @Prop()
  quote: string;

  @Prop()
  cv: string;

  @Prop()
  nationality: string;

  @Prop()
  age: string;

  @Prop()
  birthdate: string;

  @Prop()
  birthplace: string;

  @Prop()
  hometown: string;

  @Prop()
  currentPlace: string;

  @Prop()
  homeDescription: string;

  @Prop()
  neighbourhood: string;

  @Prop()
  occupation: string;

  @Prop()
  jobSatisfaction: string;

  @Prop()
  finance: string;

  @Prop()
  income: string;

  @Prop()
  personalHabits: string;

  @Prop()
  hobbies: string;

  @Prop()
  car: string;

  @Prop()
  favoriteSports: string;

  @Prop()
  favoriteFoods: string;

  @Prop()
  favoriteMusics: string;

  @Prop()
  favoriteMovies: string;

  @Prop()
  favoriteHolidays: string;

  @Prop()
  favoriteSaying: string;

  // phys
  @Prop()
  height: string;

  @Prop()
  weight: string;

  @Prop()
  bodyshape: string;

  @Prop()
  hair: string;

  @Prop()
  ethnicity: string;

  @Prop()
  species: string;

  @Prop()
  smell: string;

  @Prop()
  skintone: string;

  @Prop()
  shapeOfFace: string;

  @Prop()
  eyes: string;

  @Prop()
  distinguishMarks: string;

  @Prop()
  dressStyle: string;

  @Prop()
  accesories: string;

  @Prop()
  mannerism: string;

  @Prop()
  physicalPosture: string;

  @Prop()
  speechPattern: string;

  @Prop()
  gestures: string;

  @Prop()
  disabilites: string;

  @Prop()
  style: string;

  @Prop()
  flaws: string;

  @Prop()
  qualities: string;

  // mental

  @Prop()
  education: string;

  @Prop()
  intelligence: string;

  @Prop()
  grade: string;

  @Prop()
  attitudeTowardSchool: string;

  @Prop()
  mentalIllness: string;

  @Prop()
  learningExperiences: string;

  @Prop()
  positivePersonalityTraits: string;

  @Prop()
  negativePersonalityTraits: string;

  @Prop()
  badHabits: string;

  @Prop()
  philosophyOfLife: string;

  @Prop()
  politicalAttitude: string;

  @Prop()
  shortTermGoals: string;

  @Prop()
  longTermGoals: string;

  @Prop()
  goalAchievement: string;

  @Prop()
  greatestDream: string;

  @Prop()
  secretDream: string;

  @Prop()
  considerationForOthers: string;

  @Prop()
  selfPerception: string;

  @Prop()
  othersPerception: string;

  @Prop()
  selfConfidence: string;

  @Prop()
  senseOfHumour: string;

  @Prop()
  temper: string;

  @Prop()
  emotionOrLogic: string;

  @Prop()
  leaderOrFollower: string;

  @Prop()
  embarassements: string;

  //emotonal

  @Prop()
  strength: string;

  @Prop()
  weakness: string;

  @Prop()
  needs: string;

  @Prop()
  desires: string;

  @Prop()
  introvertOrExtrovert: string;

  @Prop()
  anger: string;

  @Prop()
  sadness: string;

  @Prop()
  optimism: string;

  @Prop()
  conflict: string;

  @Prop()
  change: string;

  @Prop()
  loss: string;

  @Prop()
  lifeObjective: string;

  @Prop()
  lifeChange: string;

  @Prop()
  motivations: string;

  @Prop()
  fears: string;

  @Prop()
  happiness: string;

  @Prop()
  judgements: string;

  @Prop()
  generous: string;

  @Prop()
  romantic: string;

  @Prop()
  sensitive: string;

  @Prop()
  adventurous: string;

  @Prop()
  politeOrRude: string;

  @Prop()
  moody: string;

  @Prop()
  conspiracy: string;

  //relationship
  // relationshiptype

  //skills
  @Prop()
  skills: string;

  @Prop()
  abilities: string;

  // stats

  //description

}

export const CharacterSchema = SchemaFactory.createForClass(Character);
