import { CardConfig } from './../../../../../../../../libs/ui/src/lib/data/card-config.model';
import { Component, OnInit } from '@angular/core';
import { HeroesService } from '../../service/heroes.service';
import { FilterSearch } from '../../../../../../../../libs/ui/src/lib/data/filter.model';
import { combineLatest, Subject } from 'rxjs';
import { startBatch } from '@datorama/akita';
import { map, startWith, switchMap } from 'rxjs/operators';

@Component({
  selector: 'heroes-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.scss'],
})
export class CharactersComponent implements OnInit {
  constructor(private readonly heroService: HeroesService) { }
  public heroes = ([1, 2, 3] as unknown[]) as CardConfig[];
  public hero$ = this.heroService.getOne('Izuku_Midoriya');
  private filter$ = new Subject<FilterSearch>();
  public heroes$ = this.filter$.pipe(
    startWith({}),
    switchMap(filter => this.heroService.getAll(1, filter))
  )
  ngOnInit(): void { }

  filter(filter: FilterSearch) {
    this.filter$.next(filter);
  }
}
