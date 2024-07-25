import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { PagesComponent } from './pages.component';
import { ServicesComponent } from './services/services.component';
import { AboutUsContactsComponent } from './about-us-contacts/about-us-contacts.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from '../auth/login/login.component';
import { RegisterAddressComponent } from '../config/register-address/register-address.component';
import { UserAdministratorComponent } from '../config/user-administrator/user-administrator.component';
import { ProfileComponent } from '../config/profile/profile.component';
import { CareRequestListComponent } from '../config/care-request-list/care-request-list.component';
import { RegisterPetsComponent } from '../config/register-pets/register-pets.component';

const routes: Routes = [
  {
    path: 'home',
    component: PagesComponent,
    children: [
      {
        path: '',
        component: HomeComponent,
      },
      {
        path: 'services',
        component: ServicesComponent,
      },
      {
        path: 'aboutContacts',
        component: AboutUsContactsComponent
      },
      {
        path: 'login',
        component: LoginComponent,
      },
      ////////////////////////////////////////////
      {
        path: 'registerAddress',
        component: RegisterAddressComponent,
      },
      {
        path: 'userAdministrator',
        component: UserAdministratorComponent,
      },
      {
        path: 'profile',
        component: ProfileComponent,
      },
      {
        path: 'careList',
        component: CareRequestListComponent,
      },
      {
        path: 'registerRequest',
        component: RegisterPetsComponent
      },
    ],
  },
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule, RouterModule.forChild(routes),
  ],
  exports: [RouterModule],
})
export class PagesRoutingModule { }
