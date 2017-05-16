import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules, PreloadingStrategy } from '@angular/router';
import { IndexComponent } from './index/index.component'

const routes: Routes = [
  { path: 'index', component: IndexComponent },
  { path: '', component: IndexComponent },
  { path: 'admin', loadChildren: 'app/admin-trem/admin-trem.module#AdminTremModule' },
  // { path: '', redirectTo: '/index', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
