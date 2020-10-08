import { Injectable } from '@angular/core';
import { movies } from '../movies/movie-data'

@Injectable({
  providedIn: 'root'
})
export class DbService {

  constructor() { }
  // criteria orizw to property gia to filtrarisma pou thelw na kanw.
  getAllMovies(criteria?: any): any[] {
    if (criteria){
      return movies.filter(data=>data.featured == criteria.featured);
    }
    else return movies;
  }
}
