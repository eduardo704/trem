import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProgramasRoutingModule } from './programas-routing.module';
import { ProgramaDetailComponent } from './programa-detail/programa-detail.component';
import { ProgramaListComponent } from './programa-list/programa-list.component';

@NgModule({
  imports: [
    CommonModule,
    ProgramasRoutingModule
  ],
  declarations: [ProgramaDetailComponent, ProgramaListComponent],
  exports: [ProgramaDetailComponent, ProgramaListComponent]
})
export class ProgramasModule { }
