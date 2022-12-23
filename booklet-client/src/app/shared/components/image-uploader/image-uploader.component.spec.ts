import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from '@shared/material/material.module';
import { ImageCroppedEvent } from 'ngx-image-cropper';

import { ImageUploaderComponent } from './image-uploader.component';

describe('ImageUploaderComponent', () => {
  let component: ImageUploaderComponent;
  let fixture: ComponentFixture<ImageUploaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImageUploaderComponent ],
      imports: [MaterialModule, BrowserAnimationsModule],
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImageUploaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('fileChangeEvent', () => {
    // GIVEN
    const mockEvent = "base64string";
    const spyOpenDialog = spyOn(component, 'openDialog');
    // WHEN
    component.fileChangeEvent(mockEvent);
    // THEN
    expect(component.imageChangedEvent).toBe(mockEvent);
    expect(spyOpenDialog).toHaveBeenCalled();
  });

  it('imageCropped', fakeAsync( () => {
    // GIVEN
    const mockEvent: ImageCroppedEvent = {
      base64: "fakeBase64"
    } as ImageCroppedEvent;
    const mockCompressedImage = "compressedBase64";
    const spyCompressImage = spyOn(component, 'compressImage').and.resolveTo(mockCompressedImage);
    // WHEN
    component.imageCropped(mockEvent);
    tick();
    // THEN
    expect(spyCompressImage).toHaveBeenCalled();
    expect(component.croppedImage).toBe(mockCompressedImage);
  }));

  it('cancel', () => {
    component.cancel();
    expect(component.imageChangedEvent).toBeNull();
    expect(component.croppedImage).toBeNull();
  });

});
