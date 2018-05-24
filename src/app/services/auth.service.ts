import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private loggedIn = new BehaviorSubject<boolean>(false);

  constructor(private router: Router) { }


  // handle login processes
  login(form) {
    if (form.username !== '' && form.password !== '') {
      this.loggedIn.next(true);
      this.router.navigate(['/admin']);
    }
  }


  // remove all user credential
  // then navigate to /login
  logout() {
    this.loggedIn.next(false);
    this.router.navigate(['/login']);
  }


  // read the logged-in status
  get isLoggedIn() {
    return this.loggedIn.asObservable();
  }
}
