import { ChangeDetectionStrategy, Component, Inject } from '@angular/core';
import { Observable } from 'rxjs';
import { Hero } from '@heroes/data';
import { HERO_INFO, HERO_PROVIDERS } from './edit.provider';
import { HeroesService } from '../../service/heroes.service';
import { TuiNotification, TuiNotificationsService } from '@taiga-ui/core';
import { HeroesQuery } from '../../service/heroes.query';

@Component({
  selector: 'heroes-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [HERO_PROVIDERS],
})
export class EditComponent {

  constructor(
    @Inject(HERO_INFO) readonly hero$: Observable<Hero>,
    private heroService: HeroesService,
    private notificationService: TuiNotificationsService,
    private heroQuery: HeroesQuery
  ) { }
  public loading$ = this.heroQuery.selectLoading();

  update(hero: Hero) {
    this.heroService.upsertOne(hero).subscribe(v => {
      console.log("🚀 ~ file: edit.component.ts ~ line 24 ~ EditComponent ~ update ~ v", v)
      this.notificationService.show('Hero Created',{status:TuiNotification.Success}).subscribe()
    }
    );
  }
}
