import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RegistroCuidador } from 'src/app/models/registro.model';
import { UsuarioService } from 'src/app/service/usuario.service';
import { TokenService } from 'src/app/service/token.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-register-carer',
  templateUrl: './register-carer.component.html',
  styleUrls: ['./register-carer.component.scss'],
})
export class RegisterCarerComponent implements OnInit {
  registroCuidador: RegistroCuidador = new RegistroCuidador();

  constructor(
    private usuarioService: UsuarioService, 
    private toastrService: ToastrService,
    private router: Router) {}

  ngOnInit(): void {
    this.initializeRegister();
  }

  private initializeRegister() {
    this.registroCuidador = new RegistroCuidador();
  }

  registrarCuidador() {
    if (this.registroCuidador == null) {
      this.toastrService.error("Llenar los datos"), {
        timeOut: 2000,
      };
    } else {
      this.usuarioService.saveCuidador(this.registroCuidador).subscribe({
        next: (data: any) => {
          this.toastrService.success(data), 
          {
            timeOut: 1500,
          };
          this.router.navigate(['/home']);
        },
        error: (err: Error) => {
          this.toastrService.error("Registro no completado"),
          {
            timeOut: 1000,
          };
        },
      });
    }
  }
}
