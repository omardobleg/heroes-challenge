import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Hero, Page } from '@heroes/data';
import { combineLatest } from 'rxjs';
import {
  delay,
  finalize,
  map,
  switchMap,
  take,
  tap
} from 'rxjs/operators';
import { environment } from '../../../../environments/environment';
import { HeroesStore } from './heroes.store';
import { PouchDBService } from './pouchDb/pouch-db.service';


@Injectable({
  providedIn: 'root',
})
export class HeroesService {
  private restBase: string;
  constructor(
    private readonly http: HttpClient,
    @Inject(HeroesStore) private readonly store: HeroesStore,
    @Inject(PouchDBService) private readonly pouchDbService: PouchDBService
  ) {
    this.restBase = environment.restBase;
  }

  getAll(
    page = 1,
    FilterSearch: {
      name?: string;
      alias?: string;
      quirk?: string;
      occupation?: string;
      affiliation?: string;
    } = {}
  ) {
    const params = this.createParams(page, FilterSearch);
    this.store.setLoading(true);
    return combineLatest([
      this.http.get<Page<Hero>>(this.restBase, { params }),
      this.pouchDbService.find(FilterSearch),
    ]).pipe(
      //store pagination info
      tap(([rest, _]) => this.store.update({ pageInfo: rest.info })),
      // Get data form Rest and local db
      map(([restData, dbData]) => [...dbData.docs, ...restData.result]),
      // Remove duplicate items, get db only
      map((combined) =>
        combined.filter((v, i, a) => a.findIndex((t) => t.id === v.id) === i)
      ),
      // Remove items marked as deleted
      map((noDuplicates) => noDuplicates.filter((item) => !item.deleted)),
      // Set data in store
      tap((noDeleted) => this.store.set(noDeleted)),
      tap(() => this.store.setLoading(false))
    );
  }

  getOne(character: string) {
    this.store.setLoading(true);
    return combineLatest([ this.pouchDbService.getOne(character) ,
      this.http.get<Hero>(`${this.restBase}/${character}`)])
      .pipe(
        map(([dbOne,restOne])=>({...restOne,...dbOne})),
        finalize(() => this.store.setLoading(false))
        );
  }

  /**
   * Create or update hero in local db
   * @param hero
   * @returns
   */
  upsertOne(hero: Hero) {
    this.store.setLoading(true);
    return this.pouchDbService
      .upsertOne(hero)
      .pipe(
        delay(500),
        finalize(() => this.store.setLoading(false)));
  }
  /**
   *  Mark a hero as deleted in local db, because API is read only
   * @param hero
   * @returns
   */
  deleteOne(hero: Hero) {
    this.store.setLoading(true);
    return this.pouchDbService.deleteOne(hero).pipe(
      switchMap(() => this.store.remove(hero.id)),
      take(1),
      finalize(() => this.store.setLoading(false))
    );
  }

  private createParams(
    page: number,
    {
      affiliation,
      alias,
      name,
      occupation,
      quirk,
    }: {
      name?: string;
      alias?: string;
      quirk?: string;
      occupation?: string;
      affiliation?: string;
    }
  ) {
    return {
      page,
      ...(affiliation && { affiliation }),
      ...(alias && { alias }),
      ...(name && { name }),
      ...(occupation && { occupation }),
      ...(quirk && { quirk }),
    };
  }
}
