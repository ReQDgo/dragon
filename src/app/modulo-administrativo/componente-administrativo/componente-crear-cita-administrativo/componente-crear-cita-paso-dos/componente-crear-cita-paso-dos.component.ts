import { Component,Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-componente-crear-cita-paso-dos',
  templateUrl: './componente-crear-cita-paso-dos.component.html',
  styleUrls: ['./componente-crear-cita-paso-dos.component.css']
})
export class ComponenteCrearCitaPasoDosComponent {
  constructor(private router: Router) {}

  @Input() estilosPaso1: any = {};
  @Input() estilosCuadradoPaso1: any = {};

  @Input() estilosPaso2: any = {};
  @Input() estilosCuadradoPaso2: any = {};

  @Input() estilosPaso3: any = {};
  @Input() estilosCuadradoPaso3: any = {};

  @Input() estilosPaso4: any = {};
  @Input() estilosCuadradoPaso4: any = {};

  @Input() rutaProximoPaso: string = '';
  @Input() rutaAnteriorPaso: string = '';

  

}
