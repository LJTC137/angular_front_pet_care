import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { SolicitudModel } from '../models/solicitud.model';

@Injectable({
  providedIn: 'root',
})
export class SolicitudService {
  solicitudUrl = environment.solicitudUrl;

  constructor(private httpClient: HttpClient) {}

  public getList(): Observable<SolicitudModel[]> {
    return this.httpClient.get<SolicitudModel[]>(
      `${this.solicitudUrl}/getList`
    );
  }

  public getById(id: number): Observable<SolicitudModel[]> {
    return this.httpClient.get<SolicitudModel[]>(`${this.solicitudUrl}/${id}`);
  }

  public save(catalogo: SolicitudModel): Observable<any> {
    return this.httpClient.post<any>(`${this.solicitudUrl}/save`, catalogo);
  }

  public update(id: number, catalogo: SolicitudModel): Observable<any> {
    return this.httpClient.put<any>(
      `${this.solicitudUrl}/update/${id}`,
      catalogo
    );
  }

  public delete(id: number): Observable<any> {
    return this.httpClient.delete<any>(`${this.solicitudUrl}/delete/${id}`);
  }
}
