import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { AngularFireDatabaseModule, AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
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


  constructor(private db: AngularFireDatabase, private formBuilder: FormBuilder, private afAuth: AngularFireAuth) {
  }



  ngOnInit() {
    this.form = this
      .formBuilder
      .group({
        titulo: ['', Validators.required],
        desc: ['', Validators.required],
        audio: ['', Validators.required],
        data: ['', Validators.required],
      });

    this.listObservable = this
      .db
      .list('/posts/');
  }

  salvar() {
    console.log(this.form.value);
    this.ultimoPrograma = Object.assign({}, this.form.value);
    const uid = this.afAuth.auth.currentUser.uid;
    this.ultimoPrograma['author'] = uid;
    const key = this.listObservable.push(this.ultimoPrograma).key;
    $('#myModal').modal();
    // this.db.object('/users/' + uid + '/posts/' + key).set('post')
    //   .then(result => {
    //     alert('Programa salvo')
    //   })
    //   .catch(error => {
    //     alert('erro:' + error)
    //   });

  }


  abrir() {

  }

}
