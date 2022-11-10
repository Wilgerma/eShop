import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { EMPTY, Observable, Subject } from 'rxjs';
import { AuthService } from '../auth.service';


@Component({
  selector: 'app-bs-navbar',
  templateUrl: './bs-navbar.component.html',
  styleUrls: ['./bs-navbar.component.scss']
})

export class BsNavbarComponent {
  public isMenuCollapsed = true;
  private errorMessageSubject = new Subject<string>();
  errorMessage$ = this.errorMessageSubject.asObservable();
  user$ = this.authService.user$;

  constructor(
    private afAuth: AngularFireAuth,
    private authService: AuthService,
    private router: Router
  ) { }

  logout() {
    this.authService.logout()
  }

}
