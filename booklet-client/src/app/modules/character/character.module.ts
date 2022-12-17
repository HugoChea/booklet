import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CharacterRoutingModule } from './character-routing.module';
import { CharacterListComponent } from './character-list/character-list.component';
import { CharacterDetailComponent } from './character-detail/character-detail.component';
import { NewCharacterComponent } from './new-character/new-character.component';
import { SharedModule } from '@shared/shared.module';
import { FormCharacterGeneralComponent } from './components/form-character-general/form-character-general.component';
import { NgChartsModule } from 'ng2-charts';
import { NgxEditorModule } from 'ngx-editor';
import { PanelDescriptionComponent } from './components/panel-description/panel-description.component';
import { PanelChronologyComponent } from './components/panel-chronology/panel-chronology.component';
import { PanelRelationshipComponent } from './components/panel-relationship/panel-relationship.component';
import { PanelAbilityComponent } from './components/panel-ability/panel-ability.component';
import { PanelGeneralityComponent } from './components/panel-generality/panel-generality.component';
import { DisplayCharacterDescriptionComponent } from './components/display-character-description/display-character-description.component';
import { DisplayCharacterRelationshipComponent } from './components/display-character-relationship/display-character-relationship.component';
import { DisplayCharacterAbilitiesComponent } from './components/display-character-abilities/display-character-abilities.component';
import { CharacterListCardComponent } from './character-list/components/character-list-card/character-list-card.component';
import { CharacterListGridComponent } from './character-list/components/character-list-grid/character-list-grid.component';

@NgModule({
  declarations: [
    CharacterListComponent,
    CharacterDetailComponent,
    NewCharacterComponent,
    FormCharacterGeneralComponent,
    PanelDescriptionComponent,
    PanelChronologyComponent,
    PanelRelationshipComponent,
    PanelAbilityComponent,
    PanelGeneralityComponent,
    DisplayCharacterDescriptionComponent,
    DisplayCharacterRelationshipComponent,
    DisplayCharacterAbilitiesComponent,
    CharacterListCardComponent,
    CharacterListGridComponent
  ],
  imports: [
    CommonModule,
    CharacterRoutingModule,
    SharedModule,
    NgChartsModule,
    NgxEditorModule
  ]
})
export class CharacterModule { }
