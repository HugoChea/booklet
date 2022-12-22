import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { ImageUploaderComponent } from './components/image-uploader/image-uploader.component';
import { ImageCropperModule } from 'ngx-image-cropper';
import { ActionsHeaderComponent } from './components/actions-header/actions-header.component';


@NgModule({
  declarations: [ImageUploaderComponent, ActionsHeaderComponent],
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
    ImageUploaderComponent,
    ActionsHeaderComponent
  ]
})
export class SharedModule { }
