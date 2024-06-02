import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-componente-pedir-cita-paso-cinco',
  templateUrl: './componente-pedir-cita-paso-cinco.component.html',
  styleUrls: ['./componente-pedir-cita-paso-cinco.component.css']
})
export class ComponentePedirCitaPasoCincoComponent {
  @Input() mostrarUltimaPregunta: boolean = false;

}
