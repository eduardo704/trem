import { Component, OnInit, AfterViewInit, OnDestroy } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

declare var $: any;
import 'rxjs/Rx';
import * as firebase from 'firebase/app';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { AngularFireDatabaseModule, AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';
import { ErroAuthPt } from './erro-auth-pt.enum';
import { ProgramaService } from './shared/programa.service';
import { Router } from '@angular/router';
import { Message } from 'primeng/primeng';

@Component({
  selector: 'app-add-programa',
  templateUrl: './admin.component.html',
  //styleUrls: []
})
export class AdiminComponent implements OnInit, OnDestroy {
  user: Observable<firebase.User>;
  form: FormGroup;
  loggedInForm: FormGroup;
  userAsync = { displayName: '' };
  userListObservable: FirebaseListObservable<any>;
  userObservable: FirebaseObjectObservable<any>;
  messageError = '';
  msgs: Message[] = [];
  loading = new Subject();
  carregando = false;
  msgsAs;
  msgObj;

  constructor(private afAuth: AngularFireAuth, private formBuilder: FormBuilder,
    private db: AngularFireDatabase, private router: Router, private ps: ProgramaService) {

  }
  ngOnDestroy() {

  }

  ngOnInit() {
    this.loading.next(true);
    this.user = this.afAuth.authState;

    this.form = this
      .formBuilder
      .group({
        userName: ['', [Validators.email, Validators.required]],
        password: ['', Validators.required],
      });

    this.afAuth.auth.onAuthStateChanged((user) => {
      this.carregando = true;
      this.loading.next(false);
      console.log(user);

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
    firebase.auth().signInWithEmailAndPassword(this.form.controls.userName.value, this.form.controls.password.value)
      .then(result => {
        this.messageError = '';
      })
      .catch(error => {
        console.log(error['code']);
        this.messageError = ErroAuthPt.convertMessage(error['code']);
      });
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