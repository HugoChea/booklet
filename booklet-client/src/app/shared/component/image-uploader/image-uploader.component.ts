import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { base64ToFile, ImageCroppedEvent } from 'ngx-image-cropper';
import { Output, EventEmitter } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-image-uploader',
  templateUrl: './image-uploader.component.html',
  styleUrls: ['./image-uploader.component.scss']
})
export class ImageUploaderComponent implements OnInit {

  @ViewChild("dialogRef") dialogRef!: TemplateRef<any>;
  @Output() fileUploadEvent = new EventEmitter<Blob>();

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  imageChangedEvent: any = '';
  croppedImage: any = '';


  fileChangeEvent(event: any): void {
    this.imageChangedEvent = event;
    this.openDialog()
  }
  imageCropped(event: ImageCroppedEvent) {
    this.croppedImage = event.base64;
    this.fileUploadEvent.emit(base64ToFile(this.croppedImage));
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

}
