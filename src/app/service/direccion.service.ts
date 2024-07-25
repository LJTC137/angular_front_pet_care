import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { DireccionModel } from '../models/direccion.model';

@Injectable({
  providedIn: 'root',
})
export class DireccionService {
  direccionUrl = environment.direccionUrl;

  constructor(private httpClient: HttpClient) {}

  public getList(): Observable<DireccionModel[]> {
    return this.httpClient.get<DireccionModel[]>(
      `${this.direccionUrl}/getList`
    );
  }

  public getById(id: number): Observable<DireccionModel[]> {
    return this.httpClient.get<DireccionModel[]>(`${this.direccionUrl}/${id}`);
  }

  public save(direccion: DireccionModel): Observable<any> {
    return this.httpClient.post<any>(`${this.direccionUrl}/save`, direccion);
  }

  public update(id: number, direccion: DireccionModel): Observable<any> {
    return this.httpClient.put<any>(
      `${this.direccionUrl}/update/${id}`,
      direccion
    );
  }

  public delete(id: number): Observable<any> {
    return this.httpClient.delete<any>(`${this.direccionUrl}/delete/${id}`);
  }
}
