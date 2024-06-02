import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-componente-pedir-cita-paciente',
  templateUrl: './componente-pedir-cita-paciente.component.html',
  styleUrls: ['./componente-pedir-cita-paciente.component.css']
})
export class ComponentePedirCitaPacienteComponent {
  @Input() mostrarUltimaPregunta: boolean = false;
}
