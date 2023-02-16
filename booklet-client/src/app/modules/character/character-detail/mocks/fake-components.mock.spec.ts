import { Component, Input } from '@angular/core';
import { Character } from '@core/models/character/character';

@Component({
  selector: 'app-display-character-description',
  template: ``,
})
export class FakeDisplayCharacterDescriptionComponent {
    @Input()
    character: Character | undefined;
}

@Component({
  selector: 'app-display-character-abilities',
  template: ``,
})
export class FakeDisplayCharacterAbilitiesComponent {
    @Input()
    character: Character | undefined;
}

@Component({
  selector: 'app-display-character-relationship',
  template: ``,
})
export class FakeDisplayCharacterRelationshipComponent {
    @Input()
    character: Character | undefined;
}

@Component({
  selector: 'app-actions-header',
  template: ``,
})
export class FakeActionsHeaderComponent {
    @Input()
    character: Character | undefined;
}
