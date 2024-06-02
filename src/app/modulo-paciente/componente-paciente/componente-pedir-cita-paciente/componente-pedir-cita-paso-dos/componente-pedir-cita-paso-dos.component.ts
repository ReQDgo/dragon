import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-componente-pedir-cita-paso-dos',
  templateUrl: './componente-pedir-cita-paso-dos.component.html',
  styleUrls: ['./componente-pedir-cita-paso-dos.component.css']
})
export class ComponentePedirCitaPasoDosComponent {
  @Input() mostrarUltimaPregunta: boolean = false;

}
