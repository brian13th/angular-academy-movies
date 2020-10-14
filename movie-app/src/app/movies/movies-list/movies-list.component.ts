import { Component, Input, OnInit } from '@angular/core';
import { DbService } from 'src/app/services/db.service';
import { Movie } from '../movie';
import { Actor } from '../actor';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.css']
})
export class MoviesListComponent implements OnInit {
  @Input('criteria')
  criteria: any;

  movies: Movie[];
  actors: Actor[];
  actor: Actor;
  constructor(private db:DbService) {}

  ngOnInit(): void {
    // this.movies = this.db.getAllMovies(this.criteria)
    this.db.getMovies$().subscribe(movies => this.movies = movies)
    this.db.getActors$().subscribe(actors => this.actors = actors)
  }
  showActors(event){
    for(let movie of this.movies){
      if (movie.title == event.target.textContent){
        const idOfMovie = movie.id;
        for (let actor of this.actors){
          if (actor.id === idOfMovie){
            this.actor = actor
          }
        }
      }
    }
  }
}
