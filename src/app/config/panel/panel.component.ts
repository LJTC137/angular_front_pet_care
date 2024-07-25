import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.scss'],
})
export class PanelComponent implements OnInit {
  isAdmin: boolean = false;
  isCuidador: boolean = false;
  isLogged: boolean = false;
  isPropietario: boolean = false;

  constructor(private router: Router, private tokenService: TokenService) {}

  ngOnInit(): void {
    this.isAdmin = this.tokenService.isAdmin() ?? false;
    this.isCuidador = this.tokenService.isCuidador() ?? false;
    this.isLogged = this.tokenService.isLogged()
      ? true
      : (this.isLogged = false);
    this.isPropietario = this.tokenService.isPropietario() ?? false;
  }

  logOut() {
    this.tokenService.logOut();
    this.router.navigate(['/']);
  }
}
