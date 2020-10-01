import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieGuardGuard implements CanActivate {
  constructor(){

  }
  canActivate(){
    // window.sessionStorage.setItem("authorizedUser","true")
    if (window.sessionStorage.getItem("authorisedUser") === "true"){
      return true;
    }
    return false

  }

}
