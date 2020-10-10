import { Component, Input, OnInit } from '@angular/core';
import { Observable, Subscription, interval } from 'rxjs';
import { filter, map } from 'rxjs/operators';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'movie-app';
  interval$: Observable<any> = interval(1000);
  subscription: Subscription;
  count: Number;

  activateGuard(){
    window.sessionStorage.setItem("authorizedUser","true")
    window.alert('Access granted!')
  }

  ngOnInit(){

  }

}
