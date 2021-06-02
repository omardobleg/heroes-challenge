import {
  Component,
  OnInit,
  Output,
  EventEmitter,
  Input,
  ChangeDetectionStrategy,
} from '@angular/core';
import { TuiDestroyService, tuiRequiredSetter } from '@taiga-ui/cdk';
import { TuiTextAlign } from '@taiga-ui/kit';
import { Subject, timer } from 'rxjs';
import { CardConfig } from '../data/card-config.model';
import { map, mapTo, takeUntil } from 'rxjs/operators';

@Component({
  selector: 'heroes-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
  providers: [TuiDestroyService],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardComponent {
  @Input() hoverable = true;
  @Input() textAlign = TuiTextAlign.Center;
  @Input()
  cardConfig: CardConfig = {
    link: '#',
    title: 'Toshinori_Yagi',
    body:
      '"Toshinori Yagi (八 (や) 木 (ぎ) 俊 (とし) 典 (のり) , Yagi Toshinori?), more commonly known by his hero name, All Might (オールマイト, Ōru Maito?), is the tritagonist of My Hero Academia. All Might is the former No. 1 Pro Hero who bore the title of the wo',
    images: [
      'https://storage.googleapis.com/my-hero-academia-api/Toshinori_Yagi-1.jpg',
      'https://storage.googleapis.com/my-hero-academia-api/Toshinori_Yagi-2.jpg',
      'https://storage.googleapis.com/my-hero-academia-api/Toshinori_Yagi.jpg',
    ],
    items: [
      ['occupation', 'Pro Hero, Teacher'],
      ['quirk', 'Quirkless, One For All'],
    ],
  };
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
  @Output() deleteAction = new EventEmitter<void>();
  constructor(private readonly destroy: TuiDestroyService) {}

  delete() {
    this.deleteAction.emit();
  }
}
