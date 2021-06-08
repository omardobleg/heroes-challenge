import { CommonModule } from '@angular/common';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';
import { TranslateModule } from '@ngx-translate/core';
import { TuiHintModule } from '@taiga-ui/core';
import { TuiIslandModule } from '@taiga-ui/kit';
import { ImageFallbackDirective } from './../directives/image-fallback.directive';
import { EllipsisPipe } from './../pipes/ellipsis.pipe';
import { CardComponent } from './card.component';

export default {
  title: 'CardComponent',
  component: CardComponent,
};

export const primary = () => ({
  moduleMetadata: {
    imports: [
      CommonModule,
      TuiHintModule,
      TuiIslandModule,
      RouterTestingModule,
      NoopAnimationsModule,
      TranslateModule.forRoot(),
    ],
    declarations: [ImageFallbackDirective, EllipsisPipe],
  },
  props: {
    textAlign: 'center',
    cardConfig: {
      id: '',
      link: '',
      title: 'All For One',
      subtitle: 'Master',
      body:
        "Tオール・フォー・ワン, Ōru Fō Wan?), real name Shigaraki (死 (し) 柄 (がら) 木 (き) , Shigaraki?), was the former leader and benefactor of the League of Villains, the main antagonist of the Hideout Raid Arc and the overarching antagonist of the series.\nOnce Japan's most powerful villain and All Might's arch-nemesis, his true motives are unclear and his true identity is unknown. His current goal is to raise Tomura to become his eventual successor. \nHe is currently under police custody and imprisoned in Tartarus.",

      images: [
        'https://storage.googleapis.com/my-hero-academia-api/All_For_One-1.jpg',
        'https://storage.googleapis.com/my-hero-academia-api/All_For_One-2.jpg',
        'https://storage.googleapis.com/my-hero-academia-api/All_For_One-3.jpg',
        'https://storage.googleapis.com/my-hero-academia-api/All_For_One.jpg',
      ],
      items: [['occupation', 'Villain, Leader of the League of Villains']],
    },
  },
});
