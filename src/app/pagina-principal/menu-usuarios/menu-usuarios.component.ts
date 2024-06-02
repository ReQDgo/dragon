import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/servicio-auth/auth.service';

@Component({
  selector: 'app-menu-usuarios',
  templateUrl: './menu-usuarios.component.html',
  styleUrls: ['./menu-usuarios.component.css'],
})
export class MenuUsuariosComponent {
  nombreUsuario: string = '';

  constructor(private router: Router, private authService: AuthService) {}

  roleUser?: number;

  ngOnInit() {
    this.roleUser = Number(localStorage.getItem('rol'));

    this.authService.obtenerUsuarioNombre().subscribe((nombre) => {
      this.nombreUsuario = nombre; // Almacenamos el nombre y el apellido del usuario.
    });
  }

  //Metodo para checkear la ruta y mostrar el icono de citas desactivado o activado
  isActive(route: string): boolean {
    return this.router.isActive(route, true);
  }
}
