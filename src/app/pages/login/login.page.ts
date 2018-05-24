import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validator, Validators } from '@angular/forms';
import { Router } from "@angular/router";
import { Observable } from 'rxjs';

// project's import
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.css']
})
export class LoginPage implements OnInit {

  form: FormGroup;
  private formSubmitAttempt: boolean;

  constructor(private router: Router, private auth: AuthService,
    private fb: FormBuilder) { }

  ngOnInit() {

    this.form = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });

    // when user has logged-in
    // the page should navigated to dashboard
    const obv = this.auth.isLoggedIn;

    // assign class properties to scope variables
    // in order to its's values
    // can be read inside subscribe()
    let router = this.router;

    // execute the publisher
    obv.subscribe({
      next(isLoggedIn) {
        if(isLoggedIn) {
          router.navigate(['/admin']);
        }
      },
    });

  }


  isFieldInvalid(field: string) {
    return (
      (!this.form.get(field).valid && this.form.get(field).touched) ||
      (this.form.get(field).untouched && this.formSubmitAttempt)
    );
  }


  onSubmit() {
    if (this.form.valid) {
      this.auth.login(this.form.value);
    }

    this.formSubmitAttempt = true;
  }
}

export interface User {
  userName: string;
  password: string;
}
