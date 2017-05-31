import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { ProgramaService } from '../shared/programa.service';
import { AngularFireDatabaseModule, AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';
declare var $: any;
import { Router } from '@angular/router';
import { ConfirmationService } from 'primeng/primeng';

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


  constructor(private db: AngularFireDatabase, private ps: ProgramaService,
    private router: Router, private confirmationService: ConfirmationService) { }

  ngOnInit() {
    this.programas = this
      .db
      .list('/posts/');
  }

  selecionarPrograma(programa) {
    this.ps.adicionarPrograma({ isEdit: true, 'programa': programa });
    this.router.navigate(['admin/adicionar']);
  }

  deletarPrograma(programa) {
    this.confirmationService.confirm({
      message: 'Tem Certeza que deseja deletar este programa?',
      header: 'Delete Confirmation',
      icon: 'fa fa-trash',
      accept: () => {

        this.ps.msgs.next({ severity: 'error', summary: 'Programa Deletado', detail: 'Programa Deletado com sucesso' })
        // this.programas.remove(programa).then()
      }
    });
    // this.programas.remove(programa);
  }

}
