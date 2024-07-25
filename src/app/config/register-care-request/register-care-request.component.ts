import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CatalogoModel } from 'src/app/models/catalogo.model';
import { DireccionModel } from 'src/app/models/direccion.model';
import { MascotaModel } from 'src/app/models/mascota.model';
import { PropietarioModel } from 'src/app/models/propietario.model';
import { SolicitudModel } from 'src/app/models/solicitud.model';
import { UsuarioModel } from 'src/app/models/usuario.model';
import { CatalogoService } from 'src/app/service/catalogo.service';
import { PropietarioService } from 'src/app/service/propietario.service';
import { SolicitudService } from 'src/app/service/solicitud.service';
import { TokenService } from 'src/app/service/token.service';
import { UsuarioService } from 'src/app/service/usuario.service';

@Component({
  selector: 'app-register-care-request',
  templateUrl: './register-care-request.component.html',
  styleUrls: ['./register-care-request.component.scss'],
})
export class RegisterCareRequestComponent implements OnInit {
  auxMascota: MascotaModel = new MascotaModel();
  auxDireccion: DireccionModel = new DireccionModel();
  direccionesList: DireccionModel[] = [];
  mascotasList: MascotaModel[] = [];
  propietario: PropietarioModel = new PropietarioModel();
  selectedMascotas: MascotaModel[] = [];
  selectedDireccion: DireccionModel[] = [];
  servicioSeleccionado: CatalogoModel | null = null;
  tipoServicioList: CatalogoModel[] = [];
  usuario: UsuarioModel = new UsuarioModel();
  servicio: CatalogoModel = new CatalogoModel();
  solicitud: SolicitudModel = new SolicitudModel();

  constructor(
    private catalogoService: CatalogoService,
    private propietarioService: PropietarioService,
    private router: Router,
    private solicitudService: SolicitudService,
    private tokenService: TokenService,
    private toastrService: ToastrService,
    private usuarioService: UsuarioService
  ) {}

  ngOnInit(): void {
    this.getUser();
    this.getCatalogoList();
  }

  private getUser() {
    const correo = this.tokenService.getInfoUser();
    this.usuarioService.findByCorreo(correo).subscribe({
      next: (data: UsuarioModel) => {
        this.usuario = data;
        this.propietarioService.getByUsuarioId(this.usuario.id).subscribe({
          next: (data: PropietarioModel) => {
            this.propietario = data;
            this.direccionesList = data.usuario.direcciones;
            this.mascotasList = data.mascotas;
            console.log(this.propietario);
          },
          error: (err: Error) => {
            console.error(err);
          },
        });
      },
      error: (err: Error) => {
        console.error(err);
      },
    });
  }

  selectMascota(mascota: MascotaModel) {
    this.selectedMascotas.push(mascota);
  }

  private async getCatalogoList() {
    await this.catalogoService.getList().subscribe({
      next: (data: CatalogoModel[]) => {
        this.tipoServicioList = data.filter((tipo) => {
          return (
            tipo.nombreCatalogo.toLowerCase() === 'servicio' &&
            tipo.estado == true
          );
        });
      },
    });
  }

  compareWith(o1: any, o2: any): boolean {
    return o1 && o2 ? o1.id === o2.id : o1 === o2;
  }

  quitarMascota(index: number) {
    this.selectedMascotas.splice(index, 1);
  }

  onServicioSeleccionado(servicio: CatalogoModel): void {
    if (this.servicioSeleccionado === servicio) {
      this.servicioSeleccionado = null;
      this.clearServicioSeleccionado();
    } else {
      this.servicioSeleccionado = servicio;
      this.selectServicio(servicio);
    }
  }

  isDisabled(servicio: CatalogoModel): boolean {
    return (
      this.servicioSeleccionado !== null &&
      this.servicioSeleccionado !== servicio
    );
  }

  private selectServicio(servicio: CatalogoModel) {
    this.servicio = servicio;
  }

  private clearServicioSeleccionado(): void {
    this.servicio = new CatalogoModel();
  }

  selectDireccion(direccion: DireccionModel) {
    if (this.selectedDireccion.length > 0) {
      console.log('Solo una direccion');
    } else {
      this.selectedDireccion.push(direccion);
    }
  }

  quitarDireccion(index: number) {
    this.selectedDireccion.splice(index, 1);
  }

  saveSolicitud() {
    this.solicitud.servicio = this.servicio
    this.solicitud.mascotas = this.selectedMascotas;
    this.solicitud.direccion = this.selectedDireccion[0];
    this.solicitud.propietario = this.propietario;

    this.solicitudService.save(this.solicitud).subscribe({
      next: (data: any) => {
        this.toastrService.success('Solicitud guardada exitoso'), 
        {
          timeOut: 4000,
        };
        this.router.navigate(['/config/panel']);
      },
      error: (err: any) => {
        this.toastrService.error(err),
        {
          timeOut: 2000,
        };
      },
    });
  }
}
