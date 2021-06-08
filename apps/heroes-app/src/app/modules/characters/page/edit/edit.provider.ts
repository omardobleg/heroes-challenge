import { InjectionToken, Provider } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Hero } from '@heroes/data';
import { Observable, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { HeroesQuery } from '../../service/heroes.query';
import { HeroesService } from '../../service/heroes.service';

// token to access a stream with the information you need
export const HERO_INFO = new InjectionToken<Observable<Hero>>(
  'A stream with current Hero to edit'
);

// Abstract the data from the component
export const HERO_PROVIDERS: Provider[] = [
  {
    provide: HERO_INFO,
    deps: [ActivatedRoute, HeroesQuery, HeroesService],
    useFactory: heroFactory,
  },
];

// We can have multiple factories, depending on the data source (rest service,store,etc)
// makes more sense in isolated components
export function heroFactory(
  { params }: ActivatedRoute,
  heroQuery: HeroesQuery,
  heroService: HeroesService
): Observable<Hero | undefined> {
  return params.pipe(
    switchMap(({ id }) => {
      return heroQuery
        .selectEntity(id)
        .pipe(switchMap((val) => (!val ? heroService.getOne(id) : of(val))));
    })
  );
}
