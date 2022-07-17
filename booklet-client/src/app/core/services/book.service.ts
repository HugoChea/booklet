import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@env';
import { Observable } from 'rxjs';
import { CreateBookDto } from '../dto/create-book-dto';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  private apiURL = environment.url + '/book';

  constructor(private http: HttpClient) { }

  createBook(createBook: CreateBookDto, file: Blob): Observable<any>{
    let formData = new FormData();
    if (file){
      formData.append('file', file, createBook.name);
    }
    formData.append('userId', createBook.userId);
    formData.append('name', createBook.name);
    return this.http.post<any>(this.apiURL, formData)
  }

  getListBookByUser(userId: string): Observable<any>{
   
    return this.http.get<any>(this.apiURL + "/list/" + userId);
  }
}
