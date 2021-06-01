import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'heroes-content-layout',
  templateUrl: './content-layout.component.html',
  styleUrls: ['./content-layout.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContentLayoutComponent {}
