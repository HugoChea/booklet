import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Character } from '@core/models/character/character';
import { environment } from '@env';
import { Observable } from 'rxjs';
import { CreateCharacterDto } from '../dto/create-character-dto';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {

  private apiURL = environment.url + '/character';

  constructor(private http: HttpClient) { }

  createCharacter(createCharacter: CreateCharacterDto): Observable<CreateCharacterDto> {
    return this.http.post<CreateCharacterDto>(this.apiURL, createCharacter);
  }

  getListLatestCharacterByBook(bookId: string): Observable<Character[]> {
    return this.http.get<Character[]>(this.apiURL + "/list-latest/" + bookId);
  }

  getListCharacterByBook(bookId: string): Observable<Character[]> {
    return this.http.get<Character[]>(this.apiURL + "/list/" + bookId);
  }

  getCharacterById(characterId: string): Observable<Character> {
    return this.http.get<Character>(this.apiURL + "/" + characterId);
  }
}
