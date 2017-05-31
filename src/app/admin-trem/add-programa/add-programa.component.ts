import { Component, OnInit, ViewContainerRef, Output, EventEmitter, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { AngularFireDatabaseModule, AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import { Router } from '@angular/router';
import { Message } from 'primeng/primeng';
import { Programa } from '../../shared/interfaces';
import { ProgramaImpl } from '../../shared/classes';
import { ProgramaService } from '../shared/programa.service';


declare var $: any;

@Component({
  selector: 'app-add-programa',
  templateUrl: './add-programa.component.html',
  styleUrls: ['./add-programa.component.scss']
})

export class AddProgramaComponent implements OnInit, OnDestroy {
  postObservable: FirebaseObjectObservable<any>;
  listObservable: FirebaseListObservable<any>;

  form: FormGroup;
  ultimoPrograma: Programa;
  preview = false;
  salvando = false;
  isEdit;

  constructor(private db: AngularFireDatabase, private router: Router, private formBuilder: FormBuilder,
    private afAuth: AngularFireAuth, private ps: ProgramaService) {

  }

  ngOnDestroy() {
    this.ps.programaEdit.next({ isEdit: false, programa: new ProgramaImpl() })
  }

  ngOnInit() {
    this.ps.programaEdit.asObservable().subscribe(programa => {
      this.isEdit = programa.isEdit;
      if (programa.isEdit) {
        this.form = this.initForm(programa.programa);
      } else {
        this.form = this.initForm(new ProgramaImpl());
      }
    });

    this.listObservable = this
      .db
      .list('/posts/');
  }

  confirmar() {
    this.salvando = true;
  }
  presave() {
    this.ultimoPrograma = Object.assign({}, this.form.value);
    const uid = this.afAuth.auth.currentUser.uid;
    this.ultimoPrograma['author'] = uid;
  }

  salvar() {
    console.log(this.form)
    this.salvando = true;
    this.presave();

    $('#modalSave').modal();
    const programaPraEnviar = Object.assign({}, this.form.value);
    this.listObservable.push(programaPraEnviar).then(success => {
      this.salvando = false;
    });

  }

  abrir() {
    this.preview = true;
    this.presave();
    $('#myModal').modal();
  }

  initForm(programa: Programa) {
    return this
      .formBuilder
      .group({
        titulo: [programa.titulo || '', Validators.required],
        subTitulo: [programa.subTitulo || '', Validators.required],
        desc: [programa.desc || '', Validators.required],
        audio: [programa.audio || '', Validators.required],
        imagem: [programa.imagem || '', Validators.required],
        data: [programa.data || '', Validators.required],
      });

  }

}
