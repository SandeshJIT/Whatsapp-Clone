import { ValueConverter } from '@angular/compiler/src/render3/view/template';
import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import {map, tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ChatGuardGuard implements CanActivate {

  constructor(private auth:AngularFireAuth,private route:Router){

  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.auth.authState.pipe(
      map(user => user !== null),
      tap(value => {
        if(!value){
          this.route.navigateByUrl("/loginpage")
          return value;
        }
        else{
          console.log("hello");
          return value;
         
        }
      })
    );
  }
  
}
