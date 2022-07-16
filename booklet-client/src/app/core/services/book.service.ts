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

  createBook(createBook: CreateBookDto): Observable<any>{
    let formData = new FormData();
    if (createBook.image){
      formData.append('file', createBook.image, createBook.name);
    }
    formData.append('userId', createBook.userId);
    formData.append('name', createBook.name);
    return this.http.post<any>(this.apiURL, formData).pipe(
    );
  }
}
