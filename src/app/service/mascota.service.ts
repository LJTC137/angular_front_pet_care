import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { MascotaModel } from '../models/mascota.model';

@Injectable({
  providedIn: 'root',
})
export class MascotaService {
  mascotaUrl = environment.mascotaUrl;

  constructor(private httpClient: HttpClient) {}

  public getList(): Observable<MascotaModel[]> {
    return this.httpClient.get<MascotaModel[]>(`${this.mascotaUrl}/getList`);
  }

  public getById(id: number): Observable<MascotaModel[]> {
    return this.httpClient.get<MascotaModel[]>(`${this.mascotaUrl}/${id}`);
  }

  public save(catalogo: MascotaModel): Observable<any> {
    return this.httpClient.post<any>(`${this.mascotaUrl}/save`, catalogo);
  }

  public update(id: number, catalogo: MascotaModel): Observable<any> {
    return this.httpClient.put<any>(
      `${this.mascotaUrl}/update/${id}`,
      catalogo
    );
  }

  public delete(id: number): Observable<any> {
    return this.httpClient.delete<any>(`${this.mascotaUrl}/delete/${id}`);
  }
}
