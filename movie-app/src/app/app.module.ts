import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MoviesModule } from './movies/movies.module';
import { MovieGuardGuard } from './movies/movie-guard.guard';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { CacheInterceptor } from './cache.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    ReactiveFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MoviesModule,
    ReactiveFormsModule
  ],
  providers: [
    MovieGuardGuard,
    {provide: HTTP_INTERCEPTORS,
    useClass: CacheInterceptor,
    multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
