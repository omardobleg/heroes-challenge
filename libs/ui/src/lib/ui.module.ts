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
import { SkeletonComponent } from './skeleton/skeleton.component';

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
    SkeletonComponent,
  ],
  exports: [
    FilterComponent,
    CardComponent,
    GridComponent,
    GridItemDirective,
    EllipsisPipe,
    ImageFallbackDirective,
    SkeletonComponent,
  ],
})
export class UiModule {}
