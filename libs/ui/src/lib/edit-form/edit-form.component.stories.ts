import { UiModule } from './../ui.module';
import { TranslateModule } from '@ngx-translate/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { boolean, text } from '@storybook/addon-knobs';
import { EditFormComponent } from './edit-form.component';

export default {
  title: 'EditFormComponent',
  component: EditFormComponent,
};

export const primary = () => ({
  moduleMetadata: {
    imports: [
      ReactiveFormsModule,
      FormsModule,
      TranslateModule.forRoot(),
      UiModule,
    ],
  },
  props: {
    loading: boolean('loading', false),
    hero: text('hero', ''),
  },
});
