import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagesRoutingModule } from './pages/pages-routing.module';
import { AuthRoutingModule } from './auth/auth-routing.module';
import { Page404Component } from './pages/page404/page404.component';
import { ConfigRoutingModule } from './config/config-routing.module';

const routes: Routes = [
  { 
    path: '', 
    redirectTo: 'home', 
    pathMatch: 'full' },
  {
    path: 'config',
    redirectTo: 'config',
    pathMatch: 'full',
  },
  {
    path: 'auth',
    redirectTo: 'auth',
    pathMatch: 'full'
  },
  {
    path: '**', component: Page404Component
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes),
    AuthRoutingModule,
    PagesRoutingModule,
    ConfigRoutingModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
