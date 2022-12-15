import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@env';
import { Observable } from 'rxjs';
import { CreateCharacterDto } from '../dto/create-character-dto';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {

  private apiURL = environment.url + '/character';

  constructor(private http: HttpClient) { }

  createCharacter(createCharacter: CreateCharacterDto): Observable<any>{
    return this.http.post<any>(this.apiURL, createCharacter);
  }

  getListLatestCharacterByBook(bookId: string): Observable<any> {
    return this.http.get<any>(this.apiURL + "/list-latest/" + bookId);
  }

  getListCharacterByBook(bookId: string): Observable<any> {
    return this.http.get<any>(this.apiURL + "/list/" + bookId);
  }

  getCharacterById(characterId: string): Observable<any> {
    return this.http.get<any>(this.apiURL + "/" + characterId);
  }
}
