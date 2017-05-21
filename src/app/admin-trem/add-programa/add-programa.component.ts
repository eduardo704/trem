import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { AngularFireDatabaseModule, AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import { Router } from '@angular/router';
import { Message } from 'primeng/primeng';

declare var $: any;

@Component({
  selector: 'app-add-programa',
  templateUrl: './add-programa.component.html',
  styleUrls: ['./add-programa.component.scss']
})
export class AddProgramaComponent implements OnInit {
  postObservable: FirebaseObjectObservable<any>;
  listObservable: FirebaseListObservable<any>;

  form: FormGroup;
  ultimoPrograma;
  preview = false;
  msgs: Message[] = [];

  constructor(private db: AngularFireDatabase, private router: Router, private formBuilder: FormBuilder,
    private afAuth: AngularFireAuth) {

  }

  ngOnInit() {

    this.form = this
      .formBuilder
      .group({
        titulo: ['', Validators.required],
        desc: ['', Validators.required],
        audio: ['', Validators.required],
        imagem: ['', Validators.required],
        data: ['', Validators.required],
      });

    this.listObservable = this
      .db
      .list('/posts/');
  }

 


  confirmar() {
    this.msgs.push({ severity: 'info', summary: 'Info Message', detail: 'PrimeNG rocks' });
    this.router.navigate(['/admin']);
    // const programaPraEnviar = Object.assign({}, this.form.value);
    // this.listObservable.push(programaPraEnviar).then(success => {
    //   this.router.navigate(['/admin']);
    // });
  }


  abrir() {
    this.preview = true;
    this.ultimoPrograma = Object.assign({}, this.form.value);
    const uid = this.afAuth.auth.currentUser.uid;
    this.ultimoPrograma['author'] = uid;
    $('#myModal').modal();
  }

}
