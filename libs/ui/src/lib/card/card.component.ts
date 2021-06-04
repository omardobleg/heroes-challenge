import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { TuiDestroyService } from '@taiga-ui/cdk';
import { TuiHintMode } from '@taiga-ui/core';
import { TuiTextAlign } from '@taiga-ui/kit';
import { timer } from 'rxjs';
import { map, takeUntil } from 'rxjs/operators';
import { Fade } from '../animations/animations';
import { CardConfig } from '../data/card-config.model';

@Component({
  selector: 'heroes-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
  providers: [TuiDestroyService],
  animations: [Fade],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardComponent {
  @Input() hoverable = true;
  @Input() textAlign = TuiTextAlign.Center;
  @Input() cardConfig!: CardConfig;
  @Output() deleteAction = new EventEmitter<string>();
  get hint() {
    return this.cardConfig?.body?.length > 200;
  }
  get hintMode() {
    return TuiHintMode.OnDark;
  }
  get defaultImg() {
    return `/assets/images/default.jpg`;
  }
  public currentIndex = 0;
  public image$ = timer(0, 4000).pipe(
    map(() => {
      this.currentIndex =
        this.currentIndex >= this.cardConfig.images.length - 1
          ? 0
          : this.currentIndex + 1;
      return this.cardConfig.images[this.currentIndex];
    }),
    takeUntil(this.destroy)
  );

  constructor(private readonly destroy: TuiDestroyService) {}

  delete() {
    this.deleteAction.emit(this.cardConfig.id);
    console.log(
      '🚀 ~ file: card.component.ts ~ line 52 ~ CardComponent ~ delete ~ deleteAction'
    );
  }
}
