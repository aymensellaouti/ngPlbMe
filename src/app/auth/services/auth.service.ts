import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LoginResonse } from '../dto/login-response.dto';
import { Credentials } from '../dto/credentials.dto';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { APP_CONST } from 'src/app/config/constantes.config';
import { APP_API } from 'src/app/config/app-api.config';


export interface ConnectedUser {
  id: number;
  email: string;
}

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  http = inject(HttpClient);
  authService = inject(AuthService);

  login(credentials: Credentials): Observable<LoginResonse> {
    // Todo: Appeler l'api avec les credentials et retourner un observable
    return this.http.post<LoginResonse>(APP_API.login, credentials);
  }

  logout() {
    const headers = new HttpHeaders().set(
      APP_CONST.authHeaderKey,
      this.authService.getToken()
    );
    this.clearToken();
    return this.http.post(APP_API.logout, {}, {headers});
  }

  isAuthenticated(): boolean {
    return !!this.getToken();
  }

  getToken(): string {
    return localStorage.getItem(APP_CONST.tokenKey) ?? '';
  }

  clearToken(): void {
    localStorage.removeItem(APP_CONST.tokenKey);
  }

  saveToken(tokenValue: string): void {
    localStorage.setItem(APP_CONST.tokenKey, tokenValue);
  }
}
