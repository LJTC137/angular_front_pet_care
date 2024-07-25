import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { CuidadorModel } from '../models/cuidador.model';

@Injectable({
  providedIn: 'root'
})
export class CuidadorService {
  cuidadorUrl = environment.cuidadorUrl;

  constructor(private httpClient: HttpClient) {}

  public getList(): Observable<CuidadorModel[]> {
    return this.httpClient.get<CuidadorModel[]>(
      `${this.cuidadorUrl}/getList`
    );
  }

  public getById(id: number): Observable<CuidadorModel> {
    return this.httpClient.get<CuidadorModel>(
      `${this.cuidadorUrl}/${id}`
    );
  }

  public getByUsuarioId(id: number): Observable<CuidadorModel> {
    return this.httpClient.get<CuidadorModel>(
      `${this.cuidadorUrl}/usuario/${id}`
    );
  }

  public update(id: number, catalogo: CuidadorModel): Observable<any> {
    return this.httpClient.put<any>(
      `${this.cuidadorUrl}/update/${id}`,
      catalogo
    );
  }

  public delete(id: number): Observable<any> {
    return this.httpClient.delete<any>(`${this.cuidadorUrl}/delete/${id}`);
  }
}
