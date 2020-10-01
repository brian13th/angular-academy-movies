import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-movie-url',
  templateUrl: './movie-url.component.html',
  styleUrls: ['./movie-url.component.css']
})
export class MovieUrlComponent implements OnInit {
  params: any;
  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {

    this.params = this.activatedRoute.snapshot.queryParamMap["params"]
    console.log(this.params)
  }

}
