import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { ImageUploaderComponent } from './component/image-uploader/image-uploader.component';
import { ImageCropperModule } from 'ngx-image-cropper';


@NgModule({
  declarations: [ImageUploaderComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    HttpClientModule,
    MaterialModule,
    ImageCropperModule,
  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    HttpClientModule,
    MaterialModule,

    // component
    ImageUploaderComponent
  ]
})
export class SharedModule { }
