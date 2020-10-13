import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MoviesListComponent } from './movies-list/movies-list.component';
import { MovieFeatureComponent } from './movie-feature/movie-feature.component';
import { MovieUrlComponent } from './movie-url/movie-url.component';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';



@NgModule({
  declarations: [MoviesListComponent, MovieFeatureComponent, MovieUrlComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, {
      dataEncapsulation: false,
      passThruUnknownUrl: true,
      put204: false, // return entity after PUT/update
    }),
  ],
  exports: [MoviesListComponent, MovieFeatureComponent, MovieUrlComponent]
})
export class MoviesModule { }
