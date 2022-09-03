import { Character } from "./character";

export interface Relationship{
   
  involvedWith: Character;

  type: string;

  text: string;
}