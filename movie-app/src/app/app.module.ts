import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MoviesModule } from './movies/movies.module';
import { MovieGuardGuard } from './movies/movie-guard.guard';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MoviesModule,
  ],
  providers: [MovieGuardGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
