import { CharactersComponent } from './page/main/characters.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CharactersRoutingModule } from './characters-routing.module';
import {UiModule} from '@heroes/ui';
import { TranslateModule } from '@ngx-translate/core';
import { EditComponent } from './page/edit/edit.component';

@NgModule({
  declarations: [CharactersComponent, EditComponent],
  imports: [CommonModule, CharactersRoutingModule,UiModule,TranslateModule],
})
export class CharactersModule {}
