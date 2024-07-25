import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthComponent } from './auth.component';
import { LoginComponent } from './login/login.component';
import { RegisterCarerComponent } from './register-carer/register-carer.component';
import { RegisterOwnerComponent } from './register-owner/register-owner.component';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { SharedModule } from '../shared/shared.module';
import { AuthRoutingModule } from './auth-routing.module';



@NgModule({
  declarations: [
    AuthComponent,
    LoginComponent,
    RegisterCarerComponent,
    RegisterOwnerComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    BrowserModule,
    SharedModule,
    FormsModule,
  ],
  exports: [
    AuthRoutingModule
  ]
})
export class AuthModule { }
