import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  isLogged = false;
  isAdmin = false;
  correo_usuario: string = '';

  constructor(private tokenService: TokenService, private router: Router) {}

  ngOnInit(): void {
    this.isLogged = this.tokenService.isLogged()
      ? true
      : (this.isLogged = false);
    this.isAdmin = this.tokenService.isAdmin() ?? false;
    this.correo_usuario = this.tokenService.getInfoUser() ?? '';
  }

  logOut() {
    this.tokenService.logOut();
    window.location.reload();
  }
}
