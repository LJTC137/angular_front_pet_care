import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { timeout } from 'rxjs';
import { LoginModel } from 'src/app/models/login.model';
import { AuthService } from 'src/app/service/auth.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  usuario: LoginModel = new LoginModel();

  constructor(
    private authService: AuthService,
    private tokenService: TokenService,
    private toastrService: ToastrService,
    private router: Router
  ) {}

  onLogin(usuario: LoginModel): void {
    usuario = this.usuario;
    this.authService.login(usuario).subscribe({
      next: (data: any) => {
        if (!data.jwt) {
          this.toastrService.error(data),
            {
              timeOut: 2000,
            };
        } else if (data.jwt) {
          this.toastrService.success("Bienvenid@"),{
            timeout: 4000
          }
          this.tokenService.setToken(data.jwt);
          this.router.navigate(['/home']);
        }
      },
      error: (err: any) => {
        this.toastrService.error(err),
        {
          timeOut: 1000,
        };
      },
    });
  }
}
