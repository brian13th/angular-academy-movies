import { NgModule } from '@angular/core';
import { Routes, RouterModule, Router, ActivatedRoute, ParamMap } from '@angular/router';
import { MovieFeatureComponent } from './movies/movie-feature/movie-feature.component';
import { MovieGuardGuard } from './movies/movie-guard.guard';
import { MovieUrlComponent } from './movies/movie-url/movie-url.component';
import { MoviesListComponent } from './movies/movies-list/movies-list.component';

const routes: Routes = [
  {path:'movies', component: MoviesListComponent, pathMatch:'prefix'},
  {path:'featured', component: MovieFeatureComponent, pathMatch:'prefix'},
  // {path: '', redirectTo: 'featured', pathMatch: 'full'},
  // {path: "**", component: Custom404Component},
  {path:'murl', component: MovieUrlComponent, pathMatch:'prefix', canActivate:[MovieGuardGuard]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
