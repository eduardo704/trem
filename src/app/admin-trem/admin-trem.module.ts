import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminTremRoutingModule } from './admin-trem-routing.module';
import { AddProgramaComponent } from './add-programa/add-programa.component';
import { AdiminComponent } from './admin.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { IndexAdminComponent } from './index-admin/index-admin.component';
import { ProgramasModule } from '../programas/programas.module';
import { AdminProgramaListComponent } from './admin-programa-list/admin-programa-list.component';
import { GrowlModule } from 'primeng/primeng';
import { AccordionModule } from 'primeng/primeng';
import { DataTableModule, SharedModule } from 'primeng/primeng';
import {ButtonModule} from 'primeng/primeng';

@NgModule({
  imports: [
    CommonModule,
    AdminTremRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    ProgramasModule,
    GrowlModule,
    AccordionModule,
    DataTableModule,
    ButtonModule,
    SharedModule
  ],
  declarations: [
    AddProgramaComponent,
    AdiminComponent,
    EditProfileComponent,
    IndexAdminComponent,
    AdminProgramaListComponent
  ],
  exports: [
    ReactiveFormsModule,
    CommonModule,
    FormsModule
  ]
})
export class AdminTremModule { }