import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedComponent } from './shared.component';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RouterModule } from '@angular/router';
import { SharedRoutingModule } from './shared-routing.module';
import { AuthRoutingModule } from '../auth/auth-routing.module';
import { CarruselComponent } from './carrusel/carrusel.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { AppComponent } from '../app.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    SharedComponent,
    FooterComponent,
    NavbarComponent,
    CarruselComponent,
    SidebarComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedRoutingModule,
    AuthRoutingModule,
    FormsModule
  ],
  exports: [
    NavbarComponent,
    FooterComponent,
    CarruselComponent,
    SidebarComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class SharedModule { }
