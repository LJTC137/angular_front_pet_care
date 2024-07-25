import { Component, OnInit } from '@angular/core';
import { PropietarioModel } from 'src/app/models/propietario.model';
import { SolicitudModel } from 'src/app/models/solicitud.model';
import { UsuarioModel } from 'src/app/models/usuario.model';
import { PropietarioService } from 'src/app/service/propietario.service';
import { SolicitudService } from 'src/app/service/solicitud.service';
import { TokenService } from 'src/app/service/token.service';
import { UsuarioService } from 'src/app/service/usuario.service';

@Component({
  selector: 'app-my-care-requests',
  templateUrl: './my-care-requests.component.html',
  styleUrls: ['./my-care-requests.component.scss'],
})
export class MyCareRequestsComponent implements OnInit {
  private propietario: PropietarioModel = new PropietarioModel();
  solicitudesList: SolicitudModel[] = [];
  private usuario: UsuarioModel = new UsuarioModel();

  constructor(
    private propietarioService: PropietarioService,
    private solicitudService: SolicitudService,
    private tokenService: TokenService,
    private usuarioService: UsuarioService
  ) {}

  ngOnInit(): void {
    this.getSolicitudes();
  }

  private async getSolicitudes() {
    const correo = this.tokenService.getInfoUser();
    await this.usuarioService.findByCorreo(correo).subscribe({
      next: (data: UsuarioModel) => {
        this.usuario = data;
      },
    });

    await this.solicitudService.getList().subscribe({
      next: (data: SolicitudModel[]) => {
        this.solicitudesList = data.filter((solicitud) => {
          return (
            solicitud.propietario.usuario.id == this.usuario.id &&
            solicitud.estado == true
          );
        });
      },
    });
  }
}
