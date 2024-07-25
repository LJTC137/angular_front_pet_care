import { UsuarioModel } from './usuario.model';

export class CuidadorModel {
  id: number = 0;
  estado: boolean = false;
  rating: number = 0;
  usuario: UsuarioModel = new UsuarioModel();
}
