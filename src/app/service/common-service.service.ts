import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { BehaviorSubject, Observable } from 'rxjs';
import { __values } from 'tslib';
import * as firebase from 'firebase';
import {User,UserCredential} from 'firebase';
import {auth} from 'firebase/auth'
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class CommonServiceService {

  private pathParamState : BehaviorSubject<string> = new BehaviorSubject<string>("");
  pathParam : Observable<string> | undefined;

  //create user
  private user: User;




  constructor(private afs:AngularFireStorage , private auth:AngularFireAuth, private route:Router) { 
    this.pathParam = this.pathParamState.asObservable(); 
    this.auth.authState.subscribe(user => {
      if(user){
        this.user = user;
        localStorage.set("user",JSON.stringify(this.user));
        this.route.navigateByUrl("").then();
      }
      else{
        localStorage.set("user",null);
      }
    });
   
  }
  loginWithGoogle(){
    this.auth.signInWithPopup(new auth.GoogleAuthProvider()).then((data:UserCredential)=>{
      if(data.user) {
        this.user = data.user;
        localStorage.setItem("user" , JSON.stringify(this.user));
        this.route.navigateByUrl('').then();
      }
      else{
        localStorage.set("user",null);
      }
    })
      
  }
  logout(){
    this.auth.signOut().then(() =>{
      localStorage.removeItem("user");
      this.route.navigateByUrl("/loginpage").then();
    });
  }
  getUser(): User{
    return this.user;
  }
  updatePathparamState(newPathParam : string){
    this.pathParamState.next(newPathParam);
  }
}
