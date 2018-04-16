import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';


import {NotFound404Component} from './shared/not-found404/not-found404.component';
import {ClientComponent} from './ui/client/client.component';


import { LoginComponent } from './login/login.component';

import { HomeComponent } from './home/home.component';
import {PasswordlessAuthComponent} from './passwordless-auth/passwordless-auth.component';
import {PublicComponent} from './ui/public/public.component';

const routes: Routes = [
  {
    path: 'public',
    component: PublicComponent,
   loadChildren: './ui/public/public.module#PublicModule'
  },
  {
    path: '',
    component: ClientComponent,
    loadChildren: './ui/client/client.module#ClientModule'
  },
 // {
 //   path: '**',
 //   component: NotFound404Component,
 // },
  {
    path: 'home',
    component: HomeComponent
  },
 // {
  //  path: 'login',
  //  component: LoginComponent
 // },
  { path: 'login2',
    component: PasswordlessAuthComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
