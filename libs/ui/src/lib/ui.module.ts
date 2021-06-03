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
import { EllipsisPipe } from './pipes/ellipsis.pipe';
import { TuiHintModule } from '@taiga-ui/core';
import { ImageFallbackDirective } from './directives/image-fallback.directive';
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
    TuiHintModule,
  ],
  declarations: [
    FilterComponent,
    CardComponent,
    GridComponent,
    GridItemDirective,
    EllipsisPipe,
    ImageFallbackDirective,
  ],
  exports: [
    FilterComponent,
    CardComponent,
    GridComponent,
    GridItemDirective,
    EllipsisPipe,
    ImageFallbackDirective,
  ],
})
export class UiModule {}
