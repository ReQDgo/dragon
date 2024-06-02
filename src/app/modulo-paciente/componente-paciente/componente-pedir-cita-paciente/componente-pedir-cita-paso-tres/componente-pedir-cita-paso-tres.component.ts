import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-componente-pedir-cita-paso-tres',
  templateUrl: './componente-pedir-cita-paso-tres.component.html',
  styleUrls: ['./componente-pedir-cita-paso-tres.component.css']
})
export class ComponentePedirCitaPasoTresComponent {
  @Input() mostrarUltimaPregunta: boolean = false;
}
