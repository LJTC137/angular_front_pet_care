import { MascotaModel } from './mascota.model';
import { UsuarioModel } from './usuario.model';

export class PropietarioModel {
  id: number = 0;
  estado: boolean = false;
  usuario: UsuarioModel = new UsuarioModel();
  mascotas: MascotaModel[] = [];
}
