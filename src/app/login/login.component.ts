import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Router } from '@angular/router';
import { EMPTY, Subject } from 'rxjs';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginComponent {
  private errorMessageSubject = new Subject<string>();
  errorMessage$ = this.errorMessageSubject.asObservable();

  constructor(private authService: AuthService, private router: Router) { }

  login() {
    this.authService.login();
  }


}
