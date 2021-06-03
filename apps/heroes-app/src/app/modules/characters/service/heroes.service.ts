import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FilterSearch } from '../../../../../../../libs/ui/src/lib/data/filter.model';
import { environment } from '../../../../environments/environment';
import { Hero } from '../data/Hero';
import { Page } from '../data/Page';

@Injectable({
  providedIn: 'root'
})
export class HeroesService {

  private restBase: string;
  constructor(private readonly http: HttpClient) {
    this.restBase = environment.restBase;
  }

  getAll(page = 1, FilterSearch: FilterSearch = {}) {
    const params = this.createParams(page, FilterSearch);
    return this.http.get<Page<Hero>>(this.restBase, { params })
  }

  getOne(character: string) {
    return this.http.get<Hero>(`${this.restBase}/${character}`)
  }


  private createParams(page: number, { affiliation, alias, name, occupation, quirk }: FilterSearch) {
    return {
      page,
      ...(affiliation && { affiliation }),
      ...(alias && { alias }),
      ...(name && { name }),
      ...(occupation && { occupation }),
      ...(quirk && { quirk }),
    }
  }

}
