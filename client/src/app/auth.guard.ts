import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

//@Injectable({
  //providedIn: 'root'
//})
//export class AuthGuard implements CanActivate {
  //constructor(private auth: AuthService){}
  //canActivate(
    //route: ActivatedRouteSnapshot,
    //state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    //return true;
    //if(this.auth.isLoggedIn()){
      //window.alert('done');
      //return true;
    //}
    //else{
      //window.alert('you dont have permission to view this page');
      //return false;
    //}
  //}
  
//}
