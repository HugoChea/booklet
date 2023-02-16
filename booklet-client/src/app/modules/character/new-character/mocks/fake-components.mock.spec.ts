import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { PanelAbilityComponent } from '@module/character/components/panel-ability/panel-ability.component';

@Component({
  selector: 'app-form-character-general',
  template: '',
})
export class FakeFormCharacterGeneralComponent
  implements Partial<PanelAbilityComponent>
{
  @Input()
  newCharacterForm!: FormGroup;
}

@Component({
  selector: 'app-panel-generality',
  template: '',
})
export class FakePanelGeneralityComponent
  implements Partial<PanelAbilityComponent>
{
  @Input()
  newCharacterForm!: FormGroup;
}

@Component({
  selector: 'app-panel-chronology',
  template: '',
})
export class FakePanelChornologyComponent
  implements Partial<PanelAbilityComponent>
{
  @Input()
  newCharacterForm!: FormGroup;
}

@Component({
  selector: 'app-panel-description',
  template: '',
})
export class FakePanelDescriptionComponent
  implements Partial<PanelAbilityComponent>
{
  @Input()
  newCharacterForm!: FormGroup;
}

@Component({
  selector: 'app-panel-relationship',
  template: '',
})
export class FakePanelRelationshipComponent
  implements Partial<PanelAbilityComponent>
{
  @Input()
  newCharacterForm!: FormGroup;
}

@Component({
  selector: 'app-panel-ability',
  template: '',
})
export class FakePanelAbilityComponent
  implements Partial<PanelAbilityComponent>
{
  @Input()
  newCharacterForm!: FormGroup;
}
