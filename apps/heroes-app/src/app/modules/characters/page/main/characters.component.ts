import { Hero } from './../../data/Hero';
import { TuiDestroyService } from '@taiga-ui/cdk';
import { Component, Inject } from '@angular/core';
import { CardConfig } from 'libs/ui/src/lib/data/card-config.model';
import { FilterSearch } from 'libs/ui/src/lib/data/filter.model';
import { BehaviorSubject, combineLatest, of } from 'rxjs';
import { filter, map, switchMap, takeUntil } from 'rxjs/operators';
import { HeroesQuery } from '../../service/heroes.query';
import { HeroesService } from '../../service/heroes.service';

@Component({
  selector: 'heroes-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.scss'],
  providers: [TuiDestroyService],
})
export class CharactersComponent {
  constructor(
    @Inject(HeroesService) private readonly heroService: HeroesService,
    @Inject(HeroesQuery) private readonly heroesQuery: HeroesQuery,
    private readonly destroyService: TuiDestroyService
  ) {}
  public heroes = ([1, 2, 3] as unknown[]) as CardConfig[];
  public hero$ = this.heroService.getOne('Izuku_Midoriya');
  public loading$ = this.heroesQuery.selectLoading();
  private filter$ = new BehaviorSubject<FilterSearch>({});
  private paginator$ = new BehaviorSubject<number>(1);
  public heroes$ = combineLatest([this.filter$, this.paginator$]).pipe(
    switchMap(([filter, page]) => this.heroService.getAll(page, filter)),
    switchMap(() => this.heroesQuery.selectAll()),
    map((heroes) => heroes.map((hero) => this.mapHeroToCard(hero)))
  );

  filter(filter: FilterSearch) {
    this.filter$.next(filter);
  }

  public deleteItem(id: string) {
    this.heroesQuery
      .selectEntity(id)
      .pipe(
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
      link: `/${id}`,
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
