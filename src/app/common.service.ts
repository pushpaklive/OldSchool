import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';
import {User} from '../../../server/models/user';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  private userLoggedin = new BehaviorSubject<string>("false");
  cast = this.userLoggedin.asObservable();

  constructor(
    private router: Router
  ) {}

  hideLoginAndRegister(){
     this.userLoggedin.next("true");
  }

  private loggedIn = new BehaviorSubject<boolean>(false); // {1}

  get isLoggedIn() {
    return this.loggedIn.asObservable(); // {2}
  }
  

  login(user: User){
    console.log("commonsrvice : login() : User : ",user);
    if (user.name !== '' && user.password !== '' ) { // {3}
      this.loggedIn.next(true);
      this.router.navigate(['/']);
    }
  }

  logout() {                            // {4}
    this.loggedIn.next(false);
    this.router.navigate(['/login']);
  }

}
