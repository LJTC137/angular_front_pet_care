import { CatalogoModel } from './catalogo.model';
import { CuidadorModel } from './cuidador.model';
import { DireccionModel } from './direccion.model';
import { MascotaModel } from './mascota.model';
import { PropietarioModel } from './propietario.model';

export class SolicitudModel {
  id: number = 0;
  fechaRegistro: Date = new Date();
  esAceptado: boolean = false;
  estado: boolean = true;
  paga: number = 0;
  fechaServicio: Date = new Date();
  propietario: PropietarioModel = new PropietarioModel();
  cuidador: CuidadorModel = new CuidadorModel();
  direccion: DireccionModel = new DireccionModel();
  mascotas: MascotaModel[] = [];
  servicio: CatalogoModel = new CatalogoModel();
}
