import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-componente-crear-cita-paso-tres',
  templateUrl: './componente-crear-cita-paso-tres.component.html',
  styleUrls: ['./componente-crear-cita-paso-tres.component.css']
})
export class ComponenteCrearCitaPasoTresComponent {
  @Input() estilosPaso1: any = {};
  @Input() estilosPaso2: any = {};
  @Input() estilosPaso3: any = {};
  @Input() estilosPaso4: any = {};

  @Input() rutaAnteriorPaso: string = '';
  @Input() mostrarBotonRetroceder: boolean = false;

}
