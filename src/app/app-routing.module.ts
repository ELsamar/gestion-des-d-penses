import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';


import {NotFound404Component} from './shared/not-found404/not-found404.component';
import {ClientComponent} from './ui/client/client.component';


import { LoginComponent } from './ui/login/login.component';


import {PasswordlessAuthComponent} from './ui/login/passwordless-auth/passwordless-auth.component';
import {PublicComponent} from './ui/public/public.component';

const routes: Routes = [
  {
    path: 'public',
    component: PublicComponent,
   loadChildren: './ui/public/public.module#PublicModule'
  },
  {
    path: 'client',
    component: ClientComponent,
    loadChildren: './ui/client/client.module#ClientModule',
    // CanActivate: [AuthSerrviceVControel]
  },
  {
    path: 'login',
    component: LoginComponent,
    loadChildren: './ui/login/login.module#LoginModule'
  },
 // {
 //   path: '**',
 //   component: NotFound404Component,
 // },
 // {
  //  path: 'login',
 //  component: LoginComponent
 //},
 // { path: 'login2',
 //   component: PasswordlessAuthComponent
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
