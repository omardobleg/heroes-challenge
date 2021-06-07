import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { FilterSearch,Occupation } from '@heroes/data'


@Component({
  selector: 'heroes-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FilterComponent {
  @Input() title = '';
  @Input() open = false;
  @Output() newFiltering = new EventEmitter<FilterSearch>();
  public formFilter: FormGroup;
  public readonly items = [
    {
      label: 'UI.TEACHER',
      value: Occupation.teacher,
    },
    {
      label: 'UI.STUDENT',
      value: Occupation.student,
    },
    {
      label: 'UI.PRO',
      value: Occupation.pro,
    },
  ];

  get filteredValue() {
    const { value } = this.formFilter;
    Object.keys(value).forEach((k) => !value[k] && delete value[k]);
    return value;
  }
  constructor(private readonly fb: FormBuilder) {
    this.formFilter = this.fb.group({
      name: '',
      alias: '',
      quirk: '',
      occupation: null,
      affiliation: '',
    });
  }

  onSubmit(): void {
    const formValue = this.filteredValue;
    this.newFiltering.emit(formValue);
  }

  clear() {
    this.formFilter.reset();
    this.onSubmit();
  }
}
