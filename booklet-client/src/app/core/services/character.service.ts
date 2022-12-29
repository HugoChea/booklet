import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Character } from '@core/models/character/character';
import { HttpApiResponse } from '@core/models/http/http-api-response';
import { environment } from '@env';
import { map, Observable } from 'rxjs';
import { CreateCharacterDto } from '../dto/create-character-dto';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {

  private apiURL = environment.url + '/character';

  constructor(private http: HttpClient) { }

  createCharacter(createCharacter: CreateCharacterDto): Observable<CreateCharacterDto> {
    return this.http.post<HttpApiResponse<CreateCharacterDto>>(this.apiURL, createCharacter)
      .pipe(map((res) => res.data));
  }

  getListLatestCharacterByBook(bookId: string): Observable<Character[]> {
    return this.http.get<HttpApiResponse<Character[]>>(this.apiURL + "/list-latest/" + bookId)
      .pipe(map((res) => res.data));
  }

  getListCharacterByBook(bookId: string): Observable<Character[]> {
    return this.http.get<HttpApiResponse<Character[]>>(this.apiURL + "/list/" + bookId)
      .pipe(map((res) => res.data));
  }

  getCharacterById(characterId: string): Observable<Character> {
    return this.http.get<HttpApiResponse<Character>>(this.apiURL + "/" + characterId)
      .pipe(map((res) => res.data));
  }
}
