import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase/app';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-add-programa',
  templateUrl: './add-programa.component.html',
  styleUrls: ['./add-programa.component.scss']
})
export class AddProgramaComponent implements OnInit {
  user: Observable<firebase.User>;
  form: FormGroup;

  constructor(public afAuth: AngularFireAuth, private formBuilder: FormBuilder) {
    this.user = afAuth.authState;
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
    console.log(this.form.controls.userName.value, this.form.controls.password.value)
    firebase.auth().signInWithEmailAndPassword(this.form.controls.userName.value, this.form.controls.password.value).catch(function (error) {
   
    });
  }

  logout() {
    firebase.auth().signOut();
  }

}
