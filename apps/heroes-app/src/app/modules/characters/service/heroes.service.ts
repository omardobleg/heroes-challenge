import { HeroesStore } from './heroes.store';
import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { tap } from 'rxjs/operators';
import { FilterSearch } from '../../../../../../../libs/ui/src/lib/data/filter.model';
import { environment } from '../../../../environments/environment';
import { Hero } from '../data/Hero';
import { Page } from '../data/Page';

@Injectable({
  providedIn: 'root',
})
export class HeroesService {
  private restBase: string;
  constructor(
    private readonly http: HttpClient,
    @Inject(HeroesStore) private readonly store: HeroesStore
  ) {
    this.restBase = environment.restBase;
  }

  getAll(page = 1, FilterSearch: FilterSearch = {}) {
    const params = this.createParams(page, FilterSearch);
    this.store.setLoading(true);
    return this.http
      .get<Page<Hero>>(this.restBase, { params })
      .pipe(
        tap((page) => this.store.set(page.result)),
        tap(() => this.store.setLoading(false))
      );
  }

  getOne(character: string) {
    return this.http.get<Hero>(`${this.restBase}/${character}`);
  }

  private createParams(
    page: number,
    { affiliation, alias, name, occupation, quirk }: FilterSearch
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
