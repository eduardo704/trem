import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddProgramaComponent } from './add-programa/add-programa.component';
import { AdminProgramaListComponent } from './admin-programa-list/admin-programa-list.component';
import { AdiminComponent } from './admin.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { IndexAdminComponent } from './index-admin/index-admin.component';
import { AuthGuard } from './shared/auth-guard.service';

const routes: Routes =
  [
    {
      path: 'admin',
      component: AdiminComponent,
      canActivateChild: [AuthGuard],
      children: [
        {
          path: '',
          pathMatch: 'full',
          redirectTo: 'programas'
        },

        {
          path: 'programas',
          component: AdminProgramaListComponent,
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
  exports: [RouterModule],
  providers: [AuthGuard]
})
export class AdminTremRoutingModule { }
