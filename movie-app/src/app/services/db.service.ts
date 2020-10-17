import { ErrorHandler, Injectable } from '@angular/core';
import { movies } from '../movies/movie-data';
import { HttpClient, HttpErrorResponse, HttpRequest, HttpResponse } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Movie } from '../movies/movie'
import { Actor } from '../movies/actor'
import { Observable, of, throwError } from 'rxjs';
import { User } from '../user';
import { catchError } from 'rxjs/operators';

const maxAge = 30000;

@Injectable({
  providedIn: 'root'
})
export class DbService {
  movieUrl: string = environment.config.api.url + 'aa';
  actorUrl: string = environment.config.api.url2;
  usersUrl: string = environment.config.api.url3;
  actorCache = new Map();

  movies: Observable<Movie[]>;
  constructor(private http: HttpClient) { }
  // criteria orizw to property gia to filtrarisma pou thelw na kanw.
  getAllMovies(criteria?: any): any[] {
    if (criteria){
      return movies.filter(data=>data.featured == criteria.featured);
    }
    else return movies;
  }

  getMovies$(): Observable<Movie[]>{
    // if (this.movies){                               solution to cache movies without interceptor
    //   return this.movies
    // } else {
    //   this.movies = this.http.get<Movie[]>(this.movieUrl);
    // }
    return this.http.get<Movie[]>(this.movieUrl);
  }
  getActors$(): Observable<Actor[]> {
    return this.http.get<Actor[]>(this.actorUrl);
  }
  postUser$(user: User): Observable<User>{
    return this.http.post<User>(this.usersUrl, user);
  }
  getActor$(id: number): Observable<Actor>{
    return this.http.get<Actor>(this.actorUrl+ "/" + id);
  }
  getActorService(req: HttpRequest<any>): HttpResponse<any> | undefined {
    const url = req.urlWithParams;
    const cached = this.actorCache.get(url);

    if (!cached) {
      return undefined;
    }
    const isExpired = cached.lastRead < (Date.now() - maxAge);
    const expired = isExpired ? 'expired ' : '';
    return cached.response;
  }
  put(req: HttpRequest<any>, response: HttpResponse<any>): void {
    const url = req.url;
    const entry = { url, response, lastRead: Date.now() };
    this.actorCache.set(url, entry);

    const expired = Date.now() - maxAge;
    this.actorCache.forEach(expiredEntry => {
      if (expiredEntry.lastRead < expired) {
        this.actorCache.delete(expiredEntry.url);
      }
    });
  }
}
