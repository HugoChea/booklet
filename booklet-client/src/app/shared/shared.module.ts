import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { ImageUploaderComponent } from './components/image-uploader/image-uploader.component';
import { ImageCropperModule } from 'ngx-image-cropper';
import { ActionsHeaderComponent } from './components/actions-header/actions-header.component';
import { CardPanelComponent } from './components/card-panel/card-panel.component';
import { RadarGraphComponent } from './components/radar-graph/radar-graph.component';
import { NgChartsModule } from 'ng2-charts';


@NgModule({
  declarations: [
    ImageUploaderComponent,
    ActionsHeaderComponent,
    CardPanelComponent,
    RadarGraphComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    HttpClientModule,
    MaterialModule,
    ImageCropperModule,
    NgChartsModule,
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
    ActionsHeaderComponent,
    CardPanelComponent,
    RadarGraphComponent
  ]
})
export class SharedModule { }
