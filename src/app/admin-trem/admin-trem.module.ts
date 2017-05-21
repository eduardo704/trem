import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminTremRoutingModule } from './admin-trem-routing.module';
import { AddProgramaComponent } from './add-programa/add-programa.component';
import { AdiminComponent } from './admin.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { IndexAdminComponent } from './index-admin/index-admin.component';
import {ProgramasModule} from '../programas/programas.module';

@NgModule({
  imports: [
    CommonModule,
    AdminTremRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    ProgramasModule
  ],
  declarations: [
    AddProgramaComponent,
    AdiminComponent,
    EditProfileComponent,
    IndexAdminComponent
  ],
  exports: [
    ReactiveFormsModule,
    CommonModule,
    FormsModule
  ]
})
export class AdminTremModule { }