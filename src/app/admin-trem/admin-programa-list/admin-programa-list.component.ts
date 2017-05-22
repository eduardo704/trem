import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AngularFireDatabaseModule, AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';
declare var $: any;

@Component({
  selector: 'app-admin-programa-list',
  templateUrl: './admin-programa-list.component.html',
  styleUrls: ['./admin-programa-list.component.scss']
})
export class AdminProgramaListComponent implements OnInit {
  programas: FirebaseListObservable<any>;
  filtrar = false;
  filterText = '';
  values = '';


  constructor(private db: AngularFireDatabase) { }

  ngOnInit() {
    this.programas = this
      .db
      .list('/posts/');
  }

  selecionarPrograma(programa) {
    console.log(programa);
  }

}
