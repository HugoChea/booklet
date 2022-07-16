import { Component, OnInit } from '@angular/core';
import { BookService } from 'src/app/core/services/book.service';

@Component({
  selector: 'app-new-book',
  templateUrl: './new-book.component.html',
  styleUrls: ['./new-book.component.scss']
})
export class NewBookComponent implements OnInit {

  file!: Blob;

  constructor(private bookService: BookService) { }

  ngOnInit(): void {
  }

  create(){
    const test= {
      userId: "2",
      name: "superBook",
      image: this.file
    }
    this.bookService.createBook(test).subscribe({
      next : (res) => {
        console.log(res)
      },
      error: (error) => {
        console.log(error)
      }
    });
  }

  uploadFile(file: Blob){
    this.file = file;
  }

}
