import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { UpdateUsuarioModel, UsuarioModel } from '../models/usuario.model';
import { Observable } from 'rxjs';
import {
  RegistroCuidador,
  RegistroPropietario,
} from '../models/registro.model';

@Injectable({
  providedIn: 'root',
})
export class UsuarioService {
  usuarioUrl = environment.usuarioUrl;

  constructor(private httpClient: HttpClient) {}

  public getList(): Observable<UsuarioModel[]> {
    return this.httpClient.get<UsuarioModel[]>(`${this.usuarioUrl}/getList`);
  }

  public getById(id: number): Observable<UsuarioModel[]> {
    return this.httpClient.get<UsuarioModel[]>(
      `${this.usuarioUrl}/getById/${id}`
    );
  }

  public findByCorreo(correo: string | null): Observable<UsuarioModel> {
    return this.httpClient.get<UsuarioModel>(
      `${this.usuarioUrl}/getByEmail/${correo}`
    );
  }

  public saveCuidador(usuario: RegistroCuidador): Observable<any> {
    return this.httpClient.post<any>(`${this.usuarioUrl}/save`, usuario);
  }

  public savePropietario(usuario: RegistroPropietario): Observable<any> {
    return this.httpClient.post<any>(`${this.usuarioUrl}/save`, usuario);
  }

  public update(id: number, usuario: UpdateUsuarioModel): Observable<any> {
    console.log(id, usuario);
    console.log(`${this.usuarioUrl}/update/${id}`);
    return this.httpClient.put<any>(`${this.usuarioUrl}/update/${id}`, usuario);
  }

  public delete(id: number): Observable<any> {
    return this.httpClient.delete<any>(`${this.usuarioUrl}/delete/${id}`);
  }
}
