import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AngularFireDatabaseModule, AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';
declare var $: any;
import { Programa } from '../../shared/interfaces';

@Component({
  selector: 'app-programa-list',
  templateUrl: './programa-list.component.html',
  styleUrls: ['./programa-list.component.scss']
})
export class ProgramaListComponent implements OnInit {
  programas: FirebaseListObservable<any>;
  


  constructor(private db: AngularFireDatabase) { }

  ngOnInit() {
    this.programas = this
      .db
      .list('/posts/');
  }


}
