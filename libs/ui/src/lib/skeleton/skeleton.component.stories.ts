import { TuiIslandModule } from '@taiga-ui/kit';
import { SkeletonComponent } from './skeleton.component';

export default {
  title: 'SkeletonComponent',
  component: SkeletonComponent,
};

export const primary = () => ({
  moduleMetadata: {
    imports: [TuiIslandModule],
  },
  props: {},
});
