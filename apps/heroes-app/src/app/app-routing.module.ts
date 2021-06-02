import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; // CLI imports router

const routes: Routes = [{ path: 'characters', loadChildren: () => import('./modules/characters/characters.module').then(m => m.CharactersModule) }, { path: 'villains', loadChildren: () => import('./modules/villains/villains.module').then(m => m.VillainsModule) }, { path: 'about', loadChildren: () => import('./modules/about/about.module').then(m => m.AboutModule) }]; // sets up routes constant where you define your routes

// configures NgModule imports and exports
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
