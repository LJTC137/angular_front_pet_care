import { DireccionModel } from './direccion.model';
import { RolModel } from './rol.model';

export class UsuarioModel {
  id: number = 0;
  nombre: string = '';
  apellido: string = '';
  correo: string = '';
  fechaRegistro: Date = new Date();
  esAceptado: boolean = false;
  estado: boolean = false;
  identificacion: string = '';
  telefono: string = '';
  direcciones: DireccionModel[] = [];
  roles: RolModel[] = []
}


export class UpdateUsuarioModel {
  id: number = 0;
  nombre: string = '';
  apellido: string = '';
  correo: string = '';
  fechaRegistro: Date = new Date();
  esAceptado: boolean = false;
  estado: boolean = false;
  identificacion: string = '';
  telefono: string = '';
  direcciones: DireccionModel[] = [];
}
