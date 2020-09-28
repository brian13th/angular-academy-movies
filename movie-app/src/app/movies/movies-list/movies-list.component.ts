import { Component, OnInit } from '@angular/core';
import { DbService } from 'src/app/services/db.service';

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.css']
})
export class MoviesListComponent implements OnInit {
  movies: any[];
  constructor(private db:DbService) {
    this.movies = db.getAllMovies()
   }

  ngOnInit(): void {
  }

}
