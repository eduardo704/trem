import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminTremRoutingModule } from './admin-trem-routing.module';
import { AddProgramaComponent } from './add-programa/add-programa.component';
import { AdiminComponent } from './admin.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    AdminTremRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [AddProgramaComponent, AdiminComponent]
})
export class AdminTremModule { }
