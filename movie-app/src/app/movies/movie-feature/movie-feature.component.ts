import { Component, Input, OnInit } from '@angular/core';
import { DbService } from 'src/app/services/db.service';

@Component({
  selector: 'app-movie-feature',
  templateUrl: './movie-feature.component.html',
  styleUrls: ['./movie-feature.component.css']
})
export class MovieFeatureComponent implements OnInit {
  moviesFeat: any[];

  @Input()
  feature: any = {featured: true}

  constructor(private db:DbService) {
    this.moviesFeat = db.getAllMovies(this.feature)
   }

  ngOnInit(): void {
  }

}
