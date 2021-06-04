import { CharactersComponent } from './page/main/characters.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditComponent } from './page/edit/edit.component';

const routes: Routes = [
  { path: '', component: CharactersComponent },
  { path: 'create', component: EditComponent },
  { path: ':id', component: EditComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CharactersRoutingModule { }
