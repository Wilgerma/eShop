import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { map, Observable } from 'rxjs';
import { AuthService } from './auth.service';
import { UserService } from './user.service';
import { TutorialService } from './tutorials-services';
import { Tutorial } from './models/tutorial-model';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {


  constructor(private userService: UserService, private auth: AuthService, router: Router,
    tutorialService: TutorialService) {
     
    // auth.user$.subscribe(user => {
    //   if (user) {
    //     userService.save(user);

    //     let returnUrl: any = localStorage.getItem('returnUrl');
    //     router.navigateByUrl(returnUrl);
    //   }
    // })
    // auth.user$.pipe(
    //   map((user)=>{
    //     if (user) {
    //       userService.save(user);
    //       let returnUrl: any = localStorage.getItem('returnUrl');
    //       router.navigateByUrl(returnUrl);
    //     }
    //   })
    // )


    let newTutorial : Tutorial = new Tutorial();
    newTutorial.key = 'oojkjsadsda';
    newTutorial.title = 'New Tutorial';
    newTutorial.description = 'Description';
    newTutorial.published = false;
    //tutorialService.create(newTutorial);


  }


}
