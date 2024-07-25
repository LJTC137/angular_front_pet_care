import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class TokenService {
  constructor(private router: Router) {}

  private decodeToken(token: string): any {
    const base64Url = token.split('.')[1];
    const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    const jsonPayload = decodeURIComponent(
      atob(base64)
        .split('')
        .map((c) => {
          return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
        })
        .join('')
    );

    return JSON.parse(jsonPayload);
  }

  isLogged(): boolean {
    if (this.getToken()) {
      return true;
    }
    return false;
  }

  setToken(token: string): void {
    sessionStorage.setItem('token', token);
    const decodedToken = this.decodeToken(token);
    console.log(decodedToken);
    const expirationTime = decodedToken.exp;

    setTimeout(() => {
      this.removeToken();
    }, expirationTime);
  }

  removeToken(): void {
    sessionStorage.removeItem('token');
  }

  getToken(): any {
    return sessionStorage.getItem('token');
  }

  getInfoUser(): string | null {
    const token = this.getToken();
    if (!token) {
      return null;
    }
    const payload = token.split('.')[1];
    const values = atob(payload);
    const valuesJson = JSON.parse(values);
    const nombre_usuario = valuesJson?.sub;
    return nombre_usuario || null;
  }

  isAdmin(): boolean | null {
    const token = this.getToken();
    if (!token) {
      return null;
    }
    const payload = token.split('.')[1];
    const values = atob(payload);
    const valuesJson = JSON.parse(values);
    const roles = valuesJson?.roles;
    console.log(roles);

    if (roles && roles.indexOf('ROL_ADMIN') >= 0) {
      return true;
    }
    return false;
  }

  isCuidador(): boolean | null {
    const token = this.getToken();
    if (!token) {
      return null;
    }
    const payload = token.split('.')[1];
    const values = atob(payload);
    const valuesJson = JSON.parse(values);
    const roles = valuesJson?.roles;
    console.log(roles);

    if (roles && roles.indexOf('ROL_CUIDADOR') >= 0) {
      return true;
    }
    return false;
  }

  isPropietario(): boolean | null {
    const token = this.getToken();
    if (!token) {
      return null;
    }
    const payload = token.split('.')[1];
    const values = atob(payload);
    const valuesJson = JSON.parse(values);
    const roles = valuesJson?.roles;
    console.log(roles);
    if (roles && roles.indexOf('ROL_PROPIETARIO') >= 0) {
      return true;
    }
    return false;
  }

  logOut(): void {
    sessionStorage.clear();
    this.router.navigate(['/home'])
  }
}
