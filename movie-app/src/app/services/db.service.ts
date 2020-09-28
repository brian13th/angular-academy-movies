import { Injectable } from '@angular/core';
import { movies } from '../movies/movie-data'

@Injectable({
  providedIn: 'root'
})
export class DbService {

  constructor() { }

  getAllMovies(): any[] {
    return movies
  }
}
