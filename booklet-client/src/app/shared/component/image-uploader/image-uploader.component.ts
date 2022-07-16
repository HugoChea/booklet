import { Component, OnInit } from '@angular/core';
import { base64ToFile, ImageCroppedEvent, LoadedImage } from 'ngx-image-cropper';
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-image-uploader',
  templateUrl: './image-uploader.component.html',
  styleUrls: ['./image-uploader.component.scss']
})
export class ImageUploaderComponent implements OnInit {

  @Output() fileUploadEvent = new EventEmitter<Blob>();

  constructor() { }

  ngOnInit(): void {
  }

  imageChangedEvent: any = '';
  croppedImage: any = '';
  

  fileChangeEvent(event: any): void {
    this.imageChangedEvent = event;
  }
  imageCropped(event: ImageCroppedEvent) {
    this.croppedImage = event.base64;
    this.fileUploadEvent.emit(base64ToFile(this.croppedImage));
  }

}
