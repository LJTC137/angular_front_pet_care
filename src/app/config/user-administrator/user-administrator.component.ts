import { Component, OnInit } from '@angular/core';
import { CuidadorModel } from 'src/app/models/cuidador.model';
import { PropietarioModel } from 'src/app/models/propietario.model';
import { UpdateUsuarioModel, UsuarioModel } from 'src/app/models/usuario.model';
import { CuidadorService } from 'src/app/service/cuidador.service';
import { PropietarioService } from 'src/app/service/propietario.service';
import { UsuarioService } from 'src/app/service/usuario.service';

@Component({
  selector: 'app-user-administrator',
  templateUrl: './user-administrator.component.html',
  styleUrls: ['./user-administrator.component.scss'],
})
export class UserAdministratorComponent implements OnInit {
  cuidador: CuidadorModel = new CuidadorModel();
  propietario: PropietarioModel = new PropietarioModel();
  usuario: UpdateUsuarioModel = new UpdateUsuarioModel();
  usuariosList: UsuarioModel[] = [];
  usuariosConRolesFiltrados: UsuarioModel[] = [];

  constructor(
    private cuidadorService: CuidadorService,
    private propietarioService: PropietarioService,
    private usuarioService: UsuarioService
  ) {}

  ngOnInit(): void {
    this.getUsuarioList();
  }

  private async getUsuarioList() {
    await this.usuarioService.getList().subscribe({
      next: (data: UsuarioModel[]) => {
        this.usuariosList = data;
        this.usuariosConRolesFiltrados = this.usuariosList.filter((usuario) => {
          return usuario.roles.some((rol) =>
            ['ROL_CUIDADOR', 'ROL_PROPIETARIO'].includes(rol.rolNombre)
          );
        });
      },
      error: (err) => {
        console.error('Error fetching users', err);
      },
    });
  }

  //================================== Denegar aceptacion usuario

  denegarUsuario(usuario: UsuarioModel) {
    this.usuario = usuario;
    this.usuario.esAceptado = false;
    this.usuarioService.update(this.usuario.id, this.usuario).subscribe({
      next: (data: any) => {
        console.log(data);
      },
      error: (err: Error) => {
        console.error(err);
      },
    });
  }

  //================================== Aceptar usuario

  aceptarUsuario(usuario: UsuarioModel) {
    this.usuario = usuario;
    this.usuario.esAceptado = true;
    this.usuarioService.update(this.usuario.id, this.usuario).subscribe({
      next: (data: any) => {
        console.log(data);
      },
      error: (err: Error) => {
        console.error(err);
      },
    });
  }

  //============================= deshabilitar usuario

  deshabilitarUsuario(usuario: UsuarioModel) {
    this.usuario = usuario;
    this.usuario.estado = false;
    this.usuarioService.update(this.usuario.id, this.usuario).subscribe({
      next: (data: any) => {
        console.log(data);
      },
      error: (err: Error) => {
        console.error(err);
      },
    });
    if (usuario.roles[0].rolNombre == 'ROL_CUIDADOR') {
      this.cuidadorService.getByUsuarioId(this.usuario.id).subscribe({
        next: (data: CuidadorModel) => {
          this.cuidador = data;
        },
        error: (err: Error) => {
          console.error(err);
        },
      });
      this.cuidador.estado = false;
      this.cuidadorService.update(this.cuidador.id, this.cuidador).subscribe({
        next: (data: any) => {
          console.log(data);
        },
        error: (err: Error) => {
          console.error(err);
        },
      });
    } else if (usuario.roles[0].rolNombre == 'ROL_PROPIETARIO') {
      this.propietarioService.getByUsuarioId(this.usuario.id).subscribe({
        next: (data: PropietarioModel) => {
          this.propietario = data;
        },
        error: (err: Error) => {
          console.error(err);
        },
      });
      this.cuidador.estado = false;
      this.propietarioService
        .update(this.cuidador.id, this.propietario)
        .subscribe({
          next: (data: any) => {
            console.log(data);
          },
          error: (err: Error) => {
            console.error(err);
          },
        });
    }
  }

  //============================= deshabilitar usuario

  habilitarUsuario(usuario: UsuarioModel) {
    this.usuario = usuario;
    this.usuario.estado = true;
    this.usuarioService.update(this.usuario.id, this.usuario).subscribe({
      next: (data: any) => {
        console.log(data);
      },
      error: (err: Error) => {
        console.error(err);
      },
    });
    if (usuario.roles[0].rolNombre == 'ROL_CUIDADOR') {
      this.cuidadorService.getByUsuarioId(this.usuario.id).subscribe({
        next: (data: CuidadorModel) => {
          this.cuidador = data;
        },
        error: (err: Error) => {
          console.error(err);
        },
      });
      this.cuidador.estado = true;
      this.cuidadorService.update(this.cuidador.id, this.cuidador).subscribe({
        next: (data: any) => {
          console.log(data);
        },
        error: (err: Error) => {
          console.error(err);
        },
      });
    } else if (usuario.roles[0].rolNombre == 'ROL_PROPIETARIO') {
      this.propietarioService.getByUsuarioId(this.usuario.id).subscribe({
        next: (data: PropietarioModel) => {
          this.propietario = data;
        },
        error: (err: Error) => {
          console.error(err);
        },
      });
      this.cuidador.estado = true;
      this.propietarioService
        .update(this.cuidador.id, this.propietario)
        .subscribe({
          next: (data: any) => {
            console.log(data);
          },
          error: (err: Error) => {
            console.error(err);
          },
        });
    }
  }
}
