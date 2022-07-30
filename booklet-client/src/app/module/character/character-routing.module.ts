import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CharacterDetailComponent } from './character-detail/character-detail.component';
import { CharacterListComponent } from './character-list/character-list.component';
import { NewCharacterComponent } from './new-character/new-character.component';

const routes: Routes = [
  {
    path: '',
    component: CharacterListComponent
  },
  {
    path: 'detail/:character',
    component: CharacterDetailComponent
  },
  {
    path: 'new-character',
    component: NewCharacterComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CharacterRoutingModule { }
