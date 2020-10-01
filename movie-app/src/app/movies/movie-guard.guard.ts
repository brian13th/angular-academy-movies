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
    if (window.sessionStorage.getItem("authorizedUser") === "true"){
      return true;
    }
    document.getElementById('activate').innerHTML = "ActivateUser"
    window.alert('Please press the button to activate your access url parameters')
    return false

  }

}
