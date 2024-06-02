import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-componente-detalles-cita-paciente',
  templateUrl: './componente-detalles-cita-paciente.component.html',
  styleUrls: ['./componente-detalles-cita-paciente.component.css'],
})
export class ComponenteDetallesCitaPacienteComponent {
  @Input() nombreDoctor: string = '';
  @Input() tipoCita: string = '';
  @Input() fechaCita: string = '';
  @Input() horaCita: string='';
}
