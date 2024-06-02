import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-componente-pasos-formulario',
  templateUrl: './componente-pasos-formulario.component.html',
  styleUrls: ['./componente-pasos-formulario.component.css'],
})
export class ComponentePasosFormularioComponent {
  // Componente que muestra los pasos de los formularios.
  @Input() mostrarUltimaPregunta: boolean = true;
  @Input() texto1: string = '';
  @Input() texto2: string = '';
  @Input() texto3: string = '';
  @Input() texto4: string = '';
  @Input() texto5: string = '';

  @Input() estilosPaso1: any = {};
  @Input() estilosCuadradoPaso1: any = {};

  @Input() estilosPaso2: any = {};
  @Input() estilosCuadradoPaso2: any = {};

  @Input() estilosPaso3: any = {};
  @Input() estilosCuadradoPaso3: any = {};

  @Input() estilosPaso4: any = {};
  @Input() estilosCuadradoPaso4: any = {};

  // Estilos paso nº5 (Remen datos Pedir cita (Paciente))
  @Input() estilosPaso5: any = {};
  @Input() estilosCuadradoPaso5: any = {};

  @Input() mostrarFormularioCrearPaciente: boolean = false;

}
