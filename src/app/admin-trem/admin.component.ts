import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase/app';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { AngularFireDatabaseModule, AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';



@Component({
  selector: 'app-add-programa',
  templateUrl: './admin.component.html',
  //styleUrls: []
})
export class AdiminComponent implements OnInit {
  user: Observable<firebase.User>;
  form: FormGroup;
  loggedInForm: FormGroup;
  userAsync = { displayName: '' };
  userListObservable: FirebaseListObservable<any>;
  userObservable: FirebaseObjectObservable<any>;


  constructor(private afAuth: AngularFireAuth, private formBuilder: FormBuilder, private db: AngularFireDatabase) {
    this.user = afAuth.authState;
  }

  ngOnInit() {

    this.form = this
      .formBuilder
      .group({
        userName: ['', [Validators.email, Validators.required]],
        password: ['', Validators.required],
      });

    this.afAuth.auth.onAuthStateChanged((user) => {
      console.log(user)

      if (user) {
        this.prefilLoggedin(user);
        const dbUser = {};
        dbUser['displayName'] = user.displayName;
        dbUser['uid'] = user.uid;
        dbUser['photoURL'] = user.photoURL;
        dbUser['email'] = user.email;
        this.saveUserInDb(dbUser);
      }
    });
  }

  login() {
    firebase.auth().signInWithEmailAndPassword(this.form.controls.userName.value, this.form.controls.password.value);
  }

  logout() {
    firebase.auth().signOut();
  }

  prefilLoggedin(user) {
    this.loggedInForm = this
      .formBuilder
      .group({
        displayName: [user.displayName || '', [Validators.required]]
      });
  }
  alterarNome() {
    const user = this.afAuth.auth.currentUser;
    const newName = { displayName: this.loggedInForm.controls.displayName.value, photoURL: user.photoURL }
    user.updateProfile(newName);
  }

  saveUserInDb(user) {
    this.userObservable = this.db.object('/users/' + user.uid);
    this.userObservable.update(user);
  }
}


// export class CrisisCenterComponent { }