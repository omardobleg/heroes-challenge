import { Component, OnInit, ChangeDetectionStrategy, Inject } from '@angular/core';
import { Observable } from 'rxjs';
import { HERO_INFO, HERO_PROVIDERS } from './edit.provider';

@Component({
  selector: 'heroes-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [HERO_PROVIDERS], 
})
export class EditComponent implements OnInit {

  constructor( @Inject(HERO_INFO) readonly hero$: Observable<string>,) { }

  ngOnInit(): void {
  }

}
