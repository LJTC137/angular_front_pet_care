import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CuidadorModel } from 'src/app/models/cuidador.model';
import { MascotaModel } from 'src/app/models/mascota.model';
import { SolicitudModel } from 'src/app/models/solicitud.model';
import { UsuarioModel } from 'src/app/models/usuario.model';
import { CuidadorService } from 'src/app/service/cuidador.service';
import { SolicitudService } from 'src/app/service/solicitud.service';
import { TokenService } from 'src/app/service/token.service';
import { UsuarioService } from 'src/app/service/usuario.service';

@Component({
  selector: 'app-my-care-requests-form',
  templateUrl: './my-care-requests-form.component.html',
  styleUrls: ['./my-care-requests-form.component.scss'],
})
export class MyCareRequestsFormComponent implements OnInit {
  mascotasList: MascotaModel[] = [];
  nombreUsuario: string = '';
  private isEditing: boolean = false;
  solicitud: SolicitudModel = new SolicitudModel();
  private usuario: UsuarioModel = new UsuarioModel();
  private cuidador: CuidadorModel = new CuidadorModel();

  constructor(
    private router: Router,
    private solicitudService: SolicitudService,
    private toastrService: ToastrService,
  ) {}

  ngOnInit(): void {
    if (history.state.isNew) {
      this.isEditing = true;
      this.solicitud = history.state.data;
      this.valueSetter();
    } else {
      this.isEditing = false;
      this.solicitud = new SolicitudModel();
    }
  }

  private valueSetter() {
    this.mascotasList = this.solicitud.mascotas;
    this.nombreUsuario =
      this.solicitud.propietario.usuario.nombre +
      ' ' +
      this.solicitud.propietario.usuario.apellido;
  }

  deactivateSolicitud() {
    this.solicitud.estado = false;
    this.solicitudService.update(this.solicitud.id, this.solicitud).subscribe({
      next: (data: any) => {
        this.router.navigate(["/config/myCareList"]);
      },
      error: (err: Error) => {
        this.toastrService.error("Algo salió mal"),
        {
          timeOut: 2000,
        };
      },
    });
  }
}
