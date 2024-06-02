import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-componente-confirmacion',
  templateUrl: './componente-confirmacion.component.html',
  styleUrls: ['./componente-confirmacion.component.css'],
})
export class ComponenteConfirmacionComponent {
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