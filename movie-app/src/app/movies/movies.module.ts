import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MoviesListComponent } from './movies-list/movies-list.component';
import { MovieFeatureComponent } from './movie-feature/movie-feature.component';
import { MovieUrlComponent } from './movie-url/movie-url.component';



@NgModule({
  declarations: [MoviesListComponent, MovieFeatureComponent, MovieUrlComponent],
  imports: [
    CommonModule
  ],
  exports: [MoviesListComponent, MovieFeatureComponent, MovieUrlComponent]
})
export class MoviesModule { }
