import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddProgramaComponent } from './add-programa/add-programa.component';
import { AdiminComponent } from './admin.component';

const routes: Routes =
  [
    {
      path: 'admin',
      component: AdiminComponent,
      children: [
        {
          path: '',
          component: AddProgramaComponent,
        }
      ]
    }
  ];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminTremRoutingModule { }
