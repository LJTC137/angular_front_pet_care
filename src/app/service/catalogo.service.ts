import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { CatalogoModel } from '../models/catalogo.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CatalogoService {
  catalogoUrl = environment.catalogoUrl;

  constructor(private httpClient: HttpClient) {}

  public getList(): Observable<CatalogoModel[]> {
    return this.httpClient.get<CatalogoModel[]>(`${this.catalogoUrl}/getList`);
  }

  public getById(id: number): Observable<CatalogoModel[]> {
    return this.httpClient.get<CatalogoModel[]>(`${this.catalogoUrl}/${id}`);
  }

  public save(catalogo: CatalogoModel): Observable<any> {
    return this.httpClient.post<any>(`${this.catalogoUrl}/save`, catalogo);
  }

  public update(id: number, catalogo: CatalogoModel): Observable<any> {
    return this.httpClient.put<any>(
      `${this.catalogoUrl}/update/${id}`,
      catalogo
    );
  }

  public delete(id: number): Observable<any> {
    return this.httpClient.delete<any>(`${this.catalogoUrl}/delete/${id}`);
  }
}
