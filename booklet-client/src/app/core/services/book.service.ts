import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@env';
import { BehaviorSubject, Observable } from 'rxjs';
import { CreateBookDto } from '../dto/create-book-dto';
import { Book } from '../models/book/book';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  private apiURL = environment.url + '/book';

  constructor(private http: HttpClient) { }

  createBook(createBook: CreateBookDto): Observable<CreateBookDto> {
    return this.http.post<CreateBookDto>(this.apiURL, createBook);
  }

  getListBookByUser(userId: string): Observable<Book[]> {
    return this.http.get<Book[]>(this.apiURL + "/list/" + userId);
  }
}
