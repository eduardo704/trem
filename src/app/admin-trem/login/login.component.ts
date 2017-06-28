import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import { Router } from '@angular/router';
import { ErroAuthPt } from '../erro-auth-pt.enum';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  form: FormGroup;
  messageError = '';

  constructor(private afAuth: AngularFireAuth, private formBuilder: FormBuilder,
    private router: Router) {

  }

  ngOnInit() {
    this.form = this
      .formBuilder
      .group({
        userName: ['', [Validators.email, Validators.required]],
        password: ['', Validators.required],
      });

  }

  login() {
    this.afAuth.auth.signInWithEmailAndPassword(this.form.controls.userName.value, this.form.controls.password.value)
      .then(result => {
        this.messageError = '';
            this.router.navigate(['/admin']);
      })
      .catch(error => {
        console.log(error['code']);
        this.messageError = ErroAuthPt.convertMessage(error['code']);
      });
  }
}
