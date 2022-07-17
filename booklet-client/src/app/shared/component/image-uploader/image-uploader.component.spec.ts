import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from '@shared/material.module';

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
});
