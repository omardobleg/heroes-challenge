import { text, number, boolean } from '@storybook/addon-knobs';
import { FilterComponent } from './filter.component';

export default {
  title: 'FilterComponent',
  component: FilterComponent
}

export const primary = () => ({
  moduleMetadata: {
    imports: []
  },
  props: {
    title: text('title', ''),
  }
})