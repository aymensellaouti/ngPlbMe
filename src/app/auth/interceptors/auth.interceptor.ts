import { inject, Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HTTP_INTERCEPTORS,
  HttpHeaders
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';
import { APP_CONST } from 'src/app/config/constantes.config';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  authService = inject(AuthService);

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    // console.log('in interceptor');
    /*
    Je vais vérifier si je suis authentifié ou pas
      1- Si authentifié => {
        Je clone la requete en y injectant notre token
        Je renvoi le clone
      }
      2- Sinon je laisse passer ma requete
    */
      if(this.authService.isAuthenticated()) {
         const headers = new HttpHeaders().set(APP_CONST.authHeaderKey, this.authService.getToken());
         const cloneReq = request.clone({
          headers
         });
         return next.handle(cloneReq);
      }
      return next.handle(request);
  }
}

export const authInterceptorProvider = {
  useClass: AuthInterceptor,
  provide: HTTP_INTERCEPTORS,
  multi: true
}
