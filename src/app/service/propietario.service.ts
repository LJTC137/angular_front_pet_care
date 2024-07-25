import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { PropietarioModel } from '../models/propietario.model';

@Injectable({
  providedIn: 'root',
})
export class PropietarioService {
  propietarioUrl = environment.propietarioUrl;

  constructor(private httpClient: HttpClient) {}

  public getList(): Observable<PropietarioModel[]> {
    return this.httpClient.get<PropietarioModel[]>(
      `${this.propietarioUrl}/getList`
    );
  }

  public getById(id: number): Observable<PropietarioModel> {
    return this.httpClient.get<PropietarioModel>(
      `${this.propietarioUrl}/${id}`
    );
  }

  public getByUsuarioId(id: number): Observable<PropietarioModel> {
    return this.httpClient.get<PropietarioModel>(
      `${this.propietarioUrl}/usuario/${id}`
    );
  }

  public update(id: number, catalogo: PropietarioModel): Observable<any> {
    return this.httpClient.put<any>(
      `${this.propietarioUrl}/update/${id}`,
      catalogo
    );
  }

  public delete(id: number): Observable<any> {
    return this.httpClient.delete<any>(`${this.propietarioUrl}/delete/${id}`);
  }
}
