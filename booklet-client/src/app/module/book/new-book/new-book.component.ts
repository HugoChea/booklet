import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CreateBookDto } from 'src/app/core/dto/create-book-dto';
import { BookService } from 'src/app/core/services/book.service';
import { TokenStorageService } from 'src/app/core/services/token-storage.service';

@Component({
  selector: 'app-new-book',
  templateUrl: './new-book.component.html',
  styleUrls: ['./new-book.component.scss']
})
export class NewBookComponent implements OnInit {

  newBookForm: FormGroup;
  file!: Blob;

  constructor(
    private bookService: BookService,
    private formBuilder: FormBuilder,
    private tokenStorage: TokenStorageService
  ) {
      this.newBookForm = this.formBuilder.group({
        name: ['', Validators.required],
        description: [''],
        userId: [this.tokenStorage.getUser()?.id]
      })
    }

  ngOnInit(): void {
  }

  create(createBookDto: CreateBookDto){
    this.bookService.createBook(createBookDto, this.file).subscribe({
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
