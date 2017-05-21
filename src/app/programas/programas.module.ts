import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProgramasRoutingModule } from './programas-routing.module';
import { ProgramaDetailComponent } from './programa-detail/programa-detail.component';
import { ProgramaListComponent } from './programa-list/programa-list.component';
import { ProgramaCardComponent } from './programa-card/programa-card.component';

@NgModule({
  imports: [
    CommonModule,
    ProgramasRoutingModule
  ],
  declarations: [ProgramaDetailComponent, ProgramaListComponent, ProgramaCardComponent],
  exports: [ProgramaDetailComponent, ProgramaListComponent, ProgramaCardComponent]
})
export class ProgramasModule { }
