import { CharactersComponent } from './page/main/characters.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CharactersRoutingModule } from './characters-routing.module';
import {UiModule} from '@heroes/ui';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [CharactersComponent],
  imports: [CommonModule, CharactersRoutingModule,UiModule,TranslateModule],
})
export class CharactersModule {}
