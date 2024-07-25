import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RouterModule, Routes } from '@angular/router';
import { RegisterOwnerComponent } from './register-owner/register-owner.component';
import { RegisterCarerComponent } from './register-carer/register-carer.component';
import { LoginGuard } from '../guards/login.guard';

const routes: Routes = [
  {
    path: 'auth',
    canActivate: [LoginGuard],
    children: [
      {
        path: 'login',
        component: LoginComponent,
      },
      {
        path: 'registerOwner',
        component: RegisterOwnerComponent,
      },
      {
        path: 'registerCarer',
        component: RegisterCarerComponent,
      },
    ],
  },
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthRoutingModule {}
