import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { AboutUsContactsComponent } from './about-us-contacts/about-us-contacts.component';
import { ServicesComponent } from './services/services.component';
import { BrowserModule } from '@angular/platform-browser';
import { SharedModule } from '../shared/shared.module';
import { PagesRoutingModule } from './pages-routing.module';
import { Page404Component } from './page404/page404.component';

@NgModule({
  declarations: [
    HomeComponent,
    AboutUsContactsComponent,
    ServicesComponent,
    Page404Component
  ],
  imports: [
    CommonModule,
    BrowserModule,
    PagesRoutingModule,
    SharedModule,
  ]
})
export class PagesModule { }
