import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VillainsRoutingModule } from './villains-routing.module';
import {VillainsComponent} from './page/villains/villains.component'

@NgModule({
  declarations: [
    VillainsComponent
  ],
  imports: [
    CommonModule,
    VillainsRoutingModule
  ]
})
export class VillainsModule { }
