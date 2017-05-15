import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddProgramaComponent } from './add-programa/add-programa.component';

const routes: Routes = [
  { path: 'trem-admin', component: AddProgramaComponent }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminTremRoutingModule { }
