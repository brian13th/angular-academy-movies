import { NgModule } from '@angular/core';
import { Routes, RouterModule, Router, ActivatedRoute, ParamMap } from '@angular/router';
import { AppComponent } from './app.component';
import { MovieFeatureComponent } from './movies/movie-feature/movie-feature.component';
import { MoviesListComponent } from './movies/movies-list/movies-list.component';

const routes: Routes = [
  {path: 'movies', component: MoviesListComponent},
  {path: 'featured', component: MovieFeatureComponent},
  {path: '', component: AppComponent}, // we can use redirectTo: 'the-path-of-the-component', pathMatch: 'full'
  {path: "**", component: AppComponent} // we could have a custom 404Component
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
