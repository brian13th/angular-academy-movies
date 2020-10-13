import { Injectable } from '@angular/core';
import { movies } from '../movies/movie-data';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Movie } from '../movies/movie'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DbService {
  movieUrl: string = environment.config.api.url;

  constructor(private http: HttpClient) { }
  // criteria orizw to property gia to filtrarisma pou thelw na kanw.
  getAllMovies(criteria?: any): any[] {
    if (criteria){
      return movies.filter(data=>data.featured == criteria.featured);
    }
    else return movies;
  }

  getMovies$(): Observable<Movie[]>{
    return this.http.get<Movie[]>(this.movieUrl)
  }
}
