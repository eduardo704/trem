import { Injectable } from '@angular/core';
import { Programa } from '../../shared/interfaces';
import { BehaviorSubject } from 'rxjs/Rx';
import { Message } from 'primeng/primeng';

@Injectable()
export class ProgramaService {
  initPrograma: ProgramaEdit = {
    isEdit: false,
    programa: null
  };

  public programaEdit = new BehaviorSubject<ProgramaEdit>(this.initPrograma);
  public msgs = new BehaviorSubject<Message>({});


  constructor() { }

  adicionarPrograma(pe: ProgramaEdit) {
    this.programaEdit.next(pe);
  }
}

interface ProgramaEdit {
  programa: Programa;
  isEdit: boolean;
}
