import { Injectable } from '@angular/core';
import { movies } from '../movies/movie-data'

@Injectable({
  providedIn: 'root'
})
export class DbService {

  constructor() { }

  getAllMovies(criteria?: any): any[] {
    if (criteria){
      return movies.filter(data=>data.featured == criteria.featured)}
      else return movies
    }
}
