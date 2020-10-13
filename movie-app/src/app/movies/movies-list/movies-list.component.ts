import { Component, Input, OnInit } from '@angular/core';
import { DbService } from 'src/app/services/db.service';

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.css']
})
export class MoviesListComponent implements OnInit {
  @Input('criteria')
  criteria: any;

  movies: any[];
  constructor(private db:DbService) {}

  ngOnInit(): void {
    // this.movies = this.db.getAllMovies(this.criteria)
    this.db.getMovies$().subscribe(movies => this.movies = movies)
  }

}
