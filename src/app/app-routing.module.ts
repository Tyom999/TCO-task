import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AuthGuard} from "./shared/guards/auth.guard";

const routes: Routes = [
  { path: '', redirectTo: 'list', pathMatch: 'full' },
  { path: 'auth', loadChildren: () => import('./pages/auth/auth.module').then(m => m.AuthModule) },
  { path: 'list', canActivate: [AuthGuard],  loadChildren: () => import('./pages/list/list.module').then(m => m.ListModule) },
  { path: 'detail/:id', canActivate: [AuthGuard], loadChildren: () => import('./pages/detail/detail.module').then(m => m.DetailModule) },
  { path: 'manage', canActivate: [AuthGuard], loadChildren: () => import('./pages/manage/manage.module').then(m => m.ManageModule) },
  { path: 'manage/:id', canActivate: [AuthGuard], loadChildren: () => import('./pages/manage/manage.module').then(m => m.ManageModule) },
  { path: '**', redirectTo: 'list', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
