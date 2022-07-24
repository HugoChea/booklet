import { NgModule } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {MatDialogModule} from '@angular/material/dialog';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatChipsModule} from '@angular/material/chips';

@NgModule({
  declarations: [],
  imports: [
    MatIconModule,
    MatButtonModule,
    MatToolbarModule,
    MatCardModule,
    MatInputModule,
    MatDialogModule,
    MatSnackBarModule,
    MatChipsModule
  ],
  exports: [
    MatIconModule,
    MatButtonModule,
    MatToolbarModule,
    MatCardModule,
    MatInputModule,
    MatDialogModule,
    MatSnackBarModule,
    MatChipsModule
  ]
})
export class MaterialModule { }
