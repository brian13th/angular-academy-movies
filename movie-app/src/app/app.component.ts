import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'movie-app';
  activateGuard(){
    window.sessionStorage.setItem("authorizedUser","true")
    window.alert('Access granted!')
  }
}
