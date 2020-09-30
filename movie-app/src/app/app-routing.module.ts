import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MovieFeatureComponent } from './movies/movie-feature/movie-feature.component';
import { MoviesListComponent } from './movies/movies-list/movies-list.component';

const routes: Routes = [
  {path: 'movies', component: MoviesListComponent},
  {path: 'featured', component: MovieFeatureComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
