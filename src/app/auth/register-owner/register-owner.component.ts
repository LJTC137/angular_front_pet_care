import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { RegistroPropietario } from 'src/app/models/registro.model';
import { UsuarioService } from 'src/app/service/usuario.service';

@Component({
  selector: 'app-register-owner',
  templateUrl: './register-owner.component.html',
  styleUrls: ['./register-owner.component.scss'],
})
export class RegisterOwnerComponent implements OnInit {
  registroPropietario: RegistroPropietario = new RegistroPropietario();

  constructor(
    private usuarioService: UsuarioService, 
    private toastrService: ToastrService,
    private router: Router) {}

  ngOnInit(): void {
    this.initializeRegister();
  }

  private initializeRegister() {
    this.registroPropietario = new RegistroPropietario();
  }

  registrarPropietario() {
    if (this.registroPropietario == null) {
      this.toastrService.error("Ingrese datos"), {
        timeOut: 1500,
      };
    } else {
      this.usuarioService.savePropietario(this.registroPropietario).subscribe({
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
