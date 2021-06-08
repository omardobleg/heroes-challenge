import { Component } from '@angular/core';
import { CardConfig, Hero } from '@heroes/data';
import { villains } from './villains-conf';

@Component({
  selector: 'heroes-villains',
  templateUrl: './villains.component.html',
  styleUrls: ['./villains.component.scss'],
})
export class VillainsComponent {
  constructor() {}

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
