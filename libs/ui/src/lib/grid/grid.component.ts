import {
  ChangeDetectionStrategy,
  Component,
  ContentChild,
  Input,
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
  @Input() set items(items: CardConfig[]) {
    if (items) {
      this._items = items;
    }
  }
  get items() {
    return this._items;
  }
  private _items: CardConfig[] = [];
  @ContentChild(GridItemDirective, { read: TemplateRef })
  gridItemTemplate!: TemplateRef<any>;
}
