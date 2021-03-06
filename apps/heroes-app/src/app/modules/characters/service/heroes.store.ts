import { Injectable } from '@angular/core';
import { EntityState, EntityStore, StoreConfig } from '@datorama/akita';
import { Hero } from '@heroes/data'

export interface HeroesState extends EntityState<Hero, string> {
  pageInfo: {
    currentPage: number;
    count: number;
    pages: number;
  };
}
export const initialPageInfo = {
  currentPage: 1,
  count: 100,
  pages: 5,
};

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'heroes' })
export class HeroesStore extends EntityStore<HeroesState> {
  constructor() {
    super({ pageInfo: initialPageInfo });
  }
}
