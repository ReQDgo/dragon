import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class RolGuard implements CanActivate {
  ruta: string = '';

  constructor(private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot): boolean {
    const expectedRol = route.data['idRol']; // Almacenamos el rol de la sesión para poder usarlo en futuras llamadas a endpoints.

    if (Number(localStorage.getItem('rol')) === expectedRol) {
      // Si el rol coincide, permite el acceso
      return true;
    } else {
      // Si el rol no coincide, redirige según el rol actual
      const ubicacion = this.getRedirectUrlBasedOnRol();
      this.router.navigateByUrl(ubicacion);
      return false;
    }
  }

  private getRedirectUrlBasedOnRol(): string { // Dependiendo del rol del usuario, redirige a unas rutas u otras e impide el acceso a rutas que no son suyas.
    switch (Number(localStorage.getItem('rol'))) {
      case 3:
        this.ruta = '/medico';
        break;
      case 4:
        this.ruta = '/paciente';
        break;
      case 1:
        this.ruta = '/radiologo';
        break;
      case 2:
        this.ruta = '/administrativo';
        break;
      default:
        this.ruta = '/login';
        console.log('Acceso denegado. Usuario no rol.');
        break;
    }
   // console.log(this.ruta);
    return this.ruta;
  }
}
