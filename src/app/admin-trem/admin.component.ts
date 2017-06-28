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
  templateUrl: './admin.component.html'
})
export class AdiminComponent implements OnInit, OnDestroy {
  user: Observable<firebase.User>;

  userAsync = { displayName: '' };
  userListObservable: FirebaseListObservable<any>;
  userObservable: FirebaseObjectObservable<any>;
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
  }


  logout() {
    firebase.auth().signOut().then(result => {
      this.router.navigate(['/']);
    })
  }

  // alterarNome() {
  //   const user = this.afAuth.auth.currentUser;
  //   const newName = { displayName: this.loggedInForm.controls.displayName.value, photoURL: user.photoURL }
  //   user.updateProfile(newName);
  // }

  // saveUserInDb(user) {
  //   this.userObservable = this.db.object('/users/' + user.uid);
  //   this.userObservable.update(user);
  // }
}

