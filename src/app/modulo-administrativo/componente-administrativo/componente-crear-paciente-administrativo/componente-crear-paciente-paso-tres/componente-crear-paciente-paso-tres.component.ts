import { Component,Input,Output } from '@angular/core';

@Component({
  selector: 'app-componente-crear-paciente-paso-tres',
  templateUrl: './componente-crear-paciente-paso-tres.component.html',
  styleUrls: ['./componente-crear-paciente-paso-tres.component.css']
})
export class ComponenteCrearPacientePasoTresComponent {
  @Input() mostrarResumenDatosCrearPaciente: boolean = true;

}
