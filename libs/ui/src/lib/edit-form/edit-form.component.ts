import { Component, OnInit, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Hero, Occupation } from '@heroes/data'
import { TuiButtonShape } from '@taiga-ui/core';
import { TUI_VALIDATION_ERRORS } from '@taiga-ui/kit';

@Component({
  selector: 'heroes-edit-form',
  templateUrl: './edit-form.component.html',
  styleUrls: ['./edit-form.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: TUI_VALIDATION_ERRORS,
      useValue: {
        required: 'Enter this!',
      },
    },
  ],
})
export class EditFormComponent {
  @Input() loading = false;
  @Output() heroStatus = new EventEmitter<Hero>();
  public readonly occupations = [
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
  public form!: FormGroup;
  @Input() set hero(hero: Hero | null) {
    if (hero) {
      this._hero = hero;
      this.form.patchValue(hero);
      hero.images.forEach(val => this.addImage(val))
    }
  }
  get hero() {
    return this._hero;
  }
  private _hero!: Hero | null;

  get shape() {
    return TuiButtonShape.Rounded;
  }
  get title() {
    return this.hero ? 'UI.EDIT' : "UI.CREATE";
  }
  get images() {
    return this.form.get('images') as FormArray;
  }
  get imagesArray() {
    return this.images.controls as FormControl[];
  }
  constructor(private readonly fb: FormBuilder) {
    this.form = this.fb.group({
      id: '',
      name: ['', Validators.required],
      alias: ['', Validators.required],
      quirk: ['', Validators.required],
      description: '',
      occupation: [this.occupations[0].value, Validators.required],
      images: this.fb.array([]),
      affiliation: ['', Validators.required],
    });
  }

  deleteImage(index: number) {
    this.images.removeAt(index)
  }

  addImage(url = '') {
    const lessonForm = this.fb.control(url, Validators.required);
    this.images.push(lessonForm);
  }
  onSubmit() {
    const { valid, value } = this.form;
    if (valid) {
      this.heroStatus.emit(value)
    }
    this.form.markAllAsTouched();
  }
  clear() {
    this.form.reset();
  }
}
