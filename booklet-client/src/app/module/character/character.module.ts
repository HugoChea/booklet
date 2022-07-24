import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CharacterRoutingModule } from './character-routing.module';
import { CharacterListComponent } from './character-list/character-list.component';
import { CharacterDetailComponent } from './character-detail/character-detail.component';
import { NewCharacterComponent } from './new-character/new-character.component';


@NgModule({
  declarations: [
    CharacterListComponent,
    CharacterDetailComponent,
    NewCharacterComponent
  ],
  imports: [
    CommonModule,
    CharacterRoutingModule
  ]
})
export class CharacterModule { }
