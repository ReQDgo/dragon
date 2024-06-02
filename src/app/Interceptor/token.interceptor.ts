// token.interceptor.ts

import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent,
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    // Obtén el token almacenado en localStorage
    const token = localStorage.getItem('token_usuario');

    // Clona la solicitud y agrega el token a los encabezados si está presente
    if (token) {
      request = request.clone({
        setHeaders: {
          Authorization: `Bearer ${token}`,
        },
      });
    }

    // Continúa con la solicitud modificada
    return next.handle(request);
  }
}

/* 
Este Interceptor se usa para almacenar el token del inicio de sesión y, ya que las rutas del backend están protegidas por middleware, se le pasa
este token en el encabezado (header) para poder llamar a todos los endpoints, ya que de lo contrario nos aparecería el error 401 (Unauthorized)
*/
