import {
  ChangeDetectionStrategy,
  Component,
  ContentChild,
  Input,
  OnInit,
  TemplateRef,
} from '@angular/core';
import { CardConfig } from '../data/card-config.model';
import { GridItemDirective } from './grid-item.directive';

@Component({
  selector: 'heroes-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GridComponent {
  @Input() items: CardConfig[] = [];
  @ContentChild(GridItemDirective, { read: TemplateRef })
  gridItemTemplate!: TemplateRef<any>;
  constructor() {}
}
