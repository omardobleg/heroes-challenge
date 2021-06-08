import { villains } from './villains-conf';
import { Component, Inject, Injector, OnInit } from '@angular/core';
import { TuiDialogService } from '@taiga-ui/core';
import { CardConfig, Hero } from '@heroes/data';

@Component({
  selector: 'heroes-villains',
  templateUrl: './villains.component.html',
  styleUrls: ['./villains.component.scss'],
})
export class VillainsComponent {
  constructor(
    @Inject(TuiDialogService) private readonly dialogService: TuiDialogService,
    @Inject(Injector) private readonly injector: Injector
  ) {}

  public items = villains.result.map((v) =>
    this.mapHeroToCard((v as unknown) as Hero)
  );

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
