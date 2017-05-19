import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddProgramaComponent } from './add-programa/add-programa.component';
import { IndexAdminComponent } from './index-admin/index-admin.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { AdiminComponent } from './admin.component';

const routes: Routes =
  [
    {
      path: 'admin',
      component: AdiminComponent,
      children: [

        {
          path: '',
          component: IndexAdminComponent,
        },
        {
          path: 'adicionar',
          component: AddProgramaComponent,
        },
        {
          path: 'editar-perfil',
          component: EditProfileComponent,
        }
      ]
    }
  ];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminTremRoutingModule { }
