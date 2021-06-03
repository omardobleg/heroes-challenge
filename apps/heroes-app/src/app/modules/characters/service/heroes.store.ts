import { FilterSearch } from './../../../../../../../libs/ui/src/lib/data/filter.model';
import { Hero } from './../data/Hero';
import { Injectable } from '@angular/core';
import { EntityState, EntityStore, StoreConfig } from '@datorama/akita';

export interface HeroesState extends EntityState<Hero, string> {
  filter: FilterSearch;
  page: number;
}

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'heroes' })
export class HeroesStore extends EntityStore<HeroesState> {
  constructor() {
    super({ filter: {}, page: 1 });
  }
}
