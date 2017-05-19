import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules, PreloadingStrategy } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { ProgramaListComponent } from './programas/programa-list/programa-list.component';

const routes: Routes = [
  { path: 'index', component: IndexComponent },
  { path: '', component: IndexComponent },
  { path: 'admin', loadChildren: 'app/admin-trem/admin-trem.module#AdminTremModule' },
  { path: 'programas', component: ProgramaListComponent },
  // { path: '', redirectTo: '/index', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
