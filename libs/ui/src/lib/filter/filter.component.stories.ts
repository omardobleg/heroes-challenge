import { TranslateModule } from '@ngx-translate/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { text, number, boolean } from '@storybook/addon-knobs';
import { FilterComponent } from './filter.component';

export default {
  title: 'FilterComponent',
  component: FilterComponent,
};

export const primary = () => ({
  moduleMetadata: {
    imports: [FormsModule, ReactiveFormsModule, TranslateModule.forRoot()],
  },
  props: {
    title: text('title', ''),
  },
});
