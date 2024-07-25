import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LoginModel } from '../models/login.model';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  authUrl = environment.authUrl;

  constructor(private httpClient: HttpClient) {}

  public login(login: LoginModel): Observable<any> {
    return this.httpClient.post<any>(`${this.authUrl}`, login);
  }
}
