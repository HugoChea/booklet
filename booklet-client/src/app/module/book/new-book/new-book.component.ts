import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
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
    private tokenStorage: TokenStorageService,
    private snackbar: MatSnackBar
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
        this.snackbar.open('Book successfully created', '', {
          duration: 5000,
          horizontalPosition: "center",
          verticalPosition: "top",
        });
      },
      error: (error) => {
        this.snackbar.open('Something happened', '', {
          duration: 5000,
          horizontalPosition: "center",
          verticalPosition: "top",
        });
      }
    });
  }

  uploadFile(file: Blob){
    this.file = file;
  }

}
