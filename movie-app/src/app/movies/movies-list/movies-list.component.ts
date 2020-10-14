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
    // this.db.getActors$().subscribe(actors => this.actors = actors)
  }

  showActor($event){
    let _movie = $event.target.textContent
    let _id: number;
    this.movies.forEach(
      (movie) => {
        if(movie.title === _movie){
          _id = movie.id
        }
      }
    )
    this.db.getActor$(_id).subscribe(res=> this.actor = res)
  }
}
