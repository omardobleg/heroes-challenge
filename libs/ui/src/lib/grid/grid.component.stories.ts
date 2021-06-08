import { SkeletonComponent } from './../skeleton/skeleton.component';
import { CardComponent } from './../card/card.component';

import { GridComponent } from './grid.component';

export default {
  title: 'GridComponent',
  component: GridComponent,
};

export const primary = () => ({
  moduleMetadata: {
    imports: [],
    declarations: [CardComponent, SkeletonComponent],
  },
  props: {},
});
