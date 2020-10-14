import { Injectable } from '@angular/core';
import { movies } from '../movies/movie-data';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Movie } from '../movies/movie'
import { Actor } from '../movies/actor'
import { Observable } from 'rxjs';
import { User } from '../user';

@Injectable({
  providedIn: 'root'
})
export class DbService {
  movieUrl: string = environment.config.api.url;
  actorUrl: string = environment.config.api.url2;
  usersUrl: string = environment.config.api.url3;
  constructor(private http: HttpClient) { }
  // criteria orizw to property gia to filtrarisma pou thelw na kanw.
  getAllMovies(criteria?: any): any[] {
    if (criteria){
      return movies.filter(data=>data.featured == criteria.featured);
    }
    else return movies;
  }

  getMovies$(): Observable<Movie[]>{
    return this.http.get<Movie[]>(this.movieUrl);
  }
  getActors$(): Observable<Actor[]> {
    return this.http.get<Actor[]>(this.actorUrl);
  }
  postUser$(user: User): Observable<User>{
    return this.http.post<User>(this.usersUrl, user);
  }
}
