import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { AngularFireDatabaseModule, AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';
import { Programa } from '../../shared/interfaces';

@Component({
  selector: 'app-programa-detail',
  templateUrl: './programa-detail.component.html',
  styleUrls: ['./programa-detail.component.scss']
})
export class ProgramaDetailComponent implements OnInit {
  programa: Programa;
  constructor(private db: AngularFireDatabase, private router: Router, private route: ActivatedRoute, ) { }

  ngOnInit() {
    // (+) converts string 'id' to a number

    this.route.params
      .flatMap((params: Params) => this.db.object(`/posts/${params['id']}`))
      .subscribe((programa) => this.programa = programa);

    // this.db.object(`/posts/${+params['id']}`
  }

}
