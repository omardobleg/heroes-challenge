import { ChangeDetectionStrategy, Component, Inject } from '@angular/core';
import {
  TuiDestroyService,
  TuiResizeService,
  TUI_IS_ANDROID,
} from '@taiga-ui/cdk';
import { TUI_MOBILE_AWARE } from '@taiga-ui/kit';
import { Observable } from 'rxjs';

@Component({
  selector: 'heroes-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: TUI_MOBILE_AWARE,
      useValue: true,
    },
    {
      provide: TUI_IS_ANDROID,
      useValue: true,
    },
    TuiResizeService,
    TuiDestroyService,
  ],
})
export class NavbarComponent {
  public size = 0;
  public refresh = true;
  constructor(@Inject(TuiResizeService) resize$: Observable<void>) {
    resize$.subscribe(() => {
      console.log(
        '🚀 ~ file: navbar.component.ts ~ line 31 ~ NavbarComponent ~ refresh',
        this.refresh
      );
    });
  }
  readonly tabs = [
    {
      name: 'ROUTES.HEROES',
      route: 'characters',
    },
    {
      name: 'ROUTES.VILLAINS',
      route: 'villains',
    },
    {
      name: 'ROUTES.ABOUT',
      route: 'about',
    },
  ];
  activeElement = this.tabs[0];

  get activeItemIndex(): number {
    return this.tabs.indexOf(this.activeElement);
  }

  onClick(activeElement: { name: string; route: string }) {
    this.activeElement = activeElement;
  }
}
