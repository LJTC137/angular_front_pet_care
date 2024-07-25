import { CatalogoModel } from './catalogo.model';
import { PropietarioModel } from './propietario.model';

export class MascotaModel {
  id: number = 0;
  nombre: string = '';
  edad: number = 0;
  tipoSangre: string = '';
  tipoMascota: CatalogoModel = new CatalogoModel();
  alergias: string = '';
  discapacidades: string = '';
  descripcion: string = '';
  estado: boolean = false;
}
