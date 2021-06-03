import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { FilterSearch } from '../data/filter.model';
import { Occupation } from '../data/occupation.enum';

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
  public readonly items = [{
    label: 'UI.TEACHER',
    value: Occupation.teacher
  },
  {
    label: 'UI.STUDENT',
    value: Occupation.student
  }
  ]

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
    })
  }


  onSubmit(): void {
    const formValue = this.filteredValue;
    console.log("🚀 ~ file: filter.component.ts ~ line 45 ~ FilterComponent ~ onSubmit ~ formValue", formValue)
    if (Object.keys(formValue).length > 0) {
      this.newFiltering.emit(formValue);
    }
  }
}
