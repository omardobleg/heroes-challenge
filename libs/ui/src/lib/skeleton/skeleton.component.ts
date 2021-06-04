import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TuiTextAlign } from '@taiga-ui/kit';
import { Fade } from '../animations/animations';

@Component({
  selector: 'heroes-skeleton',
  templateUrl: './skeleton.component.html',
  styleUrls: ['./skeleton.component.scss'],
  animations: [Fade],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SkeletonComponent {
  public center = TuiTextAlign.Center;
}
