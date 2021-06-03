import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import {
  TuiDataListModule,
  TuiTextfieldControllerModule,
} from '@taiga-ui/core';
import {
  TuiAccordionModule,
  TuiDataListWrapperModule,
  TuiInputModule,
  TuiSelectModule,
} from '@taiga-ui/kit';
import { CardComponent } from './card/card.component';
import { FilterComponent } from './filter/filter.component';
import { GridComponent } from './grid/grid.component';
import { TuiButtonModule } from '@taiga-ui/core';
import { TuiIslandModule } from '@taiga-ui/kit';
import { GridItemDirective } from './grid/grid-item.directive';

@NgModule({
  imports: [
    CommonModule,
    TuiAccordionModule,
    FormsModule,
    ReactiveFormsModule,
    TuiInputModule,
    TuiTextfieldControllerModule,
    TuiSelectModule,
    TuiDataListModule,
    TuiDataListWrapperModule,
    TranslateModule,
    TuiButtonModule,
    TuiIslandModule,
  ],
  declarations: [
    FilterComponent,
    CardComponent,
    GridComponent,
    GridItemDirective,
  ],
  exports: [FilterComponent, CardComponent, GridComponent, GridItemDirective],
})
export class UiModule {}
