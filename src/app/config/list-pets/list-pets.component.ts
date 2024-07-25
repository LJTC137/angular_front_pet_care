import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { MascotaModel } from 'src/app/models/mascota.model';
import { PropietarioModel } from 'src/app/models/propietario.model';
import { UsuarioModel } from 'src/app/models/usuario.model';
import { MascotaService } from 'src/app/service/mascota.service';
import { PropietarioService } from 'src/app/service/propietario.service';
import { TokenService } from 'src/app/service/token.service';
import { UsuarioService } from 'src/app/service/usuario.service';

@Component({
  selector: 'app-list-pets',
  templateUrl: './list-pets.component.html',
  styleUrls: ['./list-pets.component.scss'],
})
export class ListPetsComponent implements OnInit {
  mascotasList: MascotaModel[] = [];
  propietario: PropietarioModel = new PropietarioModel();
  usuario: UsuarioModel = new UsuarioModel();

  constructor(
    private mascotaService: MascotaService,
    private propietarioService: PropietarioService,
    private tokenService: TokenService,
    private toastrService: ToastrService,
    private usuarioService: UsuarioService
  ) {}

  ngOnInit(): void {
    this.getUser();
  }

  private getUser() {
    const correo = this.tokenService.getInfoUser();
    this.usuarioService.findByCorreo(correo).subscribe({
      next: (data: UsuarioModel) => {
        this.usuario = data;
        this.propietarioService.getByUsuarioId(this.usuario.id).subscribe({
          next: (data: PropietarioModel) => {
            this.propietario = data;
            this.mascotasList = this.propietario.mascotas;
          },
          error: (err: any) => {
            this.toastrService.error("Hubo un error con tus mascotas"),
            {
              timeOut: 1000,
            };
          },
        });
      },
      error: (err: Error) => {
        console.error("Hubo error con tu usuario");
      },
    });
  }

  deleteMascota(index: number, mascota: MascotaModel) {
    this.propietario.mascotas.splice(index, 1);

    this.propietarioService
      .update(this.propietario.id, this.propietario)
      .subscribe({
        next: (data: any) => {
          this.toastrService.success('Eliminado con éxito'), 
          {
            timeOut: 1500,
          };
        },
        error: (err: any) => {
          this.toastrService.error(err),
          {
            timeOut: 1000,
          };
        },
      });

    this.mascotaService.delete(mascota.id).subscribe({
      next: (data: any) => {
      },
      error: (err: any) => {
        this.toastrService.error("Algo salió mal"),
        {
          timeOut: 1000,
        };

      },
    });
  }
}
