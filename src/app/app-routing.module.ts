import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules, PreloadingStrategy } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { ProgramaListComponent } from './programas/programa-list/programa-list.component';
import { ProgramaDetailComponent } from './programas/programa-detail/programa-detail.component';
import {
  AuthGuard
} from './admin-trem/shared/auth-guard.service';
import { LoginComponent } from './admin-trem/login/login.component';
const routes: Routes = [
  { path: 'index', component: IndexComponent },
  { path: '', component: IndexComponent },
  { path: 'admin', loadChildren: 'app/admin-trem/admin-trem.module#AdminTremModule' },
  { path: 'login', component: LoginComponent },
  { path: 'programas', component: ProgramaListComponent },
  { path: 'programa/:id', component: ProgramaDetailComponent },
  // { path: '', redirectTo: '/index', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
