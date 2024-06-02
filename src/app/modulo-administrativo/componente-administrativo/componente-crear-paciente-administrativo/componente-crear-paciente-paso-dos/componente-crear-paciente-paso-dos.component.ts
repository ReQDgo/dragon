import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-componente-crear-paciente-paso-dos',
  templateUrl: './componente-crear-paciente-paso-dos.component.html',
  styleUrls: ['./componente-crear-paciente-paso-dos.component.css']
})
export class ComponenteCrearPacientePasoDosComponent {
  @Input() mostrarFormPrincipal: boolean = true;
  @Input() mostrarFormCrearPaciente: boolean = true;
}
