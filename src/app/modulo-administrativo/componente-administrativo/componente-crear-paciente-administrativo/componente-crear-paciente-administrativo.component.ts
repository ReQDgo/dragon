import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-componente-crear-paciente-administrativo',
  templateUrl: './componente-crear-paciente-administrativo.component.html',
  styleUrls: ['./componente-crear-paciente-administrativo.component.css']
})
export class ComponenteCrearPacienteAdministrativoComponent {
  @Input() mostrarFormularioCrearPaciente: boolean = true;
  @Input() rutaProximoPaso: string = '';
  @Input() mostrarFormPrincipal: boolean = true;
  @Input() mostrarFormCrearPaciente: boolean = true;

  @Input() mostrarFormularioCrearPacientePaso1: boolean = false;


}
