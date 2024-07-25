export class RegistroCuidador {
  nombre: string = '';
  apellido: string = '';
  correo: string = '';
  contrasenia: string = '';
  esAceptado: boolean = false;
  estado: boolean = true;
  identificacion: string = '';
  telefono: string = '';
  roles: string[] = ['ROL_CUIDADOR'];
}

export class RegistroPropietario {
  nombre: string = '';
  apellido: string = '';
  correo: string = '';
  contrasenia: string = '';
  esAceptado: boolean = false;
  estado: boolean = true;
  identificacion: string = '';
  telefono: string = '';
  roles: string[] = ['ROL_PROPIETARIO'];
}
