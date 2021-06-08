import { TranslateModule } from '@ngx-translate/core';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VillainsRoutingModule } from './villains-routing.module';
import { VillainsComponent } from './page/villains/villains.component';
import { UiModule } from '@heroes/ui';

@NgModule({
  declarations: [VillainsComponent],
  imports: [CommonModule, VillainsRoutingModule, UiModule, TranslateModule],
})
export class VillainsModule {}
