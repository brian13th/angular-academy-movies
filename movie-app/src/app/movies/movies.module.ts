import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MoviesListComponent } from './movies-list/movies-list.component';
import { MovieFeatureComponent } from './movie-feature/movie-feature.component';



@NgModule({
  declarations: [MoviesListComponent, MovieFeatureComponent],
  imports: [
    CommonModule
  ],
  exports: [MoviesListComponent, MovieFeatureComponent]
})
export class MoviesModule { }
