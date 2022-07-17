import { Component, OnInit } from '@angular/core';
import { Book } from 'src/app/core/models/book';
import { BookService } from 'src/app/core/services/book.service';
import { TokenStorageService } from 'src/app/core/services/token-storage.service';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss']
})
export class BookComponent implements OnInit {

  bookList: Book[] = [];

  constructor(
    private bookService: BookService,
    private tokenStorage: TokenStorageService
  ) {
  }

  ngOnInit(): void {
    console.log("oh")
    const userId: string | undefined = this.tokenStorage.getUser()?.id;
    if (userId){
      this.bookService.getListBookByUser(userId).subscribe({
        next : (res) => {
          this.bookList = res;
        },
        error: (error) => {
          console.log(error)
        }
      });
    }
  }

}
