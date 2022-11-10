import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import * as firebase from 'firebase/auth';
import { Observable } from 'rxjs';
import { AppUser } from './shared/models/app-user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private user: Observable<firebase.User> | undefined;

  constructor(private db: AngularFireDatabase,private _firebaseAuth: AngularFireAuth) {
    this.user =_firebaseAuth.authState;
  }


  save(user: firebase.User){
    this.db.object('/users' + user.uid).update({
      name:user.displayName,
      email:user.email
    })
  }
}
