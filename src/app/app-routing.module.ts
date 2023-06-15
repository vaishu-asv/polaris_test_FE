import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'modules', loadChildren: () => import('./modules/modules.module').then(m => m.ModulesModule),canActivate: [AuthenticationGuard]},

  { path: 'core', loadChildren: () => import('./core/core.module').then(m => m.CoreModule),canActivate: [AuthenticationGuard]},

  { path: 'auth', loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule),canActivate: [AuthenticationGuard]},

  { path: 'test', loadChildren: () => import('./test/test.module').then(m => m.TestModule),canActivate: [AuthenticationGuard]},

  { path: 'share', loadChildren: () => import('./share/share.module').then(m => m.ShareModule),canActivate: [AuthenticationGuard]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
