import { CardConfig } from './../../../../../../../../libs/ui/src/lib/data/card-config.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'heroes-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.scss'],
})
export class CharactersComponent implements OnInit {
  constructor() {}
  public heroes = ([1, 2, 3] as unknown[]) as CardConfig[];
  ngOnInit(): void {}
}
