import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/servicio-auth/auth.service';

@Component({
  selector: 'app-barra-padre',
  templateUrl: './barra-padre.component.html',
  styleUrls: ['./barra-padre.component.css'],
})
export class BarraPadreComponent {

  constructor(
    private router: Router
  ) {}

  logout() {
    localStorage.removeItem('token_usuario');
    localStorage.removeItem('id');
    localStorage.removeItem('rol');
    localStorage.removeItem('id_usuario');

    this.router.navigate(['/login']);

  }
  

  salir: string = 'Salir';
  mostrarBarra: boolean = true;
  
}
