import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpApiResponse } from '@core/models/http/http-api-response';
import { environment } from '@env';
import { map, Observable } from 'rxjs';
import { CreateBookDto } from '../dto/create-book-dto';
import { Book } from '../models/book/book';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  private apiURL = environment.url + '/book';

  constructor(private http: HttpClient) { }

  createBook(createBook: CreateBookDto): Observable<CreateBookDto> {
    return this.http.post<HttpApiResponse<CreateBookDto>>(this.apiURL, createBook)
      .pipe(map((res) => res.data));
  }

  getListBookByUser(userId: string): Observable<Book[]> {
    return this.http.get<HttpApiResponse<Book[]>>(this.apiURL + "/list/" + userId)
      .pipe(map((res) => res.data));
  }
}
