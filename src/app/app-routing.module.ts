import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';


import {NotFound404Component} from './shared/not-found404/not-found404.component';
import {ClientComponent} from './ui/client/client.component';


import {LoginComponent} from './ui/login/login.component';


import {PasswordlessAuthComponent} from './ui/login/passwordless-auth/passwordless-auth.component';
import {PublicComponent} from './ui/public/public.component';
import {AuthGuardService} from './shared/services/auth-guard.service';

const routes: Routes = <Routes>  [
  {
    path: 'public',
    component: PublicComponent,
    loadChildren: './ui/public/public.module#PublicModule'
  },
  {
    path: 'client',
    component: ClientComponent,
    //CanActivate: [AuthGuardService],
    loadChildren: './ui/client/client.module#ClientModule',

  },
  {
    path: 'login',
    component: LoginComponent,
    loadChildren: './ui/login/login.module#LoginModule'
  },
  {
    path: '',
    component: NotFound404Component,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
