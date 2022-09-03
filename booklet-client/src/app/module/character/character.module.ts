import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CharacterRoutingModule } from './character-routing.module';
import { CharacterListComponent } from './character-list/character-list.component';
import { CharacterDetailComponent } from './character-detail/character-detail.component';
import { NewCharacterComponent } from './new-character/new-character.component';
import { SharedModule } from '@shared/shared.module';
import { FormCharacterGeneralComponent } from './component/form-character-general/form-character-general.component';
import { NgChartsModule } from 'ng2-charts';
import { NgxEditorModule } from 'ngx-editor';
import { PanelDescriptionComponent } from './component/panel-description/panel-description.component';
import { PanelChronologyComponent } from './component/panel-chronology/panel-chronology.component';
import { PanelRelationshipComponent } from './component/panel-relationship/panel-relationship.component';
import { PanelAbilityComponent } from './component/panel-ability/panel-ability.component';
import { PanelGeneralityComponent } from './component/panel-generality/panel-generality.component';
import { DisplayCharacterDescriptionComponent } from './component/display-character-description/display-character-description.component';

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
    DisplayCharacterDescriptionComponent
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
