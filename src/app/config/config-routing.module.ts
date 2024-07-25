import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ConfigComponent } from './config.component';
import { CareRequestListComponent } from './care-request-list/care-request-list.component';
import { ProfileComponent } from './profile/profile.component';
import { RegisterAddressComponent } from './register-address/register-address.component';
import { RegisterPetsComponent } from './register-pets/register-pets.component';
import { UserAdministratorComponent } from './user-administrator/user-administrator.component';
import { PanelComponent } from './panel/panel.component';
import { RegisterCareRequestComponent } from './register-care-request/register-care-request.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { ListPetsComponent } from './list-pets/list-pets.component';
import { CategoriesAdminComponent } from './categories-admin/categories-admin.component';
import { MyCareRequestsComponent } from './my-care-requests/my-care-requests.component';
import { CareRequestFormComponent } from './care-request-form/care-request-form.component';
import { MyCareRequestsFormComponent } from './my-care-requests-form/my-care-requests-form.component';
import { ValidacionGuard } from '../guards/validacion.guard';

const routes: Routes = [
  {
    path: 'config',
    component: ConfigComponent,
    canActivate: [ValidacionGuard],
    children: [
      {
        path: 'panel',
        component: PanelComponent,
      },
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
        path: 'myCareList',
        component: MyCareRequestsComponent,
      },
      {
        path: 'myCareForm',
        component: MyCareRequestsFormComponent,
      },
      {
        path: 'careList',
        component: CareRequestListComponent,
      },
      {
        path: 'careForm',
        component: CareRequestFormComponent,
      },
      {
        path: 'registerRequest',
        component: RegisterCareRequestComponent,
      },
      {
        path: 'registerPets',
        component: RegisterPetsComponent,
      },
      {
        path: 'editProfile',
        component: EditProfileComponent,
      },
      {
        path: 'listPets',
        component: ListPetsComponent,
      },
      {
        path: 'categories',
        component: CategoriesAdminComponent,
      },
    ],
  },
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConfigRoutingModule {}
