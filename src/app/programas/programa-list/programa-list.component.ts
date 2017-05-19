import { Component, OnInit } from '@angular/core';
import { AngularFireDatabaseModule, AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';
@Component({
  selector: 'app-programa-list',
  templateUrl: './programa-list.component.html',
  styleUrls: ['./programa-list.component.scss']
})
export class ProgramaListComponent implements OnInit {
  listObservable: FirebaseListObservable<any>;

  constructor(private db: AngularFireDatabase) { }

  ngOnInit() {
    this.listObservable = this
      .db
      .list('/posts/');
  }

}
