import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChapterRoutingModule } from './chapter-routing.module';
import { ChapterListComponent } from './chapter-list/chapter-list.component';


@NgModule({
  declarations: [
    ChapterListComponent
  ],
  imports: [
    CommonModule,
    ChapterRoutingModule
  ]
})
export class ChapterModule { }
