import { Component, Input, OnChanges } from '@angular/core';
import { Router } from '@angular/router';
declare var $: any;
import { AngularFireDatabaseModule, AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';

@Component({
  selector: 'app-programa-card',
  templateUrl: './programa-card.component.html',
  styleUrls: ['./programa-card.component.scss']
})
export class ProgramaCardComponent implements OnChanges {

  @Input('programa') programa;

  constructor(private db: AngularFireDatabase, private router: Router) { }


  ngOnChanges() {
    this.programa.imagemUrl = `url(${this.programa.imagem})`;
    this.programa.authorS = this.getAutohorById(this.programa.author).subscribe(author => {
      this.programa.authorObj = author;
    });
  }


  goDetalhes() {
    console.log(this.programa.$key)
    if (this.programa.$key) {
      this.router.navigate(['/programa', this.programa.$key]);
    } else {

    }


  }

  getAutohorById(authorId) {
    return this.db.object(`/users/${authorId}`);
  }
}
