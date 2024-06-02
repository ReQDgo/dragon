import { Component,Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-componente-crear-cita-administrativo',
  templateUrl: './componente-crear-cita-administrativo.component.html',
  styleUrls: ['./componente-crear-cita-administrativo.component.css']
})
export class ComponenteCrearCitaAdministrativoComponent {
  constructor(private router: Router) {}

  @Input() estilosPaso1: any = {};
  @Input() estilosPaso2: any = {};
  @Input() estilosPaso3: any = {};
  @Input() estilosPaso4: any = {};

  @Input() rutaProximoPaso: string = '';

  @Input() texto1: string = '';
  @Input() texto2: string = '';
  @Input() texto3: string = '';
  @Input() texto4: string = '';

  @Input() crearCitaPaso1: boolean = false;

}
