import { Component, OnInit } from '@angular/core';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit {
  isAdmin: boolean = false;
  isCuidador: boolean = false;
  isLogged: boolean = false;
  isPropietario: boolean = false;

  constructor(private tokenService: TokenService) {}

  ngOnInit(): void {
    this.isAdmin = this.tokenService.isAdmin() ?? false;
    this.isCuidador = this.tokenService.isCuidador() ?? false;
    this.isLogged = this.tokenService.isLogged()
      ? true
      : (this.isLogged = false);
    this.isPropietario = this.tokenService.isPropietario() ?? false;
  }
}
