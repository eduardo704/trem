import { Component, OnInit, AfterViewChecked } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { AngularFireDatabaseModule, AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';
declare var $: any;

@Component({
  selector: 'app-programa-list',
  templateUrl: './programa-list.component.html',
  styleUrls: ['./programa-list.component.scss']
})
export class ProgramaListComponent implements OnInit, AfterViewChecked {
  listObservable: FirebaseListObservable<any>;
  programas;
  audioSrc = 'https://ia801209.us.archive.org/31/items/TremDasOnze19DeSetembroDe2016' +
  'SegundaFrankensteinPiloto/Trem%20das%20Onze%2019%20de%20setembro%20de%202016%20Segunda%20Frankenstein%20piloto.mp3';
  imagemSrc = 'https://scontent-vie1-1.xx.fbcdn.net/v/t1.0-9/18557324_2290076514550933_' +
  '8013656340913075135_n.png?oh=71e8afe67d309246060a702b0e339567&oe=59B9C4DB'
  aaa;

  constructor(private db: AngularFireDatabase) { }
  ngAfterViewChecked() {
    $("span.text-content").css({
      'height': $(".image").height()
    });
  }
  ngOnInit() {
    this.listObservable = this
      .db
      .list('/posts/');

    this.programas = this
      .db
      .list('/posts/')
      
    
  }
  getAutohorById(authorId) {
    return this.db.object(`/users/${authorId}`);
  }

}
