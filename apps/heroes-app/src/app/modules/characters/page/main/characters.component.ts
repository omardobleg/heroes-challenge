import { ChangeDetectionStrategy, Component, Inject } from '@angular/core';
import { CardConfig, FilterSearch, Hero } from '@heroes/data';
import { TuiDestroyService } from '@taiga-ui/cdk';
import { TuiDialogService } from '@taiga-ui/core';
import { PolymorpheusComponent } from '@tinkoff/ng-polymorpheus';
import { BehaviorSubject, of } from 'rxjs';
import {
  filter,
  map,
  switchMap,
  takeUntil,
  withLatestFrom,
} from 'rxjs/operators';
import { HeroesQuery } from '../../service/heroes.query';
import { HeroesService } from '../../service/heroes.service';
import { ModalDeleteComponent } from './../../components/modal-delete/modal-delete.component';

@Component({
  selector: 'heroes-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [TuiDestroyService],
})
export class CharactersComponent {
  constructor(
    @Inject(HeroesService) private readonly heroService: HeroesService,
    @Inject(HeroesQuery) private readonly heroesQuery: HeroesQuery,
    private readonly destroyService: TuiDestroyService,
    @Inject(TuiDialogService) private readonly dialogService: TuiDialogService
  ) {}
  private readonly dialog = this.dialogService.open<number>(
    new PolymorpheusComponent(ModalDeleteComponent)
  );
  public loading$ = this.heroesQuery.selectLoading();
  private filter$ = new BehaviorSubject<FilterSearch>({});
  private paginator$ = new BehaviorSubject<number>(1);
  public paginationStatus = this.heroesQuery.selectPagination$;

  public heroes$ = this.paginator$.pipe(
    withLatestFrom(this.filter$),
    switchMap(([page, filter]) => this.heroService.getAll(page, filter)),
    switchMap(() => this.heroesQuery.selectAll()),
    map((heroes) => heroes.map((hero) => this.mapHeroToCard(hero)))
  );

  filter(filter: FilterSearch) {
    this.filter$.next(filter);
    this.paginator$.next(1);
  }
  public goToPage(page: number) {
    this.paginator$.next(page + 1);
  }

  public deleteItem(id: string) {
    this.dialog
      .pipe(
        filter((val) => !!val),
        switchMap(() => this.heroesQuery.selectEntity(id)),
        switchMap((hero) =>
          hero ? this.heroService.deleteOne(hero) : of(null)
        ),
        takeUntil(this.destroyService)
      )
      .subscribe();
  }

  private mapHeroToCard({
    id,
    name,
    alias,
    description,
    images,
    occupation,
    quirk,
    affiliation,
  }: Hero): CardConfig {
    return {
      id,
      link: `./${id}`,
      title: name,
      subtitle: alias,
      body: description,
      images: images,
      items: [
        ['CHARACTERS.OCCUPATION', occupation],
        ['CHARACTERS.QUIRK', quirk],
        ['CHARACTERS.AFFILIATION', affiliation],
      ],
    };
  }
}
