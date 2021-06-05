import { TuiButtonModule } from '@taiga-ui/core';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { UiModule } from '@heroes/ui';
import { TranslateModule } from '@ngx-translate/core';
import { TuiPaginationModule } from '@taiga-ui/kit';
import { CharactersRoutingModule } from './characters-routing.module';
import { ModalDeleteComponent } from './components/modal-delete/modal-delete.component';
import { EditComponent } from './page/edit/edit.component';
import { CharactersComponent } from './page/main/characters.component';
@NgModule({
  declarations: [CharactersComponent, EditComponent, ModalDeleteComponent],
  imports: [
    CommonModule,
    CharactersRoutingModule,
    UiModule,
    TranslateModule,
    TuiPaginationModule,
    TuiButtonModule,
  ],
})
export class CharactersModule {}
