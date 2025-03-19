import { inject, Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable, Subject, tap } from 'rxjs';
import { LoginResonse } from '../dto/login-response.dto';
import { Credentials } from '../dto/credentials.dto';
import { HttpClient } from '@angular/common/http';
import { APP_CONST } from 'src/app/config/constantes.config';


export interface ConnectedUser {
  id: number;
  email: string;
}

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  http = inject(HttpClient);

  login(credentials: Credentials): Observable<LoginResonse> | null {
    // Todo: Appeler l'api avec les credentials et retourner un observable
    return null;
  }

  logout() {}

  isAuthenticated(): boolean {
    return true;
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
