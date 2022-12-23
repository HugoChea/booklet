import { Component, Input, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { ImageCroppedEvent } from 'ngx-image-cropper';
import { Output, EventEmitter } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

/**
 * Image uploader component
 * Emit Event with compressed image when uploading successfully
 */
@Component({
  selector: 'app-image-uploader',
  templateUrl: './image-uploader.component.html',
  styleUrls: ['./image-uploader.component.scss']
})
export class ImageUploaderComponent implements OnInit {

  @Input()
  aspectRatio!: number;

  @Input()
  width!: number;

  @Input()
  height!: number;

  @ViewChild("dialogRef") dialogRef!: TemplateRef<any>;

  @Output() fileUploadEvent = new EventEmitter<string>();

  /**
   * Event from uploading file, passed to ngrx-cropper
   */
  imageChangedEvent: any = '';

  /**
   * Result image after cropped by ngrx-cropper
   */
  croppedImage: any = '';

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  fileChangeEvent(event: any): void {
    this.imageChangedEvent = event;
    this.openDialog()
  }

  imageCropped(event: ImageCroppedEvent): void {
    this.croppedImage = event.base64;
    this.compressImage(this.croppedImage, 400, 600).then(compressed => {
      this.croppedImage = compressed;
      this.fileUploadEvent.emit(this.croppedImage);
    })
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(this.dialogRef, {
      height: '100vh',
      width: '100vw',
      maxHeight: '100vh',
      maxWidth: '100vw',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  cancel(): void {
    this.imageChangedEvent = null;
    this.croppedImage = null;
  }

  compressImage(src: any, newX: any, newY: any): Promise<any> {
    return new Promise((res, rej) => {
      const img = new Image();
      img.src = src;
      img.onload = () => {
        if (img.width > newX || img.height > newY){
          const elem = document.createElement('canvas');
          elem.width = newX;
          elem.height = newY;
          const ctx = elem.getContext('2d');
          ctx?.drawImage(img, 0, 0, newX, newY);
          const data = ctx?.canvas.toDataURL();
          res(data);
        }
        else{
          res(img.src);
        }
        
      }
      img.onerror = error => rej(error);
    })
  }

}
