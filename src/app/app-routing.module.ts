import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';


import {NotFound404Component} from './shared/not-found404/not-found404.component';
import {ClientComponent} from './ui/client/client.component';


import { LoginComponent } from './login/login.component';

import { HomeComponent } from './home/home.component';

const routes: Routes = [
 // {
  //  path: 'public',
 //   component: PublicComponent,
 //  loadChildren: './ui/public/public.module#PublicModule'
//  },
  {
    path: 'client',
    component: ClientComponent,
    loadChildren: './ui/client/client.module#ClientModule'
  },
 // {
 //   path: '**',
 //   component: NotFound404Component,
 // },
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'login',
    component: LoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
