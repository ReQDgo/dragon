import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-componente-error',
  templateUrl: './componente-error.component.html',
  styleUrls: ['./componente-error.component.css'],
})
export class ComponenteErrorComponent {
  @Input() textoConfirmacion: string = '';
  @Input() textoBoton: string = '';
  @Input() ruta: string = '';

  constructor(private router: Router) {}

  redirigir() {
    if (this.ruta) {
      this.router.navigate([this.ruta]);
    }
  }
}

/*  
Este componente finalmente no se está usando. Lo dejamos creado por si algún miembro del equipo, en sus proyectos, necesita este componente.
*/