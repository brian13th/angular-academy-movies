import { Component, Input, OnInit } from '@angular/core';
import { DbService } from 'src/app/services/db.service';

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.css']
})
export class MoviesListComponent implements OnInit {

  @Input('criteria')
  criteria: any = {featured: true}

  movies: any[];
  constructor(private db:DbService) {
    this.movies = db.getAllMovies(this.criteria)
   }

  ngOnInit(): void {
  }

}
