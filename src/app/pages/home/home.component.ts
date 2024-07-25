import { Component, OnInit } from '@angular/core';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor(private tokenService: TokenService) {}

  ngOnInit(): void {
    this.validateToken();
  }

  private validateToken() {
    const token = this.tokenService.getToken()
    console.log(token);
    console.log(this.tokenService.getInfoUser());
    console.log(this.tokenService.isAdmin());
  }
}
