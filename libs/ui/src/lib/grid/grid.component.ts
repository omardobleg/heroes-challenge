import {
  ChangeDetectionStrategy,
  Component,
  ContentChild,
  EventEmitter,
  Input,
  Output,
  TemplateRef,
} from '@angular/core';
import { CardConfig } from '@heroes/data'
import { GridItemDirective } from './grid-item.directive';

@Component({
  selector: 'heroes-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GridComponent {
  @Output() deleteEvent = new EventEmitter<string>();
  @Input() loading = true;
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
