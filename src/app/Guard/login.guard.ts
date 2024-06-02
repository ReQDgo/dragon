import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class LoginGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate(): boolean {
    if (localStorage.getItem('token_usuario')) {
      // Si el token existe, permite el acceso
      return true;
    } else {
      // Si el token no existe, redirige a la ruta de login
      console.log('Acceso denegado. Usuario no autenticado.');
      this.router.navigate(['/login']);
      return false;
    }
  }
}
