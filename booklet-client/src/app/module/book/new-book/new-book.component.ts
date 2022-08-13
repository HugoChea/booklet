import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CreateBookDto } from '@core/dto/create-book-dto';
import { BookService } from '@core/services/book.service';
import { TokenStorageService } from '@core/services/token-storage.service';

@Component({
  selector: 'app-new-book',
  templateUrl: './new-book.component.html',
  styleUrls: ['./new-book.component.scss']
})
export class NewBookComponent implements OnInit {

  newBookForm: FormGroup;
  file!: string;

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

  create(createBookDto: CreateBookDto) {
    if (this.newBookForm.valid) {
      createBookDto.imageBase64 = this.file;
      this.bookService.createBook(createBookDto).subscribe({
        next: (res) => {
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

  }

  uploadFile(file: string) {
    this.file = file;
  }

}
