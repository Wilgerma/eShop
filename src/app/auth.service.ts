import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { ActivatedRoute, Router } from '@angular/router';
import { GoogleAuthProvider } from 'firebase/auth';


import { AppUser } from './shared/models/app-user';
import * as firebase from 'firebase/auth';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  // user:AppUser | undefined;
  // private user: Observable<firebase.User> | any;
  user$ = this.afAuth.authState;
  redirectUrl: string | undefined;


  constructor(private afAuth: AngularFireAuth,
              private route: ActivatedRoute
     ){}

  login() {
    let returnUrl = this.route.snapshot.queryParamMap.get('returnUrl') || '/';
    localStorage.setItem('returnUrl', returnUrl);

    this.afAuth.signInWithPopup(new firebase.GoogleAuthProvider())

  }

  logout(){
    this.afAuth.signOut();
  }

}




