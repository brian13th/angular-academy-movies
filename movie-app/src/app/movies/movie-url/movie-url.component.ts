import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-movie-url',
  templateUrl: './movie-url.component.html',
  styleUrls: ['./movie-url.component.css']
})
export class MovieUrlComponent implements OnInit {
  paramsKeys: any;
  paramsVals: any = [];
  url: any;
  urll: any;
  constructor(private activatedRoute: ActivatedRoute, private router:Router) { }

  ngOnInit(): void {
    this.paramsKeys = this.activatedRoute.snapshot.queryParamMap.keys

    this.url = this.router.url
  }

}
