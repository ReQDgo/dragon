import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-componente-botones-cabecera',
  templateUrl: './componente-botones-cabecera.component.html',
  styleUrls: ['./componente-botones-cabecera.component.css'],
})
export class ComponenteBotonesCabeceraComponent {
  @Input() tituloCabecera: string = '';
  @Input() nombrePersonaCabecera: string = '';

  @Input() botonRetroceder: boolean = true;
  @Input() botonCancelar: boolean = true;
  @Input() botonCrearCita: boolean = true;
  @Input() botonSalirPaciente: boolean = true;
  @Input() estilosBotonSalirPaciente: any = {};

  @Input() rutaRetroceder: string = '';
  @Input() rutaCancelar: string = '';
  @Input() rutaCrearCita: string = '';
  @Input() rutaSalir: string = '';

  mostrarPopUpCancelar: boolean = false;

  constructor(private router: Router) {}

  redirigir(tipo: string) {
    if (tipo === 'retroceder' && this.rutaRetroceder) {
      this.router.navigate([this.rutaRetroceder]);
    }

    if (tipo === 'cancelar' && this.rutaCancelar) {
      this.abrirPopUpCancelar();

      this.router.navigate([this.rutaCancelar]);
    }

    if (tipo === 'crearCita' && this.rutaCrearCita) {
      this.router.navigate([this.rutaCrearCita]);
    }
  }

  logout() { // Método para que el paciente cierre sesión.
    localStorage.removeItem('token_usuario');
    localStorage.removeItem('id');
    localStorage.removeItem('rol');
    localStorage.removeItem('id_usuario');

    this.router.navigate(['/login']);
  }

  // Alterna la visibilidad de las imágenes en forma de pop-up.
  abrirPopUpCancelar() {
    this.mostrarPopUpCancelar = true;
  }

  cerrarPopUpCancelar() {
    this.mostrarPopUpCancelar = false;
  }
}
