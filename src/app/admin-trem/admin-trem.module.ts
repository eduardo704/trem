import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminTremRoutingModule } from './admin-trem-routing.module';
import { AddProgramaComponent } from './add-programa/add-programa.component';

@NgModule({
  imports: [
    CommonModule,
    AdminTremRoutingModule
  ],
  declarations: [AddProgramaComponent]
})
export class AdminTremModule { }
