import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { TracksPageComponent } from '@modules/tracks/pages/tracks-page/tracks-page.component';
import { FavoritesPageComponent } from '@modules/favorites/pages/favorites-page/favorites-page.component';
import { HistoryPageComponent } from '@modules/history/pages/history-page/history-page.component';

const routes: Routes = [
  {
    path: 'tracks',
    component:TracksPageComponent,
    loadChildren: () => import('@modules/tracks/tracks.module').then(m => m.TracksModule)
  },
  {
    path: 'favorites',
    component:FavoritesPageComponent,
    loadChildren: () => import('@modules/favorites/favorites.module').then(m => m.FavoritesModule)
  },
  {
    path: 'history',
    component:HistoryPageComponent,
    loadChildren: () => import('@modules/history/history.module').then(m => m.HistoryModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
